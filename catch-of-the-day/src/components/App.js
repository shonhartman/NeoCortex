import React from "react";
import Header from "./Header";
import Cue from "./Cue";
import Entry from "./Entry";
import Habit from "./Habit";
import base from "../base";

class App extends React.Component {
    state = {
       habits: {},
       cue: {}
    };
    componentDidMount() {
        const { params } = this.props.match;
        // first reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.listId);
        if(localStorageRef) {
            this.setState({cue: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.listId}/habits`, {
            context: this,
            state: 'habits'
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.listId, JSON.stringify(this.state.cue));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addHabit = (habit) => {
        // 1. Take a copy of the existing state
        const habits = { ...this.state.habits };
        // 2. Add our new habits to the habits variable
        habits[`habit${Date.now()}`] = habit;
        // 3. Set the new habits object to state
        this.setState({ habits });
    }

    updateHabit = (key, updatedHabit) => {
        // 1. take a copy of the current state
        const habits = {...this.state.habits};
        // 2. update that state
        habits[key] = updatedHabit;
        // 3. set that to state
        this.setState({ habits });
    }

    deleteHabit = (key) => {
        // 1. take a copy of state
        const habits = { ...this.state.habits };
        // 2. update the state
        habits[key] = null;
        // 3. update state
        this.setState({ habits });

    }

    addToCue = (key) => {
        // 1. take a copy of state
        const cue = {...this.state.cue};
        // 2. Either add to the cue or update the number in our cue
        cue[key] = cue[key] + 1 || 0;
        // 3. Call setState to update our state object
        this.setState({ cue });
    }

    removeFromCue = (key) => {
        // 1. take a copy of cue state
        const cue = {...this.state.cue};
        // 2. remove that item from cue
        delete cue[key];
        // 3. set the cue state
        this.setState({ cue });
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline={this.props.match.params.listId} />
                    <ul className="fishes">
                        { Object.keys(this.state.habits).map(key =>
                            <Habit index={key} key={key} addToCue={this.addToCue} details={this.state.habits[key]} />
                        )}
                    </ul>
                </div>
                <Cue habits={this.state.habits} cue={this.state.cue} removeFromCue={this.removeFromCue} />
                <Entry
                    addHabit={this.addHabit}
                    updateHabit={this.updateHabit}
                    deleteHabit={this.deleteHabit}
                    habits={this.state.habits}
                    listId={this.props.match.params.listId}
                />
            </div>
        )
    }
}

export default App;