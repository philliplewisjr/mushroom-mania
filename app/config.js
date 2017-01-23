console.log('configuration')

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      controller: 'mainCtrl',
      templateUrl: '/partials/mushroom.html',
    })
    .otherwise({
      redirecTo: '/'
    })
})
