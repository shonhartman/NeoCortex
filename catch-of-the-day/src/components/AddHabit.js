import React from "react";

class AddHabit extends React.Component {
    nameRef = React.createRef();
    frequencyRef = React.createRef();

    createHabit = (event) => {
        // 1. stop the form from submitting
        event.preventDefault();
        const habit = {
            name: this.nameRef.current.value,
            frequency: this.frequencyRef.current.value
        }
        this.props.addHabit(habit);
        // Refresh the form
        event.currentTarget.reset();


    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createHabit}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Habit Name" />
                <select name="frequency" ref={this.frequencyRef}>
                    <option value="one-month">Once per Month</option>
                    <option value="two-weeks">Every Two Weeks</option>
                    <option value="one-week">Every Week</option>
                    <option value="three-days">Twice per Week</option>
                    <option value="every-other-day">Every Other Day</option>
                    <option value="every-day">Every Day</option>
                    <option value="half-day">Twice Every Day</option>
                    <option value="every-hour">Every Hour</option>
                </select>
                <button type="submit">+ Add Habit</button>
            </form>
        )
    }
}

export default AddHabit;