import React from "react";

class ListSelector extends React.Component {
    render() {
        return (
            <form action="" className="store-selector">
                <h2>Enter Habit List</h2>
                <input type="text" required placeholder="Select a List"/>
                <button type="submit">Go to List -></button>
            </form>
        )
    }
}

export default ListSelector;