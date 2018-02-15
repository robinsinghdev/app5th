webpackJsonp([11],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFullDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_contact_ui_form__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contacts_service_contacts_service__ = __webpack_require__(83);
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
    function ContactFullDetailsPage(navCtrl, navParams, formBuilder, contactsServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.contactsServiceProvider = contactsServiceProvider;
        this.submitAttempt = false;
        this.contactUIForm = new __WEBPACK_IMPORTED_MODULE_3__models_contact_ui_form__["a" /* ContactUIForm */]();
        this.selectedItem = navParams.get('item');
        this.saveContactFormValidate();
    }
    ContactFullDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ContactFullDetailsPage');
    };
    ContactFullDetailsPage.prototype.saveContactForm = function () {
        this.submitAttempt = true;
        // Call for save
        if (this.contactsForm.valid) {
            console.log('validddddddd----' + this.contactUIForm);
            this.contactUIForm;
            console.log('validddddddd----' + this.contactUIForm);
            this.contactsServiceProvider.saveContact(this.contactUIForm).subscribe(function (data) {
                console.log('success');
            });
            // saveContact
            // alert('This functionality will be availabel at MISDesk CRM v2.34.0');
        }
        else {
            // console.log('innnnnnnnvalidddddddd----');
        }
    };
    ContactFullDetailsPage.prototype.saveContactFormValidate = function () {
        var emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.contactsForm = this.formBuilder.group({
            "contactName": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.contactName, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
            "companyName": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.company, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ])
            ]),
            "designationStatus": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.designationStatus, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')])
            ]),
            "number1": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.number1, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9 ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
            "email1": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.email1, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(emailPattern), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
            "number2": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.number2, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9+ ]*')])
            ]),
            "number3": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.number3, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9+ ]*')])
            ]),
            "contactNote": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.contactNote, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
        });
    };
    ContactFullDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-full-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contact-full-details\contact-full-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Contact Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p>NOTE: This functionality will be available at MISDesk CRM v2.34.0</p>\n  <form [formGroup]="contactsForm">\n  \n    <div>\n      <ion-item>\n        <ion-label color="primary">NAME</ion-label>\n        <ion-input formControlName="contactName" placeholder="NAME"\n          [(ngModel)]="contactUIForm.contactName" ></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.contactName.valid  \n        && (contactsForm.controls.contactName.dirty || submitAttempt)">\n        <p>Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n          <!-- [(ngModel)]="contactUIForm.company" -->\n        <ion-label color="primary">COMPANY</ion-label>\n        <ion-input type="text" formControlName="companyName" placeholder="COMPANY"\n          ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">DESIGNATION</ion-label>\n        <ion-input formControlName="designationStatus" placeholder="DESIGNATION"\n        [(ngModel)]="contactUIForm.designationStatus"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">MOBILE</ion-label>\n        <ion-input type="number" formControlName="number1" placeholder="MOBILE"\n          [(ngModel)]="contactUIForm.number1"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.number1.valid  \n        && (contactsForm.controls.number1.dirty || submitAttempt)">\n        <p>Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">EMAIL</ion-label>\n        <ion-input type="email" formControlName="email1" placeholder="EMAIL"\n          [(ngModel)]="contactUIForm.email1"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.email1.valid  \n        && (contactsForm.controls.email1.dirty || submitAttempt)">\n        <p>Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">TELEPHONE</ion-label>\n        <ion-input type="number" formControlName="number2" placeholder="TELEPHONE"\n          [(ngModel)]="contactUIForm.number2" ></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.number2.valid  \n        && (contactsForm.controls.number2.dirty || submitAttempt)">\n        <p>Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">FAX</ion-label>\n        <ion-input type="number" formControlName="number3" placeholder="FAX"\n          [(ngModel)]="contactUIForm.number3"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.number3.valid  \n        && (contactsForm.controls.number3.dirty || submitAttempt)">\n        <p>Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea formControlName="contactNote" placeholder="NOTES"\n          [(ngModel)]="contactUIForm.contactNote"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.contactNote.valid  \n        && (contactsForm.controls.contactNote.dirty || submitAttempt)">\n        <p>Please enter a valid data.</p>\n      </ion-item>\n\n      <button type="submit" \n        ion-button full color="primary" \n        class="" (click) = "saveContactForm();">SUBMIT</button>\n\n    </div>\n  </form>  \n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contact-full-details\contact-full-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_contacts_service_contacts_service__["a" /* ContactsServiceProvider */]])
    ], ContactFullDetailsPage);
    return ContactFullDetailsPage;
}());

//# sourceMappingURL=contact-full-details.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contacts_service_contacts_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_full_details_contact_full_details__ = __webpack_require__(106);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__companies_companies__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loginModel = {};
        this.submitAttempt = false;
        this.createLoginForm();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad LoginPage');
        var checkUserSessionFlag = this.authService.checkUserSessionService();
        if (checkUserSessionFlag === true) {
            // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            // root out without login to dashboard
            // this.router.navigate(['/dashboard']); // TODO
        }
        else {
            // reset login status
            // this.authenticationService.logout();
            // this.router.navigate(['/logout']);
        }
    };
    LoginPage.prototype.createLoginForm = function () {
        this.loginFormGroup = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(150)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(300)]],
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        // const userToken = this.authService.getUserToken();
        // console.log('userToken ---- ' + userToken);
        this.submitAttempt = true;
        // this.buildForm();
        if (this.loginFormGroup.valid) {
            // Show Spinner
            // santosh.v@metworld.net
            // this.openHomePage();
            // let userDataT = {"userDetailsId":3,"firstName":null,"lastName":null,"fullName":null,"userRoleId":3,"userRoleName":"GROUP COMPANY ADMIN","userId":"santosh.v@metworld.net","emailId":null,"userHomePage":null,"userToken":"XZHgswWpNSbtX8LnOEklaw==","userModelId":null};
            // localStorage.setItem('currentUser', JSON.stringify(userDataT));
            this.authService.signIn(this.loginModel.username, this.loginModel.password)
                .subscribe(function (data) {
                // console.log('++++++++-------' + data);
                localStorage.setItem('currentUser', JSON.stringify(data));
                // this.router.navigate(['/dashboard']);
                _this.openHomePage();
            }, function (error) {
                var cusErroJson = JSON.parse(error['_body']);
                var customizedErrorMsg = cusErroJson.message + ': ' + cusErroJson.error.message;
                if (error.status === 401) {
                }
                else {
                }
            });
        }
        else {
        }
    };
    LoginPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__companies_companies__["a" /* CompaniesPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\login\login.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> MISDesk CRM Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="login-container">\n    <div style="text-align: center;">\n      \n      <img src="assets/imgs/logo.png" width="150px">\n      <h4>MISDesk CRM Login</h4>\n      <hr>\n    </div>\n    \n    <form [formGroup]="loginFormGroup" class="">\n\n      <ion-item>\n        <ion-label color="primary">USERNAME</ion-label>\n        <ion-input \n          type="email" \n          formControlName="username" \n          [(ngModel)]="loginModel.username" \n          placeholder="NAME"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="!loginFormGroup.controls.username.valid  \n        && (loginFormGroup.controls.username.dirty || submitAttempt)">\n        <p>Please enter a valid username.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">PASSWORD</ion-label>\n        <ion-input\n          type="password" \n          [(ngModel)]="loginModel.password" \n          formControlName="password" \n          placeholder="PASSWORD"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="!loginFormGroup.controls.password.valid  \n        && (loginFormGroup.controls.password.dirty || submitAttempt)">\n        <p>Please enter a valid password.</p>\n      </ion-item>\n\n      <br/>\n        <button type="submit" \n        ion-button full color="primary" \n        class="" (click) = "login();">LOGIN</button>\n      \n    </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notifications_service_notifications_service__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, notificationsServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notificationsServiceProvider = notificationsServiceProvider;
        this.activeNotification = 0;
        this.notificationsPOSList = [];
        this.notificationsPOSSubtaskList = [];
        this.notificationsTaskList = [];
        this.searchQuery = '';
        this.notificationsServiceProvider.getAllPOSNotifications().subscribe(function (data) {
            _this.notificationsPOSList = data['action'];
        });
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage.prototype.getSubNotifications = function (item) {
        var _this = this;
        this.activeNotification = item.notificationId;
        this.notificationsServiceProvider.getByModuleIdNotificationType(item.notificationModuleId, item.notificationType).subscribe(function (data) {
            _this.notificationsPOSSubtaskList = data['action'];
        });
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\notifications\notifications.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notifications</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-icon name="alert" item-start></ion-icon>\n    Notifications\n    <!-- <ion-badge item-end></ion-badge> -->\n  </ion-item>\n\n\n\n  <ion-card *ngFor="let item of notificationsPOSList">\n    <ion-card-header>\n      <ion-item>\n        <ion-icon name="" item-start *ngIf="item.notificationType === \'Project\'">P</ion-icon>\n        <ion-icon name="" item-start *ngIf="item.notificationType === \'Order\'">O</ion-icon>\n        <ion-icon name="" item-start *ngIf="item.notificationType === \'Service\'">S</ion-icon>\n        <span (click)="getSubNotifications(item);">\n          {{ item.moduleName }}\n        </span>\n\n        <ion-badge item-end *ngIf="item.unSeenNotificationCount > 0">\n          {{ item.unSeenNotificationCount }}</ion-badge>\n      </ion-item>\n    </ion-card-header>\n\n    <ion-card-content *ngIf="activeNotification === item.notificationId">\n      <span *ngFor="let item1 of notificationsPOSSubtaskList">\n        <p>\n          <ion-icon name="alert" item-start></ion-icon> {{ item1.notificatonMessage }}\n        </p>\n        <p>\n          Details: {{ item1.otherData }}\n        </p>\n        <hr/>\n      </span>\n\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_notifications_service_notifications_service__["a" /* NotificationsServiceProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_service_orders_service__ = __webpack_require__(172);
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projects_service_projects_service__ = __webpack_require__(173);
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

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_service_services_service__ = __webpack_require__(174);
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsSaveUpdatePage; });
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

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_details_task_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_details_save_update_task_details_save_update__ = __webpack_require__(113);
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
            selector: 'page-tasks',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\tasks\tasks.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tasks</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar>\n      <div class="mob-task-hdr">\n          <a href="#" class="arrow arrow-prev" (click)=\'getAllTaskForPrevDate();\'>\n            <</a>\n              <p>\n                <span>\n                  <ion-datetime displayFormat="DD MMM YYYY" min="2016" max="2020" \n                    (ionChange)="changeTaskDate(selectedTaskDate)" [(ngModel)]="selectedTaskDate"></ion-datetime>\n                </span>\n              </p>\n              <a href="#" class="arrow arrow-next" (click)=\'getAllTaskForNextDate();\'>></a>\n        </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <!-- <ion-fab bottom right>\n      <button ion-fab color="danger" (click)=\'openTaskSaveUpdateDetails("");\'>\n        <ion-icon name="add"></ion-icon></button>\n  </ion-fab>  -->\n\n  <div class="mob-task-container">\n    \n    <ul class="mob-task-list">\n      <li *ngIf="taskDetailsFormList && taskDetailsFormList.length === 0">\n        <div class="task-info">\n          <span>\n            No tasks\n          </span>\n        </div>\n\n      </li>\n      \n      <li *ngFor="let obj of taskDetailsFormList" (click)=\'openTaskDetails(obj);\'>\n        <div class="task-list-top">\n          <div class="task-list-top-cell">\n            <span class="star starred" *ngIf="obj.taskDetailsObj.isStarred === \'YES\'">\n              <ion-icon name="star"></ion-icon>\n            </span>\n            <span class="star" *ngIf="obj.taskDetailsObj.isStarred === \'NO\'">\n              <ion-icon name="star"></ion-icon>\n            </span>\n          </div>\n\n          <div class="task-cate">\n            <p>{{obj.taskDetailsObj.companyName}}</p>\n          </div>\n          <div class="task-list-top-cell">\n            <span class="task-compl-action completed" *ngIf="obj.taskDetailsObj.isCompleted === \'YES\'"></span>\n            <span class="task-compl-action" *ngIf="obj.taskDetailsObj.isCompleted === \'NO\'"></span>\n          </div>\n        </div>\n        <div class="task-title">\n          {{obj.taskDetailsObj.taskName}}\n        </div>\n        <div class="task-info">\n          <span>\n            <ion-icon name="calendar"></ion-icon>\n            {{obj.taskDetailsObj.startDate | date: \'dd MMM yyyy\'}}\n          </span>\n          <span>\n            <ion-icon name="git-pull-request"></ion-icon>{{obj.taskDetailsObj.subTasksCount}}</span>\n          <span>\n            <ion-icon name="chatbubbles"></ion-icon>{{obj.taskDetailsObj.commentsCount}}</span>\n        </div>\n        <div class="task-users-list">\n          <div class="assigned-user">\n            <label>Assigned to</label>\n            <div class="user-block" *ngFor="let mappedUser of obj.taskDetailsObj.mappedUserList">\n              <span class="photo">\n                <span>\n                  <ion-icon name="person"></ion-icon>\n                </span>\n              </span>\n              <span class="name">{{mappedUser.userFullName}}</span>\n            </div>\n          </div>\n          <div class="assigned-by" *ngFor="let mappedUser of obj.taskDetailsObj.mappedUserList">\n            <div *ngIf="mappedUser.isMine === \'YESs\'">\n              <label>by</label>\n              <div class="user-block">\n                <span class="photo">\n                  <span>\n                    <ion-icon name="person"></ion-icon>\n                  </span>\n                </span>\n                <span class="name">{{mappedUser.userFullName}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n\n    </ul>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\tasks\tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__["a" /* TasksServiceProvider */]])
    ], TasksPage);
    return TasksPage;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 115:
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
            selector: 'page-task-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details\task-details.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Task Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf="selectedItem">\n\n    <div class="mob-task-container">\n\n      <ul class="mob-task-list">\n        <li *ngIf="selectedItem">\n\n          <div class="task-list-top">\n            <div class="task-list-top-cell">\n              <span class="star starred" *ngIf="selectedItem.taskDetailsObj.isStarred === \'YES\'">\n                <ion-icon name="star"></ion-icon>\n              </span>\n              <span class="star" *ngIf="selectedItem.taskDetailsObj.isStarred === \'NO\'">\n                <ion-icon name="star"></ion-icon>\n              </span>\n            </div>\n\n            <div class="task-cate">\n              <p>{{selectedItem.taskDetailsObj.companyName}}</p>\n            </div>\n            <div class="task-list-top-cell">\n              <span class="task-compl-action completed" \n                *ngIf="selectedItem.taskDetailsObj.isCompleted === \'YES\'"></span>\n              <span class="task-compl-action"\n                *ngIf="selectedItem.taskDetailsObj.isCompleted === \'NO\'"></span>\n            </div>\n          </div>\n\n          <div class="task-title">{{selectedItem.taskDetailsObj.taskName}}</div>\n          <div class="task-info">\n            <span>\n              <ion-icon name="calendar"></ion-icon>\n              {{selectedItem.taskDetailsObj.startDate | date: \'dd MMM yyyy\'}}</span>\n            <span (click)=\'toggleSubtasksFn();\'>\n              <ion-icon name="git-pull-request"></ion-icon>\n              {{selectedItem.taskDetailsObj.subTasksCount}}</span>\n            <span>\n              <ion-icon name="chatbubbles"></ion-icon>{{selectedItem.taskDetailsObj.commentsCount}}</span>\n          </div>\n\n          <div class="task-detail-subtask" *ngIf="toggleSubtasksFlag">\n\n            <ul class="subtask-list">\n              <li *ngFor="let subTaskObj of selectedItem.taskDetailsObj.subTasksList">\n                <p>\n                  <input type="checkbox" hidden/> {{subTaskObj.name}}</p>\n              </li>\n            </ul>\n\n          </div>\n\n          <div class="task-users-list">\n            <div class="assigned-user">\n              <label>Assigned to</label>\n              <div class="user-block" *ngFor="let mappedUser of selectedItem.taskDetailsObj.mappedUserList">\n                <span class="photo">\n                  <span>\n                    <ion-icon name="person"></ion-icon>\n                  </span>\n                </span>\n                <span class="name">{{mappedUser.userFullName}}</span>\n              </div>\n            </div>\n            <div class="assigned-by" *ngFor="let mappedUser of selectedItem.taskDetailsObj.mappedUserList">\n              <div *ngIf="mappedUser.isMine === \'YESs\'">\n                <label>by</label>\n                <div class="user-block">\n                  <span class="photo">\n                    <span>\n                      <ion-icon name="person"></ion-icon>\n                    </span>\n                  </span>\n                  <span class="name">{{mappedUser.userFullName}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </li>\n\n      </ul>\n      <div class="mob-comments">\n        <ul class="mob-comment-list">\n          <!-- <li *ngIf="selectedItem.taskDetailsObj.taskCommentsList.length === 0" class="comment-by-me">\n              No comments\n            </li> -->\n          <li *ngFor="let subTasksObj of selectedItem.taskDetailsObj.taskCommentsList" class="comment-by-me">\n            <div class="comment-content">\n              <p class="comment-text">{{subTasksObj.name}}</p>\n              <p classs="date">\n                <ion-icon name="calendar"></ion-icon> {{subTasksObj.data}}</p>\n            </div>\n            <div class="user-block">\n              <span class="photo">\n                <span>\n                  <ion-icon name="person" role="img" class="icon icon-md ion-md-person" aria-label="person" ng-reflect-name="person"></ion-icon>\n                </span>\n              </span>\n              <p>{{subTasksObj.userFullName}}</p>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n<!-- <ion-footer no-border>\n  <ion-toolbar>\n      <ion-item>\n        <ion-label color="primary" floating>Add Comments Here...</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n  </ion-toolbar>\n</ion-footer> -->\n\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details\task-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TaskDetailsPage);
    return TaskDetailsPage;
}());

//# sourceMappingURL=task-details.js.map

/***/ }),

/***/ 128:
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
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/companies/companies.module": [
		424,
		10
	],
	"../pages/contact-full-details/contact-full-details.module": [
		425,
		9
	],
	"../pages/contacts/contacts.module": [
		426,
		8
	],
	"../pages/login/login.module": [
		427,
		7
	],
	"../pages/notifications/notifications.module": [
		428,
		6
	],
	"../pages/orders/orders.module": [
		429,
		5
	],
	"../pages/projects/projects.module": [
		430,
		4
	],
	"../pages/services/services.module": [
		431,
		3
	],
	"../pages/task-details-save-update/task-details-save-update.module": [
		432,
		2
	],
	"../pages/task-details/task-details.module": [
		434,
		1
	],
	"../pages/tasks/tasks.module": [
		433,
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
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
        var userToken = this.authService.getUserToken();
        // console.log('userToken ---- ' + userToken);
        var urlToCall = CompaniesServiceProvider_1.GET_ALL_DETAILS + '/' + userToken + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
        // .catch(this.handleError);
    };
    CompaniesServiceProvider.prototype.handleError = function (error) {
        var errorJson = error;
        if (errorJson) {
            console.error(errorJson);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw('' || error);
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error);
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationsServiceProvider = (function () {
    function NotificationsServiceProvider(http, authService) {
        this.http = http;
        this.authService = authService;
        // console.log('Hello NotificationsServiceProvider Provider');
    }
    NotificationsServiceProvider_1 = NotificationsServiceProvider;
    NotificationsServiceProvider.prototype.getAllTasksNotifications = function () {
        var userToken = this.authService.getUserToken();
        var urlToCall = NotificationsServiceProvider_1.GET_ALL_TASKS_NOTIFICATIONS
            + '/' + userToken
            + '/' + 0
            + '/' + 1
            + '/' + 0 + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    NotificationsServiceProvider.prototype.getAllPOSNotifications = function () {
        var userToken = this.authService.getUserToken();
        var urlToCall = NotificationsServiceProvider_1.GET_ALL_POS_NOTIFICATIONS
            + '/' + userToken
            + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    NotificationsServiceProvider.prototype.getByModuleIdNotificationType = function (moduleId, notificationType) {
        var userToken = this.authService.getUserToken();
        var urlToCall = NotificationsServiceProvider_1.GET_BY_MODID_NOTITYPE
            + '/' + userToken
            + '/' + moduleId
            + '/' + notificationType
            + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    NotificationsServiceProvider.GET_ALL_TASKS_NOTIFICATIONS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/notification/getByUser';
    NotificationsServiceProvider.GET_ALL_POS_NOTIFICATIONS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/notification/getPOSNotification';
    NotificationsServiceProvider.GET_BY_MODID_NOTITYPE = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/notification/getByModIdAndType';
    NotificationsServiceProvider = NotificationsServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], NotificationsServiceProvider);
    return NotificationsServiceProvider;
    var NotificationsServiceProvider_1;
}());

//# sourceMappingURL=notifications-service.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(23);
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
        var userToken = this.authService.getUserToken();
        // console.log('userToken ---- ' + userToken);
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(23);
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
        var userToken = this.authService.getUserToken();
        // console.log('userToken ---- ' + userToken);
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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(23);
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
        var userToken = this.authService.getUserToken();
        // console.log('userToken ---- ' + userToken);
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

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service_authentication_service__ = __webpack_require__(23);
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
    function TasksServiceProvider(http, authService) {
        this.http = http;
        this.authService = authService;
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
        var userToken = this.authService.getUserToken();
        // console.log('userToken ---- ' + userToken);
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
        var userToken = this.authService.getUserToken();
        // console.log('userToken ---- ' + userToken);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], TasksServiceProvider);
    return TasksServiceProvider;
    var TasksServiceProvider_1;
}());

//# sourceMappingURL=tasks-service.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationServiceProvider = (function () {
    function AuthenticationServiceProvider(http) {
        this.http = http;
        //  public navCtrl: NavController
        // console.log('Hello AuthenticationServiceProvider Provider');
    }
    AuthenticationServiceProvider_1 = AuthenticationServiceProvider;
    AuthenticationServiceProvider.prototype.openLoginPage = function () {
        // this.navCtrl.setRoot(LoginPage);
    };
    AuthenticationServiceProvider.prototype.checkUserSessionService = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            var currentUserJson = JSON.parse(currentUser);
            if (currentUserJson.phone !== '') {
                return true;
            }
            else {
                localStorage.removeItem('currentUser');
                return false;
            }
        }
        else {
            return false;
        }
    };
    AuthenticationServiceProvider.prototype.getUserToken = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            var currentUserJson = JSON.parse(currentUser);
            if (currentUserJson.userToken) {
                return currentUserJson.userToken;
            }
            else {
                // remove user from local storage to log user out
                localStorage.removeItem('currentUser');
                this.openLoginPage();
                // this.router.navigate(['/login']);
                return '';
            }
        }
        else {
            // this.router.navigate(['/login']);
            // this.openLoginPage();
            return '';
            // return false;
        }
    };
    AuthenticationServiceProvider.prototype.logoutService = function () {
        localStorage.removeItem('currentUser');
        // this.openLoginPage();
    };
    /**
      * Check token for given user
      * @param username
      * @param token
     */
    AuthenticationServiceProvider.prototype.checkToken = function (username, token) {
        var urlTemp = AuthenticationServiceProvider_1.TOKEN_VALID_URL + token + ".do";
        return this.http.get(urlTemp)
            .map(function (response) { return response.json(); });
    };
    /**
        * Check token for given user
        * @param username
        * @param token
       */
    AuthenticationServiceProvider.prototype.checkTokenData = function (token) {
        var urlTemp = AuthenticationServiceProvider_1.TOKEN_CHECK_URL + token;
        return this.http.get(AuthenticationServiceProvider_1.TOKEN_CHECK_URL + token + ".do")
            .map(function (response) {
            // let userSession = response.json() as UserSessionDataForm;
            var userSession = response.json();
            localStorage.setItem('currentUser', JSON.stringify(userSession));
        });
    };
    /**
        * Fetches and saves token for given user
        * @param username
        * @param password
        */
    AuthenticationServiceProvider.prototype.signIn = function (username, password) {
        var urlTemp = AuthenticationServiceProvider_1.SIGNIN_URL + username + '/' + password + ".do";
        return this.http.get(urlTemp)
            .map(function (res) { return res; });
        // .map((response: Response) => {
        // let userSession = response.json() as UserSessionDataForm;
        // let userSession = response.json();
        // console.log('++++++++-------' + userSession);
        // localStorage.setItem('currentUser', JSON.stringify(userSession));
        // this.reloadPage();
        // });
    };
    AuthenticationServiceProvider.SIGNIN_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/security/loginByGet/';
    AuthenticationServiceProvider.TOKEN_VALID_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/security/account/';
    AuthenticationServiceProvider.TOKEN_CHECK_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/security/token/checkSession/';
    AuthenticationServiceProvider.REFRESH_TOKEN_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/security/token/refresh/';
    AuthenticationServiceProvider = AuthenticationServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationServiceProvider);
    return AuthenticationServiceProvider;
    var AuthenticationServiceProvider_1;
}());

//# sourceMappingURL=authentication-service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    // apiUrl: 'http://localhost:8080/MISDeskCRM',
    // apiUrl: 'http://192.168.1.28:8080/MISDeskCRM',
    apiUrl: 'http://misdesk.com/MISDeskCRM',
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 338:
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

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(361);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tasks_tasks__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_task_details_task_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_task_details_save_update_task_details_save_update__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_full_details_contact_full_details__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_companies_companies__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_services_services__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_authentication_service_authentication_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_companies_service_companies_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_contacts_service_contacts_service__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_orders_service_orders_service__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_projects_service_projects_service__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_services_service_services_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_tasks_service_tasks_service__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_notifications_service_notifications_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_notifications_notifications__ = __webpack_require__(109);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_notifications_notifications__["a" /* NotificationsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/companies/companies.module#CompaniesPageModule', name: 'CompaniesPage', segment: 'companies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-full-details/contact-full-details.module#ContactFullDetailsPageModule', name: 'ContactFullDetailsPage', segment: 'contact-full-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/services/services.module#ServicesPageModule', name: 'ServicesPage', segment: 'services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task-details-save-update/task-details-save-update.module#TaskDetailsSaveUpdatePageModule', name: 'TaskDetailsSaveUpdatePage', segment: 'task-details-save-update', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_notifications_notifications__["a" /* NotificationsPage */]
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
                __WEBPACK_IMPORTED_MODULE_24__providers_tasks_service_tasks_service__["a" /* TasksServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_notifications_service_notifications_service__["a" /* NotificationsServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUIForm; });
var ContactUIForm = (function () {
    function ContactUIForm() {
    }
    return ContactUIForm;
}());

//# sourceMappingURL=contact-ui-form.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 176,
	"./af.js": 176,
	"./ar": 177,
	"./ar-dz": 178,
	"./ar-dz.js": 178,
	"./ar-kw": 179,
	"./ar-kw.js": 179,
	"./ar-ly": 180,
	"./ar-ly.js": 180,
	"./ar-ma": 181,
	"./ar-ma.js": 181,
	"./ar-sa": 182,
	"./ar-sa.js": 182,
	"./ar-tn": 183,
	"./ar-tn.js": 183,
	"./ar.js": 177,
	"./az": 184,
	"./az.js": 184,
	"./be": 185,
	"./be.js": 185,
	"./bg": 186,
	"./bg.js": 186,
	"./bm": 187,
	"./bm.js": 187,
	"./bn": 188,
	"./bn.js": 188,
	"./bo": 189,
	"./bo.js": 189,
	"./br": 190,
	"./br.js": 190,
	"./bs": 191,
	"./bs.js": 191,
	"./ca": 192,
	"./ca.js": 192,
	"./cs": 193,
	"./cs.js": 193,
	"./cv": 194,
	"./cv.js": 194,
	"./cy": 195,
	"./cy.js": 195,
	"./da": 196,
	"./da.js": 196,
	"./de": 197,
	"./de-at": 198,
	"./de-at.js": 198,
	"./de-ch": 199,
	"./de-ch.js": 199,
	"./de.js": 197,
	"./dv": 200,
	"./dv.js": 200,
	"./el": 201,
	"./el.js": 201,
	"./en-au": 202,
	"./en-au.js": 202,
	"./en-ca": 203,
	"./en-ca.js": 203,
	"./en-gb": 204,
	"./en-gb.js": 204,
	"./en-ie": 205,
	"./en-ie.js": 205,
	"./en-nz": 206,
	"./en-nz.js": 206,
	"./eo": 207,
	"./eo.js": 207,
	"./es": 208,
	"./es-do": 209,
	"./es-do.js": 209,
	"./es-us": 210,
	"./es-us.js": 210,
	"./es.js": 208,
	"./et": 211,
	"./et.js": 211,
	"./eu": 212,
	"./eu.js": 212,
	"./fa": 213,
	"./fa.js": 213,
	"./fi": 214,
	"./fi.js": 214,
	"./fo": 215,
	"./fo.js": 215,
	"./fr": 216,
	"./fr-ca": 217,
	"./fr-ca.js": 217,
	"./fr-ch": 218,
	"./fr-ch.js": 218,
	"./fr.js": 216,
	"./fy": 219,
	"./fy.js": 219,
	"./gd": 220,
	"./gd.js": 220,
	"./gl": 221,
	"./gl.js": 221,
	"./gom-latn": 222,
	"./gom-latn.js": 222,
	"./gu": 223,
	"./gu.js": 223,
	"./he": 224,
	"./he.js": 224,
	"./hi": 225,
	"./hi.js": 225,
	"./hr": 226,
	"./hr.js": 226,
	"./hu": 227,
	"./hu.js": 227,
	"./hy-am": 228,
	"./hy-am.js": 228,
	"./id": 229,
	"./id.js": 229,
	"./is": 230,
	"./is.js": 230,
	"./it": 231,
	"./it.js": 231,
	"./ja": 232,
	"./ja.js": 232,
	"./jv": 233,
	"./jv.js": 233,
	"./ka": 234,
	"./ka.js": 234,
	"./kk": 235,
	"./kk.js": 235,
	"./km": 236,
	"./km.js": 236,
	"./kn": 237,
	"./kn.js": 237,
	"./ko": 238,
	"./ko.js": 238,
	"./ky": 239,
	"./ky.js": 239,
	"./lb": 240,
	"./lb.js": 240,
	"./lo": 241,
	"./lo.js": 241,
	"./lt": 242,
	"./lt.js": 242,
	"./lv": 243,
	"./lv.js": 243,
	"./me": 244,
	"./me.js": 244,
	"./mi": 245,
	"./mi.js": 245,
	"./mk": 246,
	"./mk.js": 246,
	"./ml": 247,
	"./ml.js": 247,
	"./mr": 248,
	"./mr.js": 248,
	"./ms": 249,
	"./ms-my": 250,
	"./ms-my.js": 250,
	"./ms.js": 249,
	"./mt": 251,
	"./mt.js": 251,
	"./my": 252,
	"./my.js": 252,
	"./nb": 253,
	"./nb.js": 253,
	"./ne": 254,
	"./ne.js": 254,
	"./nl": 255,
	"./nl-be": 256,
	"./nl-be.js": 256,
	"./nl.js": 255,
	"./nn": 257,
	"./nn.js": 257,
	"./pa-in": 258,
	"./pa-in.js": 258,
	"./pl": 259,
	"./pl.js": 259,
	"./pt": 260,
	"./pt-br": 261,
	"./pt-br.js": 261,
	"./pt.js": 260,
	"./ro": 262,
	"./ro.js": 262,
	"./ru": 263,
	"./ru.js": 263,
	"./sd": 264,
	"./sd.js": 264,
	"./se": 265,
	"./se.js": 265,
	"./si": 266,
	"./si.js": 266,
	"./sk": 267,
	"./sk.js": 267,
	"./sl": 268,
	"./sl.js": 268,
	"./sq": 269,
	"./sq.js": 269,
	"./sr": 270,
	"./sr-cyrl": 271,
	"./sr-cyrl.js": 271,
	"./sr.js": 270,
	"./ss": 272,
	"./ss.js": 272,
	"./sv": 273,
	"./sv.js": 273,
	"./sw": 274,
	"./sw.js": 274,
	"./ta": 275,
	"./ta.js": 275,
	"./te": 276,
	"./te.js": 276,
	"./tet": 277,
	"./tet.js": 277,
	"./th": 278,
	"./th.js": 278,
	"./tl-ph": 279,
	"./tl-ph.js": 279,
	"./tlh": 280,
	"./tlh.js": 280,
	"./tr": 281,
	"./tr.js": 281,
	"./tzl": 282,
	"./tzl.js": 282,
	"./tzm": 283,
	"./tzm-latn": 284,
	"./tzm-latn.js": 284,
	"./tzm.js": 283,
	"./uk": 285,
	"./uk.js": 285,
	"./ur": 286,
	"./ur.js": 286,
	"./uz": 287,
	"./uz-latn": 288,
	"./uz-latn.js": 288,
	"./uz.js": 287,
	"./vi": 289,
	"./vi.js": 289,
	"./x-pseudo": 290,
	"./x-pseudo.js": 290,
	"./yo": 291,
	"./yo.js": 291,
	"./zh-cn": 292,
	"./zh-cn.js": 292,
	"./zh-hk": 293,
	"./zh-hk.js": 293,
	"./zh-tw": 294,
	"./zh-tw.js": 294
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
webpackContext.id = 397;

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tasks_tasks__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contacts_contacts__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_companies_companies__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_projects_projects__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_orders_orders__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_services_services__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__ = __webpack_require__(109);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */];
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
            { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_12__pages_notifications_notifications__["a" /* NotificationsPage */] },
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
    MyApp.prototype.logoutMainFn = function () {
        localStorage.removeItem('currentUser');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="logoutMainFn()">\n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_companies_service_companies_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
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

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(23);
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
        var userToken = this.authService.getUserToken();
        // console.log('userToken ---- ' + userToken);
        var urlToCall = ContactsServiceProvider_1.GET_ALL_DETAILS + '/' + userToken + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    ContactsServiceProvider.prototype.saveContact = function (contactUIForm) {
        var userToken = this.authService.getUserToken();
        console.log('userToken ---- ' + userToken);
        contactUIForm.userToken = userToken;
        var urlToCall = ContactsServiceProvider_1.SAVE_CONTACT + '.do';
        console.log(JSON.stringify(contactUIForm));
        return this.http.post(urlToCall, contactUIForm)
            .map(function (res) { return res; });
    };
    ContactsServiceProvider.GET_ALL_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/contacts/all';
    ContactsServiceProvider.SAVE_CONTACT = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/contacts/save';
    ContactsServiceProvider = ContactsServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], ContactsServiceProvider);
    return ContactsServiceProvider;
    var ContactsServiceProvider_1;
}());

//# sourceMappingURL=contacts-service.js.map

/***/ })

},[339]);
//# sourceMappingURL=main.js.map