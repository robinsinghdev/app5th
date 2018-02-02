webpackJsonp([10],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFullDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactFullDetailsPage = (function () {
    function ContactFullDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
    }
    ContactFullDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ContactFullDetailsPage');
    };
    ContactFullDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-full-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contact-full-details\contact-full-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contact Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div>\n    <ion-item>\n      <ion-label color="primary">NAME</ion-label>\n      <ion-input placeholder="NAME"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary">COMPANY</ion-label>\n      <ion-input placeholder="COMPANY"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary">DESIGNATION</ion-label>\n      <ion-input placeholder="DESIGNATION"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary">MOBILE</ion-label>\n      <ion-input placeholder="MOBILE"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary">EMAIL</ion-label>\n      <ion-input placeholder="EMAIL"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary">TELEPHONE</ion-label>\n      <ion-input placeholder="TELEPHONE"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary">FAX</ion-label>\n      <ion-input placeholder="FAX"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-textarea placeholder="NOTES"></ion-textarea>\n    </ion-item>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contact-full-details\contact-full-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactFullDetailsPage);
    return ContactFullDetailsPage;
}());

//# sourceMappingURL=contact-full-details.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_companies_service_companies_service__ = __webpack_require__(168);
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
        // console.log('ionViewDidLoad CompaniesPage');
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
            selector: 'page-companies',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\companies\companies.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Companies</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\companies\companies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_companies_service_companies_service__["a" /* CompaniesServiceProvider */]])
    ], CompaniesPage);
    return CompaniesPage;
}());

//# sourceMappingURL=companies.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        // console.log('ionViewDidLoad LoginPage');
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contacts_service_contacts_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_full_details_contact_full_details__ = __webpack_require__(104);
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
            _this.contactsList = data;
            _this.initializeItems();
        });
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ContactsPage');
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
    ContactsPage.prototype.openContactFullDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_full_details_contact_full_details__["a" /* ContactFullDetailsPage */], {
            item: item
        });
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contacts\contacts.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contacts</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-fab bottom right>\n        <button ion-fab color="danger" (click)=\'openContactFullDetails("");\'>\n          <ion-icon name="add"></ion-icon></button>\n    </ion-fab>    \n\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_contacts_service_contacts_service__["a" /* ContactsServiceProvider */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsSaveUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskDetailsSaveUpdatePage = (function () {
    function TaskDetailsSaveUpdatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedItem = navParams.get('item');
    }
    TaskDetailsSaveUpdatePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad TaskDetailsSaveUpdatePage');
    };
    TaskDetailsSaveUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task-details-save-update',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details-save-update\task-details-save-update.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Task Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details-save-update\task-details-save-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TaskDetailsSaveUpdatePage);
    return TaskDetailsSaveUpdatePage;
}());

//# sourceMappingURL=task-details-save-update.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_service_orders_service__ = __webpack_require__(170);
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
        // console.log('ionViewDidLoad OrdersPage');
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
            selector: 'page-orders',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\orders\orders.html"*/'<!--\n  Generated template for the OrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Orders</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n  <ion-toolbar>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_orders_service_orders_service__["a" /* OrdersServiceProvider */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projects_service_projects_service__ = __webpack_require__(171);
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
        // console.log('ionViewDidLoad ProjectsPage');
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
            selector: 'page-projects',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\projects\projects.html"*/'<!--\n  Generated template for the ProjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Projects</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\projects\projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_projects_service_projects_service__["a" /* ProjectsServiceProvider */]])
    ], ProjectsPage);
    return ProjectsPage;
}());

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_service_services_service__ = __webpack_require__(172);
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
        // console.log('ionViewDidLoad ServicesPage');
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
            selector: 'page-services',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\services\services.html"*/'<!--\n  Generated template for the ServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Services</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of items">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\services\services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_service_services_service__["a" /* ServicesServiceProvider */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_details_task_details__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_details_save_update_task_details_save_update__ = __webpack_require__(108);
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
        // console.log('ionViewDidLoad TasksPage');
    };
    TasksPage.prototype.getAllTasks = function () {
    };
    TasksPage.prototype.openTaskDetails = function (item) {
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
    TasksPage.prototype.openTaskSaveUpdateDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__task_details_save_update_task_details_save_update__["a" /* TaskDetailsSaveUpdatePage */], {
            item: item
        });
    };
    TasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tasks',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\tasks\tasks.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tasks</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar>\n      <div class="mob-task-hdr">\n          <a href="#" class="arrow arrow-prev" (click)=\'getAllTaskForPrevDate();\'>\n            <</a>\n              <p>\n                <span>\n                  <ion-datetime displayFormat="DD MMM YYYY" min="2016" max="2020" \n                    (ionChange)="changeTaskDate(selectedTaskDate)" [(ngModel)]="selectedTaskDate"></ion-datetime>\n                </span>\n              </p>\n              <a href="#" class="arrow arrow-next" (click)=\'getAllTaskForNextDate();\'>></a>\n        </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-fab bottom right>\n      <button ion-fab color="danger" (click)=\'openTaskSaveUpdateDetails("");\'>\n        <ion-icon name="add"></ion-icon></button>\n  </ion-fab> \n\n  <div class="mob-task-container">\n    \n    <ul class="mob-task-list">\n      <li *ngIf="taskDetailsFormList.length === 0">\n        <div class="task-info">\n          <span>\n            No tasks\n          </span>\n        </div>\n\n      </li>\n      <li *ngFor="let obj of taskDetailsFormList" (click)=\'openTaskDetails(obj);\'>\n        <div class="task-list-top">\n          <div class="task-list-top-cell">\n            <span class="star starred" *ngIf="obj.taskDetailsObj.isStarred === \'YES\'">\n              <ion-icon name="star"></ion-icon>\n            </span>\n            <span class="star" *ngIf="obj.taskDetailsObj.isStarred === \'NO\'">\n              <ion-icon name="star"></ion-icon>\n            </span>\n          </div>\n\n          <div class="task-cate">\n            <p>{{obj.taskDetailsObj.companyName}}</p>\n          </div>\n          <div class="task-list-top-cell">\n            <span class="task-compl-action completed" *ngIf="obj.taskDetailsObj.isCompleted === \'YES\'"></span>\n            <span class="task-compl-action" *ngIf="obj.taskDetailsObj.isCompleted === \'NO\'"></span>\n          </div>\n        </div>\n        <div class="task-title">\n          {{obj.taskDetailsObj.taskName}}\n        </div>\n        <div class="task-info">\n          <span>\n            <ion-icon name="calendar"></ion-icon>\n            {{obj.taskDetailsObj.startDate | date: \'dd MMM yyyy\'}}\n          </span>\n          <span>\n            <ion-icon name="git-pull-request"></ion-icon>{{obj.taskDetailsObj.subTasksCount}}</span>\n          <span>\n            <ion-icon name="chatbubbles"></ion-icon>{{obj.taskDetailsObj.commentsCount}}</span>\n        </div>\n        <div class="task-users-list">\n          <div class="assigned-user">\n            <label>Assigned to</label>\n            <div class="user-block" *ngFor="let mappedUser of obj.taskDetailsObj.mappedUserList">\n              <span class="photo">\n                <span>\n                  <ion-icon name="person"></ion-icon>\n                </span>\n              </span>\n              <span class="name">{{mappedUser.userFullName}}</span>\n            </div>\n          </div>\n          <div class="assigned-by" *ngFor="let mappedUser of obj.taskDetailsObj.mappedUserList">\n            <div *ngIf="mappedUser.isMine === \'YESs\'">\n              <label>by</label>\n              <div class="user-block">\n                <span class="photo">\n                  <span>\n                    <ion-icon name="person"></ion-icon>\n                  </span>\n                </span>\n                <span class="name">{{mappedUser.userFullName}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n\n    </ul>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\tasks\tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__["a" /* TasksServiceProvider */]])
    ], TasksPage);
    return TasksPage;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskDetailsPage = (function () {
    function TaskDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toggleSubtasksFlag = false;
        this.selectedItem = navParams.get('item');
        // console.log('subTasksList ------- ' + this.selectedItem.mappedUserList);
    }
    TaskDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad TaskDetailsPage');
    };
    TaskDetailsPage.prototype.toggleSubtasksFn = function () {
        this.toggleSubtasksFlag = !this.toggleSubtasksFlag;
    };
    TaskDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details\task-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Task Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf="selectedItem">\n\n    <div class="mob-task-container">\n\n      <ul class="mob-task-list">\n        <li *ngIf="selectedItem">\n\n          <div class="task-list-top">\n            <div class="task-list-top-cell">\n              <span class="star starred" *ngIf="selectedItem.taskDetailsObj.isStarred === \'YES\'">\n                <ion-icon name="star"></ion-icon>\n              </span>\n              <span class="star" *ngIf="selectedItem.taskDetailsObj.isStarred === \'NO\'">\n                <ion-icon name="star"></ion-icon>\n              </span>\n            </div>\n\n            <div class="task-cate">\n              <p>{{selectedItem.taskDetailsObj.companyName}}</p>\n            </div>\n            <div class="task-list-top-cell">\n              <span class="task-compl-action completed" \n                *ngIf="selectedItem.taskDetailsObj.isCompleted === \'YES\'"></span>\n              <span class="task-compl-action"\n                *ngIf="selectedItem.taskDetailsObj.isCompleted === \'NO\'"></span>\n            </div>\n          </div>\n\n          <div class="task-title">{{selectedItem.taskDetailsObj.taskName}}</div>\n          <div class="task-info">\n            <span>\n              <ion-icon name="calendar"></ion-icon>\n              {{selectedItem.taskDetailsObj.startDate | date: \'dd MMM yyyy\'}}</span>\n            <span (click)=\'toggleSubtasksFn();\'>\n              <ion-icon name="git-pull-request"></ion-icon>\n              {{selectedItem.taskDetailsObj.subTasksCount}}</span>\n            <span>\n              <ion-icon name="chatbubbles"></ion-icon>{{selectedItem.taskDetailsObj.commentsCount}}</span>\n          </div>\n\n          <div class="task-detail-subtask" *ngIf="toggleSubtasksFlag">\n\n            <ul class="subtask-list">\n              <li *ngFor="let subTaskObj of selectedItem.taskDetailsObj.subTasksList">\n                <p>\n                  <input type="checkbox" hidden/> {{subTaskObj.name}}</p>\n              </li>\n            </ul>\n\n          </div>\n\n          <div class="task-users-list">\n            <div class="assigned-user">\n              <label>Assigned to</label>\n              <div class="user-block" *ngFor="let mappedUser of selectedItem.taskDetailsObj.mappedUserList">\n                <span class="photo">\n                  <span>\n                    <ion-icon name="person"></ion-icon>\n                  </span>\n                </span>\n                <span class="name">{{mappedUser.userFullName}}</span>\n              </div>\n            </div>\n            <div class="assigned-by" *ngFor="let mappedUser of selectedItem.taskDetailsObj.mappedUserList">\n              <div *ngIf="mappedUser.isMine === \'YESs\'">\n                <label>by</label>\n                <div class="user-block">\n                  <span class="photo">\n                    <span>\n                      <ion-icon name="person"></ion-icon>\n                    </span>\n                  </span>\n                  <span class="name">{{mappedUser.userFullName}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </li>\n\n      </ul>\n      <div class="mob-comments">\n        <ul class="mob-comment-list">\n          <!-- <li *ngIf="selectedItem.taskDetailsObj.taskCommentsList.length === 0" class="comment-by-me">\n              No comments\n            </li> -->\n          <li *ngFor="let subTasksObj of selectedItem.taskDetailsObj.taskCommentsList" class="comment-by-me">\n            <div class="comment-content">\n              <p class="comment-text">{{subTasksObj.name}}</p>\n              <p classs="date">\n                <ion-icon name="calendar"></ion-icon> {{subTasksObj.data}}</p>\n            </div>\n            <div class="user-block">\n              <span class="photo">\n                <span>\n                  <ion-icon name="person" role="img" class="icon icon-md ion-md-person" aria-label="person" ng-reflect-name="person"></ion-icon>\n                </span>\n              </span>\n              <p>{{subTasksObj.userFullName}}</p>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar>\n      <ion-item>\n          <ion-label color="primary" floating>Add Comments Here...</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details\task-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TaskDetailsPage);
    return TaskDetailsPage;
}());

//# sourceMappingURL=task-details.js.map

/***/ }),

/***/ 126:
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
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/companies/companies.module": [
		419,
		9
	],
	"../pages/contact-full-details/contact-full-details.module": [
		418,
		8
	],
	"../pages/contacts/contacts.module": [
		421,
		7
	],
	"../pages/login/login.module": [
		420,
		6
	],
	"../pages/orders/orders.module": [
		423,
		5
	],
	"../pages/projects/projects.module": [
		424,
		4
	],
	"../pages/services/services.module": [
		425,
		3
	],
	"../pages/task-details-save-update/task-details-save-update.module": [
		422,
		2
	],
	"../pages/task-details/task-details.module": [
		427,
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
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 168:
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
        // console.log('Hello CompaniesServiceProvider Provider');
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

/***/ 169:
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
        // console.log('Hello ContactsServiceProvider Provider');
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], ContactsServiceProvider);
    return ContactsServiceProvider;
    var ContactsServiceProvider_1;
}());

//# sourceMappingURL=contacts-service.js.map

/***/ }),

/***/ 170:
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
        // console.log('Hello OrdersServiceProvider Provider');
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

/***/ 171:
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
        // console.log('Hello ProjectsServiceProvider Provider');
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

/***/ 172:
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
        // console.log('Hello ServicesServiceProvider Provider');
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(389);
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
        // console.log('Hello TasksServiceProvider Provider');
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

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


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
        // console.log('Hello AuthenticationServiceProvider Provider');
    }
    AuthenticationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationServiceProvider);
    return AuthenticationServiceProvider;
}());

//# sourceMappingURL=authentication-service.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tasks_tasks__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_task_details_task_details__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_task_details_save_update_task_details_save_update__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_full_details_contact_full_details__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_companies_companies__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_services_services__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_authentication_service_authentication_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_companies_service_companies_service__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_contacts_service_contacts_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_orders_service_orders_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_projects_service_projects_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_services_service_services_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_tasks_service_tasks_service__ = __webpack_require__(173);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_task_details_task_details__["a" /* TaskDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_companies_companies__["a" /* CompaniesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_task_details_save_update_task_details_save_update__["a" /* TaskDetailsSaveUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_full_details_contact_full_details__["a" /* ContactFullDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact-full-details/contact-full-details.module#ContactFullDetailsPageModule', name: 'ContactFullDetailsPage', segment: 'contact-full-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/companies/companies.module#CompaniesPageModule', name: 'CompaniesPage', segment: 'companies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task-details-save-update/task-details-save-update.module#TaskDetailsSaveUpdatePageModule', name: 'TaskDetailsSaveUpdatePage', segment: 'task-details-save-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/services/services.module#ServicesPageModule', name: 'ServicesPage', segment: 'services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tasks/tasks.module#TasksPageModule', name: 'TasksPage', segment: 'tasks', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task-details/task-details.module#TaskDetailsPageModule', name: 'TaskDetailsPage', segment: 'task-details', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_task_details_task_details__["a" /* TaskDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_companies_companies__["a" /* CompaniesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_task_details_save_update_task_details_save_update__["a" /* TaskDetailsSaveUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_full_details_contact_full_details__["a" /* ContactFullDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_companies_service_companies_service__["a" /* CompaniesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_contacts_service_contacts_service__["a" /* ContactsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_orders_service_orders_service__["a" /* OrdersServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_projects_service_projects_service__["a" /* ProjectsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_services_service_services_service__["a" /* ServicesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_tasks_service_tasks_service__["a" /* TasksServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 174,
	"./af.js": 174,
	"./ar": 175,
	"./ar-dz": 176,
	"./ar-dz.js": 176,
	"./ar-kw": 177,
	"./ar-kw.js": 177,
	"./ar-ly": 178,
	"./ar-ly.js": 178,
	"./ar-ma": 179,
	"./ar-ma.js": 179,
	"./ar-sa": 180,
	"./ar-sa.js": 180,
	"./ar-tn": 181,
	"./ar-tn.js": 181,
	"./ar.js": 175,
	"./az": 182,
	"./az.js": 182,
	"./be": 183,
	"./be.js": 183,
	"./bg": 184,
	"./bg.js": 184,
	"./bm": 185,
	"./bm.js": 185,
	"./bn": 186,
	"./bn.js": 186,
	"./bo": 187,
	"./bo.js": 187,
	"./br": 188,
	"./br.js": 188,
	"./bs": 189,
	"./bs.js": 189,
	"./ca": 190,
	"./ca.js": 190,
	"./cs": 191,
	"./cs.js": 191,
	"./cv": 192,
	"./cv.js": 192,
	"./cy": 193,
	"./cy.js": 193,
	"./da": 194,
	"./da.js": 194,
	"./de": 195,
	"./de-at": 196,
	"./de-at.js": 196,
	"./de-ch": 197,
	"./de-ch.js": 197,
	"./de.js": 195,
	"./dv": 198,
	"./dv.js": 198,
	"./el": 199,
	"./el.js": 199,
	"./en-au": 200,
	"./en-au.js": 200,
	"./en-ca": 201,
	"./en-ca.js": 201,
	"./en-gb": 202,
	"./en-gb.js": 202,
	"./en-ie": 203,
	"./en-ie.js": 203,
	"./en-nz": 204,
	"./en-nz.js": 204,
	"./eo": 205,
	"./eo.js": 205,
	"./es": 206,
	"./es-do": 207,
	"./es-do.js": 207,
	"./es-us": 208,
	"./es-us.js": 208,
	"./es.js": 206,
	"./et": 209,
	"./et.js": 209,
	"./eu": 210,
	"./eu.js": 210,
	"./fa": 211,
	"./fa.js": 211,
	"./fi": 212,
	"./fi.js": 212,
	"./fo": 213,
	"./fo.js": 213,
	"./fr": 214,
	"./fr-ca": 215,
	"./fr-ca.js": 215,
	"./fr-ch": 216,
	"./fr-ch.js": 216,
	"./fr.js": 214,
	"./fy": 217,
	"./fy.js": 217,
	"./gd": 218,
	"./gd.js": 218,
	"./gl": 219,
	"./gl.js": 219,
	"./gom-latn": 220,
	"./gom-latn.js": 220,
	"./gu": 221,
	"./gu.js": 221,
	"./he": 222,
	"./he.js": 222,
	"./hi": 223,
	"./hi.js": 223,
	"./hr": 224,
	"./hr.js": 224,
	"./hu": 225,
	"./hu.js": 225,
	"./hy-am": 226,
	"./hy-am.js": 226,
	"./id": 227,
	"./id.js": 227,
	"./is": 228,
	"./is.js": 228,
	"./it": 229,
	"./it.js": 229,
	"./ja": 230,
	"./ja.js": 230,
	"./jv": 231,
	"./jv.js": 231,
	"./ka": 232,
	"./ka.js": 232,
	"./kk": 233,
	"./kk.js": 233,
	"./km": 234,
	"./km.js": 234,
	"./kn": 235,
	"./kn.js": 235,
	"./ko": 236,
	"./ko.js": 236,
	"./ky": 237,
	"./ky.js": 237,
	"./lb": 238,
	"./lb.js": 238,
	"./lo": 239,
	"./lo.js": 239,
	"./lt": 240,
	"./lt.js": 240,
	"./lv": 241,
	"./lv.js": 241,
	"./me": 242,
	"./me.js": 242,
	"./mi": 243,
	"./mi.js": 243,
	"./mk": 244,
	"./mk.js": 244,
	"./ml": 245,
	"./ml.js": 245,
	"./mr": 246,
	"./mr.js": 246,
	"./ms": 247,
	"./ms-my": 248,
	"./ms-my.js": 248,
	"./ms.js": 247,
	"./mt": 249,
	"./mt.js": 249,
	"./my": 250,
	"./my.js": 250,
	"./nb": 251,
	"./nb.js": 251,
	"./ne": 252,
	"./ne.js": 252,
	"./nl": 253,
	"./nl-be": 254,
	"./nl-be.js": 254,
	"./nl.js": 253,
	"./nn": 255,
	"./nn.js": 255,
	"./pa-in": 256,
	"./pa-in.js": 256,
	"./pl": 257,
	"./pl.js": 257,
	"./pt": 258,
	"./pt-br": 259,
	"./pt-br.js": 259,
	"./pt.js": 258,
	"./ro": 260,
	"./ro.js": 260,
	"./ru": 261,
	"./ru.js": 261,
	"./sd": 262,
	"./sd.js": 262,
	"./se": 263,
	"./se.js": 263,
	"./si": 264,
	"./si.js": 264,
	"./sk": 265,
	"./sk.js": 265,
	"./sl": 266,
	"./sl.js": 266,
	"./sq": 267,
	"./sq.js": 267,
	"./sr": 268,
	"./sr-cyrl": 269,
	"./sr-cyrl.js": 269,
	"./sr.js": 268,
	"./ss": 270,
	"./ss.js": 270,
	"./sv": 271,
	"./sv.js": 271,
	"./sw": 272,
	"./sw.js": 272,
	"./ta": 273,
	"./ta.js": 273,
	"./te": 274,
	"./te.js": 274,
	"./tet": 275,
	"./tet.js": 275,
	"./th": 276,
	"./th.js": 276,
	"./tl-ph": 277,
	"./tl-ph.js": 277,
	"./tlh": 278,
	"./tlh.js": 278,
	"./tr": 279,
	"./tr.js": 279,
	"./tzl": 280,
	"./tzl.js": 280,
	"./tzm": 281,
	"./tzm-latn": 282,
	"./tzm-latn.js": 282,
	"./tzm.js": 281,
	"./uk": 283,
	"./uk.js": 283,
	"./ur": 284,
	"./ur.js": 284,
	"./uz": 285,
	"./uz-latn": 286,
	"./uz-latn.js": 286,
	"./uz.js": 285,
	"./vi": 287,
	"./vi.js": 287,
	"./x-pseudo": 288,
	"./x-pseudo.js": 288,
	"./yo": 289,
	"./yo.js": 289,
	"./zh-cn": 290,
	"./zh-cn.js": 290,
	"./zh-hk": 291,
	"./zh-hk.js": 291,
	"./zh-tw": 292,
	"./zh-tw.js": 292
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
webpackContext.id = 391;

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tasks_tasks__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contacts_contacts__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_companies_companies__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_projects_projects__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_orders_orders__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_services_services__ = __webpack_require__(111);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_contacts_contacts__["a" /* ContactsPage */];
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

/***/ })

},[337]);
//# sourceMappingURL=main.js.map