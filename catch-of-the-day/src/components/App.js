import React from "react";
import Header from "./Header";
import Cue from "./Cue";
import Entry from "./Entry";

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="This is Dynamic" />
                </div>
                <Cue />
                <Entry />
            </div>
        )
    }
}

export default App;