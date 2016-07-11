(function (app) {
    app.AppComponent =
      ng.core.Component({
          selector: 'my-app',
          template: '<h1>My First Angular 2 App</h1><hero-form></hero-form><hero-list></hero-list>',
          directives: [app.HeroFormComponent, app.HeroListComponent, ng.router.ROUTER_DIRECTIVES],
          providers: [app.HeroService]
      })
      .Class({
          constructor: function () { }
      });
})(window.app || (window.app = {}));