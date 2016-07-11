(function (app) {
    app.HeroService = ng.core.
  Injectable()
   .Class({
       constructor: [ng.http.Http, function (http) {
           this.heroesUrl = "api/hero";
           this.http = http;
       }],
       getHeroes: function () {
           var url = this.heroesUrl + '/getheroes';
           return this.http.get(url).toPromise()
               .then(function (response) {
                   return response.json();
               })
               .catch(this.handleError);
       },
       getHero: function (id) {
           return this.getHeroes()
               .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
       },
       save: function (hero) {
           if (hero.id) {
               return this.put(hero);
           }
           return this.post(hero);
       },
       delete: function (hero) {
           var headers = new http_1.Headers();
           headers.append('Content-Type', 'application/json');
           var url = this.heroesUrl + "/" + hero.id;
           return this.http
               .delete(url, headers)
               .toPromise()
               .catch(this.handleError);
       },
       // Add new Hero
       post: function (hero) {
           var headers = new http_1.Headers({
               'Content-Type': 'application/json'
           });
           return this.http
               .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
               .toPromise()
               .then(function (res) { return res.json().data; })
               .catch(this.handleError);
       },
       // Update existing Hero
       put: function (hero) {
           var headers = new http_1.Headers();
           headers.append('Content-Type', 'application/json');
           var url = this.heroesUrl + "/" + hero.id;
           return this.http
               .put(url, JSON.stringify(hero), { headers: headers })
               .toPromise()
               .then(function () { return hero; })
               .catch(this.handleError);
       },
       handleError: function (error) {
           console.error('An error occurred', error);
           return Promise.reject(error.message || error);
       },
   });
    //exports.HeroService = HeroService;
})(window.app || (window.app = {}));
