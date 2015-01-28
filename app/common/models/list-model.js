'use strict';

angular.module('justdex.models.list', [])
    .service('PokemonList', function ($http){
        var model = this;

        // return pokemon list
        model.getPokemonList = function (){
            return $http.get('data/data.json').then(function (result){
                return result.data;
            });
        };

        // return pokemon name
        model.getPokemonName = function (pokemon){
            return pokemon.name;
        };

        // return pokemon id
        model.getPokemonId = function (pokemon){
            var idSource = pokemon.id, id;

            if (idSource < 10) {
                id = '00' + idSource;
            } else if (idSource < 100) {
                id = '0' + idSource;
            } else {
                return idSource;
            }
            return id;
        };

        // return pokemon avatar file name via file name same with pokemon id
        model.getPokemonAvatar = function (pokemon){
            var idSource = pokemon.id, fileName;

            if (idSource < 10) {
                fileName = '00' + idSource;
            } else if (idSource < 100) {
                fileName = '0' + idSource;
            } else {
                return idSource;
            }
            return fileName;
        };
    });