(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		$scope.listado = ["Jhonaatan Bazaldua","Bazaldua Olva","Felix Bazaldua", "Ivan Bazaldua"]
        $scope.listadoProfesores = {
            profesores : [{
                nombre: "Jhonatan Bazaldua",
                edad: "24",
                clase: "Matematicas"
            },
            {
                nombre: "Ivan Bazaldua",
                edad: "27",
                clase: "Derecho penal"
            },
            {
                nombre: "Felix Bazaldua",
                edad: "21",
                clase: "Derecho mercantil"
            }]
        }


}]);





})();
