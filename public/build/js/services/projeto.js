angular.module('app.services')
.service('Projeto',['$resource','$filter','$httpParamSerializer','appConfig',
    function ($resource,$filter,$httpParamSerializer, appConfig) {


    function transformeData(data) {

            if(angular.isObject(data)){

                // fazendo uma copia do objeto da requisição para evitar o databind direto no objeto no moemnto da alteração
                var objRequisicao = angular.copy(data)

                objRequisicao.inicio = $filter('date')(data.inicio,'yyyy-MM-dd');
                objRequisicao.termino = $filter('date')(data.termino,'yyyy-MM-dd');

                return appConfig.utils.transformeRequest(objRequisicao);

            }

            return data;
     };

    return $resource(appConfig.baseUrl + '/projeto/:id',{
        id: '@id'
    },{
        save:{
            method: 'POST',
            transformRequest: transformeData
        },
        get:{
          method:'GET',
          transformResponse: function (data,headers) {

              var obj = appConfig.utils.transformResponse(data, headers);
              if (angular.isObject(obj)) {

                  var arrayDataInicio = obj.inicio.split('-');
                  var arrayDataTermino = obj.inicio.split('-');

                  var mesInicio = parseInt(arrayDataInicio[1]) - 1;
                  var mesTermino = parseInt(arrayDataTermino[1]) - 1;

                  obj.inicio = new Date(arrayDataInicio[0],mesInicio,arrayDataInicio[2]);
                  obj.termino = new Date(arrayDataTermino[0],mesTermino,arrayDataTermino[2]);
              }

              return obj;
          }
        },
        update: {
            method: 'PUT',
            transformRequest: transformeData
        }


    });
}]);
