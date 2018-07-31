import React from "react";
import firebase from "firebase";
import AddHabit from "./AddHabit"
import EditHabitForm from "./EditHabitForm";
import Login from "./Login";
import { firebaseApp } from "../base";

class Entry extends React.Component {
    authHandler = async (authData) => {
        console.log(authData);
    }
    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }
    render() {
        return <Login authenticate={this.authenticate} />
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