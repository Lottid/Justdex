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

    .controller('ListController', function (){
        var ListCtrl = this;
    });