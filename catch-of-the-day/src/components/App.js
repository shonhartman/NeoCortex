import React from "react";
import Header from "./Header";
import Cue from "./Cue";
import Entry from "./Entry";
import Habit from "./Habit";

class App extends React.Component {
    state = {
       habits: {},
       cue: {}
    };
    addHabit = (habit) => {
        // 1. Take a copy of the existing state
        const habits = { ...this.state.habits };
        // 2. Add our new habits to the habits variable
        habits[`habit${Date.now()}`] = habit;
        // 3. Set the new habits object to state
        this.setState({ habits });
    }
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="This is Dynamic" />
                    <ul className="fishes">
                        { Object.keys(this.state.habits).map(key =>  <Habit key={key} details={this.state.habits[key]} /> ) }
                    </ul>
                </div>
                <Cue />
                <Entry addHabit={this.addHabit} />
            </div>
        )
    }
}

export default App;