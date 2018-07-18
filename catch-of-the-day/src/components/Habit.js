import React from "react";

class Habit extends React.Component {
    render() {
        const { name, frequency } = this.props.details;
        return (
            <li className="menu-fish">
                <h3 className="fishName">{name}</h3>
                <p>{frequency}</p>
                <button>Add to Cue</button>
            </li>
        )
    }
}

export default Habit;