// myApp.directive('mydirective', function(){

//   return{
//     restrict: 'E',
//     templateUrl: '/view/mydirective.html',
//     scope: {
//       accessor: '='
//     },
//     link: link
//   };

//   function link(scope, element, attrs, main){
//    if (scope.accessor) {
//     scope.accessor.getData = function () {
//       return {
//         name: scope.name,
//         credit: scope.credit
//       };
//     };
//   }
//   }
// });