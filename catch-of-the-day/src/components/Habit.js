import React from "react";

class Habit extends React.Component {
    handleClick = () => {
        this.props.addToCue(this.props.index);
    }
    render() {
        const { name, frequency } = this.props.details;
        return (
            <li className="menu-fish">
                <h3 className="fishName">{name}</h3>
                <p>{frequency}</p>
                <button onClick={this.handleClick}>Add to Cue</button>
            </li>
        )
    }
}

export default Habit;