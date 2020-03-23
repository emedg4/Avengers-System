// import React, { Component } from 'react';
// import List from './List';


// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state = {};
//     }
//     componentDidMount() {
//         fetch('http://localhost:8001/character/all')
//           .then(data => this.setState(data));
//       }
    
//     render() {
//         return (
//             <div>
//                 <h1>Marvel Heroes</h1>
//                 <h4> < List /> </h4>
//             </div>
//         )
//     }
// }

// export default App;

import f from '../utils/fetchUrl';
import React, { Component } from 'react';
const API = 'http://localhost:8001/characters/all';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
        hits: [],
      };
    };
  
  componentDidMount() {
    f(API, 'get')
      .then(data => this.setState({ hits: data}));
  }

  render() {
    const items = this.state.hits;
    console.log(items)
    return (
        <ul>
        {items.map(hit =>
          <li key={hit._id}>
            <a href={hit.name}>{hit.name}</a>
          </li>
        )}
      </ul>
    );
  }
}




  export default App;


// import React, { Component } from 'react';
// const API = 'https://hn.algolia.com/api/v1/search?query=';
// const DEFAULT_QUERY = 'redux';
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hits: [],
//     };
//   }
//   componentDidMount() {
//     fetch(API + DEFAULT_QUERY)
//       .then(response => response.json())
//       .then(data => this.setState({ hits: data.hits }));
//   }
  
//   render() {
//     const { hits } = this.state;
//     console.log({ hits })
//     return (
//       <ul>
//         {hits.map(hit =>
//           <li key={hit.objectID}>
//             <a href={hit.url}>{hit.title}</a>
//           </li>
//         )}
//       </ul>
//     );
//   }
// }
// export default App;