'use strict';

angular.module('pokemon', [
    'justdex.models.pokemon'
])
    .config(function ($stateProvider){
        $stateProvider
            .state('justdex.pokemon', {
                url: 'pokemon/:pokemon',
                views: {
                    'pokemon@': {
                        templateUrl: 'app/pokemon/pokemon.tmpl.html',
                        controller: 'PokemonController as PokemonCtrl'
                    }
                }
            })
    })

    .controller('PokemonController', function (){
        var PokemonCtrl = this;
    });