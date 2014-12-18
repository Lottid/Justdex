/**
 * Created by Hosuke on 18/12/2014.
 */
angular.module('pokelist',[

])
    .config(function($stateProvider){
        $stateProvider
            .state('justdex.pokelist', {
                url: '/',
                views: {
                    'pokelist@': {
                        controller: 'PokelistCtrl',
                        templateUrl: 'app/pokelist/pokelist.tmpl.html'
                    }
                }
            })
    })

    .controller('PokelistCtrl', function PokelistCtrl($scope){
        console.log("I am here");
    })
;