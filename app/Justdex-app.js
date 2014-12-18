/**
 * Created by Hosuke on 18/12/2014.
 */
angular.module('Justdex', [
    'ui.router',
    'pokelist',
    'pokemon'
])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('pokelist',{
                url: '',
                abstract: true
            })
        ;
        $urlRouterProvider.otherwise('/');
    })

    .controller('MainCtrl', function(){
        console.log("Hi");
    })
;
