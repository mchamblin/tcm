(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_person_list_person_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/person-list/person-list.component */ "./src/app/person-list/person-list.component.ts");
/* harmony import */ var src_app_person_person_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var src_app_title_list_title_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/title-list/title-list.component */ "./src/app/title-list/title-list.component.ts");
/* harmony import */ var src_app_title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/title/title.component */ "./src/app/title/title.component.ts");







var routerOptions = {
    anchorScrolling: 'enabled',
};
var routes = [
    { path: 'person', component: src_app_person_list_person_list_component__WEBPACK_IMPORTED_MODULE_3__["PersonListComponent"] },
    { path: 'person/:id1/:id2', component: src_app_person_person_component__WEBPACK_IMPORTED_MODULE_4__["PersonComponent"] },
    { path: 'title', component: src_app_title_list_title_list_component__WEBPACK_IMPORTED_MODULE_5__["TitleListComponent"] },
    { path: 'title/:id', component: src_app_title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, routerOptions)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tcm.com';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tcm-root',
            template: "\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n      <img src=\"assets/images/tcm-logo.png\" alt=\"TCM logo\" style=\"height: 50px\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/title']\">MOVIES</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"['/person']\">PEOPLE</a>\n          </li>\n        </ul>\n        <form class=\"form-inline my-2 my-lg-0\">\n          <input class=\"form-control mr-sm-2\" type=\"search\" aria-label=\"Search\">\n        </form>\n      </div>\n    </nav>\n    <router-outlet></router-outlet>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_person_person_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var src_app_title_list_title_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/title-list/title-list.component */ "./src/app/title-list/title-list.component.ts");
/* harmony import */ var src_app_title_title_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./person-list/person-list.component */ "./src/app/person-list/person-list.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], src_app_person_person_component__WEBPACK_IMPORTED_MODULE_4__["PersonComponent"], _person_list_person_list_component__WEBPACK_IMPORTED_MODULE_9__["PersonListComponent"], src_app_title_title_component__WEBPACK_IMPORTED_MODULE_6__["TitleComponent"], src_app_title_list_title_list_component__WEBPACK_IMPORTED_MODULE_5__["TitleListComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/person-list/person-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/person-list/person-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top: 40px\">\n  <section class=\"row\" style=\"justify-content: center\">\n    <div *ngFor=\"let person of participants\" class=\"card\" style=\"width: 18rem; margin: 10px\">\n      <img src=\"{{person.img}}\" class=\"card-img-top\" >\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{person.name}}</h4>\n        <p class=\"card-text\">{{person.description}}</p>\n        <a [routerLink]=\"['/person/' + person.id]\" class=\"btn btn-primary\">View Profile</a>\n      </div>\n    </div>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "./src/app/person-list/person-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/person-list/person-list.component.ts ***!
  \******************************************************/
/*! exports provided: PersonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonListComponent", function() { return PersonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonListComponent = /** @class */ (function () {
    function PersonListComponent() {
        this.participants = [
            {
                "name": "George Pal",
                "img": "http://i.cdn.turner.com/v5cache/TCM/Images/Dynamic/i84/georgepal_cu_188x141_080520090301.jpg",
                "description": "Set designer with UFA before moving in the 1930s to Western Europe, where he produced ingenious short advertising films featuring wire-jointed, stylized puppets.",
                "id": "146648/59186"
            },
            {
                "name": "Humphrey Bogart",
                "img": "https://dev-images.tcm.com/Master-Profile-Images/HumphreyBogart-new.jpg",
                "description": "The very definition of the term \"film icon,\" Humphrey Bogart rose from a bit player on Broadway, to a supporting B-movie actor, to eventually become the undisputed reigning box-office star of his day.",
                "id": "18290/71928"
            },
            {
                "name": "Cary Grant",
                "img": "http://i.cdn.turner.com/v5cache/TCM/Images/Dynamic/i46/CaryGrant_CU_188x141_071320061247.jpg",
                "description": "\"By Bryce Coleman\" opposite Constance Bennett gave Cary Grant his first financial hit, thanks to a share of the hefty profits, while \"The Awful Truth\" (1937) co-starring Irene Dunne made him a bona fide movie star.",
                "id": "75180/28068"
            },
            {
                "name": "Joan Crawford",
                "img": "http://i.cdn.turner.com/v5cache/TCM/Images/Dynamic/i138/joancrawford_cu_188x141_062120110106.jpg",
                "description": "Joan Crawford's extraordinary career encompassed over 45 years and some 80 films.",
                "id": "40864/83574"
            },
            {
                "name": "Bette Davis",
                "img": "http://i.cdn.turner.com/v5cache/TCM/Images/Dynamic/i44/BetteDavis_CU_188x141_041320061630.jpg",
                "description": "A strong-willed, independent woman with heavy-cast eyes, clipped New England diction, and distinctive mannerisms, Bette Davis left an indelible - and often parodied - mark on cinema history as being one of Hollywood's most important and decorated actresses.",
                "id": "45076/20235"
            }
        ];
    }
    PersonListComponent.prototype.ngOnInit = function () {
    };
    PersonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tcm-person-list',
            template: __webpack_require__(/*! ./person-list.component.html */ "./src/app/person-list/person-list.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PersonListComponent);
    return PersonListComponent;
}());



/***/ }),

/***/ "./src/app/person/person.component.html":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"person$ | async as person\">\n  <div class=\"dark short\">\n    <div class=\"container\">\n      <section class=\"row\">\n        <div class=\"flex-column col-4\">\n          <h1 class=\"serif underline\">{{ person.name }}</h1>\n          <p>\n            <ng-container *ngFor=\"let job of person.professions; let isLast = last\">\n              {{ job.detail | titlecase }}\n              <ng-container *ngIf=\"!isLast\">,&nbsp;</ng-container>\n            </ng-container>\n          </p>\n        </div>\n        <div class=\"flex-column col-8\">\n          <div class=\"img-hero\" [style.background-image]=\"'url(' + person.image.url + ')'\"></div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <section class=\"row\">\n      <nav class=\"nav flex-column col-3\">\n        <a class=\"nav-link\" href=\"person/{{personId}}#about\">Overview</a>\n        <a class=\"nav-link\" href=\"person/{{personId}}#filmography\">Filmography</a>\n        <a class=\"nav-link\" href=\"person/{{personId}}#biography\">Biography</a>\n        <a class=\"nav-link\" href=\"person/{{personId}}#media\">Photos & Videos</a>\n        <a *ngIf=\"person.family.length || person.companions.length\"  class=\"nav-link\" href=\"person/{{personId}}#family\">Family & Companions</a>\n        <a *ngIf=\"person.bibliography.length\" class=\"nav-link\" href=\"person/{{personId}}#bibliography\">Bibliography</a>\n        <a *ngIf=\"person.notes.length\" class=\"nav-link\" href=\"person/{{personId}}#notes\">Notes</a>\n      </nav>\n      <main class=\"col-9\">\n\n        <div id=\"about\">\n          <h2 class=\"serif underline first\">About</h2>\n          <table class=\"table table-borderless\">\n            <tr>\n              <th scope=\"row\">Also Known As</th>\n              <td>{{ person.akaNames }}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Birth Place</th>\n              <td>{{ person.placeOfBirth }}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Born</th>\n              <td>{{ person.dateOfBirth | date }}</td>\n            </tr>\n            <tr *ngIf=\"person.dateOfDeath !== ''\">\n              <th scope=\"row\">Died</th>\n              <td>{{ person.dateOfDeath | date }}</td>\n            </tr>\n            <tr *ngIf=\"person.causeOfDeath !== ''\">\n              <th scope=\"row\">Cause of Death</th>\n              <td>{{ person.causeOfDeath | titlecase }}</td>\n            </tr>\n          </table>\n        </div>\n\n        <div id=\"biography\">\n          <h2 class=\"serif underline\">Biography</h2>\n          <p [innerHTML]=\"person.biographyHtml | slice:0:300\"></p>\n        </div>\n\n        <div id=\"filmography\">\n          <h2 class=\"serif underline\">Filmography</h2>\n          <div class=\"row\">\n            <ng-container *ngFor=\"let film of person.filmographySorted\">\n              <div class=\"col-4 margin-bottom-parent-only\">\n                <p class=\"serif font-weight-bold\">{{ film.name }} ({{film.releaseYear}})</p>\n                <p *ngIf=\"film.roleName === 'ACTOR' && film.characterName !== ''\" class=\"role small\">\n                  as {{film.characterName}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n\n        <div id=\"media\">\n          <h2 class=\"serif underline\">Photos\n            <ng-container *ngIf=\"person.videos.length\"> & Videos</ng-container>\n          </h2>\n          <div class=\"row\">\n            <img class=\"col-12\" src=\"{{person.masonaryArray[2].images[0].url}}\" style=\"height: 100%\">\n          </div>\n        </div>\n\n        <div *ngIf=\"person.family.length || person.companions.length\" id=\"family\">\n          <h2 class=\"serif underline\">Family & Companions</h2>\n          <div class=\"row\">\n            <div class=\"margin-bottom-parent-only col-6\" *ngFor=\"let relative of person.family\">\n              <p class=\"font-weight-bold\">{{relative.name}}</p>\n              <p>{{relative.relationship}}</p>\n              <p class=\"small\">{{relative.note}}</p>\n            </div>\n            <div class=\"margin-bottom-parent-only col-6\" *ngFor=\"let relative of person.companions\">\n              <p class=\"font-weight-bold\">{{relative?.name}}</p>\n              <p>{{relative?.relationship}}</p>\n              <p class=\"small\">{{relative?.note}}</p>\n            </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"person.bibliography.length\" id=\"bibliography\">\n          <h2 class=\"serif underline\">Bibliography</h2>\n          <div class=\"margin-bottom-parent-only\" *ngFor=\"let title of person.bibliography\">\n            <p class=\"font-weight-bold\">{{title?.title}}</p>\n            <p class=\"small\">{{title?.publisher}}</p>\n          </div>\n        </div>\n\n        <div *ngIf=\"person.notes.length\" id=\"notes\">\n          <h2 class=\"serif underline\">Notes</h2>\n          <p [innerHTML]=\"person?.notes\"></p>\n        </div>\n\n      </main>\n    </section>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PersonComponent = /** @class */ (function () {
    function PersonComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    PersonComponent.prototype.ngOnInit = function () {
        this.personId = this.route.snapshot.paramMap.get('id1') + '/' + this.route.snapshot.paramMap.get('id2');
        this.person$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.getPerson()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result.tcm.person;
        }));
    };
    PersonComponent.prototype.getPerson = function () {
        return this.http.get('https://dev-tcmws.tcm.com/tcmws/participants/' + this.personId, {}).toPromise();
    };
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'tcm-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/person/person.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/title-list/title-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/title-list/title-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding-top: 40px\">\n  <section class=\"row\" style=\"justify-content: center\">\n    <div *ngFor=\"let title of titles\" class=\"card\" style=\"width: 18rem; margin: 10px\">\n      <img src=\"{{title.img}}\" class=\"card-img-top\" >\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">{{title.name}}</h4>\n        <p class=\"card-text\">{{title.description}}</p>\n        <a [routerLink]=\"['/title/' + title.id]\" class=\"btn btn-primary\">View Profile</a>\n      </div>\n    </div>\n  </section>\n</div>\n\n"

/***/ }),

/***/ "./src/app/title-list/title-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/title-list/title-list.component.ts ***!
  \****************************************************/
/*! exports provided: TitleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleListComponent", function() { return TitleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TitleListComponent = /** @class */ (function () {
    function TitleListComponent() {
        this.titles = [
            {
                "name": "Casablanca",
                "img": "https://prod-images.tcm.com/Master-Profile-Images/casablanca1942.610.jpg",
                "description": "An American saloon owner in North Africa is drawn into World War II when his lost love turns up.",
                "id": "610"
            },
            {
                "name": "Gone with The Wind",
                "img": "https://prod-images.tcm.com/Master-Profile-Images/gonewiththewind1939.test.jpg",
                "description": "Classic tale of Scarlett O'Hara's battle to save her beloved Tara and find love during the Civil War.",
                "id": "414427"
            },
            {
                "name": "Back to the Future",
                "img": "http://i.cdn.turner.com/v5cache/TCM/Images/Dynamic/i450/backtothefuture1985_16306_1024x768_08282017045707.jpg",
                "description": "A young man travels into the past and almost keeps his parents from getting married.",
                "id": "16306"
            },
            {
                "name": "North by Northwest",
                "img": "https://prod-images.tcm.com/Master-Profile-Images/northbynorthwest1959.1036.final.jpg",
                "description": "An advertising man is mistaken for a spy, triggering a deadly cross-country chase.",
                "id": "1036"
            }
        ];
    }
    TitleListComponent.prototype.ngOnInit = function () {
    };
    TitleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tcm-title-list',
            template: __webpack_require__(/*! ./title-list.component.html */ "./src/app/title-list/title-list.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TitleListComponent);
    return TitleListComponent;
}());



/***/ }),

/***/ "./src/app/title/title.component.html":
/*!********************************************!*\
  !*** ./src/app/title/title.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"title$ | async as title\">\n  <div class=\"dark short\">\n    <div class=\"container\">\n      <section class=\"row\">\n        <div class=\"flex-column col-4\">\n          <h1 class=\"serif underline\">{{ title.name }}</h1>\n          <p class=\"small\">\n            <span>{{title.runtimeHours}}</span> | <span>{{title.releaseYear}}</span> | <span>{{title.mpaaRating}}</span>\n          </p>\n        </div>\n        <div class=\"flex-column col-8\">\n          <div class=\"img-hero\" [style.background-image]=\"'url(' + title.profileImageUrl + ')'\"></div>\n        </div>\n      </section>\n    </div>\n  </div>\n  <div class=\"container\">\n    <section class=\"row\">\n      <nav class=\"nav flex-column col-3\">\n        <a class=\"nav-link\" href=\"#biography\">Overview</a>\n        <a class=\"nav-link\" href=\"#filmography\">Filmography</a>\n        <a class=\"nav-link\" href=\"#\">Life Events</a>\n        <a class=\"nav-link\" href=\"#\">Biography</a>\n        <a class=\"nav-link\" href=\"#\">Photos & Videos</a>\n        <a class=\"nav-link\" href=\"#\">Family & Companions</a>\n        <a class=\"nav-link\" href=\"#\">Bibliography</a>\n        <a class=\"nav-link\" href=\"#\">Notes</a>\n      </nav>\n      <main class=\"col-9\">\n\n        <div id=\"synopsis\">\n          <h2 class=\"serif underline first\">Synopsis</h2>\n          <!--          <p><span [innerHTML]=\"title.synopsis | slice:0:300\"></span>...</p>-->\n          <p><span [innerHTML]=\"title.description\"></span></p>\n        </div>\n\n        <div id=\"credits\">\n          <h2 class=\"serif underline\">Cast & Crew</h2>\n          <div class=\"row\">\n            <ng-container *ngFor=\"let person of title.credits\">\n              <div *ngIf=\"person.roleName === 'DIRECTOR'\" class=\"col-4 margin-bottom-parent-only\">\n                <p class=\"serif font-weight-bold\">{{ person.name }}</p>\n                <p class=\"role small\">{{person.roleName | titlecase}}</p>\n              </div>\n            </ng-container>\n            <ng-container *ngFor=\"let person of (title.credits | slice: 0:5)\">\n              <div *ngIf=\"person.roleName !== 'Director'\" class=\"col-4 margin-bottom-parent-only\">\n                <p class=\"serif font-weight-bold\">{{ person.name }}</p>\n                <p *ngIf=\"person.roleName === 'ACTOR' && person.characterName !== ''\" class=\"role small\">\n                  as {{person.characterName}}</p>\n              </div>\n            </ng-container>\n          </div>\n        </div>\n\n        <div id=\"media\">\n          <h2 class=\"serif underline\">Photos\n            <ng-container *ngIf=\"title.videos.length\"> & Videos</ng-container>\n          </h2>\n          <div class=\"row\" style=\"justify-content: center\">\n            <ng-container *ngFor=\"let image of (title.archives[1]?.images | slice:0:5)\">\n              <div class=\"img-thumbnail col-4\" [style.background-image]=\"'url(' + image.url + ')'\"></div>\n            </ng-container>\n          </div>\n        </div>\n\n        <div id=\"details\">\n          <h2 class=\"serif underline \">Film Details</h2>\n          <table class=\"table table-borderless\">\n            <tr>\n              <th scope=\"row\">MPAA Rating</th>\n              <td>{{title.mpaaRating}}</td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Genre</th>\n              <td>\n                <div class=\"row\">\n                  <ng-container *ngFor=\"let genre of title.genres\">\n                    <div class=\"col-4\">{{genre}}</div>\n                  </ng-container>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">Release Date</th>\n              <td>{{title.releaseYear}}</td>\n            </tr>\n            <tr *ngIf=\"title.productionData.premier\">\n              <th scope=\"row\">Premiere Information</th>\n              <td>{{title.productionData?.premier}}</td>\n            </tr>\n            <tr *ngIf=\"title.productionData.productionCompanies\">\n              <th scope=\"row\">Production Company</th>\n              <td>{{title.productionData?.productionCompanies}}</td>\n            </tr>\n            <tr *ngIf=\"title.productionData.distributors\">\n              <th scope=\"row\">Distribution Company</th>\n              <td>{{title.productionData?.distributors[0]}}</td>\n            </tr>\n            <tr *ngIf=\"title.country !== ''\">\n              <th scope=\"row\">Country</th>\n              <td>{{title.country}}</td>\n            </tr>\n            <tr *ngIf=\"title.sources.length && title.sources[0]['Text']\">\n              <th scope=\"row\">Screenplay Information</th>\n              <td><span [innerHTML]=\"title.sources[0]['Text']\"></span></td>\n            </tr>\n          </table>\n        </div>\n\n        <div id=\"specs\">\n          <h2 class=\"serif underline \">Technical Specs</h2>\n          <table class=\"table table-borderless\">\n            <tr *ngIf=\"title.runtimeHours\">\n              <th scope=\"row\">Duration</th>\n              <td>{{title.runtimeHours}}</td>\n            </tr>\n            <tr *ngIf=\"title.sound\">\n              <th scope=\"row\">Sound</th>\n              <td>{{title.sound}}</td>\n            </tr>\n            <tr *ngIf=\"title.color\">\n              <th scope=\"row\">Color</th>\n              <td>{{title.color}}</td>\n            </tr>\n            <tr *ngIf=\"title.filmLength\">\n              <th scope=\"row\">Film Length</th>\n              <td>{{title.filmLength}}m</td>\n            </tr>\n\n          </table>\n        </div>\n\n      </main>\n    </section>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var TitleComponent = /** @class */ (function () {
    function TitleComponent(route, http) {
        this.route = route;
        this.http = http;
    }
    TitleComponent.prototype.ngOnInit = function () {
        this.titleId = this.route.snapshot.paramMap.get('id');
        this.title$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.getTitle()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (result) {
            return result.tcm.title;
        }));
    };
    TitleComponent.prototype.getTitle = function () {
        return this.http.get('https://dev-tcmws.tcm.com/tcmws/titles/' + this.titleId, {}).toPromise();
    };
    TitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'tcm-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/title/title.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mchamblin/Playground/tcm/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map