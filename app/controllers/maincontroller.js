console.log('maincontroller')

app.controller('mainCtrl', function($scope, mushroomFactory) {
  mushroomFactory.getList()
    .then((crop)=> {
      console.log(crop)
      let mushrooms = crop.data.mushrooms
      console.log(mushrooms)
      $scope.mushroomCrop = crop.data.mushrooms
    })
})
