import * as constants from '../actions/constants';

const initial = [{_id:"empty", name:"empty",description:"empty",imageURL:"empty"}];



const balance = (state = initial, action) => {
    let balance;

    switch(action.type) {
          default:
            return state;
    }
    return balance;
}

export default balance;