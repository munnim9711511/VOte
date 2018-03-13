var app = angular.module("app",[]);
app.controller("voteCTL",["$scope","$http",function($scope,$http){
  $scope.departmentData ="test";
  $http({
    method:"GET",
    url:"/get-procument-data"
  }).then(function(res){
    console.log(res.data);
$scope.departmentData = "changes";
  })

console.log($scope.departmentData);



  new Morris.Line({
  // ID of the element in which to draw the chart.
  element: 'myfirstchart',
  // Chart data records -- each entry in this array corresponds to a point on
  // the chart.
  data: [
    { day: '2008', value: 12},
    { day: '2009', value: 10 },
    { day: '2010', value: 5 },
    { day: '2011', value: 5 },
    { day: '2012', value: 20 }
  ],
  // The name of the data record attribute that contains x-values.
  xkey: 'day',
  // A list of names of data record attributes that contain y-values.
  ykeys: ['value'],
  // Labels for the ykeys -- will be displayed when you hover over the
  // chart.
  labels: ['Value']
});

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
