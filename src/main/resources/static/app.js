App.controller('docController',
    ['$scope', '$rootScope','docService','$http', function($scope, $rootScope, docService, $http) {

        $scope.file = '';

        $scope.upload = function(){
            var file = $scope.file;
            docService.saveDoc(file)
                .then(
                    function (response) {
                    	   alert("response :" + response.data);
                        //alert("file uploaded successfully.");
                    	   $rootScope.fileDetails = response;
                    	  // $rootScope.myDoc();
                    },

                );
        }
    }
    ]);

App.constant('urls', {
    DOC_URL: 'http://localhost:8085/uploadFile/'
});

App.directive('fileModel', [ '$parse', function($parse) {
    return {
        restrict : 'A',
        link : function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
} ]);

App.run(function($rootScope, $http) {
    $http.get("http://localhost:8085/uploadFile/upload/").success(
        function(response) {
            $rootScope.docList = response;
        });
});
