console.log('factory')

app.factory('mushroomFactory', function($http) {
  return {
    getList : ()=> {
      return $http
        .get('https://mushroom-mania-66983.firebaseio.com/.json')
        .then(function(crop){
          console.log(crop)
          return crop
        })
    }
  }
})
