import fetchUrl from '../utils/fetchUrl';
import React, { Component } from 'react';
import pointer from '../utils/getMatchesFromArray';
import io from 'socket.io-client';
const server = 'http://localhost:8001';
const API = 'http://localhost:8001/characters/all';
const APIDEL = 'http://localhost:8001/characters/';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
        hits: [],
      };
      this.websockets();
    };

    websockets = () => {
    const socket = io.connect(server, {
        reconnection: true,
        secure: false
        });
    socket.on('connect', () => {
        console.log("Connection Succesfull")
        });
        
    socket.on('connect_error', (err) => {
            console.log(`Conexion error. With the error ${err}`);
        });
    
    socket.on('reconnect', () => {
        console.log(`Attempting to reconnect`)
    });
    
    socket.on('disconnect', () => {
        console.log(`Client disconnected`)
    })
    
    socket.on('characterDeleted', (data) => {
        this.delOneFromStat(data)
    });
    
}

    delOneFromStat = async (data) => {
        let point = data._id;
        point = [point];
        const targets = pointer.getIndexesOfMatches(this.state.hits, point, "_id"); 
        console.log(targets)
    }


    deleteChar = async event => {
        const id = event.target.value;
        const req = {"_id": id}
        fetchUrl(APIDEL,'DELETE',req);
        
    }

    componentDidMount() {
    fetchUrl(API)
        .then(data => this.setState({ hits: data}));
    }

    render() {
    const items = this.state.hits;
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

