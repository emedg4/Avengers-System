
class characterModifiedEvent {
    constructor(data) {
        this.data = data;
    }
}

class characterDeletedEvent {
    constructor(data) {
        this.data = data;
    }
}

class Fill {
    constructor(){
        
    }
}

module.exports.Fill                   = Fill;
module.exports.characterModifiedEvent = characterModifiedEvent;
module.exports.characterDeletedEvent  = characterDeletedEvent;