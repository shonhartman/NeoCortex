import React from "react";

class EditHabitForm extends React.Component {
    handleChange = (event) => {
        console.log(event.currentTarget.value);
        // update that habit
        // 1. Take a copy of the current habit
        const updatedHabit = {
            ...this.props.habit,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateHabit(this.props.index, updatedHabit)
    }
    render() {
       return  <div className="fish-edit">
                    <input type="text" name="name" onChange={this.handleChange} value={this.props.habit.name} />
                    <select name="frequency" onChange={this.handleChange} value={this.props.habit.frequency}>
                        <option value="one-month">Once per Month</option>
                        <option value="two-weeks">Every Two Weeks</option>
                        <option value="one-week">Every Week</option>
                        <option value="three-days">Twice per Week</option>
                        <option value="every-other-day">Every Other Day</option>
                        <option value="every-day">Every Day</option>
                        <option value="half-day">Twice Every Day</option>
                        <option value="every-hour">Every Hour</option>
                    </select>
                    <button onClick={() => this.props.deleteHabit(this.props.index)}>Remove Habit</button>
                </div>
    }
}

export default EditHabitForm;