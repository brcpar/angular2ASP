(function (app) {
    app.AppComponent =
      ng.core.Component({
          selector: 'my-app',
          templateUrl: 'app/main.html',
          directives: [app.HeroFormComponent, app.HeroListComponent, ng.router.ROUTER_DIRECTIVES],
          providers: [app.HeroService]
      })
      .Class({
          constructor: function () {
              
          }
      });
})(window.app || (window.app = {}));