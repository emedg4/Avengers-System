import React, { Component } from 'react';
import Wallet from './Wallet';
class App extends Component {
    render() {
        return (
            <div>
                <h2>Marvel Hero List</h2>
                <h4>
                    <Wallet />
                </h4>
            </div>
        )
    }
}

export default App;