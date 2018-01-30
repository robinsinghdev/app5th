webpackJsonp([8],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_companies_service_companies_service__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompaniesPage = (function () {
    function CompaniesPage(navCtrl, navParams, companiesServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.companiesServiceProvider = companiesServiceProvider;
        this.companiesList = [];
        this.searchQuery = '';
        this.companiesServiceProvider.getAll().subscribe(function (data) {
            _this.companiesList = data;
            _this.initializeItems();
        });
    }
    CompaniesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompaniesPage');
    };
    CompaniesPage.prototype.initializeItems = function () {
        var _this = this;
        this.items = [];
        this.companiesList.forEach(function (element) {
            _this.items.push(element.name);
        });
    };
    CompaniesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    CompaniesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-companies',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\companies\companies.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Companies</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\companies\companies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_companies_service_companies_service__["a" /* CompaniesServiceProvider */]])
    ], CompaniesPage);
    return CompaniesPage;
}());

//# sourceMappingURL=companies.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contacts_service_contacts_service__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactsPage = (function () {
    function ContactsPage(navCtrl, navParams, contactsServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactsServiceProvider = contactsServiceProvider;
        this.contactsList = [];
        this.searchQuery = '';
        this.contactsServiceProvider.getAll().subscribe(function (data) {
            console.log('tactsPage' + data);
            _this.contactsList = data;
            _this.initializeItems();
        });
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsPage');
    };
    ContactsPage.prototype.initializeItems = function () {
        var _this = this;
        this.items = [];
        this.contactsList.forEach(function (element) {
            _this.items.push(element.contactName);
        });
    };
    ContactsPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contacts\contacts.html"*/'<!--\n  Generated template for the ContactsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contacts</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  hiiiiiii\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_contacts_service_contacts_service__["a" /* ContactsServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_contacts_service_contacts_service__["a" /* ContactsServiceProvider */]) === "function" && _c || Object])
    ], ContactsPage);
    return ContactsPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_service_orders_service__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = (function () {
    function OrdersPage(navCtrl, navParams, ordersServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ordersServiceProvider = ordersServiceProvider;
        this.ordersList = [];
        this.searchQuery = '';
        this.ordersServiceProvider.getAll().subscribe(function (data) {
            _this.ordersList = data;
            _this.initializeItems();
        });
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersPage');
    };
    OrdersPage.prototype.initializeItems = function () {
        var _this = this;
        this.items = [];
        this.ordersList.forEach(function (element) {
            _this.items.push(element.name);
        });
    };
    OrdersPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\orders\orders.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Orders</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_orders_service_orders_service__["a" /* OrdersServiceProvider */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projects_service_projects_service__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsPage = (function () {
    function ProjectsPage(navCtrl, navParams, projectsServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projectsServiceProvider = projectsServiceProvider;
        this.projectsList = [];
        this.searchQuery = '';
        this.projectsServiceProvider.getAll().subscribe(function (data) {
            _this.projectsList = data;
            _this.initializeItems();
        });
    }
    ProjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectsPage');
    };
    ProjectsPage.prototype.initializeItems = function () {
        var _this = this;
        this.items = [];
        this.projectsList.forEach(function (element) {
            _this.items.push(element.name);
        });
    };
    ProjectsPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projects',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\projects\projects.html"*/'<!--\n  Generated template for the ProjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Projects</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\projects\projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_projects_service_projects_service__["a" /* ProjectsServiceProvider */]])
    ], ProjectsPage);
    return ProjectsPage;
}());

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_service_services_service__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesPage = (function () {
    function ServicesPage(navCtrl, navParams, servicesServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicesServiceProvider = servicesServiceProvider;
        this.servicesList = [];
        this.searchQuery = '';
        this.servicesServiceProvider.getAll().subscribe(function (data) {
            _this.servicesList = data;
            _this.initializeItems();
        });
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesPage');
    };
    ServicesPage.prototype.initializeItems = function () {
        var _this = this;
        this.items = [];
        this.servicesList.forEach(function (element) {
            _this.items.push(element.name);
        });
    };
    ServicesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-services',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\services\services.html"*/'<!--\n  Generated template for the ServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Services</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\services\services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_service_services_service__["a" /* ServicesServiceProvider */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TaskDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskDetailsPage = (function () {
    function TaskDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
        // console.log('subTasksList ------- ' + this.selectedItem.mappedUserList);
    }
    TaskDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskDetailsPage');
    };
    TaskDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details\task-details.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Task Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="selectedItem">\n\n    <div class="mob-task-container">\n      \n      <ul class="mob-task-list">\n        <li *ngIf="selectedItem">\n            <div class="task-list-top">\n                <span class="star starred" *ngIf="selectedItem.taskDetailsObj.isStarred === \'YES\'">\n                  <ion-icon name="star"></ion-icon>\n                </span>\n                <span class="star" *ngIf="selectedItem.taskDetailsObj.isStarred === \'NO\'">\n                  <ion-icon name="star"></ion-icon>\n                </span>\n      \n                <p class="task-cate">{{selectedItem.taskDetailsObj.companyName}}</p>\n                <span class="task-compl-action completed" *ngIf="selectedItem.taskDetailsObj.isCompleted === \'YES\'"></span>\n                <span class="task-compl-action" *ngIf="selectedItem.taskDetailsObj.isCompleted === \'NO\'"></span>\n            </div>\n\n          <div class="task-title">{{selectedItem.taskDetailsObj.taskName}}</div>\n          <div class="task-info">\n            <span>\n              <ion-icon name="calendar"></ion-icon>\n              {{selectedItem.taskDetailsObj.startDate | date: \'dd MMM yyyy\'}}</span>\n            <span>\n              <ion-icon name="git-pull-request"></ion-icon>{{selectedItem.taskDetailsObj.subTasksCount}}</span>\n            <span>\n              <ion-icon name="chatbubbles"></ion-icon>{{selectedItem.taskDetailsObj.commentsCount}}</span>\n          </div>\n          <div class="task-users-list">\n            <div class="assigned-user">\n              <label>Assigned to</label>\n              <div class="user-block" *ngFor="let mappedUser of selectedItem.taskDetailsObj.mappedUserList">\n                <span class="photo">\n                  <span>\n                    <ion-icon name="person"></ion-icon>\n                  </span>\n                </span>\n                <span class="name">{{mappedUser.userFullName}}</span>\n              </div>\n            </div>\n            <div class="assigned-by" *ngFor="let mappedUser of selectedItem.taskDetailsObj.mappedUserList">\n                <div *ngIf="mappedUser.isMine === \'YESs\'">\n                  <label>by</label>\n                  <div class="user-block" >\n                    <span class="photo" >\n                      <span>\n                        <ion-icon name="person"></ion-icon>\n                      </span>\n                    </span>\n                    <span class="name">{{mappedUser.userFullName}}</span>\n                  </div>\n                </div>  \n              </div>\n          </div>\n          \n        </li>\n\n      </ul>\n      <div class="mob-comments">\n        <ul class="mob-comment-list">\n            <!-- <li *ngIf="selectedItem.taskDetailsObj.taskCommentsList.length === 0" class="comment-by-me">\n              No comments\n            </li> -->\n          <li *ngFor="let subTasksObj of selectedItem.taskDetailsObj.taskCommentsList" class="comment-by-me">\n            <div  class="comment-content">\n              <p class="comment-text">{{subTasksObj.name}}</p>\n              <p classs="date"><ion-icon name="calendar"></ion-icon> {{subTasksObj.data}}</p>\n            </div>\n            <div class="user-block">\n                <span class="photo">\n                    <span>\n                      <ion-icon name="person" role="img" class="icon icon-md ion-md-person" aria-label="person" ng-reflect-name="person"></ion-icon>\n                    </span>\n                  </span>\n              <p>{{subTasksObj.userFullName}}</p>\n            </div>          \n          </li> \n        </ul>\n      </div>   \n    </div>\n\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details\task-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TaskDetailsPage);
    return TaskDetailsPage;
}());

//# sourceMappingURL=task-details.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_details_task_details__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TasksPage = (function () {
    function TasksPage(navCtrl, navParams, tasksServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tasksServiceProvider = tasksServiceProvider;
        // public taskDetailsFormList: any;
        this.taskDetailsFormList = [];
        this.selectedTaskDate = new Date().toISOString();
        this.selectedTaskDateDDMMMYYYY = __WEBPACK_IMPORTED_MODULE_4_moment_moment__(this.selectedTaskDate).format("DD MMM YYYY");
        this.changeTaskDate(this.selectedTaskDate);
    }
    TasksPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TasksPage');
    };
    TasksPage.prototype.getAllTasks = function () {
    };
    TasksPage.prototype.openTaskDetails = function (item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__task_details_task_details__["a" /* TaskDetailsPage */], {
            item: item
        });
    };
    TasksPage.prototype.getAllTaskByDate = function (selectedTaskDate) {
        var _this = this;
        this.taskDetailsFormList = [];
        this.tasksServiceProvider.getAllTasksByData(0, 0, 'date', selectedTaskDate, 'no').subscribe(function (data) {
            _this.taskDetailsFormList = data['tasksList'];
        });
    };
    TasksPage.prototype.changeTaskDate = function (selectedTaskDate) {
        this.selectedTaskDate = __WEBPACK_IMPORTED_MODULE_4_moment_moment__(this.selectedTaskDate).format("YYYY-MM-DD");
        this.selectedTaskDateDDMMMYYYY = __WEBPACK_IMPORTED_MODULE_4_moment_moment__(this.selectedTaskDate).format("DD MMM YYYY");
        this.getAllTaskByDate(this.selectedTaskDate);
    };
    TasksPage.prototype.getAllTaskForNextDate = function () {
        var dateData = __WEBPACK_IMPORTED_MODULE_4_moment_moment__(this.selectedTaskDate).add(1, 'days');
        this.selectedTaskDate = dateData.format("YYYY-MM-DD");
        this.selectedTaskDateDDMMMYYYY = __WEBPACK_IMPORTED_MODULE_4_moment_moment__(this.selectedTaskDate).format("DD MMM YYYY");
        this.getAllTaskByDate(this.selectedTaskDate);
    };
    TasksPage.prototype.getAllTaskForPrevDate = function () {
        var dateData = __WEBPACK_IMPORTED_MODULE_4_moment_moment__(this.selectedTaskDate).subtract(1, 'days');
        this.selectedTaskDate = dateData.format("YYYY-MM-DD");
        this.selectedTaskDateDDMMMYYYY = __WEBPACK_IMPORTED_MODULE_4_moment_moment__(this.selectedTaskDate).format("DD MMM YYYY");
        this.getAllTaskByDate(this.selectedTaskDate);
    };
    TasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tasks',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\tasks\tasks.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tasks</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="mob-task-container">\n    <div class="mob-task-hdr">\n      <a href="#" class="arrow arrow-prev" (click)=\'getAllTaskForPrevDate();\'>\n        <</a>\n          <p>\n            <span >\n                <ion-datetime displayFormat="DD MMM YYYY" \n                min="2016" max="2020"\n                (ionChange)="changeTaskDate(selectedTaskDate)" \n                [(ngModel)]="selectedTaskDate" ></ion-datetime>\n\n            </span>\n          </p>\n          <a href="#" class="arrow arrow-next"  (click)=\'getAllTaskForNextDate();\'>></a>\n    </div>\n    <ul class="mob-task-list">\n      <li *ngIf="taskDetailsFormList.length === 0">\n        <div class="task-info">\n          <span>\n              No tasks\n          </span>\n        </div>\n\n      </li>\n      <li *ngFor="let obj of taskDetailsFormList">\n        <div class="task-list-top">\n          <span class="star starred" *ngIf="obj.taskDetailsObj.isStarred === \'YES\'">\n            <ion-icon name="star"></ion-icon>\n          </span>\n          <span class="star" *ngIf="obj.taskDetailsObj.isStarred === \'NO\'">\n            <ion-icon name="star"></ion-icon>\n          </span>\n\n          <p class="task-cate">{{obj.taskDetailsObj.companyName}}</p>\n          <span class="task-compl-action completed" *ngIf="obj.taskDetailsObj.isCompleted === \'YES\'"></span>\n          <span class="task-compl-action" *ngIf="obj.taskDetailsObj.isCompleted === \'NO\'"></span>\n        </div>\n        <div class="task-title" (click)=\'openTaskDetails(obj);\'>\n            {{obj.taskDetailsObj.taskName}}\n        </div>\n        <div class="task-info">\n          <span>\n            <ion-icon name="calendar"></ion-icon>\n              {{obj.taskDetailsObj.startDate | date: \'dd MMM yyyy\'}}\n          </span>\n          <span>\n            <ion-icon name="git-pull-request"></ion-icon>{{obj.taskDetailsObj.subTasksCount}}</span>\n          <span>\n            <ion-icon name="chatbubbles"></ion-icon>{{obj.taskDetailsObj.commentsCount}}</span>\n        </div>\n        <div class="task-users-list">\n          <div class="assigned-user">\n            <label>Assigned to</label>\n            <div class="user-block" *ngFor="let mappedUser of obj.taskDetailsObj.mappedUserList">\n              <span class="photo">\n                <span>\n                  <ion-icon name="person"></ion-icon>\n                </span>\n              </span>\n              <span class="name">{{mappedUser.userFullName}}</span>\n            </div>\n          </div>\n          <div class="assigned-by" *ngFor="let mappedUser of obj.taskDetailsObj.mappedUserList">\n            <div *ngIf="mappedUser.isMine === \'YESs\'">\n              <label>by</label>\n              <div class="user-block" >\n                <span class="photo" >\n                  <span>\n                    <ion-icon name="person"></ion-icon>\n                  </span>\n                </span>\n                <span class="name">{{mappedUser.userFullName}}</span>\n              </div>\n            </div>  \n          </div>\n        </div>\n      </li>\n\n    </ul>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\tasks\tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__["a" /* TasksServiceProvider */]])
    ], TasksPage);
    return TasksPage;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/companies/companies.module": [
		419,
		7
	],
	"../pages/contacts/contacts.module": [
		420,
		6
	],
	"../pages/login/login.module": [
		421,
		5
	],
	"../pages/orders/orders.module": [
		422,
		4
	],
	"../pages/projects/projects.module": [
		423,
		3
	],
	"../pages/services/services.module": [
		424,
		2
	],
	"../pages/task-details/task-details.module": [
		425,
		1
	],
	"../pages/tasks/tasks.module": [
		426,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 165;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompaniesServiceProvider = (function () {
    function CompaniesServiceProvider(http, authService) {
        this.http = http;
        this.authService = authService;
        console.log('Hello CompaniesServiceProvider Provider');
    }
    CompaniesServiceProvider_1 = CompaniesServiceProvider;
    CompaniesServiceProvider.prototype.getAll = function () {
        var userToken = 'userToken'; // this.authService.getUserToken();
        var urlToCall = CompaniesServiceProvider_1.GET_ALL_DETAILS + '/' + userToken + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    CompaniesServiceProvider.GET_ALL_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/companies/all';
    CompaniesServiceProvider = CompaniesServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], CompaniesServiceProvider);
    return CompaniesServiceProvider;
    var CompaniesServiceProvider_1;
}());

//# sourceMappingURL=companies-service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsServiceProvider = (function () {
    function ContactsServiceProvider(http, authService) {
        this.http = http;
        this.authService = authService;
        console.log('Hello ContactsServiceProvider Provider');
    }
    ContactsServiceProvider_1 = ContactsServiceProvider;
    ContactsServiceProvider.prototype.getAll = function () {
        var userToken = 'userToken'; // this.authService.getUserToken();
        var urlToCall = ContactsServiceProvider_1.GET_ALL_DETAILS + '/' + userToken + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    ContactsServiceProvider.GET_ALL_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/contacts/all';
    ContactsServiceProvider = ContactsServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]) === "function" && _b || Object])
    ], ContactsServiceProvider);
    return ContactsServiceProvider;
    var ContactsServiceProvider_1, _a, _b;
}());

//# sourceMappingURL=contacts-service.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersServiceProvider = (function () {
    function OrdersServiceProvider(http, authService) {
        this.http = http;
        this.authService = authService;
        console.log('Hello OrdersServiceProvider Provider');
    }
    OrdersServiceProvider_1 = OrdersServiceProvider;
    OrdersServiceProvider.prototype.getAll = function () {
        var userToken = 'userToken'; // this.authService.getUserToken();
        var urlToCall = OrdersServiceProvider_1.GET_ALL_DETAILS + '/' + userToken + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    OrdersServiceProvider.GET_ALL_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/orders/all';
    OrdersServiceProvider = OrdersServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], OrdersServiceProvider);
    return OrdersServiceProvider;
    var OrdersServiceProvider_1;
}());

//# sourceMappingURL=orders-service.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsServiceProvider = (function () {
    function ProjectsServiceProvider(http, authService) {
        this.http = http;
        this.authService = authService;
        console.log('Hello ProjectsServiceProvider Provider');
    }
    ProjectsServiceProvider_1 = ProjectsServiceProvider;
    ProjectsServiceProvider.prototype.getAll = function () {
        var userToken = 'userToken'; // this.authService.getUserToken();
        var urlToCall = ProjectsServiceProvider_1.GET_ALL_DETAILS + '/' + userToken + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    ProjectsServiceProvider.GET_ALL_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/projects/all';
    ProjectsServiceProvider = ProjectsServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], ProjectsServiceProvider);
    return ProjectsServiceProvider;
    var ProjectsServiceProvider_1;
}());

//# sourceMappingURL=projects-service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesServiceProvider = (function () {
    function ServicesServiceProvider(http, authService) {
        this.http = http;
        this.authService = authService;
        console.log('Hello ServicesServiceProvider Provider');
    }
    ServicesServiceProvider_1 = ServicesServiceProvider;
    ServicesServiceProvider.prototype.getAll = function () {
        var userToken = 'userToken'; // this.authService.getUserToken();
        var urlToCall = ServicesServiceProvider_1.GET_ALL_DETAILS + '/' + userToken + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    ServicesServiceProvider.GET_ALL_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/services/all';
    ServicesServiceProvider = ServicesServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], ServicesServiceProvider);
    return ServicesServiceProvider;
    var ServicesServiceProvider_1;
}());

//# sourceMappingURL=services-service.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import 'rxjs/add/operator/map';
var TasksServiceProvider = (function () {
    function TasksServiceProvider(http) {
        this.http = http;
        console.log('Hello TasksServiceProvider Provider');
    }
    TasksServiceProvider_1 = TasksServiceProvider;
    // Load all github users
    TasksServiceProvider.prototype.load = function () {
        var uid = 4;
        var cid = 0;
        var criteriaData = 'today';
        var startDateData = 'no';
        var endDateData = 'no';
        var userToken = 'userToken'; // this.authService.getUserToken();
        var urlToCall = TasksServiceProvider_1.GET_ALL_DETAILS
            + '/' + userToken
            + '/' + uid
            + '/' + cid
            + '/' + criteriaData
            + '/' + startDateData
            + '/' + endDateData
            + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    TasksServiceProvider.prototype.getAllTasksByData = function (uid, cid, criteriaData, startDateData, endDateData) {
        uid = 4;
        cid = 0;
        // criteriaData = 'today';
        // startDateData = 'no';
        endDateData = 'no';
        var userToken = 'userToken'; // this.authService.getUserToken();
        var urlToCall = TasksServiceProvider_1.GET_ALL_DETAILS
            + '/' + userToken
            + '/' + uid
            + '/' + cid
            + '/' + criteriaData
            + '/' + startDateData
            + '/' + endDateData
            + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    TasksServiceProvider.GET_ALL_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/task/v2/getAll';
    TasksServiceProvider = TasksServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TasksServiceProvider);
    return TasksServiceProvider;
    var TasksServiceProvider_1;
}());

//# sourceMappingURL=tasks-service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Home Menu</h3>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    // apiUrl: 'http://localhost:8080/MISDeskCRM',
    apiUrl: 'http://192.168.1.28:8080/MISDeskCRM',
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthenticationServiceProvider = (function () {
    function AuthenticationServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthenticationServiceProvider Provider');
    }
    AuthenticationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationServiceProvider);
    return AuthenticationServiceProvider;
}());

//# sourceMappingURL=authentication-service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tasks_tasks__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_task_details_task_details__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_companies_companies__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_projects_projects__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_orders_orders__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_services_services__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_authentication_service_authentication_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_companies_service_companies_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_contacts_service_contacts_service__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_orders_service_orders_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_projects_service_projects_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_services_service_services_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_tasks_service_tasks_service__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HttpClient } from '@angular/common/http';























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_task_details_task_details__["a" /* TaskDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_companies_companies__["a" /* CompaniesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/companies/companies.module#CompaniesPageModule', name: 'CompaniesPage', segment: 'companies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/services/services.module#ServicesPageModule', name: 'ServicesPage', segment: 'services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task-details/task-details.module#TaskDetailsPageModule', name: 'TaskDetailsPage', segment: 'task-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tasks/tasks.module#TasksPageModule', name: 'TasksPage', segment: 'tasks', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_task_details_task_details__["a" /* TaskDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_companies_companies__["a" /* CompaniesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_companies_service_companies_service__["a" /* CompaniesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_contacts_service_contacts_service__["a" /* ContactsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_orders_service_orders_service__["a" /* OrdersServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_projects_service_projects_service__["a" /* ProjectsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_services_service_services_service__["a" /* ServicesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_tasks_service_tasks_service__["a" /* TasksServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 172,
	"./af.js": 172,
	"./ar": 173,
	"./ar-dz": 174,
	"./ar-dz.js": 174,
	"./ar-kw": 175,
	"./ar-kw.js": 175,
	"./ar-ly": 176,
	"./ar-ly.js": 176,
	"./ar-ma": 177,
	"./ar-ma.js": 177,
	"./ar-sa": 178,
	"./ar-sa.js": 178,
	"./ar-tn": 179,
	"./ar-tn.js": 179,
	"./ar.js": 173,
	"./az": 180,
	"./az.js": 180,
	"./be": 181,
	"./be.js": 181,
	"./bg": 182,
	"./bg.js": 182,
	"./bm": 183,
	"./bm.js": 183,
	"./bn": 184,
	"./bn.js": 184,
	"./bo": 185,
	"./bo.js": 185,
	"./br": 186,
	"./br.js": 186,
	"./bs": 187,
	"./bs.js": 187,
	"./ca": 188,
	"./ca.js": 188,
	"./cs": 189,
	"./cs.js": 189,
	"./cv": 190,
	"./cv.js": 190,
	"./cy": 191,
	"./cy.js": 191,
	"./da": 192,
	"./da.js": 192,
	"./de": 193,
	"./de-at": 194,
	"./de-at.js": 194,
	"./de-ch": 195,
	"./de-ch.js": 195,
	"./de.js": 193,
	"./dv": 196,
	"./dv.js": 196,
	"./el": 197,
	"./el.js": 197,
	"./en-au": 198,
	"./en-au.js": 198,
	"./en-ca": 199,
	"./en-ca.js": 199,
	"./en-gb": 200,
	"./en-gb.js": 200,
	"./en-ie": 201,
	"./en-ie.js": 201,
	"./en-nz": 202,
	"./en-nz.js": 202,
	"./eo": 203,
	"./eo.js": 203,
	"./es": 204,
	"./es-do": 205,
	"./es-do.js": 205,
	"./es-us": 206,
	"./es-us.js": 206,
	"./es.js": 204,
	"./et": 207,
	"./et.js": 207,
	"./eu": 208,
	"./eu.js": 208,
	"./fa": 209,
	"./fa.js": 209,
	"./fi": 210,
	"./fi.js": 210,
	"./fo": 211,
	"./fo.js": 211,
	"./fr": 212,
	"./fr-ca": 213,
	"./fr-ca.js": 213,
	"./fr-ch": 214,
	"./fr-ch.js": 214,
	"./fr.js": 212,
	"./fy": 215,
	"./fy.js": 215,
	"./gd": 216,
	"./gd.js": 216,
	"./gl": 217,
	"./gl.js": 217,
	"./gom-latn": 218,
	"./gom-latn.js": 218,
	"./gu": 219,
	"./gu.js": 219,
	"./he": 220,
	"./he.js": 220,
	"./hi": 221,
	"./hi.js": 221,
	"./hr": 222,
	"./hr.js": 222,
	"./hu": 223,
	"./hu.js": 223,
	"./hy-am": 224,
	"./hy-am.js": 224,
	"./id": 225,
	"./id.js": 225,
	"./is": 226,
	"./is.js": 226,
	"./it": 227,
	"./it.js": 227,
	"./ja": 228,
	"./ja.js": 228,
	"./jv": 229,
	"./jv.js": 229,
	"./ka": 230,
	"./ka.js": 230,
	"./kk": 231,
	"./kk.js": 231,
	"./km": 232,
	"./km.js": 232,
	"./kn": 233,
	"./kn.js": 233,
	"./ko": 234,
	"./ko.js": 234,
	"./ky": 235,
	"./ky.js": 235,
	"./lb": 236,
	"./lb.js": 236,
	"./lo": 237,
	"./lo.js": 237,
	"./lt": 238,
	"./lt.js": 238,
	"./lv": 239,
	"./lv.js": 239,
	"./me": 240,
	"./me.js": 240,
	"./mi": 241,
	"./mi.js": 241,
	"./mk": 242,
	"./mk.js": 242,
	"./ml": 243,
	"./ml.js": 243,
	"./mr": 244,
	"./mr.js": 244,
	"./ms": 245,
	"./ms-my": 246,
	"./ms-my.js": 246,
	"./ms.js": 245,
	"./mt": 247,
	"./mt.js": 247,
	"./my": 248,
	"./my.js": 248,
	"./nb": 249,
	"./nb.js": 249,
	"./ne": 250,
	"./ne.js": 250,
	"./nl": 251,
	"./nl-be": 252,
	"./nl-be.js": 252,
	"./nl.js": 251,
	"./nn": 253,
	"./nn.js": 253,
	"./pa-in": 254,
	"./pa-in.js": 254,
	"./pl": 255,
	"./pl.js": 255,
	"./pt": 256,
	"./pt-br": 257,
	"./pt-br.js": 257,
	"./pt.js": 256,
	"./ro": 258,
	"./ro.js": 258,
	"./ru": 259,
	"./ru.js": 259,
	"./sd": 260,
	"./sd.js": 260,
	"./se": 261,
	"./se.js": 261,
	"./si": 262,
	"./si.js": 262,
	"./sk": 263,
	"./sk.js": 263,
	"./sl": 264,
	"./sl.js": 264,
	"./sq": 265,
	"./sq.js": 265,
	"./sr": 266,
	"./sr-cyrl": 267,
	"./sr-cyrl.js": 267,
	"./sr.js": 266,
	"./ss": 268,
	"./ss.js": 268,
	"./sv": 269,
	"./sv.js": 269,
	"./sw": 270,
	"./sw.js": 270,
	"./ta": 271,
	"./ta.js": 271,
	"./te": 272,
	"./te.js": 272,
	"./tet": 273,
	"./tet.js": 273,
	"./th": 274,
	"./th.js": 274,
	"./tl-ph": 275,
	"./tl-ph.js": 275,
	"./tlh": 276,
	"./tlh.js": 276,
	"./tr": 277,
	"./tr.js": 277,
	"./tzl": 278,
	"./tzl.js": 278,
	"./tzm": 279,
	"./tzm-latn": 280,
	"./tzm-latn.js": 280,
	"./tzm.js": 279,
	"./uk": 281,
	"./uk.js": 281,
	"./ur": 282,
	"./ur.js": 282,
	"./uz": 283,
	"./uz-latn": 284,
	"./uz-latn.js": 284,
	"./uz.js": 283,
	"./vi": 285,
	"./vi.js": 285,
	"./x-pseudo": 286,
	"./x-pseudo.js": 286,
	"./yo": 287,
	"./yo.js": 287,
	"./zh-cn": 288,
	"./zh-cn.js": 288,
	"./zh-hk": 289,
	"./zh-hk.js": 289,
	"./zh-tw": 290,
	"./zh-tw.js": 290
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 389;

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tasks_tasks__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contacts_contacts__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_companies_companies__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_projects_projects__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_orders_orders__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_services_services__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tasks_tasks__["a" /* TasksPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Tasks', component: __WEBPACK_IMPORTED_MODULE_5__pages_tasks_tasks__["a" /* TasksPage */] },
            { title: 'Contacts', component: __WEBPACK_IMPORTED_MODULE_6__pages_contacts_contacts__["a" /* ContactsPage */] },
            { title: 'Companies', component: __WEBPACK_IMPORTED_MODULE_7__pages_companies_companies__["a" /* CompaniesPage */] },
            { title: 'Projects', component: __WEBPACK_IMPORTED_MODULE_8__pages_projects_projects__["a" /* ProjectsPage */] },
            { title: 'Orders', component: __WEBPACK_IMPORTED_MODULE_9__pages_orders_orders__["a" /* OrdersPage */] },
            { title: 'Services', component: __WEBPACK_IMPORTED_MODULE_10__pages_services_services__["a" /* ServicesPage */] },
            { title: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

},[335]);
//# sourceMappingURL=main.js.map