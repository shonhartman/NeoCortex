import React from "react";
import firebase from "firebase";
import AddHabit from "./AddHabit"
import EditHabitForm from "./EditHabitForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Entry extends React.Component {

    state = {
        uid: null,
        owner: null
    }

    authHandler = async (authData) => {
        // 1. Looko up the current list in the firebase database
        const list = await base.fetch(this.props.listId, { context: this })
        console.log(list);
        // 2. Claim it if there is no owner
        if (!list.owner) {
            // save it as our own
            await base.post(`${this.props.listId}/owner`, {
                data: authData.user.uid
            })
        }
        // 3. Set the state of the entry component to reflect the current user
        this.setState({
            uid: authData.user.uid,
            owner: list.owner || authData.user.uid
        });
        console.log(authData);
    };
    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }
    render() {
        // 1. Check if they are logged in
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate} />
        }

        return (
            <div className="inventory">
                <h2>Entry</h2>
                {Object.keys(this.props.habits).map(key =>
                    <EditHabitForm
                        key={key}
                        index={key}
                        habit={this.props.habits[key]}
                        updateHabit={this.props.updateHabit}
                        deleteHabit={this.props.deleteHabit}
                    />)}
                <AddHabit addHabit={this.props.addHabit} />
            </div>
        )
    }
}

export default Entry;