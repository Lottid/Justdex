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

    .controller('PokemonController', function ($state, $stateParams, PokemonModel){
        var PokemonCtrl = this;

        PokemonModel.pokemon = null;

        PokemonModel.getPokemonDetail($stateParams.pokemon).then(function (result){
            // check data is successfully fetched;
            PokemonCtrl.pokemon = result;
            var pokemon = PokemonCtrl.pokemon;

            if (PokemonCtrl.pokemon === null){
                $state.go('justdex.list', {});
            } else {
                console.log(PokemonCtrl.pokemon);
                // ============================================================
                //                     pokemon query method
                // ============================================================
                PokemonCtrl.getPokemonName = PokemonModel.getPokemonName;
                PokemonCtrl.getPokemonId = PokemonModel.getPokemonId;
                PokemonCtrl.getPokemonAvatar = PokemonModel.getPokemonAvatar;
                PokemonCtrl.getPokemonHeight = PokemonModel.getPokemonHeight;
                PokemonCtrl.getPokemonWeight = PokemonModel.getPokemonWeight;
                PokemonCtrl.getPokemonAbilities = PokemonModel.getPokemonAbilities;
                PokemonCtrl.getPokemonEggGroups = PokemonModel.getPokemonEggGroups;
                PokemonCtrl.getPokemonEggCycles = PokemonModel.getPokemonEggCycles;
                PokemonCtrl.getPokemonTypes = PokemonModel.getPokemonTypes;

                // basic stats
                PokemonCtrl.getPokemonAttack = PokemonModel.getPokemonAttack;
                PokemonCtrl.getPokemonHp = PokemonModel.getPokemonHp;
                PokemonCtrl.getPokemonDefense = PokemonModel.getPokemonDefense;
                PokemonCtrl.getPokemonSpAtk = PokemonModel.getPokemonSpAtk;
                PokemonCtrl.getPokemonSpDef = PokemonModel.getPokemonSpDef;
                PokemonCtrl.getPokemonSpeed = PokemonModel.getPokemonSpeed;
                PokemonCtrl.getPokemonTotal = PokemonModel.getPokemonTotal;

                // ============================================================
                //                     get pokemon detail
                // ============================================================

                // get basic
                PokemonCtrl.pokemonName = PokemonCtrl.getPokemonName(pokemon);
                PokemonCtrl.pokemonId = PokemonCtrl.getPokemonId(pokemon);
                PokemonCtrl.pokemonAvatar = PokemonCtrl.getPokemonAvatar(pokemon);
                PokemonCtrl.pokemonHeight = PokemonCtrl.getPokemonHeight(pokemon);
                PokemonCtrl.pokemonWeight = PokemonCtrl.getPokemonWeight(pokemon);
                PokemonCtrl.pokemonAbilities = PokemonCtrl.getPokemonAbilities(pokemon);
                PokemonCtrl.pokemonEggGroups= PokemonCtrl.getPokemonEggGroups(pokemon);
                PokemonCtrl.pokemonEggCycles = PokemonCtrl.getPokemonEggCycles(pokemon);
                PokemonCtrl.pokemonTypes = PokemonCtrl.getPokemonTypes(pokemon);

                // get basic stats
                PokemonCtrl.pokemonAttack  = PokemonCtrl.getPokemonAttack(pokemon);
                PokemonCtrl.pokemonHp = PokemonCtrl.getPokemonHp(pokemon);
                PokemonCtrl.pokemonDefense = PokemonCtrl.getPokemonDefense(pokemon);
                PokemonCtrl.pokemonSpAtk = PokemonCtrl.getPokemonSpAtk(pokemon);
                PokemonCtrl.pokemonSpDef= PokemonCtrl.getPokemonSpDef(pokemon);
                PokemonCtrl.pokemonSpeed = PokemonCtrl.getPokemonSpeed(pokemon);
                PokemonCtrl.pokemonTotal = PokemonCtrl.getPokemonTotal(pokemon);

                // draw Chart
                PokemonCtrl.drawChart = function (basic, total){
                    var percentage,
                        basic = parseInt(basic),
                        total = parseInt(total),
                        color = 'darkred',
                        isHigherThanNormal = false;

                    if (basic > total) {
                        percentage = 100;
                        isHigherThanNormal = true;
                    } else {
                        percentage = Math.round((basic/total)*100);
                    }

                    // sett color
                    if (percentage <= 10) {
                        color = 'darkred';
                    } else if (percentage <= 25) {
                        color = 'red';
                    } else if (percentage <= 50) {
                        color = 'yellow';
                    } else if (percentage <= 75) {
                        color = 'orange';
                    } else if (percentage <= 100) {
                        color = 'darkorange';
                        if (isHigherThanNormal) {
                            color = 'red';
                        }
                    }

                    return {percentage: percentage, color: color};
                };

                PokemonCtrl.drawChartHp = PokemonCtrl.drawChart(PokemonCtrl.pokemonHp, 200);
                PokemonCtrl.drawChartAttack = PokemonCtrl.drawChart(PokemonCtrl.pokemonAttack, 180);
                PokemonCtrl.drawChartDefense = PokemonCtrl.drawChart(PokemonCtrl.pokemonDefense, 180);
                PokemonCtrl.drawChartSpAtk = PokemonCtrl.drawChart(PokemonCtrl.pokemonSpAtk, 180);
                PokemonCtrl.drawChartSpDef = PokemonCtrl.drawChart(PokemonCtrl.pokemonSpDef, 180);
                PokemonCtrl.drawChartSpeed = PokemonCtrl.drawChart(PokemonCtrl.pokemonSpeed, 180);
            }
        });


    });