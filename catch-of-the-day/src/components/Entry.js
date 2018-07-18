import React from "react";
import AddHabit from "./AddHabit"

class Entry extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Entry</h2>
                <AddHabit addHabit={this.props.addHabit} />
            </div>
        )
    }
}

export default Entry;