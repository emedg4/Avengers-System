
/**
 * @      This class exposes a function that takes 3 elements as parameters.
 *        The first one is an array of objects that have elements that contains
 *        elements with values that you dont want and you need to change them or
 *        just to punish and desintegrate that entire element of the array.
 *        The second is an array with elements that matchs with something specific
 *        in the objects contained in the first array like a name or number.
 *        and the third element refers to the object element where you are gonna
 *        look in to.
 *
 */
        /**
         * @function
         * @param {Any} valueOfArrayToCompare Value of of the array that is gonna be compared
         * @param {Array} comparingElement    Array containing the guilty elements who are gonna be looked for
         * @return {boolean}                  Returns true when it finds a any guilty in the element given
         */
        const comparingFunction = function (valueOfArrayToCompare, comparingElement) {
            for (var _i = 0, comparingElement_1 = comparingElement; _i < comparingElement_1.length; _i++) {
                var index = comparingElement_1[_i];
                if (valueOfArrayToCompare === index) {
                    return true;
                }
            }
        };
        /**
         * @function
         * @param {Array} arrayToCompare         This is an array with objects that contains elements that you dont want
         *                                       and obviously you are gonna look for to punish them
         * @param {Array} arrayContainingMatches Array containing the guilty elements who are gonna be looked for
         * @param {Any} elementToFind            This variable refers to the field of the object that is gonna be inspected
         */
        const getIndexesOfMatches = function (arrayToCompare, arrayContainingMatches, elementToFind) {
            var toDelete = [];
            var element = elementToFind;
            for (var indexOfMatch in arrayToCompare) {
                if (comparingFunction(arrayToCompare[indexOfMatch][element], arrayContainingMatches)) {
                    toDelete.push(indexOfMatch);
                }
            }
            return toDelete;
        };
    

module.exports.getIndexesOfMatches = getIndexesOfMatches;
