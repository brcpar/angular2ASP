(function (ng, app) {
    app.routes = [
        { path: '', component: app.HeroListComponent, as: 'Home', useAsDefault: true },
        { path: 'Detail', component: app.HeroFormComponent, as: 'Detail' }
    ];

})(window.ng, window.app);