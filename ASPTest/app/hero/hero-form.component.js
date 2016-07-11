(function(app) {
    app.HeroFormComponent = ng.core
      .Component({
          selector: 'hero-form',
          templateUrl: 'app/hero/hero-form.component.html'
      })
      .Class({
          constructor: function() {
              this.powers = ['Really Smart', 'Super Flexible',
                'Super Hot', 'Weather Changer'
              ];
              this.model = new app.Hero(18, 'Dr IQ', this.powers[0],
                'Chuck Overstreet');
              this.submitted = false;
          },
          onSubmit: function() {
              this.submitted = true;
          },
          diagnostic: function () {
              return JSON.stringify(this.model);
          },
      })
})(window.app || (window.app = {}));