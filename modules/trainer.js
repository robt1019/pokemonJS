(function() {

    'use strict';

    let movable = require('./movable').movable;

    let trainerProto = {
        collection: {},
        catch: function(pokemon) {
            if (!this.collection[pokemon.species]) {
                this.collection[pokemon.species] = 1;
            } else {
                this.collection[pokemon.species]++;
            }
        }
    };

    function trainer(position) {
        let trainer = Object.assign({}, trainerProto, movable(position));
        trainer.collection = {};
        return function() {
            return {
                catch: function(pokemon) {
                    trainer.catch.call(trainer, pokemon);
                },
                hasPokemon: function(pokemon) {
                    return trainer.collection[pokemon.species] ? true : false;
                }
            };
        };
    }

    module.exports = {
        trainer: trainer
    };

})();