(function() {

    'use strict';

    let trainer = require('./modules/trainer').trainer;
    let pokemon = require('./modules/pokemon').pokemon;

    let trainer1 = trainer({ x: 3, y: 3 });
    let robomon = pokemon('Robosaur', ':grass', { x: 0, y: 0 });
    let dudeMon = pokemon('DudeMon', ':fire', { x: 5, y: 6 });

    console.log(robomon);
    console.log(dudeMon);
    console.log(trainer1().hasPokemon(dudeMon));

    trainer1().catch(dudeMon);
    console.log(trainer1().hasPokemon(dudeMon));
    let trainer2 = trainer({ x: 5, y: 5 });
    trainer2().catch(dudeMon);
    console.log(trainer2().hasPokemon(dudeMon));

    dudeMon.move('up');
    console.log(dudeMon.getLocation());

})();