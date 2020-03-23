import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

export class Wallet extends Component {
    constructor() {
        super()
        this.state = { balance: undefined }
    }// EVERY TIME IS TYPED IN onChange STATE IS MODIFIED
     // deposit() and withdraw() TAKE THE STATE VALUE AND THEN MODIFY THE STORE


                                                        // this.props.balance
                                                        // REFERS TO THE STORE
                                                        render() {
    const listItems = this.props.balance.map((e) =>
        <div key={e._id}>
                <div>
                    {e.name}    
                </div>
                <div>
                    {e.description}
                </div>
                <div>
                    <img src={e.imageURL} alt='not found'></img>
                </div>

            </div> 
        );
        return (
            <div className="navigation">
            <ul>
                {listItems}
            </ul>
            </div>
        );
    }
}
                                                //  STORE       ------ACTIONS------
export default connect(state => { return { balance: state.balance} }, { deposit, withdraw })(Wallet);


// <div>
// <h3 className='balance'>Characters List: {console.log(this.props)}</h3>
// <div>
    
// </div>
// </div>