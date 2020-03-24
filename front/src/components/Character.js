import React, { Component } from 'react';



class Character extends Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
        hits: [],
      };
    }


    render() {
    const items = this.state.hits;
    return (
        <div>
        {items.map(hit =>
            <ul key={hit._id}>
                <img src={hit.imageURL} alt="not found"></img>

                <label for="c-name"> Name :</label>
                <span contentEditable="true" id="c-name" placeholder="Name...."> {hit.name}</span><br></br>

                <label for="c-desc">Description: </label>                
                <span contentEditable="true" id="c-desc" onChange={this.modifying}>{hit.description}</span><br></br>

                <button className='btn-delete' onClick={this.deleteChar}>Delete</button>
            
            </ul>
        )}
        </div>
    );
    }
}
  export default App;
