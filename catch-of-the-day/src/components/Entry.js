import React from "react";
import AddHabit from "./AddHabit"
import EditHabitForm from "./EditHabitForm";

class Entry extends React.Component {
    render() {
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