(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_mural_mural_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mural/mural.component */ "./src/app/components/mural/mural.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_cadinventario_cadinventario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cadinventario/cadinventario.component */ "./src/app/components/cadinventario/cadinventario.component.ts");
/* harmony import */ var _components_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inventario/inventario.component */ "./src/app/components/inventario/inventario.component.ts");
/* harmony import */ var _components_dadoinventario_dadoinventario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dadoinventario/dadoinventario.component */ "./src/app/components/dadoinventario/dadoinventario.component.ts");
/* harmony import */ var _components_sistrepo_sistrepo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sistrepo/sistrepo.component */ "./src/app/components/sistrepo/sistrepo.component.ts");
/* harmony import */ var _components_fluxodados_fluxodados_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fluxodados/fluxodados.component */ "./src/app/components/fluxodados/fluxodados.component.ts");
/* harmony import */ var _components_fluxodados_selecionaprocesso_selecionaprocesso_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fluxodados/selecionaprocesso/selecionaprocesso.component */ "./src/app/components/fluxodados/selecionaprocesso/selecionaprocesso.component.ts");












const routes = [
    { path: '', redirectTo: 'mural_lgpd', pathMatch: 'full' },
    { path: 'mural', component: _components_mural_mural_component__WEBPACK_IMPORTED_MODULE_2__["MuralComponent"] },
    { path: 'mural_lgpd', component: _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"] },
    { path: 'inventario', component: _components_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_5__["InventarioComponent"] },
    { path: 'cadastro_inventario', component: _components_cadinventario_cadinventario_component__WEBPACK_IMPORTED_MODULE_4__["CadinventarioComponent"] },
    { path: 'dados_inventario', component: _components_dadoinventario_dadoinventario_component__WEBPACK_IMPORTED_MODULE_6__["DadoinventarioComponent"] },
    { path: 'sistema_repositorio', component: _components_sistrepo_sistrepo_component__WEBPACK_IMPORTED_MODULE_7__["SistrepoComponent"] },
    { path: 'seleciona_processo', component: _components_fluxodados_selecionaprocesso_selecionaprocesso_component__WEBPACK_IMPORTED_MODULE_9__["SelecionaprocessoComponent"] },
    { path: 'fluxo_dados', component: _components_fluxodados_fluxodados_component__WEBPACK_IMPORTED_MODULE_8__["FluxodadosComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






class AppComponent {
    constructor() {
        this.title = 'lgpd-App';
        this.user = '/assets/imgs/user.png';
        this.found = '/assets/imgs/cabs.png';
        this.colorbar = '/assets/imgs/colorbar.png';
        this.bandeira = '/assets/imgs/bandeira.png';
        this.email = '/assets/imgs/email.png';
        this.mural = '/assets/imgs/mural.png';
        this.options = '/assets/imgs/options.png';
        this.voz = '/assets/imgs/voz.png';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 41, vars: 8, consts: [[2, "overflow", "hidden"], ["alt", "", 1, "imgp", 3, "src"], [2, "width", "100%", "margin-top", "-18px !important"], [1, "iconedivs", "bcocin", "bordrig", "bordbot", 2, "width", "12.5%"], [1, "pspace"], [1, "ptit"], ["href", "mural", 2, "text-decoration", "none", "color", "#34495E"], [1, "maticon"], [1, "iconedivs", "bcocin", "bordrig", "bordbot", 2, "width", "4.5%"], [1, "icon"], [2, "cursor", "pointer", 3, "click"], [1, "iconedivs", "bordbot", "bco", 2, "width", "60.6%"], [1, "pinput"], ["type", "text", "placeholder", "Clique para Pesquisar...", 1, "inputs"], [1, "icones", "bordrig", "bordbot", "bco", 2, "width", "4.2%"], ["href", "mural_lgpd", 1, "pspic"], ["alt", "", 3, "src"], [1, "icones", "bordrig", "bordbot", "bcocin", 2, "width", "4.2%"], ["href", "#", 1, "pspic"], [1, "icones", "bordrig", "bordbot", "bcocin", 2, "width", "4.5%"], [1, "bcocin", "bordbot", "icoband"], [1, "example-container", 2, "width", "100%", "height", "90% !important", 3, "hasBackdrop"], [2, "width", "12.5%", "background-color", "#fefefe", 3, "mode"], ["drawer", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "GRC Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-drawer-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-drawer", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.colorbar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mural, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.options, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.voz, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bandeira, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "side");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.example-form[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  height: 25%;\r\n  font-size: 14px;\r\n  top: -30% !important;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  padding-right: 8px;\r\n}\r\n\r\n.divprin[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  top: 0 !important;\r\n  margin-top: -13px !important;\r\n  vertical-align: middle;\r\n}\r\n\r\n.iconedivs[_ngcontent-%COMP%]{\r\n  float: left;\r\n  vertical-align: middle;\r\n  margin-top: 0;\r\n  height: 57px;\r\n}\r\n\r\n.bco[_ngcontent-%COMP%]{\r\n  background-color: #Fff;\r\n}\r\n\r\n.bcocin[_ngcontent-%COMP%]{\r\n  background-color: #F7F9FA;\r\n}\r\n\r\n.bordrig[_ngcontent-%COMP%]{\r\n  border-right: 1px #ccc solid\r\n}\r\n\r\n.bordbot[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.pspace[_ngcontent-%COMP%]{\r\n  height: 5px;\r\n}\r\n\r\n.pspic[_ngcontent-%COMP%]{\r\n  margin-left: 25%;\r\n  width: 4.2%;\r\n  height: 35px;\r\n  text-align: center;\r\n  font-size: 35px;\r\n}\r\n\r\n.ptit[_ngcontent-%COMP%]{\r\n  height: 35px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #34495E;\r\n}\r\n\r\n.pinput[_ngcontent-%COMP%]{\r\n  height: 35px;\r\n  text-align: left;\r\n  font-size: 15px;\r\n}\r\n\r\n.maticon[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  vertical-align: middle;\r\n  color: #34495E;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n  height: 35px;\r\n  text-align: center;\r\n  font-size: 35px;\r\n}\r\n\r\n.icoband[_ngcontent-%COMP%]{\r\n  float: left;\r\n  margin-top: 0;\r\n  height: 57px;\r\n  width: 5.3%;\r\n}\r\n\r\n.icones[_ngcontent-%COMP%]{\r\n  float: left;\r\n  vertical-align: middle;\r\n   margin-top: 0;\r\n   height: 57px;\r\n}\r\n\r\n.inputs[_ngcontent-%COMP%]{\r\n  border: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin-left: 1%;\r\n}\r\n\r\n.imgp[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  margin-top: -20px !important;\r\n  position: relative;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBUUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7R0FDckIsYUFBYTtHQUNiLFlBQVk7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMjUlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0b3A6IC0zMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxudGQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmRpdnByaW57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogLTEzcHggIWltcG9ydGFudDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uaWNvbmVkaXZze1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBoZWlnaHQ6IDU3cHg7XHJcbn1cclxuXHJcbi5iY297XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZmZjtcclxufVxyXG5cclxuLmJjb2NpbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGOUZBO1xyXG59XHJcblxyXG4uYm9yZHJpZ3tcclxuICBib3JkZXItcmlnaHQ6IDFweCAjY2NjIHNvbGlkXHJcbn1cclxuXHJcbi5ib3JkYm90IHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLnBzcGFjZXtcclxuICBoZWlnaHQ6IDVweDtcclxufVxyXG5cclxuLnBzcGlje1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgd2lkdGg6IDQuMiU7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbi5wdGl0e1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMzQ0OTVFO1xyXG59XHJcblxyXG4ucGlucHV0e1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLm1hdGljb257XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICMzNDQ5NUU7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcblxyXG4uaWNvYmFuZHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIGhlaWdodDogNTdweDtcclxuICB3aWR0aDogNS4zJTtcclxufVxyXG5cclxuLmljb25lc3tcclxuICBmbG9hdDogbGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICBtYXJnaW4tdG9wOiAwO1xyXG4gICBoZWlnaHQ6IDU3cHg7XHJcbn1cclxuXHJcbi5pbnB1dHN7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuXHJcbi5pbWdwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cabecalho/cabecalho.component */ "./src/app/components/cabecalho/cabecalho.component.ts");
/* harmony import */ var _components_rodape_rodape_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/rodape/rodape.component */ "./src/app/components/rodape/rodape.component.ts");
/* harmony import */ var _components_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inventario/inventario.component */ "./src/app/components/inventario/inventario.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_mural_mural_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/mural/mural.component */ "./src/app/components/mural/mural.component.ts");
/* harmony import */ var _components_cadinventario_cadinventario_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/cadinventario/cadinventario.component */ "./src/app/components/cadinventario/cadinventario.component.ts");
/* harmony import */ var _components_dadoinventario_dadoinventario_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/dadoinventario/dadoinventario.component */ "./src/app/components/dadoinventario/dadoinventario.component.ts");
/* harmony import */ var _components_sistrepo_sistrepo_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/sistrepo/sistrepo.component */ "./src/app/components/sistrepo/sistrepo.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _components_fluxodados_fluxodados_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/fluxodados/fluxodados.component */ "./src/app/components/fluxodados/fluxodados.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/fesm2015/tabs.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/fesm2015/tree.js");
/* harmony import */ var _components_fluxodados_selecionaprocesso_selecionaprocesso_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/fluxodados/selecionaprocesso/selecionaprocesso.component */ "./src/app/components/fluxodados/selecionaprocesso/selecionaprocesso.component.ts");
































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _components_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_7__["CabecalhoComponent"],
        _components_rodape_rodape_component__WEBPACK_IMPORTED_MODULE_8__["RodapeComponent"],
        _components_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_9__["InventarioComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"],
        _components_mural_mural_component__WEBPACK_IMPORTED_MODULE_21__["MuralComponent"],
        _components_cadinventario_cadinventario_component__WEBPACK_IMPORTED_MODULE_22__["CadinventarioComponent"],
        _components_dadoinventario_dadoinventario_component__WEBPACK_IMPORTED_MODULE_23__["DadoinventarioComponent"],
        _components_sistrepo_sistrepo_component__WEBPACK_IMPORTED_MODULE_24__["SistrepoComponent"],
        _components_fluxodados_fluxodados_component__WEBPACK_IMPORTED_MODULE_26__["FluxodadosComponent"],
        _components_fluxodados_selecionaprocesso_selecionaprocesso_component__WEBPACK_IMPORTED_MODULE_30__["SelecionaprocessoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                    _components_cabecalho_cabecalho_component__WEBPACK_IMPORTED_MODULE_7__["CabecalhoComponent"],
                    _components_rodape_rodape_component__WEBPACK_IMPORTED_MODULE_8__["RodapeComponent"],
                    _components_inventario_inventario_component__WEBPACK_IMPORTED_MODULE_9__["InventarioComponent"],
                    _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"],
                    _components_mural_mural_component__WEBPACK_IMPORTED_MODULE_21__["MuralComponent"],
                    _components_cadinventario_cadinventario_component__WEBPACK_IMPORTED_MODULE_22__["CadinventarioComponent"],
                    _components_dadoinventario_dadoinventario_component__WEBPACK_IMPORTED_MODULE_23__["DadoinventarioComponent"],
                    _components_sistrepo_sistrepo_component__WEBPACK_IMPORTED_MODULE_24__["SistrepoComponent"],
                    _components_fluxodados_fluxodados_component__WEBPACK_IMPORTED_MODULE_26__["FluxodadosComponent"],
                    _components_fluxodados_selecionaprocesso_selecionaprocesso_component__WEBPACK_IMPORTED_MODULE_30__["SelecionaprocessoComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__["MatTabsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/cabecalho/cabecalho.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cabecalho/cabecalho.component.ts ***!
  \*************************************************************/
/*! exports provided: CabecalhoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabecalhoComponent", function() { return CabecalhoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");



class CabecalhoComponent {
    constructor() {
        this.CodeApi = 0;
        this.QtdMessageMail = '';
        this.QtdMessageAlert = '';
        this.Bandeira = 'pt';
        this.GetMessage = false;
        this.user = '/assets/imgs/user.png';
        this.found = '/assets/imgs/cabs.png';
        this.colorbar = '/assets/imgs/colorbar.png';
        this.bandeira = '/assets/imgs/bandeira.png';
        this.email = '/assets/imgs/email.png';
        this.mural = '/assets/imgs/mural.png';
        this.options = '/assets/imgs/options.png';
        this.voz = '/assets/imgs/voz.png';
    }
    ngOnInit() {
    }
}
CabecalhoComponent.ɵfac = function CabecalhoComponent_Factory(t) { return new (t || CabecalhoComponent)(); };
CabecalhoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CabecalhoComponent, selectors: [["app-cabecalho"]], decls: 38, vars: 6, consts: [["alt", "", 2, "width", "100%", "margin-top", "-15px", "position", "relative", 3, "src"], [2, "width", "100%", "top", "0", "margin-top", "-13px !important"], [1, "iconedivs", "bcocin", "bordrig", "bordbot", 2, "width", "12.5%"], [1, "pspace"], [1, "ptit"], [1, "maticon"], [1, "iconedivs", "bcocin", "bordrig", "bordbot", 2, "width", "4.5%"], [1, "icon"], [1, "iconedivs", "bordbot", "bco", 2, "width", "60.6%"], [2, "height", "35px", "text-align", "left", "font-size", "15px"], ["type", "text", "placeholder", "Clique para Pesquisar...", 1, "inputs"], [1, "icones", "bordrig", "bordbot", "bco", 2, "width", "4.2%"], ["href", "#", 1, "pspic"], ["alt", "", 3, "src"], [1, "icones", "bordrig", "bordbot", "bcocin", 2, "width", "4.2%"], [1, "icones", "bordrig", "bordbot", "bcocin", 2, "width", "4.5%"], [1, "bcocin", "bordbot", 2, "float", "left", "margin-top", "0", "height", "57px", "width", "5.3%"]], template: function CabecalhoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " E-xyon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.colorbar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.mural, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.options, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.voz, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bandeira, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".example-spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.example-form[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  height: 25%;\r\n  font-size: 14px;\r\n  top: -30% !important;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  padding-right: 8px;\r\n}\r\n\r\n.divprin[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  top: 0 !important;\r\n  margin-top: -13px !important;\r\n  vertical-align: middle;\r\n}\r\n\r\n.iconedivs[_ngcontent-%COMP%]{\r\n  float: left;\r\n  vertical-align: middle;\r\n  margin-top: 0;\r\n  height: 57px;\r\n}\r\n\r\n.bco[_ngcontent-%COMP%]{\r\n  background-color: #Fff;\r\n}\r\n\r\n.bcocin[_ngcontent-%COMP%]{\r\n  background-color: #F7F9FA;\r\n}\r\n\r\n.bordrig[_ngcontent-%COMP%]{\r\n  border-right: 1px #ccc solid\r\n}\r\n\r\n.bordbot[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.pspace[_ngcontent-%COMP%]{\r\n  height: 5px;\r\n}\r\n\r\n.pspic[_ngcontent-%COMP%]{\r\n  margin-left: 25%;\r\n  width: 4.2%;\r\n  height: 35px;\r\n  text-align: center;\r\n  font-size: 35px;\r\n}\r\n\r\n.ptit[_ngcontent-%COMP%]{\r\n  height: 35px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  color: #34495E;\r\n}\r\n\r\n.maticon[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  vertical-align: middle;\r\n  color: #34495E;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n  height: 35px;\r\n  text-align: center;\r\n  font-size: 35px;\r\n}\r\n\r\n.icones[_ngcontent-%COMP%]{\r\n  float: left;\r\n  vertical-align: middle;\r\n   margin-top: 0;\r\n   height: 57px;\r\n}\r\n\r\n.inputs[_ngcontent-%COMP%]{\r\n  border: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin-left: 1%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWJlY2FsaG8vY2FiZWNhbGhvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBUUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7R0FDckIsYUFBYTtHQUNiLFlBQVk7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhYmVjYWxoby9jYWJlY2FsaG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBoZWlnaHQ6IDI1JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdG9wOiAtMzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5kaXZwcmlue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0xM3B4ICFpbXBvcnRhbnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmljb25lZGl2c3tcclxuICBmbG9hdDogbGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgaGVpZ2h0OiA1N3B4O1xyXG59XHJcblxyXG4uYmNve1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGZmY7XHJcbn1cclxuXHJcbi5iY29jaW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjlGQTtcclxufVxyXG5cclxuLmJvcmRyaWd7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggI2NjYyBzb2xpZFxyXG59XHJcblxyXG4uYm9yZGJvdCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5wc3BhY2V7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5wc3BpY3tcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIHdpZHRoOiA0LjIlO1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcblxyXG4ucHRpdHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzM0NDk1RTtcclxufVxyXG5cclxuLm1hdGljb257XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICMzNDQ5NUU7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gIGhlaWdodDogMzVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcblxyXG4uaWNvbmVze1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgIG1hcmdpbi10b3A6IDA7XHJcbiAgIGhlaWdodDogNTdweDtcclxufVxyXG5cclxuLmlucHV0c3tcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CabecalhoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cabecalho',
                templateUrl: './cabecalho.component.html',
                styleUrls: ['./cabecalho.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/cadinventario/cadinventario.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/cadinventario/cadinventario.component.ts ***!
  \*********************************************************************/
/*! exports provided: CadinventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadinventarioComponent", function() { return CadinventarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




function CadinventarioComponent_table_16_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.tipo, " ");
} }
function CadinventarioComponent_table_16_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.tipo, " ");
} }
function CadinventarioComponent_table_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CadinventarioComponent_table_16_td_8_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CadinventarioComponent_table_16_td_9_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.btA, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.btB, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.tipo == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.tipo != "");
} }
class CadinventarioComponent {
    constructor() {
        this.titulotela = 'CADASTRAR INVENTÁRIO';
        this.subtitulotela = 'Mapeamento e Inventário dos dados';
        this.caminho = 'LGPD / Inventário / Cadastrar Inventário';
        this.botoes = [
            { id: 1, btA: 'Nome do Ativo', btB: 'Banco Marketing', tipo: 'Campo Digitação' },
            { id: 2, btA: 'Tipo do Ativo', btB: 'SQL Server', tipo: 'Combo Box' },
            { id: 3, btA: 'Área Responsável', btB: 'Marketing', tipo: 'Campo Digitação' },
            { id: 4, btA: 'Nome Responsável', btB: 'Fulano', tipo: 'Campo Digitação' },
            { id: 5, btA: 'Data de entrada', btB: '16/11/2021', tipo: 'Campo Digitação' },
            { id: 6, btA: 'Onde está', btB: 'Servidor AWS', tipo: 'Campo Digitação' },
        ];
    }
    ngOnInit() {
    }
}
CadinventarioComponent.ɵfac = function CadinventarioComponent_Factory(t) { return new (t || CadinventarioComponent)(); };
CadinventarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CadinventarioComponent, selectors: [["app-cadinventario"]], decls: 17, vars: 4, consts: [[2, "background-color", "#fff", "padding-left", "2em", "width", "100%", "border-bottom", "1px solid #ddd", "height", "80px", "padding-top", "0.9em"], [2, "font-weight", "bold", "color", "#444"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em", "padding-right", "2em", "text-align", "right"], [1, "body"], [1, "container", 2, "padding-top", "2em", "width", "1000px"], [1, "lgdiv"], [2, "padding-top", "2%"], ["href", "inventario", "routerLinkActive", "active", 1, "btn", "btn-primary", "large", 2, "width", "200px"], ["style", "width: 100%;", 4, "ngFor", "ngForOf"], [2, "width", "100%"], [2, "width", "25%", "padding-top", "10px"], ["href", "#", "routerLinkActive", "active", 1, "btn", "btn-primary", "large", 2, "width", "200px"], ["style", "width: 25%; padding-top: 10px;", 4, "ngIf"], ["style", "width: 25%; border-bottom: 1px solid #999;", 4, "ngIf"], [2, "width", "25%", "border-bottom", "1px solid #999"]], template: function CadinventarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cadastrar Ativo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CadinventarioComponent_table_16_Template, 10, 4, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.titulotela, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitulotela);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.caminho, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.botoes);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0px;\r\n  border: 0px solid #555;\r\n}\r\n\r\nmat-drawer-content[_ngcontent-%COMP%] {\r\n  padding: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  display: table;\r\n}\r\n\r\n.example-label[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n\r\n.example-button-row[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  width: 490px;\r\n}\r\n\r\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n\r\n.example-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.example-button-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n}\r\n\r\n.example-form[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  padding-right: 8px;\r\n}\r\n\r\n.lgdiv[_ngcontent-%COMP%]{\r\n  height: 450px;\r\n  padding: 2em;\r\n  border: 1px solid #eee;\r\n  background-color: #fff;\r\n  width: 130% !important;\r\n  margin-left: -15% !important;\r\n  padding-top: 2em;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]{\r\n  background-color: #F1F3F6;\r\n  overflow-x:hidden !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWRpbnZlbnRhcmlvL2NhZGludmVudGFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhZGludmVudGFyaW8vY2FkaW52ZW50YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzU1NTtcclxufVxyXG5cclxubWF0LWRyYXdlci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxhYmVsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDQ5MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5sZ2RpdntcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG4gIHBhZGRpbmc6IDJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgd2lkdGg6IDEzMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogLTE1JSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbn1cclxuXHJcbi5ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYzRjY7XHJcbiAgb3ZlcmZsb3cteDpoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CadinventarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cadinventario',
                templateUrl: './cadinventario.component.html',
                styleUrls: ['./cadinventario.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/dadoinventario/dadoinventario.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/dadoinventario/dadoinventario.component.ts ***!
  \***********************************************************************/
/*! exports provided: DadoinventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadoinventarioComponent", function() { return DadoinventarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");








function DadoinventarioComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DadoinventarioComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.id, " ");
} }
function DadoinventarioComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dados Pessoais ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DadoinventarioComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.dadosPess, " ");
} }
function DadoinventarioComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Categoria ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DadoinventarioComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r17.categoria, " ");
} }
function DadoinventarioComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Faturamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DadoinventarioComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r18.faturamento, " ");
} }
function DadoinventarioComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contas \u00E0 Pagar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DadoinventarioComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r19.cpagar, " ");
} }
function DadoinventarioComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cadastro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DadoinventarioComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r20.cadastro, " ");
} }
function DadoinventarioComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function DadoinventarioComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} }
const _c0 = function () { return [5, 10, 20]; };
class DadoinventarioComponent {
    constructor() {
        this.displayedColumns = ['id', 'dadosPess', 'categoria', 'faturamento', 'cpagar', 'cadastro'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.titulotela = 'DADOS DO INVENTÁRIO';
        this.subtitulotela = 'Inventário de dados Ativo';
        this.caminho = 'LGPD / Inventário / Dados do Inventário';
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
DadoinventarioComponent.ɵfac = function DadoinventarioComponent_Factory(t) { return new (t || DadoinventarioComponent)(); };
DadoinventarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DadoinventarioComponent, selectors: [["app-dadoinventario"]], viewQuery: function DadoinventarioComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 39, vars: 8, consts: [[2, "background-color", "#fff", "padding-left", "2em", "width", "100%", "border-bottom", "1px solid #ddd", "height", "80px", "padding-top", "0.9em"], [2, "font-weight", "bold", "color", "#444"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em", "padding-right", "2em", "text-align", "right"], [1, "body"], [1, "container"], [1, "lgdiv"], ["appearance", "standard", 2, "padding-left", "3em"], ["matInput", "", "placeholder", "Digite sua busca", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "lgtable"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "dadosPess"], ["matColumnDef", "categoria"], ["matColumnDef", "faturamento"], ["matColumnDef", "cpagar"], ["matColumnDef", "cadastro"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DadoinventarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function DadoinventarioComponent_Template_input_keyup_14_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DadoinventarioComponent_th_19_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DadoinventarioComponent_td_20_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DadoinventarioComponent_th_22_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DadoinventarioComponent_td_23_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DadoinventarioComponent_th_25_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DadoinventarioComponent_td_26_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DadoinventarioComponent_th_28_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DadoinventarioComponent_td_29_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DadoinventarioComponent_th_31_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, DadoinventarioComponent_td_32_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, DadoinventarioComponent_th_34_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DadoinventarioComponent_td_35_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DadoinventarioComponent_tr_36_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, DadoinventarioComponent_tr_37_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "mat-paginator", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.titulotela, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitulotela);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.caminho, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0px;\r\n  border: 0px solid #555;\r\n}\r\n\r\nmat-drawer-content[_ngcontent-%COMP%] {\r\n  padding: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  display: table;\r\n}\r\n\r\n.example-label[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n\r\n.example-button-row[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  width: 490px;\r\n}\r\n\r\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n\r\n.example-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.example-button-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n}\r\n\r\n.example-form[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.demo-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.demo-button-container[_ngcontent-%COMP%] {\r\n  padding-bottom: 16px;\r\n}\r\n\r\n.demo-button[_ngcontent-%COMP%]    + .demo-button[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n\r\n.lgtable[_ngcontent-%COMP%]{\r\n  width: 93.5% !important;\r\n  margin-left: 3%;\r\n  box-shadow: none !important;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.lgdiv[_ngcontent-%COMP%]{\r\n  border: 1px solid #eee;\r\n  background-color: #fff;\r\n  width: 130% !important;\r\n  margin-left: -15% !important;\r\n  padding-top: 2em;\r\n  padding-bottom: 3em !important;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]{\r\n  background-color: #F1F3F6;\r\n  overflow-x:hidden !important;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  padding-top: 2em;\r\n  width: 1000px;\r\n  padding-bottom: 3em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYWRvaW52ZW50YXJpby9kYWRvaW52ZW50YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBLDZCQUE2Qjs7QUFDN0I7RUFDRSxXQUFXO0FBQ2I7O0FBQ0EsaUNBQWlDOztBQUNqQzs7R0FFRzs7QUFFSDtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYWRvaW52ZW50YXJpby9kYWRvaW52ZW50YXJpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzU1NTtcclxufVxyXG5cclxubWF0LWRyYXdlci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxhYmVsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDQ5MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIHRkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn0gKi9cclxuXHJcbi5kZW1vLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRlbW8tYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5kZW1vLWJ1dHRvbiArIC5kZW1vLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmxndGFibGV7XHJcbiAgd2lkdGg6IDkzLjUlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4ubGdkaXZ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMzAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNSUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjNGNjtcclxuICBvdmVyZmxvdy14OmhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DadoinventarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dadoinventario',
                templateUrl: './dadoinventario.component.html',
                styleUrls: ['./dadoinventario.component.css']
            }]
    }], null, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();
const ELEMENT_DATA = [
    { id: 1, dadosPess: 'CPF', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
    { id: 2, dadosPess: 'RG', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
    { id: 3, dadosPess: 'RNE (estrangeiros)', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
    { id: 4, dadosPess: 'Passaporte (estrangeiros)', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
    { id: 5, dadosPess: 'Tipo de visto (estrangeiros)', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
    { id: 6, dadosPess: 'Certificado de reservista (para homens)', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
    { id: 7, dadosPess: 'CTPS cópia', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
    { id: 8, dadosPess: 'Currículo profissional', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
    { id: 9, dadosPess: 'Comprovante de escolaridade', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
    { id: 10, dadosPess: 'Comprovante de residência', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
    { id: 11, dadosPess: 'Título de eleitor', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
    { id: 12, dadosPess: 'PIS', categoria: 'Dados Comuns', faturamento: 'Não', cpagar: '', cadastro: '', },
];


/***/ }),

/***/ "./src/app/components/fluxodados/fluxodados.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/fluxodados/fluxodados.component.ts ***!
  \***************************************************************/
/*! exports provided: FluxodadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FluxodadosComponent", function() { return FluxodadosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");





function FluxodadosComponent_table_54_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_table_54_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thtab_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", thtab_r14.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thtab_r14.campo);
} }
function FluxodadosComponent_table_54_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_table_54_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_table_54_tbody_7_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_table_54_tbody_7_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_table_54_tbody_7_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r15.apontamento);
} }
function FluxodadosComponent_table_54_tbody_7_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r15.apontamento);
} }
function FluxodadosComponent_table_54_tbody_7_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r15.classif);
} }
function FluxodadosComponent_table_54_tbody_7_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r15.classif);
} }
function FluxodadosComponent_table_54_tbody_7_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_table_54_tbody_7_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_table_54_tbody_7_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_table_54_tbody_7_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_table_54_tbody_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FluxodadosComponent_table_54_tbody_7_th_2_Template, 2, 0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FluxodadosComponent_table_54_tbody_7_th_3_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FluxodadosComponent_table_54_tbody_7_td_4_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FluxodadosComponent_table_54_tbody_7_td_5_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FluxodadosComponent_table_54_tbody_7_td_6_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FluxodadosComponent_table_54_tbody_7_td_7_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FluxodadosComponent_table_54_tbody_7_td_8_Template, 3, 0, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FluxodadosComponent_table_54_tbody_7_td_9_Template, 3, 0, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FluxodadosComponent_table_54_tbody_7_td_10_Template, 3, 0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FluxodadosComponent_table_54_tbody_7_td_11_Template, 3, 0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r15.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r15.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r15.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r15.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r15.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r15.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r15.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r15.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r15.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r15.id % 2 === 1);
} }
const _c0 = function (a1, a2) { return { itemsPerPage: 3, currentPage: a1, totalItems: a2 }; };
function FluxodadosComponent_table_54_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FluxodadosComponent_table_54_th_3_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FluxodadosComponent_table_54_th_4_Template, 2, 3, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FluxodadosComponent_table_54_th_5_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FluxodadosComponent_table_54_th_6_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FluxodadosComponent_table_54_tbody_7_Template, 12, 10, "tbody", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tfoot");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pagination-controls", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function FluxodadosComponent_table_54_Template_pagination_controls_pageChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.pageApont = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r8.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r8.thTabela);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r8.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r8.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, tab_r8.tdDados, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx_r0.pageApont, ctx_r0.totalLengthApont)));
} }
function FluxodadosComponent_div_70_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 74);
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r33.seta, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FluxodadosComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FluxodadosComponent_div_70_img_3_Template, 1, 1, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fluxo_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", fluxo_r32.fundo)("color", fluxo_r32.cor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fluxo_r32.camada, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", fluxo_r32.seta == true);
} }
function FluxodadosComponent_li_75_div_20_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r41.perg);
} }
function FluxodadosComponent_li_75_div_20_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r41.resp);
} }
function FluxodadosComponent_li_75_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FluxodadosComponent_li_75_div_20_label_3_Template, 2, 1, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FluxodadosComponent_li_75_div_20_label_4_Template, 2, 1, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r41 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r41 != "");
} }
function FluxodadosComponent_li_75_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_75_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thtab_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", thtab_r46.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thtab_r46.campo);
} }
function FluxodadosComponent_li_75_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_75_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_75_tbody_29_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_75_tbody_29_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_75_tbody_29_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r47.dadosPessoais);
} }
function FluxodadosComponent_li_75_tbody_29_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r47.dadosPessoais);
} }
function FluxodadosComponent_li_75_tbody_29_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r47.categoria);
} }
function FluxodadosComponent_li_75_tbody_29_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r47.categoria);
} }
function FluxodadosComponent_li_75_tbody_29_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", dado_r47.coletado);
} }
function FluxodadosComponent_li_75_tbody_29_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", dado_r47.coletado);
} }
function FluxodadosComponent_li_75_tbody_29_td_10_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_75_tbody_29_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FluxodadosComponent_li_75_tbody_29_td_10_a_1_Template, 2, 0, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 0);
} }
function FluxodadosComponent_li_75_tbody_29_td_11_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_75_tbody_29_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FluxodadosComponent_li_75_tbody_29_td_11_a_1_Template, 2, 0, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 0);
} }
function FluxodadosComponent_li_75_tbody_29_td_12_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_75_tbody_29_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FluxodadosComponent_li_75_tbody_29_td_12_a_1_Template, 2, 0, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 1);
} }
function FluxodadosComponent_li_75_tbody_29_td_13_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_75_tbody_29_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FluxodadosComponent_li_75_tbody_29_td_13_a_1_Template, 2, 0, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 1);
} }
function FluxodadosComponent_li_75_tbody_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FluxodadosComponent_li_75_tbody_29_th_2_Template, 2, 0, "th", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FluxodadosComponent_li_75_tbody_29_th_3_Template, 2, 0, "th", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FluxodadosComponent_li_75_tbody_29_td_4_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FluxodadosComponent_li_75_tbody_29_td_5_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FluxodadosComponent_li_75_tbody_29_td_6_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FluxodadosComponent_li_75_tbody_29_td_7_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FluxodadosComponent_li_75_tbody_29_td_8_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FluxodadosComponent_li_75_tbody_29_td_9_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FluxodadosComponent_li_75_tbody_29_td_10_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FluxodadosComponent_li_75_tbody_29_td_11_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FluxodadosComponent_li_75_tbody_29_td_12_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FluxodadosComponent_li_75_tbody_29_td_13_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r47.id % 2 === 1);
} }
function FluxodadosComponent_li_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FluxodadosComponent_li_75_div_20_Template, 5, 2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FluxodadosComponent_li_75_th_25_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FluxodadosComponent_li_75_th_26_Template, 2, 3, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FluxodadosComponent_li_75_th_27_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FluxodadosComponent_li_75_th_28_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FluxodadosComponent_li_75_tbody_29_Template, 14, 12, "tbody", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r34.tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r34.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", tab_r34.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r34.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r34.perguntas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r34.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r34.thTabela);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r34.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r34.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r34.tdDados);
} }
function FluxodadosComponent_li_76_div_20_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r80.perg);
} }
function FluxodadosComponent_li_76_div_20_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r80.resp);
} }
function FluxodadosComponent_li_76_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FluxodadosComponent_li_76_div_20_label_3_Template, 2, 1, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FluxodadosComponent_li_76_div_20_label_4_Template, 2, 1, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r80 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r80 != "");
} }
function FluxodadosComponent_li_76_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 116);
} }
function FluxodadosComponent_li_76_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thtab_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", thtab_r85.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thtab_r85.campo);
} }
function FluxodadosComponent_li_76_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 117);
} }
function FluxodadosComponent_li_76_tbody_28_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_76_tbody_28_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_76_tbody_28_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.subprocesso);
} }
function FluxodadosComponent_li_76_tbody_28_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.subprocesso);
} }
function FluxodadosComponent_li_76_tbody_28_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.nomegestor);
} }
function FluxodadosComponent_li_76_tbody_28_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.nomegestor);
} }
function FluxodadosComponent_li_76_tbody_28_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.sistema);
} }
function FluxodadosComponent_li_76_tbody_28_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.sistema);
} }
function FluxodadosComponent_li_76_tbody_28_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.armazenamento);
} }
function FluxodadosComponent_li_76_tbody_28_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.armazenamento);
} }
function FluxodadosComponent_li_76_tbody_28_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.integracao);
} }
function FluxodadosComponent_li_76_tbody_28_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.integracao);
} }
function FluxodadosComponent_li_76_tbody_28_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.ondeesta);
} }
function FluxodadosComponent_li_76_tbody_28_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.ondeesta);
} }
function FluxodadosComponent_li_76_tbody_28_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.fornece);
} }
function FluxodadosComponent_li_76_tbody_28_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.fornece);
} }
function FluxodadosComponent_li_76_tbody_28_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.administra);
} }
function FluxodadosComponent_li_76_tbody_28_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.administra);
} }
function FluxodadosComponent_li_76_tbody_28_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.envolvidos);
} }
function FluxodadosComponent_li_76_tbody_28_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.envolvidos);
} }
function FluxodadosComponent_li_76_tbody_28_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.registros);
} }
function FluxodadosComponent_li_76_tbody_28_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r86.registros);
} }
function FluxodadosComponent_li_76_tbody_28_td_24_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_76_tbody_28_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FluxodadosComponent_li_76_tbody_28_td_24_a_1_Template, 2, 0, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
} }
function FluxodadosComponent_li_76_tbody_28_td_25_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_76_tbody_28_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FluxodadosComponent_li_76_tbody_28_td_25_a_1_Template, 2, 0, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
} }
function FluxodadosComponent_li_76_tbody_28_td_26_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_76_tbody_28_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FluxodadosComponent_li_76_tbody_28_td_26_a_1_Template, 2, 0, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
} }
function FluxodadosComponent_li_76_tbody_28_td_27_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FluxodadosComponent_li_76_tbody_28_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FluxodadosComponent_li_76_tbody_28_td_27_a_1_Template, 2, 0, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
} }
function FluxodadosComponent_li_76_tbody_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FluxodadosComponent_li_76_tbody_28_th_2_Template, 2, 0, "th", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FluxodadosComponent_li_76_tbody_28_th_3_Template, 2, 0, "th", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FluxodadosComponent_li_76_tbody_28_td_4_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FluxodadosComponent_li_76_tbody_28_td_5_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FluxodadosComponent_li_76_tbody_28_td_6_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FluxodadosComponent_li_76_tbody_28_td_7_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FluxodadosComponent_li_76_tbody_28_td_8_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FluxodadosComponent_li_76_tbody_28_td_9_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FluxodadosComponent_li_76_tbody_28_td_10_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FluxodadosComponent_li_76_tbody_28_td_11_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FluxodadosComponent_li_76_tbody_28_td_12_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FluxodadosComponent_li_76_tbody_28_td_13_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FluxodadosComponent_li_76_tbody_28_td_14_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FluxodadosComponent_li_76_tbody_28_td_15_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FluxodadosComponent_li_76_tbody_28_td_16_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FluxodadosComponent_li_76_tbody_28_td_17_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FluxodadosComponent_li_76_tbody_28_td_18_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FluxodadosComponent_li_76_tbody_28_td_19_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FluxodadosComponent_li_76_tbody_28_td_20_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FluxodadosComponent_li_76_tbody_28_td_21_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FluxodadosComponent_li_76_tbody_28_td_22_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FluxodadosComponent_li_76_tbody_28_td_23_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, FluxodadosComponent_li_76_tbody_28_td_24_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FluxodadosComponent_li_76_tbody_28_td_25_Template, 2, 1, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FluxodadosComponent_li_76_tbody_28_td_26_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FluxodadosComponent_li_76_tbody_28_td_27_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r86.id % 2 === 1);
} }
function FluxodadosComponent_li_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FluxodadosComponent_li_76_div_20_Template, 5, 2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FluxodadosComponent_li_76_th_25_Template, 1, 0, "th", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FluxodadosComponent_li_76_th_26_Template, 2, 3, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FluxodadosComponent_li_76_th_27_Template, 1, 0, "th", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FluxodadosComponent_li_76_tbody_28_Template, 28, 26, "tbody", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r74 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r74.tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r74.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", tab_r74.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r74.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r74.perguntas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r74.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r74.thTabela);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r74.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r74.tdDados);
} }
function FluxodadosComponent_li_77_div_20_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r148.perg);
} }
function FluxodadosComponent_li_77_div_20_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r148.resp);
} }
function FluxodadosComponent_li_77_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FluxodadosComponent_li_77_div_20_label_3_Template, 2, 1, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FluxodadosComponent_li_77_div_20_label_4_Template, 2, 1, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r148 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r148 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r148 != "");
} }
function FluxodadosComponent_li_77_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_77_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thtab_r153 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", thtab_r153.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thtab_r153.campo);
} }
function FluxodadosComponent_li_77_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_77_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_77_tbody_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r154 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r154.DadosPessoais);
} }
function FluxodadosComponent_li_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FluxodadosComponent_li_77_div_20_Template, 5, 2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FluxodadosComponent_li_77_th_25_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FluxodadosComponent_li_77_th_26_Template, 2, 3, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FluxodadosComponent_li_77_th_27_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FluxodadosComponent_li_77_th_28_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FluxodadosComponent_li_77_tbody_29_Template, 9, 1, "tbody", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r141 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r141.tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r141.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", tab_r141.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r141.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r141.perguntas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r141.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r141.thTabela);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r141.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r141.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r141.tdDados);
} }
function FluxodadosComponent_li_78_div_20_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r162.perg);
} }
function FluxodadosComponent_li_78_div_20_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r162.resp);
} }
function FluxodadosComponent_li_78_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FluxodadosComponent_li_78_div_20_label_3_Template, 2, 1, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FluxodadosComponent_li_78_div_20_label_4_Template, 2, 1, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r162 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r162 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r162 != "");
} }
function FluxodadosComponent_li_78_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_78_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thtab_r167 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", thtab_r167.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thtab_r167.campo);
} }
function FluxodadosComponent_li_78_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_78_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_78_tbody_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r168 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r168.DadosPessoais);
} }
function FluxodadosComponent_li_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FluxodadosComponent_li_78_div_20_Template, 5, 2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FluxodadosComponent_li_78_th_25_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FluxodadosComponent_li_78_th_26_Template, 2, 3, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FluxodadosComponent_li_78_th_27_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FluxodadosComponent_li_78_th_28_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FluxodadosComponent_li_78_tbody_29_Template, 9, 1, "tbody", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r155 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r155.tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r155.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", tab_r155.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r155.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r155.perguntas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r155.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r155.thTabela);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r155.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r155.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r155.tdDados);
} }
function FluxodadosComponent_li_79_div_20_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r176.perg);
} }
function FluxodadosComponent_li_79_div_20_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r176.resp);
} }
function FluxodadosComponent_li_79_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FluxodadosComponent_li_79_div_20_label_3_Template, 2, 1, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FluxodadosComponent_li_79_div_20_label_4_Template, 2, 1, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r176 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r176 != "");
} }
function FluxodadosComponent_li_79_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_79_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thtab_r181 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", thtab_r181.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thtab_r181.campo);
} }
function FluxodadosComponent_li_79_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_79_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_79_tbody_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r182 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r182.DadosPessoais);
} }
function FluxodadosComponent_li_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FluxodadosComponent_li_79_div_20_Template, 5, 2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FluxodadosComponent_li_79_th_25_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FluxodadosComponent_li_79_th_26_Template, 2, 3, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FluxodadosComponent_li_79_th_27_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FluxodadosComponent_li_79_th_28_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FluxodadosComponent_li_79_tbody_29_Template, 9, 1, "tbody", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r169 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r169.tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r169.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", tab_r169.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r169.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r169.perguntas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r169.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r169.thTabela);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r169.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r169.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r169.tdDados);
} }
function FluxodadosComponent_li_80_div_20_label_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r190.perg);
} }
function FluxodadosComponent_li_80_div_20_label_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](perg_r190.resp);
} }
function FluxodadosComponent_li_80_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FluxodadosComponent_li_80_div_20_label_3_Template, 2, 1, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FluxodadosComponent_li_80_div_20_label_4_Template, 2, 1, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perg_r190 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r190 != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", perg_r190 != "");
} }
function FluxodadosComponent_li_80_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_80_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const thtab_r195 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", thtab_r195.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](thtab_r195.campo);
} }
function FluxodadosComponent_li_80_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_80_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 55);
} }
function FluxodadosComponent_li_80_tbody_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r196 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r196.DadosPessoais);
} }
function FluxodadosComponent_li_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FluxodadosComponent_li_80_div_20_Template, 5, 2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "table", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FluxodadosComponent_li_80_th_25_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FluxodadosComponent_li_80_th_26_Template, 2, 3, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FluxodadosComponent_li_80_th_27_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, FluxodadosComponent_li_80_th_28_Template, 1, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FluxodadosComponent_li_80_tbody_29_Template, 9, 1, "tbody", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r183 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r183.tab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", tab_r183.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", tab_r183.for);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tab_r183.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r183.perguntas);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r183.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r183.thTabela);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r183.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tab_r183.thTabela != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tab_r183.tdDados);
} }
class FluxodadosComponent {
    constructor() {
        this.empresaSelect = 1;
        this.nivelProcess = 4;
        this.processoId = 13;
        this.titulotela = 'FLUXO DE DADOS';
        this.subtitulotela = 'Mapeamento dos Fluxos de dados';
        this.caminho = 'Processos / LGPD / Fluxo de Dados';
        this.user = '/assets/imgs/user.png';
        this.seta = '/assets/imgs/fluxo/seta.png';
        this.pageApont = 1;
        this.tabsApontamentos = [
            {
                id: 1, title: 'Apontamentos',
                thTabela: [
                    { id: 1, campo: 'Apontamento', width: '70%' },
                    { id: 2, campo: 'Classificação', width: '25%' },
                ],
                tdDados: [
                    { id: 1, apontamento: 'Perda de Acessos', classif: 'Médio' },
                    { id: 2, apontamento: 'Máquinas paradas', classif: 'Baixo' },
                    { id: 3, apontamento: 'Sem rede de acesso', classif: 'Médio' },
                    { id: 4, apontamento: 'Funcionários dispensados', classif: 'Alto' },
                    { id: 5, apontamento: 'Coleta de dados errada', classif: 'Médio' },
                    { id: 6, apontamento: 'Armazenamento em nuvem', classif: 'Alto' },
                    { id: 7, apontamento: 'Análise incompleta', classif: 'Baixo' },
                    { id: 8, apontamento: 'Relacionamento de dados', classif: 'Médio' },
                ]
            }
        ];
        this.fluxos = [
            { id: 1, camada: 'Coleta de dados pessoais', fundo: '#8E4311', cor: '#fff', seta: true },
            { id: 2, camada: 'Armazenamento dos dados', fundo: '#D26317', cor: '#fff', seta: true },
            { id: 3, camada: 'Processamento e compartilhamento', fundo: '#FB8738', cor: '#fff', seta: true },
            { id: 4, camada: 'Análise e aplicação dos dados', fundo: '#FFBD8D', cor: '#333', seta: true },
            { id: 5, camada: 'Comunicação e Relacionamento com o Titular de Dados', fundo: '#FFD8B9', cor: '#333', seta: true },
            { id: 6, camada: 'Exclusão dos Dados', fundo: '#FFF3E3', cor: '#333', seta: false },
        ];
        this.empresas = [
            {
                id: 1, nivel: 0, empresa: 'E-xyon',
                responsavel: [{ id: 1, nome: 'Henrique Stablin', email: 'henrique.stabelin@grcteam.com.br' }, { id: 2, nome: 'Julio Oliveira', email: 'julio.oliveira@gmail.com.br' }, { id: 3, nome: 'Carlos Ligeiro', email: 'carlos.ligeiro@e-xyon.com.br' }],
                processo: [
                    { id: 1, nivel: 1, nomeProcesso: 'Rec. Humanos', subProcessoN1: [
                            { id: 1, nivel: 2, nomeProcesso: 'Gestão de Pessoas', subProcessoN2: [
                                    { id: 1, nivel: 3, nomeProcesso: 'Recrutamento', subProcessoN3: [
                                            { id: 1, nivel: 4, nomeProcesso: 'Recrutamento Bahia', },
                                            { id: 2, nivel: 4, nomeProcesso: 'Recrutamento São Paulo', },
                                            { id: 3, nivel: 4, nomeProcesso: 'Recrutamento Rio de Janeiro', },
                                        ]
                                    },
                                    { id: 2, nivel: 3, nomeProcesso: 'Admissão', subProcessoN3: [
                                            { id: 4, nivel: 4, nomeProcesso: 'Admissão Bahia', },
                                            { id: 5, nivel: 4, nomeProcesso: 'Admissão São Paulo' },
                                            { id: 6, nivel: 4, nomeProcesso: 'Admissão Rio de Janeiro' },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    { id: 2, nivel: 1, nomeProcesso: 'Depto Pessoal', subProcessoN1: [
                            { id: 2, nivel: 2, nomeProcesso: 'Contratos de Trab', subProcessoN2: [
                                    { id: 3, nivel: 3, nomeProcesso: 'Contratação', subProcessoN3: [
                                            { id: 7, nivel: 4, nomeProcesso: 'Contratação Bahia', },
                                            { id: 8, nivel: 4, nomeProcesso: 'Contratação São Paulo', },
                                            { id: 9, nivel: 4, nomeProcesso: 'Contratação Rio de Janeiro', }
                                        ]
                                    },
                                    { id: 4, nivel: 3, nomeProcesso: 'Documentos', subProcessoN3: [
                                            { id: 10, nivel: 4, nomeProcesso: 'Doctos Bahia', },
                                            { id: 11, nivel: 4, nomeProcesso: 'Doctos São Paulo' },
                                            { id: 12, nivel: 4, nomeProcesso: 'Doctos Rio de Janeiro' },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    { id: 3, nivel: 1, nomeProcesso: 'Contabilidade', subProcessoN1: [
                            { id: 3, nivel: 2, nomeProcesso: 'Contas à pagar', subProcessoN2: [
                                    { id: 5, nivel: 3, nomeProcesso: 'Orçamento', subProcessoN3: [
                                            { id: 13, nivel: 4, nomeProcesso: 'Orçamento Bahia', },
                                            { id: 14, nivel: 4, nomeProcesso: 'Orçamento São Paulo', },
                                            { id: 14, nivel: 4, nomeProcesso: 'Orçamento Rio de Janeiro', },
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                id: 2, nivel: 0, empresa: 'GRC Team',
                responsavel: [{ id: 1, nome: 'Henrique Stablin', email: 'henrique.stabelin@grcteam.com.br' },],
                processo: [
                    { id: 1, nivel: 1, nomeProcesso: 'Depto Pessoal', subProcessoN1: [
                            {
                                id: 1, nivel: 2, nomeProcesso: 'RH', subProcessoN2: [
                                    {
                                        id: 1, nivel: 3, nomeProcesso: 'Recrutamento', subProcessoN3: [
                                            { id: 1, nivel: 4, nomeProcesso: 'Recrutamento Bahia', }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    { id: 2, nivel: 1, nomeProcesso: 'Contabilidade', subProcessoN1: [
                            {
                                id: 2, nivel: 2, nomeProcesso: 'Contas à pagar', subProcessoN2: [
                                    {
                                        id: 1, nivel: 3, nomeProcesso: 'Orçamento', subProcessoN3: [
                                            { id: 2, nivel: 4, nomeProcesso: 'Orçamento Bahia', }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                id: 3, nivel: 0, empresa: 'Bradesco',
                responsavel: [{ id: 1, nome: 'Julio Oliveira', email: 'julio.oliveira@gmail.com.br' }, { id: 2, nome: 'Carlos Ligeiro', email: 'carlos.ligeiro@e-xyon.com.br' }],
                processo: [
                    { id: 1, nivel: 1, nomeProcesso: 'Depto Pessoal', subProcessoN1: [
                            {
                                id: 1, nivel: 2, nomeProcesso: 'RH', subProcessoN2: [
                                    {
                                        id: 1, nivel: 3, nomeProcesso: 'Recrutamento', subProcessoN3: [
                                            {
                                                id: 1, nivel: 4, nomeProcesso: 'Recrutamento Bahia',
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    { id: 2, nivel: 1, nomeProcesso: 'Contabilidade', subProcessoN1: [
                            {
                                id: 2, nivel: 2, nomeProcesso: 'Contas à pagar', subProcessoN2: [
                                    {
                                        id: 1, nivel: 3, nomeProcesso: 'Orçamento', subProcessoN3: [
                                            {
                                                id: 2, nivel: 4, nomeProcesso: 'Orçamento Bahia',
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            }
        ];
        this.tabsColeta = [
            { id: 1, tab: 'tab1', for: 't1', title: 'Coleta de dados',
                perguntas: [
                    { id: 1,
                        perg: 'Qual é o objetivo da LGPD e a quem ela se destina?',
                        resp: 'A LGPD reúne aspectos discutidos há algum tempo aqui no Brasil e que estavam fragmentados em legislações diversas – como o Marco Civil da Internet – e foi criada com o objetivo de proporcionar ao cidadão brasileiro um controle maior sobre o tratamento de seus dados pessoais. Para isso, ela coloca regras que devem ser seguidas tanto por empresas privadas quanto públicas. Ou seja: vale para qualquer negócio.'
                    },
                    { id: 2,
                        perg: 'Mas o que se entende por “dados pessoais”?',
                        resp: 'De acordo com a lei, um dado pessoal é todo aquele que pode vir a identificar uma pessoa física, como número do CPF, data de nascimento, endereço residencial ou e-mail. Mas a LGPD também traz o conceito de dado pessoal sensível, e aprofunda as restrições em relação a seu uso, por se tratarem de dados com maior potencial discriminatório. São eles: origem racial ou étnica; convicção religiosa; opinião política; filiação a sindicato ou a organização de caráter religioso, filosófico ou político; saúde; vida sexual; genético ou biométrico.'
                    },
                    { id: 3,
                        perg: 'O que compreende o tratamento destes dados?',
                        resp: ''
                    },
                    { id: 4,
                        perg: 'E quando a finalidade muda? O que a empresa deve fazer?',
                        resp: 'Se a sua empresa precisa de um dado pessoal já coletado com o consentimento do titular para outra finalidade de uso, é necessário informar à pessoa sobre este novo intuito. Mas somente informar não basta: em casos assim, você deve atualizar o consentimento do titular.'
                    },
                    { id: 5,
                        perg: 'Quem fiscaliza o cumprimento da lei?',
                        resp: 'O controle da LGPD será feito pela Autoridade Nacional de Proteção de Dados (ANPD). Este órgão será criado para fiscalizar o cumprimento da lei, zelar pela proteção de dados pessoais, elaborar diretrizes e também aplicar as sanções em casos de irregularidade.'
                    },
                ],
                thTabela: [
                    { id: 1, campo: 'Dados Pessoais', width: '50%' },
                    { id: 2, campo: 'Categoria', width: '35%' },
                    { id: 3, campo: 'Coletado', width: '15%' },
                ],
                tdDados: [
                    { id: 1, dadosPessoais: 'CPF', categoria: 'Dados Comuns', coletado: true, },
                    { id: 2, dadosPessoais: 'RG', categoria: 'Dados Comuns', coletado: true, },
                    { id: 3, dadosPessoais: 'RNE (estrangeiros)', categoria: 'Dados Comuns', coletado: false, },
                    { id: 4, dadosPessoais: 'Passaporte (estrangeiros)', categoria: 'Dados Comuns', coletado: false, },
                    { id: 5, dadosPessoais: 'Tipo de visto (estrangeiros)', categoria: 'Dados Comuns', coletado: false, },
                ]
            }
        ];
        this.tabsArmazenamento = [
            {
                id: 1, tab: 'tab2', for: 't2', title: 'Armazenamento',
                perguntas: [
                    { id: 4,
                        perg: 'Em quais casos de tratamento de dados pessoais a lei é aplicada?',
                        resp: 'A lei se aplica a qualquer operação que envolve o tratamento de dados pessoais e que seja realizada em território brasileiro. Mas e se a empresa for sediada no exterior? Caso ela ofereça bens ou serviços para pessoas localizadas no Brasil e, para isso, coletar dados de usuários, a LGPD também se aplica!'
                    },
                    { id: 5,
                        perg: 'Quais são as principais diretrizes da LGPD?',
                        resp: 'A LGPD traz alguns princípios que devem ser respeitados no tratamento de dados pessoais, como: finalidade, necessidade, não discriminação e segurança. Isto significa que a empresa precisa seguir algumas determinações. Em resumo, os dados pessoais só podem ser coletados com o consentimento do titular, que precisa ser informado da finalidade da coleta. É do titular o direito de acesso aos dados coletados, assim como a solicitação de correção de informações, de exclusão, de portabilidade ou de revogação do consentimento.'
                    },
                    { id: 6,
                        perg: 'E o que a lei entende por “consentimento”?',
                        resp: 'O consentimento do titular é a permissão dada por meio de uma declaração para que a empresa possa coletar e utilizar dados específicos para uma finalidade previamente determinada e esclarecida. Ou seja, é preciso ser sempre claro quando se explica como os dados serão utilizados e também se ater à finalidade prevista.'
                    },
                ],
                thTabela: [
                    { id: 1, campo: 'Sub-Processo', width: '10%' },
                    { id: 2, campo: 'Nome do Gestor', width: '15%' },
                    { id: 3, campo: 'Sistema / BD / Cloud / etc', width: '25%' },
                    { id: 4, campo: 'Armazenamento', width: '7%' },
                    { id: 5, campo: 'Formas de Integração', width: '7%' },
                    { id: 5, campo: 'Onde Está Hospedado?', width: '6%' },
                    { id: 5, campo: 'Quem Fornece?', width: '6%' },
                    { id: 5, campo: 'Quem Administra?', width: '6%' },
                    { id: 5, campo: 'Parceiros Envolvidos', width: '6%' },
                    { id: 5, campo: 'Registros Aproximados', width: '6%' },
                ],
                tdDados: [
                    { id: 1, subprocesso: 'Faturamento', nomegestor: 'Fernando Bravo', sistema: 'VBS(Cadastro)', armazenamento: 'Digital', integracao: 'WT', ondeesta: 'WT', fornece: 'WT', administra: 'WT', envolvidos: 'WT', registros: '?' },
                    { id: 2, subprocesso: 'Faturamento', nomegestor: 'Fernando Bravo', sistema: 'SGB', armazenamento: 'Digital', integracao: 'B/e', ondeesta: 'B/e', fornece: 'B/e', administra: 'B/e', envolvidos: 'n/a', registros: '?' },
                    { id: 3, subprocesso: 'Contas a Pagar', nomegestor: 'Fernando Bravo', sistema: 'Linkana - Cadastro Fornecedor e Veiculo (Sistema da WT) - para contato com o fornecedor, upload dos doctos', armazenamento: 'Digital', integracao: '', ondeesta: '', fornece: '', administra: '', envolvidos: '', registros: '' },
                    { id: 4, subprocesso: 'Contas a Pagar', nomegestor: 'Fernando Bravo', sistema: 'Fornecedor Genival - Uso de Whatsapp', armazenamento: 'Digital', integracao: '', ondeesta: '', fornece: '', administra: '', envolvidos: '', registros: '' },
                    { id: 5, subprocesso: 'RH', nomegestor: 'Fernando Bravo', sistema: 'Peoplesoft', armazenamento: '', integracao: '', ondeesta: '', fornece: '', administra: '', envolvidos: '', registros: '' },
                    { id: 6, subprocesso: 'RH', nomegestor: 'Fernando Bravo', sistema: 'Drive', armazenamento: '', integracao: '', ondeesta: '', fornece: '', administra: 'Ambev x PwC', envolvidos: '', registros: '' },
                    { id: 7, subprocesso: 'RH', nomegestor: 'Fernando Bravo', sistema: 'Notebook (HD)', armazenamento: '', integracao: '', ondeesta: '', fornece: '', administra: '', envolvidos: '', registros: '' },
                    { id: 8, subprocesso: 'RH', nomegestor: 'Fernando Bravo', sistema: 'Pasta na Rede', armazenamento: '', integracao: '', ondeesta: '', fornece: '', administra: '', envolvidos: '', registros: '' },
                ]
            }
        ];
        this.tabsProcessamento = [
            {
                id: 1, tab: 'tab3', for: 't3', title: 'Processamento / Compartilhamento',
                perguntas: [
                    { id: 4,
                        perg: 'E quando a finalidade muda? O que a empresa deve fazer?',
                        resp: 'Se a sua empresa precisa de um dado pessoal já coletado com o consentimento do titular para outra finalidade de uso, é necessário informar à pessoa sobre este novo intuito. Mas somente informar não basta: em casos assim, você deve atualizar o consentimento do titular.'
                    },
                    { id: 5,
                        perg: 'Quem fiscaliza o cumprimento da lei?',
                        resp: 'O controle da LGPD será feito pela Autoridade Nacional de Proteção de Dados (ANPD). Este órgão será criado para fiscalizar o cumprimento da lei, zelar pela proteção de dados pessoais, elaborar diretrizes e também aplicar as sanções em casos de irregularidade.'
                    },
                ],
                thTabela: [
                // {id:1, campo:'',  width:'30%'},
                ],
                tdDados: [
                // {id:1, Dados:'',},
                ]
            }
        ];
        this.tabsAnalise = [
            {
                id: 1, tab: 'tab4', for: 't4', title: 'Análise / Aplicação / Segmentação',
                perguntas: [
                    { id: 4,
                        perg: 'Em quais casos de tratamento de dados pessoais a lei é aplicada?',
                        resp: 'A lei se aplica a qualquer operação que envolve o tratamento de dados pessoais e que seja realizada em território brasileiro. Mas e se a empresa for sediada no exterior? Caso ela ofereça bens ou serviços para pessoas localizadas no Brasil e, para isso, coletar dados de usuários, a LGPD também se aplica!'
                    },
                    { id: 5,
                        perg: 'Quais são as principais diretrizes da LGPD?',
                        resp: 'A LGPD traz alguns princípios que devem ser respeitados no tratamento de dados pessoais, como: finalidade, necessidade, não discriminação e segurança. Isto significa que a empresa precisa seguir algumas determinações. Em resumo, os dados pessoais só podem ser coletados com o consentimento do titular, que precisa ser informado da finalidade da coleta. É do titular o direito de acesso aos dados coletados, assim como a solicitação de correção de informações, de exclusão, de portabilidade ou de revogação do consentimento.'
                    },
                    { id: 6,
                        perg: 'E o que a lei entende por “consentimento”?',
                        resp: 'O consentimento do titular é a permissão dada por meio de uma declaração para que a empresa possa coletar e utilizar dados específicos para uma finalidade previamente determinada e esclarecida. Ou seja, é preciso ser sempre claro quando se explica como os dados serão utilizados e também se ater à finalidade prevista.'
                    },
                ],
                thTabela: [
                // {id:1, campo:'',  width:'30%'},
                ],
                tdDados: [
                // {id:1, Dados:'',},
                ]
            }
        ];
        this.tabsRelacionamento = [
            {
                id: 1, tab: 'tab0', for: 't0', title: 'Relacionamento / Comunicação / Campanhas',
                perguntas: [
                    { id: 4,
                        perg: 'E quando a finalidade muda? O que a empresa deve fazer?',
                        resp: 'Se a sua empresa precisa de um dado pessoal já coletado com o consentimento do titular para outra finalidade de uso, é necessário informar à pessoa sobre este novo intuito. Mas somente informar não basta: em casos assim, você deve atualizar o consentimento do titular.'
                    },
                    { id: 5,
                        perg: 'Quem fiscaliza o cumprimento da lei?',
                        resp: 'O controle da LGPD será feito pela Autoridade Nacional de Proteção de Dados (ANPD). Este órgão será criado para fiscalizar o cumprimento da lei, zelar pela proteção de dados pessoais, elaborar diretrizes e também aplicar as sanções em casos de irregularidade.'
                    },
                ],
                thTabela: [
                // {id:1, campo:'',  width:'30%'},
                ],
                tdDados: [
                // {id:1, Dados:'',},
                ]
            }
        ];
        this.tabsExclusao = [
            {
                id: 1, tab: 'tab6', for: 't6', title: 'Exclusão',
                perguntas: [
                    { id: 4,
                        perg: 'Em quais casos de tratamento de dados pessoais a lei é aplicada?',
                        resp: 'A lei se aplica a qualquer operação que envolve o tratamento de dados pessoais e que seja realizada em território brasileiro. Mas e se a empresa for sediada no exterior? Caso ela ofereça bens ou serviços para pessoas localizadas no Brasil e, para isso, coletar dados de usuários, a LGPD também se aplica!'
                    },
                    { id: 5,
                        perg: 'Quais são as principais diretrizes da LGPD?',
                        resp: 'A LGPD traz alguns princípios que devem ser respeitados no tratamento de dados pessoais, como: finalidade, necessidade, não discriminação e segurança. Isto significa que a empresa precisa seguir algumas determinações. Em resumo, os dados pessoais só podem ser coletados com o consentimento do titular, que precisa ser informado da finalidade da coleta. É do titular o direito de acesso aos dados coletados, assim como a solicitação de correção de informações, de exclusão, de portabilidade ou de revogação do consentimento.'
                    },
                    { id: 6,
                        perg: 'E o que a lei entende por “consentimento”?',
                        resp: 'O consentimento do titular é a permissão dada por meio de uma declaração para que a empresa possa coletar e utilizar dados específicos para uma finalidade previamente determinada e esclarecida. Ou seja, é preciso ser sempre claro quando se explica como os dados serão utilizados e também se ater à finalidade prevista.'
                    },
                ],
                thTabela: [
                // {id:1, campo:'',  width:'30%'},
                ],
                tdDados: [
                // {id:1, Dados:'',},
                ]
            }
        ];
    }
    ngOnInit() {
        console.log(this.tabsColeta);
        console.log(this.empresas);
        this.contaAponts();
        this.pegaNivel();
        // this.totalLengthApont = this.tabsApontamentos.tdDados.length;
    }
    contaAponts() {
        this.tabsApontamentos.forEach((data) => {
            this.totalLengthApont = data.tdDados.length;
        });
    }
    pegaNivel() {
        this.empresas.forEach((data) => {
            if (data.id === this.empresaSelect) {
                this.empresaNome = data.empresa;
                if (data.nivel === this.nivelProcess) {
                    if (data.id === this.processoId) {
                        this.processoProcesso = data.empresa;
                    }
                }
                else {
                    data.processo.forEach((nos) => {
                        if (nos.nivel === this.nivelProcess) {
                            if (nos.id === this.processoId) {
                                this.processoProcesso = nos.nomeProcesso;
                            }
                        }
                        else {
                            nos.subProcessoN1.forEach((mos) => {
                                if (mos.nivel === this.nivelProcess) {
                                    if (mos.id === this.processoId) {
                                        this.processoProcesso = mos.nomeProcesso;
                                        this.processoCaminho = nos.nomeProcesso;
                                    }
                                }
                                else {
                                    mos.subProcessoN2.forEach((los) => {
                                        if (los.nivel === this.nivelProcess) {
                                            if (los.id === this.processoId) {
                                                this.processoProcesso = los.nomeProcesso;
                                                this.processoCaminho = nos.nomeProcesso + ' / ' + mos.nomeProcesso;
                                            }
                                        }
                                        else {
                                            los.subProcessoN3.forEach((fos) => {
                                                if (fos.nivel === this.nivelProcess) {
                                                    if (fos.id === this.processoId) {
                                                        this.processoProcesso = fos.nomeProcesso;
                                                        this.processoCaminho = nos.nomeProcesso + ' / ' + mos.nomeProcesso + ' / ' + los.nomeProcesso;
                                                    }
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    }
}
FluxodadosComponent.ɵfac = function FluxodadosComponent_Factory(t) { return new (t || FluxodadosComponent)(); };
FluxodadosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FluxodadosComponent, selectors: [["app-fluxodados"]], decls: 83, vars: 17, consts: [[1, "body"], [2, "background-color", "#fff", "padding-left", "2em", "width", "100%", "border-bottom", "1px solid #ddd", "height", "80px", "padding-top", "0.9em"], [2, "font-weight", "bold", "color", "#444"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em", "padding-right", "2em", "text-align", "right"], [1, "container"], [1, "lgdiv", 2, "border", "1px solid #dcdcdc"], [1, "lgdivn2"], [1, "col-lg-4", "lgdivn3"], [1, "lgdivn4"], [1, "divn45"], ["title", "Henrique Stablin", "alt", "", 2, "height", "90%", "float", "left", "margin-right", "0.5em", 3, "src"], [2, "font-size", "13px", "font-weight", "bold", "color", "#555"], [1, "divn25"], [2, "font-size", "23px", "font-weight", "100"], [1, "divn20"], ["title", "Julio Oliveira", "alt", "", 1, "imgus2", 3, "src"], ["title", "Carlos Ligeiro", "alt", "", 1, "imgus2", 3, "src"], [1, "divspace"], ["href", "#", 1, "linknone"], ["title", "Adicionar Respons\u00E1vel", 1, "addresp"], [1, "addresplus"], [1, "col-lg-4", "empres"], [1, "empresbox"], [1, "empresbalt"], [1, "empresp"], [1, "pconteudo"], [1, "icon"], [1, "processbox"], [1, "hrdivis"], [1, "processbalt"], [1, "pconteudo", 2, "font-size", "16px"], [1, "apontalign", "empresbox"], [1, "divconteudo", 2, "margin-top", "1em"], ["style", "text-align: left !important;", "class", "  table-hover", 4, "ngFor", "ngForOf"], [1, "btns"], [2, "margin", "0.6em"], [1, "btn", "btn-light", "btnopt1"], [1, "tamatico"], [1, "btn", "btn-light", "btnopt2"], [1, "btn", "btn-light", "btnopt3"], [1, "btn", "btn-light", "btnopt4"], [1, "container", 2, "width", "140%", "margin-left", "-5%", "margin-top", "-1em"], [4, "ngFor", "ngForOf"], [1, "lgdivtab"], ["id", "content", 1, "contid"], [1, "nav_tabs", "navid"], ["class", "litab", 4, "ngFor", "ngForOf"], ["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"], ["href", "//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet"], [1, "table-hover", 2, "text-align", "left !important"], ["class", "thlg3", 4, "ngIf"], [3, "width", 4, "ngFor", "ngForOf"], ["colspan", "5"], ["autoHide", "true", "maxSize", "5", "directionLinks", "true", "responsive", "true", "previousLabel", "Anterior", "nextLabel", "Pr\u00F3xima", 1, "text-right", "my-pagination", 3, "pageChange"], [1, "thlg3"], ["class", "tdbco", "style", "height: 38px !important; padding-left: 0.5em; padding-right: 0.8em;", "scope", "row", 4, "ngIf"], ["class", "tdcin", "style", "height: 38px !important; padding-left: 0.5em; padding-right: 0.8em;", "scope", "row", 4, "ngIf"], ["class", "tdbco", 4, "ngIf"], ["class", "tdcin", 4, "ngIf"], ["class", "tdbco", "style", "padding-left: 0.5em; padding-right: 0.8em;", 4, "ngIf"], ["class", "tdcin", "style", "padding-left: 0.5em; padding-right: 0.8em;", 4, "ngIf"], ["scope", "row", 1, "tdbco", 2, "height", "38px !important", "padding-left", "0.5em", "padding-right", "0.8em"], [1, "fa", "fa-thumb-tack", 2, "color", "#777", "font-size", "14px"], ["scope", "row", 1, "tdcin", 2, "height", "38px !important", "padding-left", "0.5em", "padding-right", "0.8em"], [1, "tdbco"], [1, "tdcin"], [1, "tdbco", 2, "padding-left", "0.5em", "padding-right", "0.8em"], ["href", "#"], [1, "text-dark", "pull-right", "fa", "fa-pencil"], [1, "text-danger", "pull-right", "fa", "fa-times-circle"], [1, "tdcin", 2, "padding-left", "0.5em", "padding-right", "0.8em"], [1, "quadflux"], ["alt", "", "class", "imgflux", 3, "src", 4, "ngIf"], ["alt", "", 1, "imgflux", 3, "src"], [1, "litab"], [1, "tab-pane", 3, "id"], ["type", "radio", "name", "tabs", "checked", "", 1, "rd_tabs", 3, "id"], [2, "height", "50px", "display", "flex", "align-items", "center", 3, "for"], [1, "content"], [1, "liarticle"], [1, "divcheck"], [1, "divbtn"], ["title", "Adicionar perguntas", 1, "btn", "btn-light", "btnadd"], [1, "fa", "fa-question-circle"], ["title", "Responder perguntas", 1, "btn", "btn-light", "btnadd"], [1, "fa", "fa-share-square-o"], ["title", "Adicionar apontamentos", 1, "btn", "btn-light", "btnadd"], [1, "fa", "fa-exclamation-triangle"], ["title", "Adicionar dados pessoais", 1, "btn", "btn-light", "btnadd"], [1, "fa", "fa-plus-circle"], [1, "divpergunta"], ["class", "form-check", 4, "ngFor", "ngForOf"], [2, "height", "15px"], [1, "table", "table-hover", "tabalign"], ["class", "table table-striped table-hover", 4, "ngFor", "ngForOf"], [1, "form-check"], ["href", "#", 1, "text-danger", "pull-right", "fa", "fa-times-circle", 2, "float", "right", "margin-top", "0.5em", "margin-right", "0.5em", "text-decoration", "none"], ["href", "#", 1, "text-dark", "pull-right", "fa", "fa-pencil", 2, "float", "right", "margin-top", "0.5em", "margin-right", "0.5em", "text-decoration", "none"], ["class", "form-check-label larticle", "for", "flexCheckDefault", "style", "font-weight: bold;", 4, "ngIf"], ["class", "form-check-label larticle", "for", "flexCheckDefault", "style", "border-bottom: 1px solid #eee;", 4, "ngIf"], ["for", "flexCheckDefault", 1, "form-check-label", "larticle", 2, "font-weight", "bold"], ["for", "flexCheckDefault", 1, "form-check-label", "larticle", 2, "border-bottom", "1px solid #eee"], [1, "table", "table-striped", "table-hover"], ["scope", "row", "class", "tdbco", 4, "ngIf"], ["scope", "row", "class", "tdcin", 4, "ngIf"], ["scope", "row", 1, "tdbco"], [1, "fa", "fa-thumb-tack", "thumbtk"], ["scope", "row", 1, "tdcin"], ["type", "checkbox", "value", "", 1, "form-check-input", 2, "margin-left", "2em", 3, "checked"], ["href", "#", 4, "ngIf"], ["type", "radio", "name", "tabs", 1, "rd_tabs", 3, "id"], [2, "background-color", "#fff", "margin-left", "-2em", "padding-left", "2em"], [1, "table", "table-hover", 2, "text-align", "left !important"], ["style", "width: 3%;", 4, "ngIf"], ["style", "width: 2%;", 4, "ngIf"], [2, "width", "3%"], [2, "width", "2%"], ["scope", "row"], [1, "fa", "fa-times-circle", 2, "color", "red", "font-size", "16px"]], template: function FluxodadosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "henrique.stabelin@grcteam.com.br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Henrique Stablin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "15, set. 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Empresa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "location_city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "hr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Processo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, FluxodadosComponent_table_54_Template, 13, 11, "table", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-icon", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "picture_as_pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, FluxodadosComponent_div_70_Template, 4, 6, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "nav", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, FluxodadosComponent_li_75_Template, 30, 10, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, FluxodadosComponent_li_76_Template, 29, 9, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, FluxodadosComponent_li_77_Template, 30, 10, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, FluxodadosComponent_li_78_Template, 30, 10, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, FluxodadosComponent_li_79_Template, 30, 10, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, FluxodadosComponent_li_80_Template, 30, 10, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "link", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "link", 49);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.titulotela, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitulotela);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.caminho, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.processoProcesso);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.empresaNome, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.processoCaminho, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabsApontamentos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fluxos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabsColeta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabsArmazenamento);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabsProcessamento);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabsAnalise);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabsRelacionamento);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabsExclusao);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"]], styles: [".lgdiv[_ngcontent-%COMP%]{\r\n  border: 1px solid #eee;\r\n  background-color: #fff;\r\n  width: 130% !important;\r\n  margin-left: -15% !important;\r\n  margin-bottom: 2em;\r\n  padding-top: 2em;\r\n  padding-bottom: 2em !important;\r\n}\r\n\r\n.lgdivn2[_ngcontent-%COMP%]{\r\n  width: 95%;\r\n  height: 16em;\r\n  margin-left: 2em;\r\n}\r\n\r\n.lgdivn3[_ngcontent-%COMP%]{\r\n  float: left;\r\n  height: 16em;\r\n  padding: 0%;\r\n}\r\n\r\n.lgdivn4[_ngcontent-%COMP%]{\r\n  width: 96%;\r\n  height: 100%;\r\n}\r\n\r\n.divn20[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 20%;\r\n}\r\n\r\n.divn25[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 25%;\r\n}\r\n\r\n.divn45[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 45%;\r\n}\r\n\r\n.imgus2[_ngcontent-%COMP%]{\r\n  width: 40px;\r\n  border-radius: 100%;\r\n  float: left;\r\n}\r\n\r\n.divspace[_ngcontent-%COMP%]{\r\n  float: left;\r\n  width: 20px;\r\n}\r\n\r\n.linknone[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n}\r\n\r\n.addresp[_ngcontent-%COMP%]{\r\n  float: left;\r\n  width: 40px;\r\n  height: 40px;\r\n  text-align: center;\r\n  border-radius: 100%;\r\n  background-color: #ccc;\r\n}\r\n\r\n.addresplus[_ngcontent-%COMP%]{\r\n  margin: 10%;\r\n  font-weight: bold;\r\n  color: #555;\r\n  font-size: 22px;\r\n}\r\n\r\n.empres[_ngcontent-%COMP%]{\r\n  float: left;\r\n  height: 13em;\r\n  padding: 0%;\r\n}\r\n\r\n.empresbox[_ngcontent-%COMP%]{\r\n  width: 97%;\r\n  border: 1px #ddd solid;\r\n  height: 100%;\r\n}\r\n\r\n.apontalign[_ngcontent-%COMP%]{\r\n  float: right;\r\n}\r\n\r\n.processbox[_ngcontent-%COMP%]{\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  height: 3%;\r\n}\r\n\r\n.empresbalt[_ngcontent-%COMP%]{\r\n  height: 40%;\r\n}\r\n\r\n.hrdivis[_ngcontent-%COMP%]{\r\n  margin-top: 5px;\r\n}\r\n\r\n.processbalt[_ngcontent-%COMP%]{\r\n  height: 47%;\r\n}\r\n\r\n.empresp[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  font-size: 12px;\r\n  margin-left: 25px;\r\n  margin-top: 12px !important;\r\n  color: #555;\r\n}\r\n\r\n.divconteudo[_ngcontent-%COMP%]{\r\n  \r\n  width: 98%;\r\n  height: 170px;\r\n  font-size: 14px;\r\n  font-weight: 100;\r\n  margin-left: 1%;\r\n  margin-top: -2%;\r\n}\r\n\r\n.pconteudo[_ngcontent-%COMP%]{\r\n  width: 98%;\r\n  height: 170px;\r\n  font-size: 22px;\r\n  font-weight: 100;\r\n  margin-left: 1em;\r\n  margin-top: -2%;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n  color: greenyellow;\r\n  font-size: 30px;\r\n  vertical-align: sub;\r\n}\r\n\r\n.lgdivtab[_ngcontent-%COMP%]{\r\n  width: 130% !important;\r\n  height: 400px;\r\n  margin-top: 3em;\r\n  margin-left: -15% !important;\r\n  margin-bottom: 2em;\r\n  border: 1px solid #e8e8e8;\r\n  background-color: #F1F3F6;\r\n  padding-top: 2em;\r\n  padding-bottom: 2em !important;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]{\r\n  background-color: #F1F3F6;\r\n  overflow-x:hidden !important;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  padding-top: 2em;\r\n  width: 1000px;\r\n  padding-bottom: 3em;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  padding-left: 2em;\r\n  width: 100%;\r\n  padding-top: 0.9em;\r\n}\r\n\r\n.titulotela[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #444;\r\n}\r\n\r\n.subtitulotela[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n  color: #777;\r\n  margin-top: -1.5em;\r\n}\r\n\r\n.crumbs[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #777;\r\n  margin-top: -1.5em;\r\n  padding-right: 2em;\r\n  text-align: right;\r\n  float: right;\r\n}\r\n\r\n.mat-tab-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 48px;\r\n}\r\n\r\n.tamatico[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  background-color: #F7F9FA;\r\n  border-top: 1px solid #dcdcdc;\r\n  height: 3.5em;\r\n  margin-left: 0em;\r\n  margin-bottom: -2em;\r\n  margin-top: -1em;\r\n}\r\n\r\n.btnopt1[_ngcontent-%COMP%]{margin-left: -410px;\r\n  float: left;\r\n  background-color: #fff;\r\n  text-align: left;\r\n  border: 1px solid #ddd;\r\n  width: 33px;\r\n  height: 33px;\r\n  padding: 7px !important;\r\n}\r\n\r\n.btnopt2[_ngcontent-%COMP%]{margin-left: -370px;\r\n  float: left;\r\n  background-color: #fff;\r\n  text-align: left;\r\n  border: 1px solid #ddd;\r\n  width: 33px;\r\n  height: 33px;\r\n  padding: 7px !important;\r\n}\r\n\r\n.btnopt3[_ngcontent-%COMP%]{margin-left: -330px;\r\n  float: left;\r\n  background-color: #fff;\r\n  text-align: left;\r\n  border: 1px solid #ddd;\r\n  width: 33px;\r\n  height: 33px;\r\n  padding: 7px !important;\r\n}\r\n\r\n.btnopt4[_ngcontent-%COMP%]{margin-left: -290px;\r\n  float: left;\r\n  background-color: #fff;\r\n  text-align: left;\r\n  border: 1px solid #ddd;\r\n  width: 33px;\r\n  height: 33px;\r\n  padding: 7px !important;\r\n}\r\n\r\n.nav_tabs[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  position: relative;\r\n}\r\n\r\n.nav_tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  list-style: none !important;\r\n  margin-left: -40px;\r\n}\r\n\r\n.nav_tabs[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  float: left;\r\n}\r\n\r\n.nav_tabs[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  padding-top: 5px;\r\n  padding-bottom: 10px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  display: block;\r\n  color: #555;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n.rd_tabs[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  height: 3.7em;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.rd_tabs[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n  margin-top: -0.6em;\r\n  background-color: #fff;\r\n  display: none;\r\n  position: absolute;\r\n  height: 300px;\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{\r\n  padding: 10px;\r\n  text-align: justify;\r\n}\r\n\r\n.rd_tabs[_ngcontent-%COMP%]:checked    ~ .content[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n.example-tab-icon[_ngcontent-%COMP%] {\r\n  margin-right: 8px;\r\n\r\n}\r\n\r\n.quadflux[_ngcontent-%COMP%]{\r\n  border-radius: 15px;\r\n  margin-top: -2em;\r\n  text-align: center !important;\r\n  box-shadow: 0.3em 0.3em 0.3em #aaa;\r\n  width: 13%;\r\n  height: 90px;\r\n  float:left;\r\n  display: flex;\r\n  font-size: 13px;\r\n  align-items: center !important;\r\n}\r\n\r\n.imgflux[_ngcontent-%COMP%]{\r\n  height: 90px;\r\n  margin-top: -1.5em;\r\n  float: left;\r\n}\r\n\r\n\r\n\r\n.contid[_ngcontent-%COMP%]{\r\n  margin-top: -2em;\r\n}\r\n\r\n.navid[_ngcontent-%COMP%]{\r\n  margin-top: -48px;\r\n}\r\n\r\n.litab[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n  max-width: 200px;\r\n}\r\n\r\n.liarticle[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  margin-left: -2em;\r\n  padding-left: 2em;\r\n}\r\n\r\n.divpergunta[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  float: left;\r\n  padding-left: -10px;\r\n}\r\n\r\n.larticle[_ngcontent-%COMP%]{\r\n  vertical-align: middle;\r\n  text-align: justify !important;\r\n  margin-left: -1.5em;\r\n}\r\n\r\n.divcheck[_ngcontent-%COMP%]{\r\n  padding-right: 3%;\r\n  float: left;\r\n}\r\n\r\n.divbtn[_ngcontent-%COMP%]{\r\n  float: right;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.btnadd[_ngcontent-%COMP%]{\r\n  border: 1px solid #dcdcdc;\r\n  margin-left: 6px;\r\n  color: #555;\r\n  font-size: 20px;\r\n}\r\n\r\n.tabalign[_ngcontent-%COMP%]{\r\n  text-align: left !important;\r\n}\r\n\r\n.thlg2[_ngcontent-%COMP%]{\r\n  width: 2%;\r\n}\r\n\r\n.thlg3[_ngcontent-%COMP%]{\r\n  width: 3%;\r\n}\r\n\r\n.cortbtk[_ngcontent-%COMP%]{\r\n  color: #777;\r\n  font-size: 14px;\r\n}\r\n\r\n.corcanc[_ngcontent-%COMP%]{\r\n  color: red;\r\n  font-size: 16px;\r\n}\r\n\r\n.coredit[_ngcontent-%COMP%]{\r\n  color: #777;\r\n  font-size: 16px;\r\n}\r\n\r\n.tdbco[_ngcontent-%COMP%]{\r\n  border-top: 1px solid #ddd;\r\n  border-bottom: 1px solid #ddd;\r\n  background-color: #fff;\r\n}\r\n\r\n.tdcin[_ngcontent-%COMP%]{\r\n  border-top: 1px solid #ddd;\r\n  border-bottom: 1px solid #ddd;\r\n  background-color: #f8f8f8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbHV4b2RhZG9zL2ZsdXhvZGFkb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQSxTQUFTLG1CQUFtQjtFQUMxQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUEsU0FBUyxtQkFBbUI7RUFDMUIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBLFNBQVMsbUJBQW1CO0VBQzFCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQSxTQUFTLG1CQUFtQjtFQUMxQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQSxTQUFTOztBQUNUO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBQ0EsU0FBUyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmx1eG9kYWRvcy9mbHV4b2RhZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGdkaXZ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMzAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNSUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgcGFkZGluZy10b3A6IDJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZ2Rpdm4ye1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiAxNmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAyZW07XHJcbn1cclxuXHJcbi5sZ2Rpdm4ze1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogMTZlbTtcclxuICBwYWRkaW5nOiAwJTtcclxufVxyXG5cclxuLmxnZGl2bjR7XHJcbiAgd2lkdGg6IDk2JTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kaXZuMjB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuLmRpdm4yNXtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI1JTtcclxufVxyXG4uZGl2bjQ1e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDUlO1xyXG59XHJcblxyXG4uaW1ndXMye1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5kaXZzcGFjZXtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLmxpbmtub25le1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmFkZHJlc3B7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuXHJcbi5hZGRyZXNwbHVze1xyXG4gIG1hcmdpbjogMTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmVtcHJlc3tcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDEzZW07XHJcbiAgcGFkZGluZzogMCU7XHJcbn1cclxuXHJcbi5lbXByZXNib3h7XHJcbiAgd2lkdGg6IDk3JTtcclxuICBib3JkZXI6IDFweCAjZGRkIHNvbGlkO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmFwb250YWxpZ257XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucHJvY2Vzc2JveHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBoZWlnaHQ6IDMlO1xyXG59XHJcblxyXG4uZW1wcmVzYmFsdHtcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuLmhyZGl2aXN7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ucHJvY2Vzc2JhbHR7XHJcbiAgaGVpZ2h0OiA0NyU7XHJcbn1cclxuXHJcbi5lbXByZXNwe1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcclxuICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuLmRpdmNvbnRldWRve1xyXG4gIC8qIG92ZXJmbG93LXk6IHNjcm9sbDsgKi9cclxuICB3aWR0aDogOTglO1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi10b3A6IC0yJTtcclxufVxyXG5cclxuLnBjb250ZXVkb3tcclxuICB3aWR0aDogOTglO1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcclxuICBtYXJnaW4tdG9wOiAtMiU7XHJcbn1cclxuXHJcbi5pY29ue1xyXG4gIGNvbG9yOiBncmVlbnllbGxvdztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcclxufVxyXG5cclxuLmxnZGl2dGFie1xyXG4gIHdpZHRoOiAxMzAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNSUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGM0Y2O1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9keXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGM0Y2O1xyXG4gIG92ZXJmbG93LXg6aGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgcGFkZGluZy10b3A6IDJlbTtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzZW07XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDAuOWVtO1xyXG59XHJcblxyXG4udGl0dWxvdGVsYXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuLnN1YnRpdHVsb3RlbGF7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIG1hcmdpbi10b3A6IC0xLjVlbTtcclxufVxyXG5cclxuLmNydW1icyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIG1hcmdpbi10b3A6IC0xLjVlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubWF0LXRhYi1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxufVxyXG5cclxuLnRhbWF0aWNve1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmJ0bnN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RjlGQTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZGNkYztcclxuICBoZWlnaHQ6IDMuNWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLTJlbTtcclxuICBtYXJnaW4tdG9wOiAtMWVtO1xyXG59XHJcblxyXG4uYnRub3B0MXttYXJnaW4tbGVmdDogLTQxMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHdpZHRoOiAzM3B4O1xyXG4gIGhlaWdodDogMzNweDtcclxuICBwYWRkaW5nOiA3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bm9wdDJ7bWFyZ2luLWxlZnQ6IC0zNzBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICB3aWR0aDogMzNweDtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgcGFkZGluZzogN3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG5vcHQze21hcmdpbi1sZWZ0OiAtMzMwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgd2lkdGg6IDMzcHg7XHJcbiAgaGVpZ2h0OiAzM3B4O1xyXG4gIHBhZGRpbmc6IDdweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRub3B0NHttYXJnaW4tbGVmdDogLTI5MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHdpZHRoOiAzM3B4O1xyXG4gIGhlaWdodDogMzNweDtcclxuICBwYWRkaW5nOiA3cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdl90YWJze1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmF2X3RhYnMgdWx7XHJcbiAgbGlzdC1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxufVxyXG5cclxuLm5hdl90YWJzIHVsIGxpe1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubmF2X3RhYnMgbGFiZWx7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzU1NTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmRfdGFiczpjaGVja2VkIH4gbGFiZWx7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDMuN2VtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJkX3RhYnN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogLTAuNmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uY29udGVudCBhcnRpY2xle1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnJkX3RhYnM6Y2hlY2tlZCB+IC5jb250ZW50e1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZXhhbXBsZS10YWItaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcblxyXG59XHJcblxyXG4ucXVhZGZsdXh7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tdG9wOiAtMmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAuM2VtIDAuM2VtIDAuM2VtICNhYWE7XHJcbiAgd2lkdGg6IDEzJTtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWdmbHV4e1xyXG4gIGhlaWdodDogOTBweDtcclxuICBtYXJnaW4tdG9wOiAtMS41ZW07XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi8qIHRhYnMgKi9cclxuLmNvbnRpZHtcclxuICBtYXJnaW4tdG9wOiAtMmVtO1xyXG59XHJcblxyXG4ubmF2aWR7XHJcbiAgbWFyZ2luLXRvcDogLTQ4cHg7XHJcbn1cclxuXHJcbi5saXRhYntcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLmxpYXJ0aWNsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMmVtO1xyXG59XHJcblxyXG4uZGl2cGVyZ3VudGF7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAtMTBweDtcclxufVxyXG5cclxuLmxhcnRpY2xle1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMS41ZW07XHJcbn1cclxuXHJcbi5kaXZjaGVja3tcclxuICBwYWRkaW5nLXJpZ2h0OiAzJTtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmRpdmJ0bntcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJ0bmFkZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4udGFiYWxpZ257XHJcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGhsZzJ7XHJcbiAgd2lkdGg6IDIlO1xyXG59XHJcblxyXG4udGhsZzN7XHJcbiAgd2lkdGg6IDMlO1xyXG59XHJcblxyXG4uY29ydGJ0a3tcclxuICBjb2xvcjogIzc3NztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb3JjYW5je1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uY29yZWRpdHtcclxuICBjb2xvcjogIzc3NztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi50ZGJjb3tcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGRjaW57XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxufVxyXG4vKiB0YWJzICovXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FluxodadosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fluxodados',
                templateUrl: './fluxodados.component.html',
                styleUrls: ['./fluxodados.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/fluxodados/selecionaprocesso/selecionaprocesso.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/fluxodados/selecionaprocesso/selecionaprocesso.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SelecionaprocessoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionaprocessoComponent", function() { return SelecionaprocessoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/fesm2015/tree.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/fesm2015/tree.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");






function SelecionaprocessoComponent_tbody_20_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelecionaprocessoComponent_tbody_20_th_2_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const dado_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.mostraProcessos(dado_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelecionaprocessoComponent_tbody_20_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelecionaprocessoComponent_tbody_20_th_3_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const dado_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.mostraProcessos(dado_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelecionaprocessoComponent_tbody_20_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r3.empresa);
} }
function SelecionaprocessoComponent_tbody_20_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r3.empresa);
} }
function SelecionaprocessoComponent_tbody_20_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r3.doc);
} }
function SelecionaprocessoComponent_tbody_20_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r3.doc);
} }
function SelecionaprocessoComponent_tbody_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelecionaprocessoComponent_tbody_20_th_2_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelecionaprocessoComponent_tbody_20_th_3_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelecionaprocessoComponent_tbody_20_td_4_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelecionaprocessoComponent_tbody_20_td_5_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelecionaprocessoComponent_tbody_20_td_6_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SelecionaprocessoComponent_tbody_20_td_7_Template, 2, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r3.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r3.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r3.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r3.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r3.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r3.id % 2 === 1);
} }
function SelecionaprocessoComponent_thead_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "N\u00EDvel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelecionaprocessoComponent_tbody_32_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelecionaprocessoComponent_tbody_32_th_2_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const dado_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.mostraSubProcesso1(dado_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelecionaprocessoComponent_tbody_32_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelecionaprocessoComponent_tbody_32_th_3_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const dado_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.mostraSubProcesso1(dado_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelecionaprocessoComponent_tbody_32_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r20.nomeProcesso);
} }
function SelecionaprocessoComponent_tbody_32_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r20.nomeProcesso);
} }
function SelecionaprocessoComponent_tbody_32_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r20.define);
} }
function SelecionaprocessoComponent_tbody_32_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r20.define);
} }
function SelecionaprocessoComponent_tbody_32_tbody_11_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelecionaprocessoComponent_tbody_32_tbody_11_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelecionaprocessoComponent_tbody_32_tbody_11_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r38.nomeProcesso);
} }
function SelecionaprocessoComponent_tbody_32_tbody_11_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r38.nomeProcesso);
} }
function SelecionaprocessoComponent_tbody_32_tbody_11_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r38.define);
} }
function SelecionaprocessoComponent_tbody_32_tbody_11_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dado_r38.define);
} }
function SelecionaprocessoComponent_tbody_32_tbody_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelecionaprocessoComponent_tbody_32_tbody_11_th_2_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelecionaprocessoComponent_tbody_32_tbody_11_th_3_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelecionaprocessoComponent_tbody_32_tbody_11_td_4_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelecionaprocessoComponent_tbody_32_tbody_11_td_5_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelecionaprocessoComponent_tbody_32_tbody_11_td_6_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SelecionaprocessoComponent_tbody_32_tbody_11_td_7_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r38.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r38.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r38.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r38.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r38.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r38.id % 2 === 1);
} }
const _c0 = function (a1, a2) { return { itemsPerPage: 4, currentPage: a1, totalItems: a2 }; };
function SelecionaprocessoComponent_tbody_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SelecionaprocessoComponent_tbody_32_th_2_Template, 2, 0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelecionaprocessoComponent_tbody_32_th_3_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelecionaprocessoComponent_tbody_32_td_4_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelecionaprocessoComponent_tbody_32_td_5_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelecionaprocessoComponent_tbody_32_td_6_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SelecionaprocessoComponent_tbody_32_td_7_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SelecionaprocessoComponent_tbody_32_tbody_11_Template, 8, 6, "tbody", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dado_r20 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r20.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r20.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r20.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r20.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r20.id % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", dado_r20.id % 2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 7, ctx_r2.subProcesso1Carregado, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx_r2.pageApont, ctx_r2.totalLengthApont)));
} }
const TREE_DATA = [
    {
        id: 1, name: 'E-xyon', nivel: 0,
        children: [
            {
                id: 1, name: 'Rec. Humanos', nivel: 1,
                children: [
                    { id: 1, name: 'Gestão de Pessoas', nivel: 2,
                        children: [
                            { id: 1, name: 'Recrutamento', nivel: 3,
                                children: [
                                    { id: 1, name: 'Recrutamento Bahia', nivel: 4 },
                                    { id: 2, name: 'Recrutamento São Paulo', nivel: 4 },
                                    { id: 3, name: 'Recrutamento Rio de Janeiro', nivel: 4 }
                                ] },
                            { id: 2, name: 'Admissão', nivel: 3,
                                children: [
                                    { id: 4, name: 'Admissão Bahia', nivel: 4 },
                                    { id: 5, name: 'Admissão São Paulo', nivel: 4 },
                                    { id: 6, name: 'Admissão Rio de Janeiro', nivel: 4 }
                                ] },
                        ] },
                ],
            },
            {
                id: 2, name: 'Depto Pessoal', nivel: 1,
                children: [
                    { id: 2, name: 'Contratos de Trabalho', nivel: 2,
                        children: [
                            { id: 3, name: 'Contratação', nivel: 3,
                                children: [
                                    { id: 7, name: 'Contratação Bahia', nivel: 4 },
                                    { id: 8, name: 'Contratação São Paulo', nivel: 4 },
                                    { id: 9, name: 'Contratação Rio de Janeiro', nivel: 4 }
                                ] },
                            { id: 4, name: 'Documentação', nivel: 3,
                                children: [
                                    { id: 10, name: 'Documentos Bahia', nivel: 4 },
                                    { id: 11, name: 'Documentos São Paulo', nivel: 4 },
                                    { id: 12, name: 'Documentos Rio de Janeiro', nivel: 4 }
                                ] },
                        ] },
                ],
            },
            {
                id: 3, name: 'Contabilidade', nivel: 1,
                children: [
                    { id: 3, name: 'Contas à pagar', nivel: 2,
                        children: [
                            { id: 5, name: 'Orçamento', nivel: 3,
                                children: [
                                    { id: 13, name: 'Orçamento Bahia', nivel: 4 },
                                    { id: 14, name: 'Orçamento São Paulo', nivel: 4 },
                                    { id: 15, name: 'Orçamento Rio de Janeiro', nivel: 4 }
                                ] },
                        ] },
                ],
            },
        ],
    },
    {
        id: 1, name: 'GRC Team', nivel: 0,
        children: [
            {
                id: 1, name: 'Depto Pessoal', nivel: 1,
                children: [
                    { id: 1, name: 'RH', nivel: 2,
                        children: [
                            { id: 1, name: 'Recrutamento', nivel: 3,
                                children: [
                                    { id: 1, name: 'Recrutamento Bahia', nivel: 4 },
                                ] },
                            { id: 2, name: 'Admissão', nivel: 3,
                                children: [
                                    { id: 4, name: 'Admissão Bahia', nivel: 4 },
                                    { id: 5, name: 'Admissão São Paulo', nivel: 4 },
                                ] },
                        ] },
                ],
            },
            {
                id: 2, name: 'Contabilidade', nivel: 1,
                children: [
                    { id: 2, name: 'Contas à pagar', nivel: 2,
                        children: [
                            { id: 3, name: 'Orçamento', nivel: 3,
                                children: [
                                    { id: 7, name: 'Orçamento MS', nivel: 4 },
                                    { id: 8, name: 'Orçamento SP', nivel: 4 },
                                    { id: 9, name: 'Orçamento RJ', nivel: 4 }
                                ] },
                        ] },
                ],
            },
        ],
    },
    {
        id: 1, name: 'Bradesco', nivel: 0,
        children: [
            {
                id: 1, name: 'Depto Pessoal', nivel: 1,
                children: [
                    { id: 1, name: 'RH', nivel: 2,
                        children: [
                            { id: 1, name: 'Recrutamento', nivel: 3,
                                children: [
                                    { id: 1, name: 'Recrutamento Bahia', nivel: 4 },
                                ] },
                        ] },
                ],
            },
            {
                id: 2, name: 'Contabilidade', nivel: 1,
                children: [
                    { id: 2, name: 'Contas à pagar', nivel: 2,
                        children: [
                            { id: 3, name: 'Orçamento', nivel: 3,
                                children: [
                                    { id: 7, name: 'Contratação Bahia', nivel: 4 },
                                    { id: 8, name: 'Contratação São Paulo', nivel: 4 },
                                    { id: 9, name: 'Contratação Rio de Janeiro', nivel: 4 }
                                ] },
                            { id: 4, name: 'Documentação', nivel: 3,
                                children: [
                                    { id: 10, name: 'Orçamento Bahia', nivel: 4 },
                                ] },
                        ] },
                ],
            },
        ],
    },
];
class SelecionaprocessoComponent {
    constructor() {
        this.empresaSelect = 1;
        this.nivelProcess = 4;
        this.processoId = 13;
        this.pageApont = 1;
        this.titulotela = 'FLUXO DE DADOS';
        this.subtitulotela = 'Processos para Fluxos de dados';
        this.caminho = 'Processos / LGPD / Fluxo de Dados';
        this.user = '/assets/imgs/user.png';
        this.seta = '/assets/imgs/fluxo/seta.png';
        this.tabsApontamentos = [
            {
                id: 1, title: 'Apontamentos',
                tdDados: [
                    { id: 1, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 2, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 3, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 4, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 5, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 6, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 7, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 8, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 9, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 10, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 11, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 12, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                    { id: 13, apontamento: 'E-xyon', doc: '00.000.000/0001-00' },
                ]
            }
        ];
        this.empresas = [
            {
                id: 1, nivel: 0, define: 'Empresa', empresa: 'E-xyon', doc: '00.000.000/0001-00',
                responsavel: [{ id: 1, nome: 'Henrique Stablin', email: 'henrique.stabelin@grcteam.com.br' }, { id: 2, nome: 'Julio Oliveira', email: 'julio.oliveira@gmail.com.br' }, { id: 3, nome: 'Carlos Ligeiro', email: 'carlos.ligeiro@e-xyon.com.br' }],
                processo: [
                    { id: 1, nivel: 1, define: 'Processo', nomeProcesso: 'Rec. Humanos', subProcessoN1: [
                            { id: 1, nivel: 2, define: 'Sub-Processo', nomeProcesso: 'Gestão de Pessoas', subProcessoN2: [
                                    { id: 1, nivel: 3, define: 'Sub-Processo', nomeProcesso: 'Recrutamento', subProcessoN3: [
                                            { id: 1, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Recrutamento Bahia', },
                                            { id: 2, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Recrutamento São Paulo', },
                                            { id: 3, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Recrutamento Rio de Janeiro', },
                                        ]
                                    },
                                    { id: 2, nivel: 3, define: 'Sub-Processo', nomeProcesso: 'Admissão', subProcessoN3: [
                                            { id: 4, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Admissão Bahia', },
                                            { id: 5, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Admissão São Paulo' },
                                            { id: 6, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Admissão Rio de Janeiro' },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    { id: 2, nivel: 1, define: 'Processo', nomeProcesso: 'Depto Pessoal', subProcessoN1: [
                            { id: 2, nivel: 2, define: 'Sub-Processo', nomeProcesso: 'Contratos de Trab', subProcessoN2: [
                                    { id: 3, nivel: 3, define: 'Sub-Processo', nomeProcesso: 'Contratação', subProcessoN3: [
                                            { id: 7, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Contratação Bahia', },
                                            { id: 8, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Contratação São Paulo', },
                                            { id: 9, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Contratação Rio de Janeiro', }
                                        ]
                                    },
                                    { id: 4, nivel: 3, define: 'Sub-Processo', nomeProcesso: 'Documentos', subProcessoN3: [
                                            { id: 10, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Doctos Bahia', },
                                            { id: 11, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Doctos São Paulo' },
                                            { id: 12, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Doctos Rio de Janeiro' },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                    { id: 3, nivel: 1, define: 'Processo', nomeProcesso: 'Contabilidade', subProcessoN1: [
                            { id: 3, nivel: 2, define: 'Sub-Processo', nomeProcesso: 'Contas à pagar', subProcessoN2: [
                                    { id: 5, nivel: 3, define: 'Sub-Processo', nomeProcesso: 'Orçamento', subProcessoN3: [
                                            { id: 13, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Orçamento Bahia', },
                                            { id: 14, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Orçamento São Paulo', },
                                            { id: 14, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Orçamento Rio de Janeiro', },
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                id: 2, nivel: 0, define: 'Empresa', empresa: 'GRC Team', doc: '00.000.000/0001-00',
                responsavel: [{ id: 1, nome: 'Henrique Stablin', email: 'henrique.stabelin@grcteam.com.br' },],
                processo: [
                    { id: 1, nivel: 1, define: 'Processo', nomeProcesso: 'Depto Pessoal', subProcessoN1: [
                            {
                                id: 1, nivel: 2, define: 'Sub-Processo', nomeProcesso: 'RH', subProcessoN2: [
                                    {
                                        id: 1, nivel: 3, define: 'Sub-Processo', nomeProcesso: 'Recrutamento', subProcessoN3: [
                                            { id: 1, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Recrutamento Bahia', }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    { id: 2, nivel: 1, define: 'Processo', nomeProcesso: 'Contabilidade', subProcessoN1: [
                            {
                                id: 2, nivel: 2, define: 'Sub-Processo', nomeProcesso: 'Contas à pagar', subProcessoN2: [
                                    {
                                        id: 1, nivel: 3, define: 'Sub-Processo', nomeProcesso: 'Orçamento', subProcessoN3: [
                                            { id: 2, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Orçamento Bahia', }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                id: 3, nivel: 0, define: 'Empresa', empresa: 'Bradesco', doc: '00.000.000/0001-00',
                responsavel: [{ id: 1, nome: 'Julio Oliveira', email: 'julio.oliveira@gmail.com.br' }, { id: 2, nome: 'Carlos Ligeiro', email: 'carlos.ligeiro@e-xyon.com.br' }],
                processo: [
                    { id: 1, nivel: 1, define: 'Processo', nomeProcesso: 'Depto Pessoal', subProcessoN1: [
                            {
                                id: 1, nivel: 2, define: 'Sub-Processo', nomeProcesso: 'RH', subProcessoN2: [
                                    {
                                        id: 1, nivel: 3, define: 'Sub-Processo', nomeProcesso: 'Recrutamento', subProcessoN3: [
                                            {
                                                id: 1, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Recrutamento Bahia',
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    { id: 2, nivel: 1, define: 'Processo', nomeProcesso: 'Contabilidade', subProcessoN1: [
                            {
                                id: 2, nivel: 2, define: 'Sub-Processo', nomeProcesso: 'Contas à pagar', subProcessoN2: [
                                    {
                                        id: 1, nivel: 3, define: 'Sub-Processo', nomeProcesso: 'Orçamento', subProcessoN3: [
                                            {
                                                id: 2, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Orçamento Bahia',
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                id: 4, nivel: 0, define: 'Processo', empresa: 'Tokyo Marine', doc: '00.000.000/0001-00',
                responsavel: [{ id: 1, nome: 'Julio Oliveira', email: 'julio.oliveira@gmail.com.br' }],
                processo: [
                    { id: 1, nivel: 1, define: 'Processo', nomeProcesso: 'Depto Pessoal', subProcessoN1: [
                            {
                                id: 1, nivel: 2, define: 'Sub-Processo', nomeProcesso: 'RH', subProcessoN2: [
                                    {
                                        id: 1, nivel: 3, define: 'Sub-Processo', nomeProcesso: 'Recrutamento', subProcessoN3: [
                                            {
                                                id: 1, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Recrutamento Bahia',
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    { id: 2, nivel: 1, define: 'Processo', nomeProcesso: 'Contabilidade', subProcessoN1: [
                            {
                                id: 2, nivel: 2, define: 'Sub-Processo', nomeProcesso: 'Contas à pagar', subProcessoN2: [
                                    {
                                        id: 1, nivel: 3, define: 'Sub-Processo', nomeProcesso: 'Orçamento', subProcessoN3: [
                                            {
                                                id: 2, nivel: 4, define: 'Sub-Processo', nomeProcesso: 'Orçamento Bahia',
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                ]
            }
        ];
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_1__["FlatTreeControl"](node => node.level, node => node.expandable);
        this.treeFlattener = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlattener"](this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new _angular_material_tree__WEBPACK_IMPORTED_MODULE_2__["MatTreeFlatDataSource"](this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.dataSource.data = TREE_DATA;
    }
    ngOnInit() {
    }
    mostraProcessos(id) {
        this.empresas.forEach((nos) => {
            if (nos.id === id) {
                this.processoCarregado = nos.processo;
                console.log(this.processoCarregado);
            }
        });
    }
    mostraSubProcesso1(id) {
        this.processoCarregado.forEach((nos) => {
            if (nos.id === id) {
                this.subProcesso1Carregado = nos.subProcessoN1;
                console.log(this.subProcesso1Carregado);
            }
        });
    }
    mostraSubProcesso2(id) {
        this.subProcesso1Carregado.forEach((nos) => {
            if (nos.id === id) {
                this.subProcesso2Carregado = nos.subProcessoN2;
                console.log(this.subProcesso2Carregado);
            }
        });
    }
    mostraSubProcesso3(id) {
        this.subProcesso2Carregado.forEach((nos) => {
            if (nos.id === id) {
                this.subProcesso3Carregado = nos.subProcessoN3;
                console.log(this.subProcesso3Carregado);
            }
        });
    }
}
SelecionaprocessoComponent.ɵfac = function SelecionaprocessoComponent_Factory(t) { return new (t || SelecionaprocessoComponent)(); };
SelecionaprocessoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelecionaprocessoComponent, selectors: [["app-selecionaprocesso"]], decls: 40, vars: 19, consts: [[2, "background-color", "#fff", "padding-left", "2em", "width", "100%", "border-bottom", "1px solid #ddd", "height", "80px", "padding-top", "0.9em"], [2, "font-weight", "bold", "color", "#444"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em", "padding-right", "2em", "text-align", "right"], [1, "body"], [1, "lgdiv"], [1, "container"], [1, "col-md-5", 2, "float", "left", "background-color", "#fff", "border", "1px solid #e5e5e5", "height", "17.5em", "margin-left", "-6.7em", "margin-right", "2em"], [2, "font-weight", "50", "margin", "0.5em", "margin-top", "1em", "color", "#777", "float", "right"], [2, "font-weight", "50", "margin", "0.5em", "margin-top", "1em", "color", "#777"], [2, "height", "12.4em", "margin", "0.5em", "margin-top", "1.2em"], [1, "table-hover", 2, "text-align", "left !important", "width", "100% !important"], [4, "ngFor", "ngForOf"], ["colspan", "5"], ["autoHide", "true", "maxSize", "5", "directionLinks", "true", "responsive", "true", "previousLabel", "Anterior", "nextLabel", "Pr\u00F3xima", 1, "text-right", "my-pagination", 3, "pageChange"], [1, "col-md-9", 2, "float", "right", "background-color", "#fff", "border", "1px solid #e5e5e5", "height", "34em", "margin-right", "-7em"], [2, "font-weight", "50", "margin", "1em", "color", "#777", "float", "left"], [4, "ngIf"], ["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"], ["href", "//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", "rel", "stylesheet"], ["class", "tdbco", "style", "height: 38px !important; width: 4%; padding-left: 0.5em; padding-right: 0.8em;", "scope", "row", 4, "ngIf"], ["class", "tdcin", "style", "height: 38px !important; width: 4%; padding-left: 0.5em; padding-right: 0.8em;", "scope", "row", 4, "ngIf"], ["class", "tdbco", "style", "width: 57%;", 4, "ngIf"], ["class", "tdcin", "style", "width: 57%;", 4, "ngIf"], ["class", "tdbco", "style", "width: 30%; text-align: right;", 4, "ngIf"], ["class", "tdcin", "style", "width: 30%; text-align: right;", 4, "ngIf"], ["scope", "row", 1, "tdbco", 2, "height", "38px !important", "width", "4%", "padding-left", "0.5em", "padding-right", "0.8em"], ["type", "radio", "name", "empresa", "id", "empresa", 1, "form-check-input", "pull-right", 2, "margin-top", "-0.4em", "margin-left", "-0.2em", 3, "click"], ["scope", "row", 1, "tdcin", 2, "height", "38px !important", "width", "4%", "padding-left", "0.5em", "padding-right", "0.8em"], [1, "tdbco", 2, "width", "57%"], [1, "tdcin", 2, "width", "57%"], [1, "tdbco", 2, "width", "30%", "text-align", "right"], [1, "tdcin", 2, "width", "30%", "text-align", "right"], [1, "thlg3"], ["class", "tdbco", "style", "width: 50%;", 4, "ngIf"], ["class", "tdcin", "style", "width: 50%;", 4, "ngIf"], ["colspan", "3"], [1, "table-hover", 2, "margin-left", "1em", "text-align", "left !important", "width", "100% !important"], ["type", "radio", "name", "processo", "id", "processo", 1, "form-check-input", "pull-right", 2, "margin-top", "-0.4em", "margin-left", "-0.2em", 3, "click"], [1, "tdbco", 2, "width", "50%"], [1, "tdcin", 2, "width", "50%"], ["type", "radio", "name", "processo", "id", "processo", 1, "form-check-input", "pull-right", 2, "margin-top", "-0.4em", "margin-left", "-0.2em"]], template: function SelecionaprocessoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Empresas: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Empresas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SelecionaprocessoComponent_tbody_20_Template, 8, 6, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "pagination-controls", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function SelecionaprocessoComponent_Template_pagination_controls_pageChange_25_listener($event) { return ctx.pageApont = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "PROCESSOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SelecionaprocessoComponent_thead_31_Template, 9, 0, "thead", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SelecionaprocessoComponent_tbody_32_Template, 13, 13, "tbody", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "pagination-controls", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function SelecionaprocessoComponent_Template_pagination_controls_pageChange_37_listener($event) { return ctx.pageApont = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "link", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "link", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.titulotela, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitulotela);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.caminho, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.empresas.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 7, ctx.empresas, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx.pageApont, ctx.totalLengthApont)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.processoCarregado != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](33, 10, ctx.processoCarregado, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c0, ctx.pageApont, ctx.totalLengthApont)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: [".body[_ngcontent-%COMP%]{\r\n  overflow: hidden;\r\n  background-color: #F1F3F6;\r\n  overflow-x:hidden !important;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  padding-top: 2em;\r\n  \r\n  padding-bottom: 3em;\r\n}\r\n\r\n.content[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  padding-left: 2em;\r\n  width: 100%;\r\n  padding-top: 0.9em;\r\n}\r\n\r\n.titulotela[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  color: #444;\r\n}\r\n\r\n.subtitulotela[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n  color: #777;\r\n  margin-top: -1.5em;\r\n}\r\n\r\n.crumbs[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  color: #777;\r\n  margin-top: -1.5em;\r\n  padding-right: 2em;\r\n  text-align: right;\r\n  float: right;\r\n}\r\n\r\n.contid[_ngcontent-%COMP%]{\r\n  margin-top: -2em;\r\n}\r\n\r\n.navid[_ngcontent-%COMP%]{\r\n  margin-top: -48px;\r\n}\r\n\r\n.litab[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n  max-width: 200px;\r\n}\r\n\r\n.liarticle[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  margin-left: -2em;\r\n  padding-left: 2em;\r\n}\r\n\r\n.divpergunta[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  float: left;\r\n  padding-left: -10px;\r\n}\r\n\r\n.larticle[_ngcontent-%COMP%]{\r\n  vertical-align: middle;\r\n  text-align: justify !important;\r\n  margin-left: -1.5em;\r\n}\r\n\r\n.divcheck[_ngcontent-%COMP%]{\r\n  padding-right: 3%;\r\n  float: left;\r\n}\r\n\r\n.divbtn[_ngcontent-%COMP%]{\r\n  float: right;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.btnadd[_ngcontent-%COMP%]{\r\n  border: 1px solid #dcdcdc;\r\n  margin-left: 6px;\r\n  color: #555;\r\n  font-size: 20px;\r\n}\r\n\r\n.tabalign[_ngcontent-%COMP%]{\r\n  text-align: left !important;\r\n}\r\n\r\n.thlg2[_ngcontent-%COMP%]{\r\n  width: 2%;\r\n}\r\n\r\n.thlg3[_ngcontent-%COMP%]{\r\n  width: 3%;\r\n}\r\n\r\n.cortbtk[_ngcontent-%COMP%]{\r\n  color: #777;\r\n  font-size: 14px;\r\n}\r\n\r\n.corcanc[_ngcontent-%COMP%]{\r\n  color: red;\r\n  font-size: 16px;\r\n}\r\n\r\n.coredit[_ngcontent-%COMP%]{\r\n  color: #777;\r\n  font-size: 16px;\r\n}\r\n\r\n.tdbco[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  color: #777;\r\n  padding-left: 0.4em;\r\n  border-top: 1px solid #ddd;\r\n  border-bottom: 1px solid #ddd;\r\n  background-color: #fff;\r\n}\r\n\r\n.tdcin[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  color: #777;\r\n  padding-left: 0.4em;\r\n  border-top: 1px solid #ddd;\r\n  border-bottom: 1px solid #ddd;\r\n  background-color: #f8f8f8;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbHV4b2RhZG9zL3NlbGVjaW9uYXByb2Nlc3NvL3NlbGVjaW9uYXByb2Nlc3NvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmx1eG9kYWRvcy9zZWxlY2lvbmFwcm9jZXNzby9zZWxlY2lvbmFwcm9jZXNzby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHl7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGM0Y2O1xyXG4gIG92ZXJmbG93LXg6aGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgcGFkZGluZy10b3A6IDJlbTtcclxuICAvKiB3aWR0aDogMTIwMHB4OyAqL1xyXG4gIHBhZGRpbmctYm90dG9tOiAzZW07XHJcbn1cclxuXHJcbi5jb250ZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDAuOWVtO1xyXG59XHJcblxyXG4udGl0dWxvdGVsYXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuLnN1YnRpdHVsb3RlbGF7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIG1hcmdpbi10b3A6IC0xLjVlbTtcclxufVxyXG5cclxuLmNydW1icyB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIG1hcmdpbi10b3A6IC0xLjVlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAyZW07XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY29udGlke1xyXG4gIG1hcmdpbi10b3A6IC0yZW07XHJcbn1cclxuXHJcbi5uYXZpZHtcclxuICBtYXJnaW4tdG9wOiAtNDhweDtcclxufVxyXG5cclxuLmxpdGFie1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ubGlhcnRpY2xle1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAyZW07XHJcbn1cclxuXHJcbi5kaXZwZXJndW50YXtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4ubGFydGljbGV7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xLjVlbTtcclxufVxyXG5cclxuLmRpdmNoZWNre1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZGl2YnRue1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYnRuYWRke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkY2RjZGM7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBjb2xvcjogIzU1NTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50YWJhbGlnbntcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aGxnMntcclxuICB3aWR0aDogMiU7XHJcbn1cclxuXHJcbi50aGxnM3tcclxuICB3aWR0aDogMyU7XHJcbn1cclxuXHJcbi5jb3J0YnRre1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvcmNhbmN7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5jb3JlZGl0e1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRkYmNve1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzc3NztcclxuICBwYWRkaW5nLWxlZnQ6IDAuNGVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50ZGNpbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjRlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelecionaprocessoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selecionaprocesso',
                templateUrl: './selecionaprocesso.component.html',
                styleUrls: ['./selecionaprocesso.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 0, vars: 0, template: function HomeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/inventario/dialoginvent/dialoginvent.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/inventario/dialoginvent/dialoginvent.component.ts ***!
  \******************************************************************************/
/*! exports provided: DialoginventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialoginventComponent", function() { return DialoginventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class DialoginventComponent {
    constructor() {
        this.titulotela = 'Cadastrar Campos do Inventário';
    }
    ngOnInit() {
        console.log('abriu a correta agora');
    }
}
DialoginventComponent.ɵfac = function DialoginventComponent_Factory(t) { return new (t || DialoginventComponent)(); };
DialoginventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialoginventComponent, selectors: [["app-dialoginvent"]], decls: 4, vars: 1, consts: [[2, "width", "100%", "height", "10em", "margin", "-3% !important", "border", "1px solid red", "padding-top", "5%", "padding-left", "5%", "background-color", "#F1F3F6"], ["mat-dialog-title", ""], [2, "overflow-y", "scroll", "height", "500px !important", "width", "800px"]], template: function DialoginventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulotela);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW52ZW50YXJpby9kaWFsb2dpbnZlbnQvZGlhbG9naW52ZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialoginventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialoginvent',
                templateUrl: './dialoginvent.component.html',
                styleUrls: ['./dialoginvent.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/inventario/inventario.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/inventario/inventario.component.ts ***!
  \***************************************************************/
/*! exports provided: InventarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventarioComponent", function() { return InventarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/fesm2015/collections.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _dialoginvent_dialoginvent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialoginvent/dialoginvent.component */ "./src/app/components/inventario/dialoginvent/dialoginvent.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");









function InventarioComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventarioComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r20.id);
} }
function InventarioComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventarioComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r21.nome);
} }
function InventarioComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventarioComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r22.tipo);
} }
function InventarioComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00C1rea");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventarioComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r23.area);
} }
function InventarioComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventarioComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r24.nomeCli);
} }
function InventarioComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventarioComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r25.data);
} }
function InventarioComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Onde est\u00E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventarioComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r26.ondeESta);
} }
function InventarioComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T.I controla?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventarioComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r27.tiControla);
} }
function InventarioComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Risco");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InventarioComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r28.risco);
} }
function InventarioComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
} }
function InventarioComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
} }
const _c0 = function () { return [5, 15, 25]; };
const ELEMENT_DATA = [
    { id: 1, nome: 'Banco Marketing', tipo: 'SQL Server', area: 'Marketing', nomeCli: 'Fulano', data: '16/11/2021', ondeESta: 'Servidor AWS', tiControla: 'Não', risco: 'Alto' },
    { id: 2, nome: 'Planilha Compras', tipo: 'Planilha Excel', area: 'Compras', nomeCli: 'Siclano', data: '15/11/2021', ondeESta: 'Diretório Y:', tiControla: 'Sim', risco: 'Médio' },
    { id: 3, nome: 'Banco Vendas', tipo: 'SQL Server', area: 'Vendas', nomeCli: 'Beltrano', data: '17/11/2021', ondeESta: 'Disco Local J:', tiControla: 'Sim', risco: 'Baixo' },
    { id: 4, nome: 'Doc do Sistema', tipo: 'Documento Word', area: 'Administrativo', nomeCli: 'Siclana', data: '17/11/2021', ondeESta: 'Disco Local C:', tiControla: 'Não', risco: 'Médio' },
];
class InventarioComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.titulotela = 'CADASTRAR ATIVO';
        this.subtitulotela = 'Cadastrar dados de Inventário Ativo';
        this.caminho = 'LGPD / Inventário / Inventário Ativo';
        this.displayedColumns = ['id', 'nome', 'tipo', 'area', 'data', 'ondeESta', 'tiControla', 'risco'];
        this.dataToDisplay = [...ELEMENT_DATA];
        this.dataSource = new ExampleDataSource(this.dataToDisplay);
    }
    //----------------------- dialog ------------------
    openDialog() {
        const dialogRef = this.dialog.open(_dialoginvent_dialoginvent_component__WEBPACK_IMPORTED_MODULE_3__["DialoginventComponent"]); //abre a dialoginvent
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    //----------------------- dialog ------------------
    ngOnInit() {
    }
    addData() {
        const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
        this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
        this.dataSource.setData(this.dataToDisplay);
    }
    removeData() {
        this.dataToDisplay = this.dataToDisplay.slice(0, -1);
        this.dataSource.setData(this.dataToDisplay);
    }
}
InventarioComponent.ɵfac = function InventarioComponent_Factory(t) { return new (t || InventarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
InventarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InventarioComponent, selectors: [["app-inventario"]], decls: 50, vars: 11, consts: [[2, "background-color", "#fff", "padding-left", "2em", "width", "100%", "border-bottom", "1px solid #ddd", "height", "80px", "padding-top", "0.9em"], [2, "font-weight", "bold", "color", "#444"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em", "padding-right", "2em", "text-align", "right"], [1, "body"], [1, "container", 2, "padding-top", "2em", "width", "1000px"], [1, "lgdiv"], ["mat-table", "", 1, "mat-elevation-z8", "demo-table", "lgtable", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "nome"], ["matColumnDef", "tipo"], ["matColumnDef", "area"], ["matColumnDef", "nomeCli"], ["matColumnDef", "data"], ["matColumnDef", "ondeESta"], ["matColumnDef", "tiControla"], ["matColumnDef", "risco"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 3, "length", "pageSize", "pageSizeOptions"], [1, "demo-button-container"], ["mat-raised-button", "", 1, "btn", "btn-primary", "large", 2, "margin", "15px", 3, "click"], ["mat-raised-button", "", 1, "btn", "btn-primary", "large", 2, "margin", "15px", 3, "disabled", "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function InventarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InventarioComponent_th_14_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InventarioComponent_td_15_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InventarioComponent_th_17_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InventarioComponent_td_18_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InventarioComponent_th_20_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, InventarioComponent_td_21_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](22, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, InventarioComponent_th_23_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, InventarioComponent_td_24_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, InventarioComponent_th_26_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, InventarioComponent_td_27_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, InventarioComponent_th_29_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, InventarioComponent_td_30_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, InventarioComponent_th_32_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, InventarioComponent_td_33_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, InventarioComponent_th_35_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, InventarioComponent_td_36_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, InventarioComponent_th_38_Template, 2, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, InventarioComponent_td_39_Template, 2, 1, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, InventarioComponent_tr_40_Template, 1, 0, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, InventarioComponent_tr_41_Template, 1, 0, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-paginator", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventarioComponent_Template_a_click_46_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Adicionar Campo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventarioComponent_Template_a_click_48_listener() { return ctx.removeData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Remover Campo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.titulotela, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitulotela);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.caminho, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", 4)("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.dataToDisplay.length);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0px;\r\n  border: 0px solid #555;\r\n}\r\n\r\nmat-drawer-content[_ngcontent-%COMP%] {\r\n  padding: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  display: table;\r\n}\r\n\r\n.example-label[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n\r\n.example-button-row[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  width: 490px;\r\n}\r\n\r\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n\r\n.example-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.example-button-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n}\r\n\r\n.example-form[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  padding-right: 8px;\r\n}\r\n\r\n.demo-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.demo-button-container[_ngcontent-%COMP%] {\r\n  padding-bottom: 16px;\r\n}\r\n\r\n.demo-button[_ngcontent-%COMP%]    + .demo-button[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n\r\n.lgtable[_ngcontent-%COMP%]{\r\n  width: 93.5% !important;\r\n  margin-left: 3%;\r\n  box-shadow: none !important;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.lgdiv[_ngcontent-%COMP%]{\r\n  border: 1px solid #eee;\r\n  background-color: #fff;\r\n  width: 130% !important;\r\n  margin-left: -15% !important;\r\n  padding-top: 2em;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]{\r\n  background-color: #F1F3F6;\r\n  overflow-x:hidden !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRhcmlvL2ludmVudGFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnZlbnRhcmlvL2ludmVudGFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICM1NTU7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiA0OTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uZGVtby10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kZW1vLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uZGVtby1idXR0b24gKyAuZGVtby1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5sZ3RhYmxle1xyXG4gIHdpZHRoOiA5My41JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAzJTtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxufVxyXG5cclxuLmxnZGl2e1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTMwJSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTUlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDJlbTtcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjNGNjtcclxuICBvdmVyZmxvdy14OmhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inventario',
                templateUrl: './inventario.component.html',
                styleUrls: ['./inventario.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();
class ExampleDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"] {
    constructor(initialData) {
        super();
        this._dataStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"]();
        this.setData(initialData);
    }
    connect() {
        return this._dataStream;
    }
    disconnect() { }
    setData(data) {
        this._dataStream.next(data);
    }
}


/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



function MenuComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", param_r2.rota, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](param_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](param_r2.rodape);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", param_r2.rota, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/imgs/" + param_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MenuComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r3.rota, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/imgs/" + link_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", link_r3.cor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.rodape);
} }
class MenuComponent {
    constructor() {
        this.parametrizacao = [
        // {id:1, rota: '', titulo:'MATRIZ',              img:'icoMatriz.png', cor:'#f00', rodape:'Probabilidades | Impactos'},
        // {id:2, rota: '', titulo:'CAUSAS',              img:'icoCausas.png', cor:'#f00', rodape:'Parametrizações'},
        // {id:2, rota: '', titulo:'CATEGORIAS DE RISCO', img:'icoCausas.png', cor:'#f00', rodape:'Parametrizações'},
        ];
        this.LinksMural = [
            { id: 1, rota: 'cadastro_inventario', titulo: 'Inventário', img: 'icoEmpresas.png', cor: '#4682B4', rodape: 'Mapeamento e Inventário dos dados' },
            { id: 2, rota: 'fluxo_dados', titulo: 'Fluxos', img: 'icoProcessos.png', cor: '#FF1493', rodape: 'Mapeamento dos Fluxos de dados' },
            { id: 3, rota: 'dados_inventario', titulo: 'Relatórios', img: 'icoRiscos.png', cor: '#DAA520', rodape: 'Relatórios e Dashboards' },
            { id: 4, rota: 'sistema_repositorio', titulo: 'GRC para Privacidade', img: 'icoPerfis.png', cor: '#D2691E', rodape: 'Matriz de Riscos + Matriz de controles' },
            { id: 5, rota: '', titulo: 'Mapeamento', img: 'icoControles.png', cor: '#8B008B', rodape: 'Mapeamento ISO27001' },
            { id: 6, rota: '', titulo: 'Direitos', img: 'icoTestes.png', cor: '#4169E1', rodape: 'Direitos do Titular' },
            { id: 7, rota: '', titulo: 'Discovery', img: 'icoIncidentes.png', cor: '#808000', rodape: 'Data Discovery' },
            { id: 8, rota: '', titulo: 'Regulamentação', img: 'icoPlanos.png', cor: '#00CED1', rodape: 'Cadastro de Regulamentações e Normas' },
            { id: 9, rota: 'seleciona_processo', titulo: 'Administração', img: 'icoCompliance.png', cor: '#8B008B', rodape: 'Módulo de Administração, Setup e Segurança' },
        ];
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 7, vars: 2, consts: [[2, "background-color", "#F1F3F6"], ["id", "wrapper", 2, "background-color", "#F1F3F6", "padding", "3%"], [1, "content", "animate-panel"], [1, "row"], ["class", "col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-lg-3"], [1, "hpanel"], [2, "text-decoration", "none", 3, "href"], [1, "text-danger", 2, "font-size", "12px", "font-weight", "bold"], [2, "font-size", "11px", "margin-top", "-10px"], [1, "stats-icon", "pull-right", 2, "float", "right", "margin-top", "-60px"], [3, "href"], ["alt", "", 3, "src"], [1, "panel-body", "text-center", "h-100"], [1, "links", 3, "href"], [2, "font-weight", "900", "font-size", "22px"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponent_div_4_Template, 12, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuComponent_div_6_Template, 9, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parametrizacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.LinksMural);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".DeepPink[_ngcontent-%COMP%] { color: rgb(255,20,147); }\r\n.RoyalBlue[_ngcontent-%COMP%] { color: rgb(65,105,225); }\r\n.SteelBlue[_ngcontent-%COMP%] { color: rgb(70,130,180); }\r\n.DarkTurquoise[_ngcontent-%COMP%] { color: rgb(0,206,209); }\r\n.Olive[_ngcontent-%COMP%] { color: rgb(128,128,0); }\r\n.Chocolate[_ngcontent-%COMP%] { color: rgb(210,105,30); }\r\n.DarkMagenta[_ngcontent-%COMP%] { color: rgb(139,0,139); }\r\n.Goldenrod[_ngcontent-%COMP%] { color: rgb(218,165,32); }\r\n.imgIco[_ngcontent-%COMP%]{\r\n  width: 80px !important;\r\n}\r\n.imgIcom[_ngcontent-%COMP%]{\r\n  width: 50px !important;\r\n}\r\n.hpanel[_ngcontent-%COMP%]{\r\n  background-color: #fff;\r\n  margin-top: 10%;\r\n  padding: 5%;\r\n  border: 1px solid #ddd;\r\n}\r\n.links[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLHNCQUFzQixFQUFFO0FBQ3BDLGFBQWEsc0JBQXNCLEVBQUU7QUFDckMsYUFBYSxzQkFBc0IsRUFBRTtBQUNyQyxpQkFBaUIscUJBQXFCLEVBQUU7QUFDeEMsU0FBUyxxQkFBcUIsRUFBRTtBQUNoQyxhQUFhLHNCQUFzQixFQUFFO0FBQ3JDLGVBQWUscUJBQXFCLEVBQUU7QUFDdEMsYUFBYSxzQkFBc0IsRUFBRTtBQUVyQztFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRGVlcFBpbmsgeyBjb2xvcjogcmdiKDI1NSwyMCwxNDcpOyB9XHJcbi5Sb3lhbEJsdWUgeyBjb2xvcjogcmdiKDY1LDEwNSwyMjUpOyB9XHJcbi5TdGVlbEJsdWUgeyBjb2xvcjogcmdiKDcwLDEzMCwxODApOyB9XHJcbi5EYXJrVHVycXVvaXNlIHsgY29sb3I6IHJnYigwLDIwNiwyMDkpOyB9XHJcbi5PbGl2ZSB7IGNvbG9yOiByZ2IoMTI4LDEyOCwwKTsgfVxyXG4uQ2hvY29sYXRlIHsgY29sb3I6IHJnYigyMTAsMTA1LDMwKTsgfVxyXG4uRGFya01hZ2VudGEgeyBjb2xvcjogcmdiKDEzOSwwLDEzOSk7IH1cclxuLkdvbGRlbnJvZCB7IGNvbG9yOiByZ2IoMjE4LDE2NSwzMik7IH1cclxuXHJcbi5pbWdJY297XHJcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZ0ljb217XHJcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhwYW5lbHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBwYWRkaW5nOiA1JTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4ubGlua3N7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */", ".skin-option[_ngcontent-%COMP%] { position: fixed; text-align: center; right: -1px; padding: 10px; top: 80px; width: 150px; height: 133px; text-transform: uppercase; background-color: #ffffff; box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, .1); border-radius: 4px 0 0 4px; z-index: 100; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/mural/mural.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/mural/mural.component.ts ***!
  \*****************************************************/
/*! exports provided: MuralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MuralComponent", function() { return MuralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




function MuralComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const param_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", param_r2.rota);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](param_r2.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](param_r2.rodape);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", param_r2.rota);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/imgs/" + param_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MuralComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r3.rota, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/imgs/" + link_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", link_r3.cor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r3.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r3.rodape);
} }
class MuralComponent {
    constructor() {
        this.parametrizacao = [
            { id: 1, rota: '', titulo: 'MATRIZ', img: 'icoMatriz.png', cor: '#f00', rodape: 'Probabilidades | Impactos' },
            { id: 2, rota: '', titulo: 'CAUSAS', img: 'icoCausas.png', cor: '#f00', rodape: 'Parametrizações' },
            { id: 2, rota: '', titulo: 'CATEGORIAS DE RISCO', img: 'icoCausas.png', cor: '#f00', rodape: 'Parametrizações' },
        ];
        this.LinksMural = [
            { id: 1, rota: '', titulo: 'Empresas', img: 'icoEmpresas.png', cor: '#4682B4', rodape: 'Linhas de Negócio | Acionistas | Órgãos Reguladores | Riscos' },
            { id: 2, rota: '', titulo: 'Processos', img: 'icoProcessos.png', cor: '#FF1493', rodape: 'Niveis de Processo | Contas Contábeis | Unidades Organizacionais' },
            { id: 3, rota: '', titulo: 'Riscos', img: 'icoRiscos.png', cor: '#DAA520', rodape: 'Perfil de Análise | Avaliações | Controles | Processos' },
            { id: 4, rota: '', titulo: 'Perfis de Análise', img: 'icoPerfis.png', cor: '#D2691E', rodape: 'Matriz | Índices Financeiros' },
            { id: 5, rota: '', titulo: 'Controles', img: 'icoControles.png', cor: '#8B008B', rodape: 'Afirmações | Demonstrações Financeiras | Objetivos | Testes' },
            { id: 6, rota: '', titulo: 'Testes', img: 'icoTestes.png', cor: '#4169E1', rodape: 'Apontamentos | Fluxo de Aprovação | Procedimentos' },
            { id: 7, rota: '', titulo: 'Incidentes', img: 'icoIncidentes.png', cor: '#808000', rodape: 'Categorias | Perda Financeira | Ocorrências' },
            { id: 8, rota: '', titulo: 'Planos de Ação', img: 'icoPlanos.png', cor: '#00CED1', rodape: 'Steps | Apontamentos | Controles' },
            { id: 9, rota: '', titulo: 'Compliance', img: 'icoCompliance.png', cor: '#8B008B', rodape: 'Normas | Leis | Políticas' },
            { id: 10, rota: 'mural_lgpd', titulo: 'LGPD', img: 'icoLgpd.png', cor: '#F023EB', rodape: 'Normas | Leis | Políticas' },
        ];
    }
    ngOnInit() {
    }
}
MuralComponent.ɵfac = function MuralComponent_Factory(t) { return new (t || MuralComponent)(); };
MuralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MuralComponent, selectors: [["app-mural"]], decls: 7, vars: 2, consts: [[2, "background-color", "#F1F3F6"], ["id", "wrapper", 2, "background-color", "#F1F3F6", "padding", "3%"], [1, "content", "animate-panel"], [1, "row"], ["class", "col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-lg-3"], [1, "hpanel", "stats", 2, "background-color", "#fff", "padding", "5%", "border", "1px solid #ddd"], [1, "panel-body", "h-100"], [1, "stats-title", "pull-left"], [2, "text-decoration", "none", 3, "routerLink"], [1, "text-danger", 2, "font-size", "12px", "font-weight", "bold"], [2, "font-size", "11px", "margin-top", "-10px"], [1, "stats-icon", "pull-right", 2, "float", "right", "margin-top", "-60px"], [3, "routerLink"], ["alt", "", 3, "src"], [1, "hpanel", 2, "background-color", "#fff", "margin-top", "10%", "padding", "5%", "border", "1px solid #ddd"], [1, "panel-body", "text-center", "h-100"], [2, "text-decoration", "none", 3, "href"], [1, "pe-7s-culture", "fa-4x"], [2, "font-weight", "900", "font-size", "22px"]], template: function MuralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MuralComponent_div_4_Template, 12, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MuralComponent_div_6_Template, 10, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.parametrizacao);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.LinksMural);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".DeepPink[_ngcontent-%COMP%] { color: rgb(255,20,147); }\r\n.RoyalBlue[_ngcontent-%COMP%] { color: rgb(65,105,225); }\r\n.SteelBlue[_ngcontent-%COMP%] { color: rgb(70,130,180); }\r\n.DarkTurquoise[_ngcontent-%COMP%] { color: rgb(0,206,209); }\r\n.Olive[_ngcontent-%COMP%] { color: rgb(128,128,0); }\r\n.Chocolate[_ngcontent-%COMP%] { color: rgb(210,105,30); }\r\n.DarkMagenta[_ngcontent-%COMP%] { color: rgb(139,0,139); }\r\n.Goldenrod[_ngcontent-%COMP%] { color: rgb(218,165,32); }\r\n.imgIco[_ngcontent-%COMP%]{\r\n  width: 80px !important;\r\n}\r\n.imgIcom[_ngcontent-%COMP%]{\r\n  width: 50px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tdXJhbC9tdXJhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksc0JBQXNCLEVBQUU7QUFDcEMsYUFBYSxzQkFBc0IsRUFBRTtBQUNyQyxhQUFhLHNCQUFzQixFQUFFO0FBQ3JDLGlCQUFpQixxQkFBcUIsRUFBRTtBQUN4QyxTQUFTLHFCQUFxQixFQUFFO0FBQ2hDLGFBQWEsc0JBQXNCLEVBQUU7QUFDckMsZUFBZSxxQkFBcUIsRUFBRTtBQUN0QyxhQUFhLHNCQUFzQixFQUFFO0FBRXJDO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL211cmFsL211cmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuRGVlcFBpbmsgeyBjb2xvcjogcmdiKDI1NSwyMCwxNDcpOyB9XHJcbi5Sb3lhbEJsdWUgeyBjb2xvcjogcmdiKDY1LDEwNSwyMjUpOyB9XHJcbi5TdGVlbEJsdWUgeyBjb2xvcjogcmdiKDcwLDEzMCwxODApOyB9XHJcbi5EYXJrVHVycXVvaXNlIHsgY29sb3I6IHJnYigwLDIwNiwyMDkpOyB9XHJcbi5PbGl2ZSB7IGNvbG9yOiByZ2IoMTI4LDEyOCwwKTsgfVxyXG4uQ2hvY29sYXRlIHsgY29sb3I6IHJnYigyMTAsMTA1LDMwKTsgfVxyXG4uRGFya01hZ2VudGEgeyBjb2xvcjogcmdiKDEzOSwwLDEzOSk7IH1cclxuLkdvbGRlbnJvZCB7IGNvbG9yOiByZ2IoMjE4LDE2NSwzMik7IH1cclxuXHJcbi5pbWdJY297XHJcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZ0ljb217XHJcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */", ".skin-option[_ngcontent-%COMP%] { position: fixed; text-align: center; right: -1px; padding: 10px; top: 80px; width: 150px; height: 133px; text-transform: uppercase; background-color: #ffffff; box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, .1); border-radius: 4px 0 0 4px; z-index: 100; }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MuralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mural',
                templateUrl: './mural.component.html',
                styleUrls: ['./mural.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/rodape/rodape.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/rodape/rodape.component.ts ***!
  \*******************************************************/
/*! exports provided: RodapeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RodapeComponent", function() { return RodapeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/fesm2015/toolbar.js");



class RodapeComponent {
    constructor() { }
    ngOnInit() {
    }
}
RodapeComponent.ɵfac = function RodapeComponent_Factory(t) { return new (t || RodapeComponent)(); };
RodapeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RodapeComponent, selectors: [["app-rodape"]], decls: 3, vars: 0, consts: [[1, "footer"], [1, "modelo"]], template: function RodapeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Modelo \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"]], styles: [".footer[_ngcontent-%COMP%] {\r\n  position:absolute;\r\n  bottom:0;\r\n  width:100%;\r\n}\r\n\r\n.modelo[_ngcontent-%COMP%]{\r\n  font-size: 13px;\r\n}\r\n\r\n.modelico[_ngcontent-%COMP%]{\r\n  width: 25px;\r\n  height: 25px;\r\n  padding: 0;\r\n  padding-top: 0.5%;\r\n  float: right !important ;\r\n}\r\n\r\n.ico[_ngcontent-%COMP%]{\r\n  font-size: 15px;\r\n  color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb2RhcGUvcm9kYXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9kYXBlL3JvZGFwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm90dG9tOjA7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLm1vZGVsb3tcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5tb2RlbGljb3tcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLXRvcDogMC41JTtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudCA7XHJcbn1cclxuXHJcbi5pY297XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiBicm93bjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RodapeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rodape',
                templateUrl: './rodape.component.html',
                styleUrls: ['./rodape.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");





function SidebarComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r1.rota, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.ico);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, item_r1.nome));
} }
class SidebarComponent {
    constructor() {
        this.user = '/assets/imgs/user.png';
        this.barsdown = '/assets/imgs/barsdown.png';
        this.news = '/assets/imgs/news.png';
        this.links = [
            { id: 1, nome: 'Fluxos de Dados', rota: 'fluxo_dados', ico: 'line_style' },
            { id: 2, nome: 'Cadastrar Ativo', rota: 'inventario', ico: 'launch' },
            { id: 3, nome: 'Dados do Inventário', rota: 'dados_inventario', ico: 'data_usage' },
            { id: 4, nome: 'Sistemas e Repositórios', rota: 'sistema_repositorio', ico: 'merge_type' },
        ];
    }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 21, vars: 4, consts: [[1, "container", 2, "overflow", "hidden"], [1, "imgbar"], ["alt", "", 1, "imgUser", 3, "src"], [1, "usercon"], ["alt", "", 3, "src"], [1, "divs"], ["href", "#", "routerLinkActive", "active", 1, "btns"], ["alt", "", 2, "float", "right", 3, "src"], [2, "padding-left", "1em", "width", "70%"], ["class", "divs", 4, "ngFor", "ngForOf"], [2, "text-align", "right", "font-size", "13px"], ["routerLinkActive", "active", 1, "btns", 3, "href"], [2, "width", "30%", "margin-top", "4px", "float", "right"], [2, "padding-left", "1em", "width", "70%", "text-align", "right !important"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "USU\u00C1RIO CONECTADO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ANALYTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SidebarComponent_div_18_Template, 9, 5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.barsdown, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.news, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0px;\r\n  border: 0px solid #555;\r\n}\r\n\r\nmat-drawer-content[_ngcontent-%COMP%] {\r\n  padding: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  display: table;\r\n}\r\n\r\n.example-label[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n\r\n.example-button-row[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  width: 490px;\r\n}\r\n\r\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n\r\n.example-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.example-button-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n}\r\n\r\n.example-form[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n  padding-right: 8px;\r\n}\r\n\r\n.btns[_ngcontent-%COMP%]{\r\n  text-decoration: none;\r\n  font-weight: bold;\r\n  color: #555;\r\n}\r\n\r\n.imgUser[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n  margin-top: 15px;\r\n  \r\n  border: solid 5px #fff;\r\n  border-radius: 100%;\r\n}\r\n\r\n.imgbar[_ngcontent-%COMP%]{\r\n  text-align: center !important;\r\n}\r\n\r\n.usercon[_ngcontent-%COMP%]{\r\n  margin-top: -15px !important;\r\n  font-size: 13PX;\r\n  text-align: center;\r\n  font-weight: 800;\r\n}\r\n\r\n.divs[_ngcontent-%COMP%]{\r\n  width: 169px;\r\n  margin-left: -15px;\r\n  border-bottom: 1px solid #ccc;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICM1NTU7XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXItY29udGVudCB7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1sYWJlbCB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiA0OTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyAubWF0LWJ1dHRvbi1iYXNlIHtcclxuICBtYXJnaW46IDhweCA4cHggOHB4IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uYnRuc3tcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi5pbWdVc2Vye1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICAvKiBtYXJnaW4tbGVmdDogMTAlOyAqL1xyXG4gIGJvcmRlcjogc29saWQgNXB4ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG5cclxuLmltZ2JhcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVzZXJjb257XHJcbiAgbWFyZ2luLXRvcDogLTE1cHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEzUFg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5kaXZze1xyXG4gIHdpZHRoOiAxNjlweDtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/sistrepo/sistrepo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sistrepo/sistrepo.component.ts ***!
  \***********************************************************/
/*! exports provided: SistrepoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SistrepoComponent", function() { return SistrepoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/fesm2015/table.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/fesm2015/input.js");








function SistrepoComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SistrepoComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.id, " ");
} }
function SistrepoComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sub-Processo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SistrepoComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r26.subProcesso, " ");
} }
function SistrepoComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nome do Gestor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SistrepoComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.nomeGestor, " ");
} }
function SistrepoComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sistema / BD / Cloud / etc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SistrepoComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.sistema, " ");
} }
function SistrepoComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Formas de Armazenamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SistrepoComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.armazenamento, " ");
} }
function SistrepoComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Formas de Integracao ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SistrepoComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r30.integracao, " ");
} }
function SistrepoComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Onde Est\u00E1 Hospedado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SistrepoComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.ondeEsta, " ");
} }
function SistrepoComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Respond\u00E1vel por Fornecer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SistrepoComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r32.rFornecer, " ");
} }
function SistrepoComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Respond\u00E1vel por Administrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SistrepoComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r33.rAdministrar, " ");
} }
function SistrepoComponent_th_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Parceiros Envolvidos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SistrepoComponent_td_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r34.envolvidos, " ");
} }
function SistrepoComponent_th_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Registros Aproximados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SistrepoComponent_td_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r35.aproximadas, " ");
} }
function SistrepoComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 38);
} }
function SistrepoComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 39);
} }
const _c0 = function () { return [5, 10, 20]; };
class SistrepoComponent {
    constructor() {
        this.displayedColumns = [
            'id',
            'subProcesso',
            'nomeGestor',
            'sistema',
            'armazenamento',
            'integracao',
            'ondeEsta',
            'rFornecer',
            'rAdministrar',
            'envolvidos',
            'aproximadas'
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        this.titulotela = 'SISTEMAS E REPOSITÓRIOS';
        this.subtitulotela = 'Mapa de Sistemas e Repositório';
        this.caminho = 'LGPD / Inventário / Repositórios';
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
SistrepoComponent.ɵfac = function SistrepoComponent_Factory(t) { return new (t || SistrepoComponent)(); };
SistrepoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SistrepoComponent, selectors: [["app-sistrepo"]], viewQuery: function SistrepoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 54, vars: 8, consts: [[2, "background-color", "#fff", "padding-left", "2em", "width", "100%", "border-bottom", "1px solid #ddd", "height", "80px", "padding-top", "0.9em"], [2, "font-weight", "bold", "color", "#444"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em"], [2, "font-size", "12px", "color", "#777", "margin-top", "-1.5em", "padding-right", "2em", "text-align", "right"], [1, "body"], [1, "container"], [1, "lgdiv"], ["appearance", "standard", 2, "padding-left", "3em"], ["matInput", "", "placeholder", "Digite sua busca", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8", "lgtable"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "style", "width: 5% !important;", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "subProcesso"], ["mat-header-cell", "", "style", "width: 10% !important;", 4, "matHeaderCellDef"], ["matColumnDef", "nomeGestor"], ["matColumnDef", "sistema"], ["mat-header-cell", "", "style", "width: 20% !important;", 4, "matHeaderCellDef"], ["matColumnDef", "armazenamento"], ["mat-header-cell", "", "style", "width: 7% !important; text-align: center;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "width: 7% !important; text-align: center;", 4, "matCellDef"], ["matColumnDef", "integracao"], ["matColumnDef", "ondeEsta"], ["matColumnDef", "rFornecer"], ["matColumnDef", "rAdministrar"], ["matColumnDef", "envolvidos"], ["matColumnDef", "aproximadas"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", "", 2, "width", "5% !important"], ["mat-cell", ""], ["mat-header-cell", "", 2, "width", "10% !important"], ["mat-header-cell", "", 2, "width", "20% !important"], ["mat-header-cell", "", 2, "width", "7% !important", "text-align", "center"], ["mat-cell", "", 2, "width", "7% !important", "text-align", "center"], ["mat-header-row", ""], ["mat-row", ""]], template: function SistrepoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function SistrepoComponent_Template_input_keyup_14_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SistrepoComponent_th_19_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SistrepoComponent_td_20_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SistrepoComponent_th_22_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SistrepoComponent_td_23_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, SistrepoComponent_th_25_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SistrepoComponent_td_26_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SistrepoComponent_th_28_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SistrepoComponent_td_29_Template, 2, 1, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SistrepoComponent_th_31_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SistrepoComponent_td_32_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SistrepoComponent_th_34_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, SistrepoComponent_td_35_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SistrepoComponent_th_37_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, SistrepoComponent_td_38_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, SistrepoComponent_th_40_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, SistrepoComponent_td_41_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SistrepoComponent_th_43_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, SistrepoComponent_td_44_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, SistrepoComponent_th_46_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, SistrepoComponent_td_47_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](48, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, SistrepoComponent_th_49_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, SistrepoComponent_td_50_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SistrepoComponent_tr_51_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SistrepoComponent_tr_52_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "mat-paginator", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.titulotela, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitulotela);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.caminho, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: [".example-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0px;\r\n  border: 0px solid #555;\r\n}\r\n\r\nmat-drawer-content[_ngcontent-%COMP%] {\r\n  padding: 12px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  display: table;\r\n}\r\n\r\n.example-label[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  font-size: 14px;\r\n  margin-left: 8px;\r\n  min-width: 120px;\r\n}\r\n\r\n.example-button-row[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  width: 490px;\r\n}\r\n\r\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\r\n  margin: 8px 8px 8px 0;\r\n}\r\n\r\n.example-flex-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.example-button-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 120px;\r\n}\r\n\r\n.example-form[_ngcontent-%COMP%] {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.demo-table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.demo-button-container[_ngcontent-%COMP%] {\r\n  padding-bottom: 16px;\r\n}\r\n\r\n.demo-button[_ngcontent-%COMP%]    + .demo-button[_ngcontent-%COMP%] {\r\n  margin-left: 8px;\r\n}\r\n\r\n.lgtable[_ngcontent-%COMP%]{\r\n  width: 93.5% !important;\r\n  margin-left: 3%;\r\n  box-shadow: none !important;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.lgdiv[_ngcontent-%COMP%]{\r\n  border: 1px solid #eee;\r\n  background-color: #fff;\r\n  width: 130% !important;\r\n  margin-left: -15% !important;\r\n  padding-top: 2em;\r\n  padding-bottom: 3em !important;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]{\r\n  background-color: #F1F3F6;\r\n  overflow-x:hidden !important;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n  padding-top: 2em;\r\n  width: 1000px;\r\n  padding-bottom: 3em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaXN0cmVwby9zaXN0cmVwby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBLDZCQUE2Qjs7QUFDN0I7RUFDRSxXQUFXO0FBQ2I7O0FBQ0EsaUNBQWlDOztBQUNqQzs7R0FFRzs7QUFFSDtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaXN0cmVwby9zaXN0cmVwby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzU1NTtcclxufVxyXG5cclxubWF0LWRyYXdlci1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxhYmVsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDQ5MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24tcm93IC5tYXQtYnV0dG9uLWJhc2Uge1xyXG4gIG1hcmdpbjogOHB4IDhweCA4cHggMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIHRkIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbn0gKi9cclxuXHJcbi5kZW1vLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRlbW8tYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5kZW1vLWJ1dHRvbiArIC5kZW1vLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmxndGFibGV7XHJcbiAgd2lkdGg6IDkzLjUlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4ubGdkaXZ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHdpZHRoOiAxMzAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNSUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjNGNjtcclxuICBvdmVyZmxvdy14OmhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIHBhZGRpbmctdG9wOiAyZW07XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogM2VtO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SistrepoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sistrepo',
                templateUrl: './sistrepo.component.html',
                styleUrls: ['./sistrepo.component.css']
            }]
    }], null, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }] }); })();
const ELEMENT_DATA = [
    { id: 1, subProcesso: 'Faturamento', nomeGestor: '', sistema: 'VBS(Cadastro)', armazenamento: 'Digital', integracao: 'WT', ondeEsta: 'WT', rFornecer: 'WT', rAdministrar: 'WT', envolvidos: 'WT', aproximadas: '?' },
    { id: 2, subProcesso: 'Faturamento', nomeGestor: '', sistema: 'SGB', armazenamento: 'Digital', integracao: 'B/e', ondeEsta: 'B/e', rFornecer: 'B/e', rAdministrar: 'B/e', envolvidos: 'n/a', aproximadas: '?' },
    { id: 3, subProcesso: 'Contas a Pagar', nomeGestor: '', sistema: 'Linkana - Cadastro Fornecedor e Veiculo (Sistema da WT) - para contato com o fornecedor, upload dos doctos', armazenamento: 'Digital', integracao: '', ondeEsta: '', rFornecer: '', rAdministrar: '', envolvidos: '', aproximadas: '' },
    { id: 4, subProcesso: 'Contas a Pagar', nomeGestor: '', sistema: 'Fornecedor Genival - Uso de Whatsapp', armazenamento: 'Digital', integracao: '', ondeEsta: '', rFornecer: '', rAdministrar: '', envolvidos: '', aproximadas: '' },
    { id: 5, subProcesso: '', nomeGestor: '', sistema: '', armazenamento: '', integracao: '', ondeEsta: '', rFornecer: '', rAdministrar: '', envolvidos: '', aproximadas: '' },
    { id: 6, subProcesso: '', nomeGestor: '', sistema: '', armazenamento: '', integracao: '', ondeEsta: '', rFornecer: '', rAdministrar: '', envolvidos: '', aproximadas: '' },
];


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\E-XYON\Exemplos\LGPD\lgpd-App\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map