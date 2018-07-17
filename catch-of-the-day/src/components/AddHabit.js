import React from "react";

class AddHabit extends React.Component {
    render() {
        return (
            <form className="fish-edit">
                <input name="name" type="text" placeholder="Habit Name" />
                <select name="frequency">
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