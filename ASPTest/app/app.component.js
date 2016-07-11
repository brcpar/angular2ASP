(function (app) {
    app.AppComponent =
      ng.core.Component({
          selector: 'my-app',
          template: '<h1>My First Angular 2 App</h1><hero-form></hero-form>',
          directives: [app.HeroFormComponent]
      })
      .Class({
          constructor: function () { }
      });
})(window.app || (window.app = {}));