'use strict';

angular.module('justdex.models.pokemon', [])
    .service('PokemonModel', function ($http){
        var model = this;

        // get detail;
        model.getPokemonDetail = function (pokemonName){
            // get pokemon id then fetch pokemon data
            return $http.get('data/data.json').then(function (result) {
                var POKEMONS = result.data,
                    id;

                // get id
                _.find(POKEMONS, function (item) {
                    if (item.name === pokemonName.toLowerCase()) {
                        id = item.id;
                        return id || null;
                    }
                });

                // fetch pokemon
                return id ? $http.get('http://pokeapi.co/api/v1/pokemon/' + id).then(function (result) {
                    return result.data;
                }) : null;
            });
        };

        // get name
        model.getPokemonName = function (pokemon){
            return pokemon.name;
        };

        // get string id
        model.getPokemonId = function (pokemon){
            var id = pokemon.pkdx_id;

            if (id < 10){
                id = '00' + id;
            } else if (id < 100) {
                id = '0' + id
            }

            return id;
        };

        // get avatar
        model.getPokemonAvatar = function (pokemon){
            var id = pokemon.pkdx_id;

            if (id < 10){
                id = '00' + id;
            } else if (id < 100) {
                id = '0' + id
            }

            return id;
        };

        // get types
        model.getPokemonTypes = function (pokemon){
            return pokemon.types;
        };


        // get height
        model.getPokemonHeight = function (pokemon){
            return pokemon.height;
        };

        // get weight
        model.getPokemonWeight = function (pokemon){
            return pokemon.weight;
        };

        // get abilities
        model.getPokemonAbilities = function (pokemon){
            return pokemon.abilities;
        };

        // get egg groups
        model.getPokemonEggGroups = function (pokemon){
            return pokemon.egg_groups;
        };

        // ============================================================
        //                       basic stats
        // ============================================================
        // get hp
        model.getPokemonHp = function (pokemon){
            return pokemon.hp;
        };

        // get attack
        model.getPokemonAttack = function (pokemon){
            return pokemon.attack;
        };

        // get defense
        model.getPokemonDefense = function (pokemon){
            return pokemon.defense;
        };

        // get special attack
        model.getPokemonSpAtk = function (pokemon){
            return pokemon.sp_atk;
        };

        // get special defense
        model.getPokemonSpDef = function (pokemon){
            return pokemon.sp_def;
        };

        // get speed
        model.getPokemonSpeed = function (pokemon){
            return pokemon.speed;
        };

        // get total
        model.getPokemonTotal = function (pokemon){
            return pokemon.total;
        };

        // get egg cycles
        model.getPokemonEggCycles = function (pokemon){
            return pokemon.egg_cycles;
        };
    });
