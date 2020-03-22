
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

module.exports.characterModifiedEvent = characterModifiedEvent;
module.exports.characterDeletedEvent  = characterDeletedEvent;