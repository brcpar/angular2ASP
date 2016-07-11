(function (app) {
    app.HeroDetailComponent = ng.core
      .Component({
          selector: 'hero-list',
          templateUrl: 'app/hero/hero-list.component.html'
      })
      .Class({
          constructor: [app.HeroService, function (HeroService) {
              debugger;
              this.heroService = HeroService;
          }],
      })
})(window.app || (window.app = {}));