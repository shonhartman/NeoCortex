import React from "react";
import AddHabit from "./AddHabit"

class Entry extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Entry</h2>
                <AddHabit />
            </div>
        )
    }
}

export default Entry;