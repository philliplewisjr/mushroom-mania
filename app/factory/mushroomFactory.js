console.log('factory')

app.factory('mushroomFactory', function($http) {
  return {
    getList : ()=> {
      return $http
        .get('mushroomtype.json')
        .then(function(crop){
          console.log(crop)
          return crop
        })
    }
  }
})
