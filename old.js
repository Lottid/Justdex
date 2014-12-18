// Yunen He 2014 (SukeBeta)

var pokedex = angular.module("pokedexApp", []);

pokedex.controller("AppCtrl", ['$scope','$http', function($scope, $http)
{
	// initial values
	$scope.isShowingDetails = false;

	$scope.selectPokemon = function(pokemon){
		$scope.isShowingDetails = true;
		$scope.selectedPokemon = pokemon;
		$scope.selectedPokemon.image = pokemon.image;
		$scope.selectedPokemon.number = pokemon.number;
		$scope.selectedPokemon.name = pokemon.name;
	};

	$scope.showList = function(){
		$scope.isShowingDetails = false;
	};

	// id
	$scope.getId = function(pokemon){
		var resource_uri = pokemon.resource_uri;
		var id = resource_uri.split("/")[3];

		if (id < 10)
			id = '00' + id;
		else if (id < 100)
			id = '0' + id;

		return id;
	};

	// type
	$scope.showType = function(type){
		return 'images/' + type + '.gif';
	};

	// icon
	$scope.icon = function(id){
		return "icons/" + id + ".png";
	};

	// sort
	$scope.sortById = function(pokemon) {
        return $scope.getId(pokemon);
    };

    // detail
    $scope.selectPokemon = function (pokemon){
    	$scope.isShowingDetails = true;
	    // pokemon
	    var url = 'http://pokeapi.co/' + pokemon.resource_uri + '?callback=JSON_CALLBACK';

		$http.jsonp(url).success(function(data){
			$scope.pokemonSelected = data;
		});
    };

	// pokelist
	$http.get('data.json').success(function(data){
		$scope.pokemons = data;
	});

}]);

// <img ng-src="{{pokemon.image}}" style = " width: 16%; height: 16%;" class="img-thumbnail" alt="Circular Image"/>