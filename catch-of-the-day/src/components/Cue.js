import React from "react";

class Cue extends React.Component {
    completeHabit = (key) => {
        let count = this.props.habits;
        console.log(count);
        return count;
        // add to completion count
        // take a time stamp at the moment of completion Date.now()?
        // add the specified time between one week, two weeks, etc.
        // use setInterval() to make the habit reappear in the habit list at the appropriate time
    }
    renderCue = (key) => {
        const habit = this.props.habits[key];
        const count = this.props.cue[key]; // this should be a different variable for times completed
        // Make sure the habit is loaded before we continue
        if(!habit) return null;

        return  <li key={key}>
                    {count} times {habit.name}
                    <button onClick={this.completeHabit}>Done</button>
                </li>
    }
    render() {
        const cueIds = Object.keys(this.props.cue);
        const total = cueIds.length;
        return (
            <div className="order-wrap">
                <h2>Cue</h2>
                <ul>{cueIds.map(this.renderCue)}</ul>
                <div className="total">
                    <strong>= {total}</strong>
                </div>
            </div>
        )
    }
}

export default Cue;