(function() {

    'use strict';

    let test = require('tape').test;
    let position = require('./position').position;
    let movable = require('./movable').movable;

    let pokemonProto = {
        species: '',
        type: '',
        owner: '',
        catch: function(owner) {
            this.owner = owner;
        },
        ownedBy: function() {
            return this.owner || null;
        }
    };

    function pokemon(species, type, position) {
        let movableInstance = movable(position);
        console.log(movableInstance);
        let pokemon = Object.assign (Object.create(pokemonProto), movableInstance);
        pokemon.species = species;
        pokemon.type = type;
        return pokemon;
    }

    function testModule() {

        test('pokemon.pokemon should correctly create a pokemon based on args', (assert) => {
            let testPokemon = pokemon('testosaur', ':water', { x: 5, y: 30 });
            assert.equal(testPokemon.type, ':water');
            assert.equal(testPokemon.position.x, 5);
            assert.equal(testPokemon.position.y, 30);
            assert.end();
        });

        test('pokemon instance catch method should correctly amend owner variable', (assert) => {
            let testPokemon = pokemon('testosaur', ':water', { x: 5, y: 50 });
            assert.equal(testPokemon.ownedBy(), null);
            testPokemon.catch('badAssTrainer');
            assert.equal(testPokemon.ownedBy(), 'badAssTrainer');
            assert.end();
        });
    }

    module.exports = {
        pokemon: pokemon,
        testModule: testModule
    };


})();