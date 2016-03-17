var app = angular.module( 'myApp', [] );

app.controller( 'MainController', function( $scope, $http ) {

    $scope.select = function( record ) {
        $scope.selectedId = record.id;
    };

    $http.get( '/api/records' ).then( function( res ) {
        $scope.records = res.data;
    });
});

app.controller( 'DetailController', function( $scope, $http ) {
    $scope.$watch( 'selectedId', function( id ){
        if ( id === null ) {
            $scope.record = null;
            return;
        }
        $http.get( '/api/records/' + id ).then( function( res ) {
            $scope.record = res.data;
        });
    });
});


app.controller( 'AddController', function( $scope, $http) {

    $scope.addRecord = function( record ){
        console.log('ZZZZZZ adding record', record );

        $http.post("/api/records/", record).success(function(record, status) {
            $scope.hello = record;
        })
    };

    //TODO: Add delete function
    //$scope.deleteRecord = function ( record ){
    //     console.log (" request delete of id ", record.id );
    //
    //        $http.delete('/api/records/', record.id)
    //            .success(function(record, status){
    //             })
    //};

})