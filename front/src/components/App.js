import f from '../utils/fetchUrl';
import React, { Component } from 'react';
const API = 'http://localhost:8001/characters/all';
const APIDEL = 'http://localhost:8001/characters/'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
        hits: [],
      };
    };
  

    deleteChar = async event => {
        const id = event.target.value;
        f(APIDEL,'del',id)
    }

    



    componentDidMount() {
    f(API, 'get')
        .then(data => this.setState({ hits: data}));
    }

    render() {
    const items = this.state.hits;
    console.log(items)
    return (
        <div>
        {items.map(hit =>
            <ul key={hit._id}>
                <img src={hit.imageURL} alt="not found"></img>
                <span>Name : {hit.name}</span><br></br>
                <span>Description: {hit.description}</span><br></br>
                <button className='btn-delete' onClick={this.deleteChar} value={hit._id}>Delete</button>
            
            </ul>
        )}
        </div>
    );
    }
}




  export default App;

