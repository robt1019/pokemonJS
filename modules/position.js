(function() {
    'use strict';
    let positionProto = {
        x: null,
        y: null
    };

    function createPosition(_position) {
        let position = Object.create(positionProto);
        position.x = _position.x;
        position.y = _position.y;
        return position;
    }

    module.exports = {
        createPosition: createPosition
    };

})();