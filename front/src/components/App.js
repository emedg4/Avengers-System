
import fetchUrl from '../utils/fetchUrl';
import React, { Component } from 'react';
import pointer from '../utils/getMatchesFromArray';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
        hits: [],
      };
      this.server ='http://127.0.0.1:8001'
      this.API = 'http://127.0.0.1:8001/characters/all'
      this.APIDEL ='http://127.0.0.1:8001/characters'
      this.websockets();
    };

    websockets = () => {
    const socket = io.connect(this.server, {
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
    socket.on('fill', async () => {
        console.log("revieving update")
        await this.update();
    });
    
}

    delOneFromStat = async (data) => {
        let point = data._id;
        point = [point];
        const targets = pointer.getIndexesOfMatches(this.state.hits, point, "_id"); 
        let aboutToBeDeleted = this.state.hits;
        aboutToBeDeleted.splice(parseInt(targets[0],10),1);
        this.setState(aboutToBeDeleted); 
    }


    fill = async () => {
        await fetchUrl(this.APIDEL)
       
    }

    update = async () => {
        const data = await fetchUrl(this.API)
        this.setState({ hits: data});
        }
    
    
    deleteChar = async event => {
        const id = event.target.value;
        const req = {"_id": id}
        fetchUrl(this.APIDEL,'DELETE',req);
        
    }

    componentDidMount() {
    fetchUrl(this.API)
        .then(data => this.setState({ hits: data}));
    }

    render() {
        const items = this.state.hits;
        return (
            <div class="container">
            <div class="centered">
            <button className="btn-fill" class="btn-primary" onClick={this.fill}>Fill with heroes</button>
            </div>
            {items.map(hit =>
                <ul key={hit._id}>
                    <div class="jumbotron">
                        <div class="row">
                            <div class="col-sm-9">
                                <label for="c-name"> Name :</label>
                                <span id="c-name" > {hit.name}</span><br></br>
                                <label for="c-desc">Description: </label>
                                <span id="c-desc"> {hit.description}</span><br></br>
                            </div>
                         
                            <div class="right col-sm-3">
                                <img src={hit.imageURL} alt="not found"></img>
                            </div>

                            

                            <button className='btn-delete' class="btn-danger" onClick={this.deleteChar} value={hit._id}>Delete</button>
                        </div>
                    </div>
                
                </ul>
            )}
        </div>
        );
        }
    }

export default App;