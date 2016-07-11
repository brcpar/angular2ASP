define(["require", "exports", 'angular/router', './app.component', './heroe/heroes.component', './hero/hero-detail.component'], function (require, exports, router, dashboard_component, heroes_component, hero_detail_component) {
    "use strict";
    exports.routes = [
        {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full'
        },
        {
            path: 'dashboard',
            component: dashboard_component.DashboardComponent
        },
        {
            path: 'detail/:id',
            component: hero_detail_component.HeroDetailComponent
        },
        {
            path: 'heroes',
            component: heroes_component.HeroesComponent
        }
    ];
    exports.APP_ROUTER_PROVIDERS = [
        router.provideRouter(exports.routes)
    ];
});