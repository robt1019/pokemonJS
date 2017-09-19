(function() {

    'use strict';

    let createPosition = require('./position').createPosition;

    let movableProto = {

        position: {},
        
        move: function move(direction) {

            const DIRECTION_METHODS = {
                up: function() {
                    this.position.y++;
                },
                down: function() {
                    this.position.y--;
                },
                left: function() {
                    this.position.x--;
                },
                right: function() {
                    this.position.x++;
                }
            };

            return function(direction) {
                DIRECTION_METHODS[direction.toLowerCase()]();
            };
        }
    };

    function movable(position) {
        let movable = Object.create(movableProto);
        movable.position = createPosition(position);
        return movable;
    }

    module.exports = {
        movable: movable
    };

})();