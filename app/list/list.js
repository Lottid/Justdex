'use strict';

angular.module('list', [
    'justdex.models.list'
])
    .config(function ($stateProvider){
        $stateProvider
            .state('justdex.list', {
                url:'list',
                views: {
                    'list@': {
                        templateUrl: 'app/list/list.tmpl.html',
                        controller: 'ListController as ListCtrl'
                    }
                }
            })
    })

    .controller('ListController', function (PokemonList){
        var ListCtrl = this;

        ListCtrl.getPokemonList = PokemonList.getPokemonList;
        ListCtrl.getPokemonName = PokemonList.getPokemonName;
        ListCtrl.getPokemonId = PokemonList.getPokemonId;
        ListCtrl.getPokemonAvatar = PokemonList.getPokemonAvatar;

        // get list
        ListCtrl.getPokemonList().then(function (result){
            ListCtrl.pokemonList = result;
        });

        // sort pokemon list method
        ListCtrl.sortById = function (pokemon){
            return parseInt(pokemon.id);
        };
    });