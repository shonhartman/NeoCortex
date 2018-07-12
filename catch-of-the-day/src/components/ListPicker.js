import React from "react";

class ListPicker extends React.Component {
    render() {
        return (
            <form action="" className="store-selector">
                <h2>Enter Habit List</h2>
                <input type="text" required placeholder="Habit List"/>
                <button type="submit">Go to List -></button>
            </form>
        )
    }
}

export default ListPicker;