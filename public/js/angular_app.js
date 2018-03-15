var app = angular.module("app",[]);
app.controller("voteCTL",["$scope","$http",function($scope,$http){



  $scope.dataCount="";
// 
//   $http.get("/get-procument-data").then(function(res){
//
//       $scope.dataCount=res.data;
//   })
//
// $scope.getdepartment = function(){
//   $http({
//     method:"POST",
//     url:""
//   });
// }





$scope.comunicationWell = function(){
  $http({
    method:"POST",
    url:"/vote-post",
    data:{
      vote:"well comunicated",
      type:"communication"
    }
  }).then(function(succ){
    console.log(succ.data);
  },function(erro){
    console.log(erro.data);
  });
}
$scope.comunicationOk = function(){
  $http({
    method:"POST",
    url:"/vote-post",
    data:{
      vote:"need improvement in comunication",
      type:"communication"
    }
  }).then(function(succ){
    console.log(succ.data);
  },function(erro){
    console.log(erro.data);
  });
}
$scope.comunicationNotwell = function(){

  $http({
    method:"POST",
    url:"/vote-post",
    data:{
      vote:"very poor communication",
      type:"communication"
    }
  }).then(function(succ){
    console.log(succ.data);
  },function(erro){
    console.log(erro.data);
  });
}
$scope.serviceWell = function(){
  $http({
    method:"POST",
    url:"/vote-post",
    data:{
      vote:"well service",
      type:"service"
    }
  }).then(function(succ){
    console.log(succ.data);
  },function(erro){
    console.log(erro.data);
  });
}
$scope.serviceOk = function(){
  $http({
    method:"POST",
    url:"/vote-post",
    data:{
      vote:"need improvement in service",
      type:"service"
    }
  }).then(function(succ){
    console.log(succ.data);
  },function(erro){
    console.log(erro.data);
  });
}
$scope.serviceNotwell = function(){
  $http({
    method:"POST",
    url:"/vote-post",
    data:{
      vote:"very poor service",
      type:"service"
    }
  }).then(function(succ){
    console.log(succ.data);
  },function(erro){
    console.log(erro.data);
  });
}

}])
