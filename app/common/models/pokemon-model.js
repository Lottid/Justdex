'use strict';

angular.module('justdex.models.pokemon', [])
    .service('PokemonModel', function ($http){
        var model = this;

        // read local pokemon db
        model.localPokemonGroup = null;
        model.localEvolutionData = null;

        if (localStorage.justdex_pokemon_group == null || localStorage.justdex_pokemon_group == 'undefined') {
            $http.get('data/data.json').then(function (result){
                model.localPokemonGroup = result.data;
                localStorage.justdex_pokemon_group = JSON.stringify(result.data);
            })
        } else {
            model.localPokemonGroup = JSON.parse(localStorage.justdex_pokemon_group);
        }

        if (localStorage.justdex_evolution_group == null || localStorage.justdex_evolution_group == 'undefined') {
            $http.get('data/evolution_group_data.json').then(function (result){
                model.localEvolutionData = result.data;
                localStorage.justdex_evolution_group = JSON.stringify(result.data);
            })
        } else {
            model.localEvolutionData = JSON.parse(localStorage.justdex_evolution_group);
        }

        // get detail;
        model.getPokemonDetailByName = function (pokemonName){
            // get pokemon id then fetch pokemon data
            return $http.get('data/data.json').then(function (result) {
                var id;

                // get id
                _.find(model.localPokemonGroup, function (item) {
                    if (item.name === pokemonName) {
                        id = item.id;
                    }
                });

                // fetch pokemon
                return id ? $http.get('http://pokeapi.co/api/v1/pokemon/' + id).then(function (result) {
                    return result.data;
                }) : null;
            });
        };

        model.getPokemonDetailById = function (pokemonName){
            // get pokemon id then fetch pokemon data
            return $http.get('data/data.json').then(function (result) {
                // fetch pokemon
                return pokemonName ? $http.get('http://pokeapi.co/api/v1/pokemon/' + pokemonName).then(function (result) {
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

        // get evolution group
        model.getPokemonEvolutionGroup = function (pokemon) {
            var group = model.localEvolutionData[parseInt(pokemon.pkdx_id)-1];
            return group ? group : null;
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

        // ============================================================
        //                       evolution
        // ============================================================
        model.getEvolutionPokemon = function (pokemon){
            //var pokemonIdGroup = model.getPokemonEvolutionGroup(pokemon);
            //var pokemons = [];
            //
            //console.log(pokemonIdGroup);
            //var i = 0;
            //function getPokemon(){
            //    model.getPokemonDetailById(pokemonIdGroup[i]).then(function(result){
            //        console.log(i, result);
            //        pokemons.push(result);
            //        i++;
            //
            //        if (i <pokemonIdGroup.length) {
            //            getPokemon();
            //        }
            //    });
            //}
            //getPokemon();
            //
            //console.log('Finished ');
            //return pokemons;
        };
    });
