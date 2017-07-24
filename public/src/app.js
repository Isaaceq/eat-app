var app = angular.module("myApp", ['ui.router', 'ui.router.metatags'])

function runBlock($rootScope, MetaTags) {
	$rootScope.MetaTags = MetaTags;
}

function configure(UIRouterMetatagsProvider) {
  UIRouterMetatagsProvider
    .setTitlePrefix('')
    .setTitleSuffix('')
    .setDefaultTitle('Eat App')
    .setDefaultDescription("Cooking made easy.  You choose the recipe - we deliver the ingredients.  It's that simple")
    .setDefaultKeywords('Recipes, delivery, ingredients, allergies')
    .setStaticProperties({})
    .setOGURL(true);
}

app.run(['$rootScope', 'MetaTags', runBlock])

app.config(['UIRouterMetatagsProvider', configure])

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./src/views/home.html",
      controller: "homeController",
      metaTags: {
        title: "Eat App",
        description: ""
      }
    })
})
