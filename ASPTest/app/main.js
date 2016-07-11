(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.platformBrowserDynamic.bootstrap(app.AppComponent, [
            ng.forms.disableDeprecatedForms(),
            ng.forms.provideForms(),
            ng.http.HTTP_PROVIDERS,
            ng.router.provideRouter(app.routes, { enableTracing: true })
            ]);
    });
})(window.app || (window.app = {}));