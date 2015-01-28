'use strict';

angular.module('list', [
    'justdex.models.list',
    'infinite-scroll'
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

            // sort pokemon list method
            ListCtrl.sortById = function (pokemon){
                return parseInt(pokemon.id);
            };

            // infinite scroll
            ListCtrl.scrollPokemonList = ListCtrl.pokemonList.slice(0, 11);
            ListCtrl.scrollEnd = false;
            var pokemonListLength = ListCtrl.pokemonList.length-1;
            var index = 0;

            ListCtrl.loadMore = function (){
                for (var i = 0; i < 5; i++) {
                    if (ListCtrl.scrollPokemonList.length < pokemonListLength) {
                        ListCtrl.scrollPokemonList.push(ListCtrl.pokemonList[ListCtrl.scrollPokemonList.length + 1]);
                    } else {
                        ListCtrl.scrollEnd = true;
                        return;
                    }
                }
            };
        });



    });