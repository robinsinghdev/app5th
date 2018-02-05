webpackJsonp([2],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_feedback_data_service_feedback_data_service__ = __webpack_require__(78);
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
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, navParams, feedbackDataServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.feedbackDataServiceProvider = feedbackDataServiceProvider;
        this.feedbackUiformList = [];
        this.toggleFlagData = false;
        var clientComUserSession = this.getUserSession();
        var cuid = clientComUserSession.idUsers;
        this.feedbackDataServiceProvider.getAllFeedbackByCuid(cuid).subscribe(function (data) {
            // console.log(data);
            _this.feedbackUiformList = data;
        });
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage.prototype.getUserSession = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            var currentUserJson = JSON.parse(currentUser);
            if (currentUserJson.phone !== '') {
                var clientCompanyUserSessionTemp = currentUserJson;
                return clientCompanyUserSessionTemp;
            }
        }
        else {
        }
    };
    FeedbackPage.prototype.showHideFeedbackData = function () {
        if (this.toggleFlagData) {
            this.toggleFlagData = false;
        }
        else {
            this.toggleFlagData = true;
        }
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\JMJApp\src\pages\feedback\feedback.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Feedback Page</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="text-align: center;">\n    <img height="100px" src="assets/imgs/logo.png" alt="your image">\n  </div>\n\n  <div *ngIf="feedbackUiformList.length === 0">\n    <h4>No feedbacks found.</h4>\n  </div>\n  <div *ngIf="feedbackUiformList.length > 0">\n    <h4>Open feedbacks</h4>\n    <ion-card *ngFor="let obj of feedbackUiformList" data-id="obj.clientFeedbackId" style="display: block;" \n      (click)="showHideFeedbackData();">\n\n      <ion-card-header *ngIf="obj.status !== \'COMPLETED\'">\n        {{obj.feedbackTopic}}\n      </ion-card-header>\n      <ion-card-content *ngIf="obj.status !== \'COMPLETED\'">\n        <!-- ID:{{obj.feedBackId}}  <br/> -->\n        Status: {{obj.status}}\n        <br/>\n\n        <span id="obj.clientFeedbackId" *ngIf="toggleFlagData">\n          <span>\n            {{obj.notes}}\n          </span>\n\n          <span *ngIf="obj.statusNotes">\n            Status Description: {{obj.statusNotes}}\n          </span>\n        </span>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf="feedbackUiformList.length > 0">\n    <h4>Resolved feedbacks</h4>\n    <ion-card *ngFor="let obj of feedbackUiformList" \n      (click)="showHideFeedbackData();">\n      <ion-card-header *ngIf="obj.status === \'COMPLETED\'">\n        {{obj.feedbackTopic}}\n      </ion-card-header>\n      <ion-card-content *ngIf="obj.status === \'COMPLETED\'">\n        <!-- ID:{{obj.feedBackId}}  <br/> -->\n        Status: {{obj.status}}\n        <br/>\n        <span id="obj.clientFeedbackId" *ngIf="toggleFlagData">\n          <span>\n            Feedback: {{obj.notes}}\n          </span>\n\n          <span *ngIf="obj.statusNotes">\n            <br/>\n            Status Description: {{obj.statusNotes}}\n          </span>\n        </span>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\JMJApp\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_feedback_data_service_feedback_data_service__["a" /* FeedbackDataServiceProvider */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/feedback/feedback.module": [
		285,
		1
	],
	"../pages/user-status/user-status.module": [
		286,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_feedback_data_service_feedback_data_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_client_company_users__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_feedback__ = __webpack_require__(283);
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
    function HomePage(navCtrl, feedbackDataServiceProvider) {
        this.navCtrl = navCtrl;
        this.feedbackDataServiceProvider = feedbackDataServiceProvider;
        this.countryCodesList = [];
        this.clientCompanyUser = new __WEBPACK_IMPORTED_MODULE_3__models_client_company_users__["a" /* ClientCompanyUsers */]();
        this.showFeedbackSavedSuccess = false;
        // public feedbackUiformList: FeedbackUiform[] = [];
        this.feedbackForm = new __WEBPACK_IMPORTED_MODULE_4__models_feedback__["a" /* Feedback */]();
        this.verifyAndShow();
    }
    HomePage.prototype.verifyAndShow = function () {
        var _this = this;
        this.sessionAvailable = this.checkUserSession();
        // console.log(this.sessionAvailable + ' -----this.sessionAvailable');
        if (this.sessionAvailable) {
            var clientComUserSession_1 = this.getUserSession();
            var phonesessionTemp = clientComUserSession_1.phone;
            // console.log('-- phonesessionTemp --- ' + phonesessionTemp);
            this.feedbackDataServiceProvider.getUserByPhone(phonesessionTemp).subscribe(function (data) {
                // console.log(data);
                var ccUserByPhoneObj = data;
                // console.log('is activeeeee -- ' + ccUserByPhoneObj.isActive);
                _this.isActiveUserStatus = ccUserByPhoneObj.isActive;
                // console.log('is activeeeee -- ' + this.isActiveUserStatus);
                if (_this.isActiveUserStatus === 1) {
                    // console.log('is activeeeee -- ');
                    var cuid = clientComUserSession_1.idUsers;
                    // console.log('is cuid -- ' + cuid);            
                    _this.feedbackDataServiceProvider.getAllFeedbackMasterList().subscribe(function (data) {
                        // console.log( "feedbackMasterList -- "  + data);
                        _this.feedbackMasterList = data;
                    });
                    // this.feedbackDataServiceProvider.getAllFeedbackByCuid(cuid).subscribe(data => {
                    //   console.log(data);
                    //   this.feedbackUiformList = data;
                    // });
                }
            });
        }
        else {
            this.feedbackDataServiceProvider.getAllCountryCodes().subscribe(function (data) {
                // console.log(data);
                _this.countryCodesList = data;
            });
        }
    };
    HomePage.prototype.saveClientCompanyFormFn = function () {
        // console.log('on saveClientCompanyFormFn ');
        // this.feedbackDataServiceProvider.saveClientCompanyUser(this.clientCompanyUser).subscribe(data => {
        //   console.log(data);
        // });
    };
    HomePage.prototype.onSumbitClientCompanyUserForm = function () {
        // this.clientCompanyUser.country.idCountries = this.idCountries;
        // console.log('on submit ');
        // console.log('on submit ' + this.clientCompanyUser + JSON.stringify(this.clientCompanyUser) );
        var _this = this;
        if (this.clientCompanyUser.username !== ''
            && this.clientCompanyUser.country !== null
            && this.clientCompanyUser.phone.length === 10
            && this.clientCompanyUser.email !== ''
            && this.clientCompanyUser.clientCompanyName !== '') {
            // console.log('submittingggggggg');
            this.feedbackDataServiceProvider.saveClientCompanyUser(this.clientCompanyUser).subscribe(function (data) {
                // console.log(data);
                var clientCompanyUserSessionTemp = data;
                localStorage.setItem('currentUser', JSON.stringify(clientCompanyUserSessionTemp));
                localStorage.setItem('phoneUser', JSON.stringify(clientCompanyUserSessionTemp.phone));
                localStorage.setItem('emailUser', JSON.stringify(clientCompanyUserSessionTemp.email));
                _this.clientCompanyUser = new __WEBPACK_IMPORTED_MODULE_3__models_client_company_users__["a" /* ClientCompanyUsers */]();
                _this.verifyAndShow();
            });
        }
        else {
            alert('Please provide valid data.');
        }
    };
    HomePage.prototype.onChangeCountry = function (selectedValue) {
        console.info("Selected:" + selectedValue);
    };
    HomePage.prototype.checkUserSession = function () {
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
    HomePage.prototype.getUserSession = function () {
        var currentUser = localStorage.getItem('currentUser');
        if (currentUser != null) {
            var currentUserJson = JSON.parse(currentUser);
            if (currentUserJson.phone !== '') {
                var clientCompanyUserSessionTemp = currentUserJson;
                return clientCompanyUserSessionTemp;
            }
        }
        else {
        }
    };
    HomePage.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    HomePage.prototype.onSumbitFeedbackForm = function () {
        var _this = this;
        this.showFeedbackSavedSuccess = false;
        // console.log('on submit ');
        // console.log('on submit ' + this.feedbackForm + JSON.stringify(this.feedbackForm) );
        // console.log('notes-- ' + this.feedbackForm.notes);
        if (this.feedbackForm.notes
            && this.feedbackForm.feedbackMaster) {
            var clientComUserSession = this.getUserSession();
            var cuid = clientComUserSession.idUsers;
            this.feedbackForm.clientCompanyUser = clientComUserSession;
            this.feedbackDataServiceProvider.saveFeedbackForUser(this.feedbackForm).subscribe(function (data) {
                _this.showFeedbackSavedSuccess = true;
                // console.log(data);
                var feedbackTemp = data;
                // console.log(feedbackTemp + ' ----------' );
                _this.feedbackForm = new __WEBPACK_IMPORTED_MODULE_4__models_feedback__["a" /* Feedback */]();
                _this.feedbackForm.notes = '';
                _this.feedbackForm.feedbackMaster = null;
                // console.log('is cuid -- ' + cuid);            
                // this.feedbackDataServiceProvider.getAllFeedbackByCuid(cuid).subscribe(data => {
                //   console.log(data);
                //   this.feedbackUiformList = data;
                // });
            });
        }
        else {
            alert('Please input topic and details.');
        }
    };
    HomePage.prototype.getListFeedbackMasterList = function () {
        var _this = this;
        this.feedbackDataServiceProvider.getAllFeedbackMasterList().subscribe(function (data) {
            // console.log( "feedbackMasterList -- "  + data);
            _this.feedbackMasterList = data;
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\JMJApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>JMJ</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div style="text-align: center;">\n    <img height="100px" src="assets/imgs/logo.png" alt="your image">\n  </div>\n  <div class="" *ngIf="!sessionAvailable">\n    <h3>Registration</h3>\n\n    <div>\n      <!-- <form (ngSubmit)="onSumbitClientCompanyUserForm()" ngNativeValidate> -->\n      <ion-item>\n        <ion-label color="primary">NAME</ion-label>\n        <ion-input placeholder="NAME" [(ngModel)]="clientCompanyUser.username" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">COUNTRY CODE</ion-label>\n        <ion-select [(ngModel)]="clientCompanyUser.country" required interface="action-sheet">\n          <ion-option *ngFor="let obj of countryCodesList" [value]="obj">\n            +{{obj.countryCode}} - {{obj.country}}\n          </ion-option>\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">MOBILE</ion-label>\n        <ion-input type="number" placeholder="MOBILE" [(ngModel)]="clientCompanyUser.phone" required ng-minlength="10" ng-maxlength="10"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">EMAIL</ion-label>\n        <ion-input type="email" placeholder="EMAIL" [(ngModel)]="clientCompanyUser.email" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">COMPANY NAME</ion-label>\n        <ion-input type="text" placeholder="COMPANY NAME" [(ngModel)]="clientCompanyUser.clientCompanyName" required></ion-input>\n      </ion-item>\n\n      <br/>\n      <button ion-button block round (click)="onSumbitClientCompanyUserForm();">REGISTER</button>\n\n    </div>\n  </div>\n\n  <div class="" *ngIf="sessionAvailable">\n\n    <div *ngIf="isActiveUserStatus === 0">\n      <h4>We are processing your registration, after activation you can access the app. For any assistance: Please contcat admin at\n      marketing@jmjswitchgears.com. OR Contact us at +91 9739259475\n    </h4>\n    </div>\n    <div *ngIf="isActiveUserStatus === 2">\n      <h4>\n        We are sorry your access is revoked. Please contcat admin at marketing@jmjswitchgears.com. OR Contact us at +91 9739259475.\n      </h4>\n    </div>\n\n    <div *ngIf="isActiveUserStatus === 1">\n\n      <div>\n        <hr/>\n      </div>\n      <div>\n        <div>\n          <h4 style="text-align: center">GIVE FEEDBACK</h4>\n\n          <h4 *ngIf="showFeedbackSavedSuccess" \n            style="text-align: center; background-color: lightgreen;color: #000;padding: 5px;">\n            Feedback Submitted Successfully.</h4>\n\n          <ion-item>\n            <ion-label color="primary">FEEDBACK TOPIC</ion-label>\n            <ion-select [(ngModel)]="feedbackForm.feedbackMaster" required interface="action-sheet">\n              <ion-option *ngFor="let obj of feedbackMasterList" [value]="obj">\n                {{obj.feedbackTopic}}\n              </ion-option>\n            </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n            <ion-textarea placeholder="FEEDBACK DETAILS" [(ngModel)]="feedbackForm.notes" required></ion-textarea>\n          </ion-item>\n\n          <br/>\n          <button ion-button block round (click)="onSumbitFeedbackForm();">SUBMIT FEEDBACK</button>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\JMJApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_feedback_data_service_feedback_data_service__["a" /* FeedbackDataServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserStatusPage = (function () {
    function UserStatusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserStatusPage');
    };
    UserStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-status',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\JMJApp\src\pages\user-status\user-status.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Status Page</ion-title>\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\JMJApp\src\pages\user-status\user-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UserStatusPage);
    return UserStatusPage;
}());

//# sourceMappingURL=user-status.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_feedback_feedback__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_status_user_status__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_feedback_service_feedback_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_feedback_data_service_feedback_data_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_status_user_status__["a" /* UserStatusPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-status/user-status.module#UserStatusPageModule', name: 'UserStatusPage', segment: 'user-status', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_user_status_user_status__["a" /* UserStatusPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_feedback_service_feedback_service__["a" /* FeedbackServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_feedback_data_service_feedback_data_service__["a" /* FeedbackDataServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    // apiUrl: 'http://192.168.1.28:8080/Feedback',
    apiUrl: 'http://misdesk.com/FeedbackApp',
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { ClientCompanies } from '../pages/_models/client-companies';
// import { ClientCompanyUsers } from '../pages/_models/client-company-users';
// import { Companies } from '../pages/_models/companies';
// import { CompanyUsers } from '../pages/_models/company-users';
// import { Countries } from '../pages/_models/countries';
// import { FeedbackMaster } from '../pages/_models/feedback-master';
// import { FeedbackMedia } from '../pages/_models/feedback-media';
// import { UserListDataForm } from '../pages/_models/user-list-dataForm';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Feedback Status', component: __WEBPACK_IMPORTED_MODULE_5__pages_feedback_feedback__["a" /* FeedbackPage */] },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\JMJApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer>\n      <ion-item> \n        v JMJApp v0.0.1\n        </ion-item>\n  </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\JMJApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientCompanyUsers; });
var ClientCompanyUsers = (function () {
    function ClientCompanyUsers() {
    }
    return ClientCompanyUsers;
}());

//# sourceMappingURL=client-company-users.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feedback; });
var Feedback = (function () {
    function Feedback() {
        this.feedBackStatus = 'In Progress';
    }
    Feedback.prototype.setFeedbackMaster = function (feedbackMaster) {
        this.feedbackMaster = feedbackMaster;
    };
    Feedback.prototype.setClientCompanyUser = function (clientCompanyUser) {
        this.clientCompanyUser = clientCompanyUser;
        console.log('clientUser is set');
    };
    return Feedback;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedbackServiceProvider = (function () {
    function FeedbackServiceProvider(http) {
        this.http = http;
        console.log('Hello FeedbackServiceProvider Provider');
    }
    FeedbackServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FeedbackServiceProvider);
    return FeedbackServiceProvider;
}());

//# sourceMappingURL=feedback-service.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackDataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackDataServiceProvider = (function () {
    function FeedbackDataServiceProvider(http) {
        this.http = http;
        // console.log('Hello FeedbackDataServiceProvider Provider');
    }
    FeedbackDataServiceProvider_1 = FeedbackDataServiceProvider;
    FeedbackDataServiceProvider.prototype.checkUserSessionService = function () {
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
    FeedbackDataServiceProvider.prototype.logoutService = function () {
        localStorage.removeItem('currentUser');
    };
    FeedbackDataServiceProvider.prototype.getAllCountryCodes = function () {
        var urlToCall = FeedbackDataServiceProvider_1.GET_ALL_COUNTRYCODES;
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    FeedbackDataServiceProvider.prototype.saveClientCompanyUser = function (clientCompanyUsers) {
        return this.http.post(FeedbackDataServiceProvider_1.SAVE_CLIENT_COMPANY_USER + '/', clientCompanyUsers);
    };
    FeedbackDataServiceProvider.prototype.getUserByPhone = function (phoneNumber) {
        var urlToCall = FeedbackDataServiceProvider_1.GET_USER_BY_PHONE + '/' + phoneNumber;
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    FeedbackDataServiceProvider.prototype.getAllFeedbackByCuid = function (cuid) {
        var urlToCall = FeedbackDataServiceProvider_1.GET_ALL_FEEDBACKS_BY_CUID + '/' + cuid;
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    FeedbackDataServiceProvider.prototype.saveFeedbackForUser = function (userFeedbackForm) {
        var urlToCall = FeedbackDataServiceProvider_1.SAVE_FEEDBACK_FOR_USER;
        return this.http.post(urlToCall + '/', userFeedbackForm);
    };
    FeedbackDataServiceProvider.prototype.getAllFeedbackMasterList = function () {
        var urlToCall = FeedbackDataServiceProvider_1.GET_ALL_FEEDBACKS_MASTER;
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    FeedbackDataServiceProvider.GET_ALL_COUNTRYCODES = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/countries/all';
    FeedbackDataServiceProvider.SAVE_CLIENT_COMPANY_USER = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/clientCompanyUsers/saveOrUpdate';
    FeedbackDataServiceProvider.GET_USER_BY_PHONE = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/clientCompanyUsers/getListByPhone';
    FeedbackDataServiceProvider.GET_ALL_FEEDBACKS_BY_CUID = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/feedback/getListByData';
    FeedbackDataServiceProvider.GET_ALL_FEEDBACKS_MASTER = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/feedbackMaster/all';
    FeedbackDataServiceProvider.SAVE_FEEDBACK_FOR_USER = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/feedback/saveOrUpdate';
    FeedbackDataServiceProvider = FeedbackDataServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FeedbackDataServiceProvider);
    return FeedbackDataServiceProvider;
    var FeedbackDataServiceProvider_1;
}());

//# sourceMappingURL=feedback-data-service.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map