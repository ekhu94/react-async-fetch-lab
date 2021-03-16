import axios from 'axios';
import React from 'react';

class App extends React.Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json');
    }

    render() {
        return <div>I refuse to solve this with fetch.</div>
    }
}

export default App;