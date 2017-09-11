(function() {
    /**
     * Controlador de Mapa
     * @param $http
     */
    function mapCtrl($http) {
        var vm = this;
        $http.get('/data')
        .then(function(data){
        	vm.rawData = data
        	console.log(data)
        	var mymap = L.map('mapid').setView([37.140, -2.78], 10);
            var eljson =  vm.rawData
            var heat = L.heatLayer(eljson.data.data, {
                radius: 15,
                max: 1500000
            }).addTo(mymap);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 18,
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
                id: 'mapbox.streets'
            }).addTo(mymap);
        })

        
      	
    }

    angular.module('miApp')
        .controller('mapCtrl', ['$http',mapCtrl]);
})();

