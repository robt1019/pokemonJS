(function() {

    'use strict';
    
    let modules = ['pokemon'];

    function run() {
        modules.forEach((module) => {
            require('./modules/' + module).testModule();
        });
    }

    run();

})();