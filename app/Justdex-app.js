/**
 * Created by Hosuke on 18/12/2014.
 */
angular.module('Justdex', [
    'ui.router',
    'pokelist',
    'pokemon'
])
    .config(function($stateProvider){
        $stateProvider
            .state('pokelist',{
                url:'/',
                templateUrl: 'app/pokelist/pokelist.tmpl.html'
            })
        ;
    })
;
