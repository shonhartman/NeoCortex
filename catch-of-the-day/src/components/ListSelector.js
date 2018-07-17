import React from "react";

class ListSelector extends React.Component {
    myInput = React.createRef();

    goToList = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        const listName = this.myInput.current.value;
        // 3. Change the page to /habit/whatever-they-entered
        this.props.history.push(`/list/${listName}`);

    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToList}>
                <h2>Enter Habit List</h2>
                <input ref={this.myInput} type="text" required placeholder="Select a List"/>
                <button type="submit">Go to List -></button>
            </form>
        )
    }
}

export default ListSelector;