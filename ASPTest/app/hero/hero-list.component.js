(function (app) {
    app.HeroListComponent = ng.core
      .Component({
          selector: 'hero-list',
          templateUrl: 'app/hero/hero-list.component.html'
      })
      .Class({
          constructor: [app.HeroService, function (HeroService) {
              this.heroService = HeroService;
          }],
          getHeroes: function () {
              var self = this;
              this.heroService
                .getHeroes().then(function (heroes) {
                    self.heroes = heroes
                });
          },
          addHero: function () {
              this.addingHero = true;
              this.selectedHero = null;
          },
          close: function (savedHero) {
              this.addingHero = false;
              if (savedHero) { this.getHeroes(); }
          },
          deleteHero: function (hero, event) {
              event.stopPropagation();
              this.heroService
                  .delete(hero)
                  .then(function (res) {
                      this.heroes = this.heroes.filter(function (h) { return h !== hero; });
                      if (this.selectedHero === hero) { this.selectedHero = null; }
                  })
          .catch(function (error) { this.error = error; });
          },
          ngOnInit: function () {
              this.getHeroes();
          },
          goToDetail: function () {

          },
          deleteHero: function (hero, event) {

          },
          onSelect: function (hero) {
              this.selectedHero = hero;
          },

      })
})(window.app || (window.app = {}));