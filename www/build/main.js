webpackJsonp([18],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_companies_service_companies_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_company__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_view_details_contact_view_details__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_full_details_contact_full_details__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CompanyDetailsPage = (function () {
    function CompanyDetailsPage(navCtrl, navParams, authService, companiesServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.companiesServiceProvider = companiesServiceProvider;
        this.companyDetails = new __WEBPACK_IMPORTED_MODULE_5__models_company__["a" /* Company */]();
        this.contactsList = [];
        this.organizationString = "";
        this.addressString = "";
        this.createdByString = "";
        this.updatedByString = "";
        this.selectedCompany = navParams.get('selectedCompany');
        this.getCompanyDetailsByData(this.selectedCompany.companyId);
    }
    CompanyDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CompanyDetailsPage');
    };
    CompanyDetailsPage.prototype.getCompanyDetailsByData = function (dataId) {
        var _this = this;
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.companiesServiceProvider.getCompanyDetailsByData(dataId).subscribe(function (data) {
            if (data["statusCode"] === 0) {
                // Hide Loader
                _this.authService.hideLoaderFn();
                _this.companyDetails = JSON.parse(data['response']);
                if (_this.companyDetails.contactsListArray) {
                    _this.contactsList = JSON.parse(_this.companyDetails.contactsListArray);
                }
                _this.createdByString = '';
                if (_this.companyDetails.userDetailsByCreatedBy && _this.companyDetails.userDetailsByCreatedBy.fullName) {
                    _this.createdByString += _this.companyDetails.userDetailsByCreatedBy.fullName + ' on ';
                    if (_this.companyDetails.createTimestamp) {
                        _this.createdByString += __WEBPACK_IMPORTED_MODULE_6_moment_moment__(_this.companyDetails.createTimestamp).format("DD MMM YYYY HH:mm");
                    }
                }
                else {
                    _this.createdByString = '----';
                }
                _this.updatedByString = '';
                if (_this.companyDetails.userDetailsByUpdatedBy && _this.companyDetails.userDetailsByUpdatedBy.fullName) {
                    _this.updatedByString += _this.companyDetails.userDetailsByUpdatedBy.fullName + ' on ';
                    if (_this.companyDetails.updateTimestamp) {
                        _this.updatedByString += __WEBPACK_IMPORTED_MODULE_6_moment_moment__(_this.companyDetails.updateTimestamp).format("DD MMM YYYY HH:mm");
                    }
                }
                else {
                    _this.updatedByString = '----';
                }
                if (_this.companyDetails.organization && _this.companyDetails.organization.organizationName) {
                    _this.organizationString = _this.companyDetails.organization.organizationName;
                }
                else {
                    _this.organizationString = '----';
                }
                _this.addressString = "";
                if (_this.companyDetails.address) {
                    if (_this.companyDetails.address.addressLine1) {
                        _this.addressString += _this.companyDetails.address.addressLine1;
                    }
                    if (_this.companyDetails.address.addressLine2) {
                        _this.addressString += ", " + _this.companyDetails.address.addressLine2;
                    }
                    if (_this.companyDetails.address.state && _this.companyDetails.address.state.name) {
                        _this.addressString += ", " + _this.companyDetails.address.state.name;
                    }
                    if (_this.companyDetails.address.country.name) {
                        _this.addressString += ", " + _this.companyDetails.address.country.name;
                    }
                    if (_this.companyDetails.address.pincode) {
                        _this.addressString += "- " + _this.companyDetails.address.pincode;
                    }
                }
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    };
    CompanyDetailsPage.prototype.viewContactDetails = function (selectedContact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contact_view_details_contact_view_details__["a" /* ContactViewDetailsPage */], {
            selectedContact: selectedContact
        });
    };
    CompanyDetailsPage.prototype.addContactDetails = function (selectedContact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__contact_full_details_contact_full_details__["a" /* ContactFullDetailsPage */], {
            selectedContact: selectedContact
        });
    };
    CompanyDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-company-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\company-details\company-details.html"*/'<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Company: {{ companyDetails.companyName }}</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item text-wrap>\n        <strong class="color-primary">NAME</strong><br/>\n      {{ companyDetails.companyName }}\n    </ion-item>\n\n<!--     \n      <ion-item text-wrap>\n        <strong class="color-primary">Company UID</strong><br/>\n         {{ companyDetails.companyUniqueId }}\n      </ion-item> \n    -->\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Category</strong><br/>\n      {{ companyDetails.mCompanyCategory }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Business Type</strong><br/>\n      {{ companyDetails.businessType }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Interest</strong><br/>\n      {{ companyDetails.companyIntrest }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Website</strong><br/>\n      <a href="http://{{ companyDetails.website }}">{{ companyDetails.website }}</a>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Address</strong><br/>\n      {{ addressString }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Created By/Last Updated By</strong><br/>\n        {{ createdByString }}/{{ updatedByString }}\n    </ion-item>\n\n    <ion-item text-wrap>\n        <strong class="color-primary">Additional Info</strong><br/>\n        {{ companyDetails.additionalInfo }}\n    </ion-item>\n<!-- \n    <ion-item text-wrap>\n      <strong class="color-primary">Organization</strong><br/>\n        {{ organizationString }}\n    </ion-item> -->\n\n  </ion-list>\n\n  <div>\n    <hr/>\n    <strong class="color-primary">Company Contacts</strong><br/>\n    <ion-list>\n      <ion-item *ngFor="let item of contactsList" (click)=\'viewContactDetails(item);\'>\n          <ion-icon name="person" item-start></ion-icon>\n          {{ item.contactName }}\n        \n      </ion-item>\n    </ion-list>\n    <hr/>\n    <button type="button" ion-button color="danger" text-uppercase class="" \n    (click)=\'addContactDetails("");\'>\n      ADD CONTACT\n    </button>\n    <hr/>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\company-details\company-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_companies_service_companies_service__["a" /* CompaniesServiceProvider */]])
    ], CompanyDetailsPage);
    return CompanyDetailsPage;
}());

//# sourceMappingURL=company-details.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanySaveUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__companies_companies__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_company__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_companies_service_companies_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_common_model__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CompanySaveUpdatePage = (function () {
    function CompanySaveUpdatePage(navCtrl, navParams, formBuilder, authService, companiesServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.companiesServiceProvider = companiesServiceProvider;
        this.submitAttempt = false;
        this.companyObj = new __WEBPACK_IMPORTED_MODULE_6__models_company__["a" /* Company */]();
        this.countriesList = [];
        var countryTemp = new __WEBPACK_IMPORTED_MODULE_8__models_common_model__["a" /* CommonModel */]();
        countryTemp.id = 1;
        countryTemp.name = 'India';
        this.countriesList[0] = countryTemp;
        this.selectedCompany = navParams.get('selectedCompany');
        if (this.selectedCompany) {
            this.selectedCompany = this.selectedCompany;
        }
        this.saveUpdateFormValidate();
    }
    CompanySaveUpdatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanySaveUpdatePage');
    };
    CompanySaveUpdatePage.prototype.saveUpdateCompany = function () {
        var _this = this;
        this.submitAttempt = true;
        // Call for save
        console.log('validddddddd----' + this.companyObjFormGroup.valid);
        console.log('validddddddd----' + this.companyObj);
        console.log('validddddddd----' + JSON.stringify(this.companyObj));
        if (this.companyObjFormGroup.valid) {
            // Show Loader
            this.authService.showLoaderFn('');
            this.companiesServiceProvider.saveCompany(this.companyObj).subscribe(function (data) {
                if (data["statusCode"] === 0) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__companies_companies__["a" /* CompaniesPage */]);
                    // Hide Loader
                    _this.authService.hideLoaderFn();
                    _this.authService.showMessageToastFn('Contact saved successfully.', 'success');
                }
                else {
                    _this.authService.handleResponseStatusFn(data);
                    if (data["statusCode"] === 2) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                    }
                }
            }, function (err) {
                // Hide Loader and Show Message
                _this.authService.handleErrorFn(err);
                if (err.status === 401) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                }
            });
        }
    };
    // "groupCompany": new FormControl(this.companyObj.groupCompany, [
    //   Validators.compose([Validators.required])
    // ]),
    CompanySaveUpdatePage.prototype.isValidName = function (control) {
        if (isNaN(control.value)) {
            return {
                "Please enter a valid value.": true
            };
        }
        if (control.value.maxLength <= 10) {
            return {
                "not more than 20 chars": true
            };
        }
        return null;
    };
    CompanySaveUpdatePage.prototype.saveUpdateFormValidate = function () {
        var emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.companyObjFormGroup = this.formBuilder.group({
            // "companyName": ['', this.isValidName],
            "companyName": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.companyName, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z0-9 ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
            "website": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.website, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z0-9. ]*')])
            ]),
            "addressLine1": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.addressLine1, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')])
            ]),
            "addressLine2": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.addressLine2, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100)])
            ]),
            "country": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.country, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
            "state": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.state, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100)])
            ]),
            "city": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.city, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100)])
            ]),
            "pincode": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.pincode, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20)])
            ]),
            "number1": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.number1, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(20),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9 ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
            "email1": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.email1, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern(emailPattern), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
            "number2": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.number2, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9+ ]*')])
            ]),
            "number3": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.number3, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[0-9+ ]*')])
            ]),
            "additionalInfo": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.companyObj.additionalInfo, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')])
            ]),
        });
    };
    CompanySaveUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-company-save-update',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\company-save-update\company-save-update.html"*/'<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Company</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="companyObjFormGroup">\n\n    <div>\n      <ion-item>\n        <ion-label color="primary" text-uppercase>NAME</ion-label>\n        <ion-input formControlName="companyName" placeholder="NAME" \n          [(ngModel)]="companyObj.companyName"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.companyName.valid  \n          && (companyObjFormGroup.controls.companyName.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase >Website</ion-label>\n        <ion-input formControlName="website" placeholder="Website" \n          [(ngModel)]="companyObj.website"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.website.valid  \n          && (companyObjFormGroup.controls.website.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <!-- Address -->\n      <ion-item>\n        <ion-label color="primary" text-uppercase>Address Line 1</ion-label>\n        <ion-input formControlName="addressLine1" placeholder="Address Line 1" \n          [(ngModel)]="companyObj.addressLine1"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.addressLine1.valid  \n            && (companyObjFormGroup.controls.addressLine1.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n      <!--       \n      <ion-item>\n        <ion-label color="primary" text-uppercase>Address Line 2</ion-label>\n        <ion-input formControlName="addressLine2" placeholder="Address Line 2" \n          [(ngModel)]="companyObj.addressLine2"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.addressLine2.valid  \n              && (companyObjFormGroup.controls.addressLine2.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item> \n      -->\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>Country</ion-label>\n\n        <ion-select interface="action-sheet" formControlName="country" [(ngModel)]="companyObj.country">\n          <ion-option *ngFor="let item of countriesList" [value]="item.name">\n            {{item.name}}\n          </ion-option>\n        </ion-select>\n\n        <!-- <ion-input formControlName="country" placeholder="Country" \n          [(ngModel)]="companyObj.country"></ion-input> -->\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.country.valid  \n                && (companyObjFormGroup.controls.country.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <!--       \n      <ion-item>\n        <ion-label color="primary" text-uppercase>State</ion-label>\n        <ion-input formControlName="state" placeholder="State" \n          [(ngModel)]="companyObj.state"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.state.valid  \n                  && (companyObjFormGroup.controls.state.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item> \n      -->\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>City</ion-label>\n        <ion-input formControlName="city" \n          placeholder="City" [(ngModel)]="companyObj.city"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.city.valid  \n                    && (companyObjFormGroup.controls.city.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>Pin Code</ion-label>\n        <ion-input formControlName="pincode"  placeholder="Pin Code" \n          [(ngModel)]="companyObj.pincode"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.pincode.valid  \n                      && (companyObjFormGroup.controls.pincode.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item> \n\n\n      <!-- Address End -->\n\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>MOBILE</ion-label>\n        <ion-input type="number" formControlName="number1" placeholder="MOBILE" \n        [(ngModel)]="companyObj.number1"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.number1.valid  \n          && (companyObjFormGroup.controls.number1.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>EMAIL</ion-label>\n        <ion-input type="email" formControlName="email1" placeholder="EMAIL" \n          [(ngModel)]="companyObj.email1"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.email1.valid  \n          && (companyObjFormGroup.controls.email1.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>TELEPHONE</ion-label>\n        <ion-input type="number" formControlName="number2" placeholder="TELEPHONE" \n          [(ngModel)]="companyObj.number2"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.number2.valid  \n          && (companyObjFormGroup.controls.number2.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>FAX</ion-label>\n        <ion-input type="number" formControlName="number3" placeholder="FAX" \n          [(ngModel)]="companyObj.number3"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!companyObjFormGroup.controls.number3.valid  \n          && (companyObjFormGroup.controls.number3.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n          <ion-textarea formControlName="additionalInfo" placeholder="Additional Info" \n            [(ngModel)]="companyObj.additionalInfo"></ion-textarea>\n        </ion-item>\n\n      <br/>\n      <button type="submit" ion-button full color="primary" text-uppercase class="" \n        (click)="saveUpdateCompany();">SUBMIT</button>\n\n    </div>\n  </form>\n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\company-save-update\company-save-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_companies_service_companies_service__["a" /* CompaniesServiceProvider */]])
    ], CompanySaveUpdatePage);
    return CompanySaveUpdatePage;
}());

//# sourceMappingURL=company-save-update.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_notifications_service_notifications_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(13);
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
    function NotificationsPage(navCtrl, navParams, notificationsServiceProvider, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.notificationsServiceProvider = notificationsServiceProvider;
        this.authService = authService;
        this.activeNotification = 0;
        this.notificationsPOSList = [];
        this.notificationsPOSSubtaskList = [];
        this.notificationsTaskList = [];
        this.searchQuery = '';
        // Show Loader
        this.authService.showLoaderFn('');
        // Call
        this.notificationsServiceProvider.getAllPOSNotifications().subscribe(function (data) {
            if (data["statusCode"] === 0) {
                _this.notificationsPOSList = JSON.parse(data['response']);
                // Hide Loader
                _this.authService.hideLoaderFn();
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad NotificationsPage');
    };
    NotificationsPage.prototype.getSubNotifications = function (item) {
        var _this = this;
        // Show Loader
        this.authService.showLoaderFn('');
        this.activeNotification = item.notificationId;
        this.notificationsServiceProvider.getByModuleIdNotificationType(item.notificationModuleId, item.notificationType).subscribe(function (data) {
            if (data["statusCode"] === 0) {
                _this.notificationsPOSSubtaskList = JSON.parse(data['response']);
                // Hide Loader
                _this.authService.hideLoaderFn();
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\notifications\notifications.html"*/'<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Notifications</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-icon name="alert" item-start></ion-icon>\n    Notifications\n    <!-- <ion-badge item-end></ion-badge> -->\n  </ion-item>\n\n\n\n  <ion-card *ngFor="let item of notificationsPOSList">\n    <ion-card-header>\n      <ion-item>\n        <ion-icon name="" item-start *ngIf="item.notificationType === \'Project\'">P</ion-icon>\n        <ion-icon name="" item-start *ngIf="item.notificationType === \'Order\'">O</ion-icon>\n        <ion-icon name="" item-start *ngIf="item.notificationType === \'Service\'">S</ion-icon>\n        <span (click)="getSubNotifications(item);">\n          {{ item.moduleName }}\n        </span>\n\n        <ion-badge item-end *ngIf="item.unSeenNotificationCount > 0">\n          {{ item.unSeenNotificationCount }}</ion-badge>\n      </ion-item>\n    </ion-card-header>\n\n    <ion-card-content *ngIf="activeNotification === item.notificationId">\n      <span *ngFor="let item1 of notificationsPOSSubtaskList">\n        <p>\n          <ion-icon name="alert" item-start></ion-icon> {{ item1.notificatonMessage }}\n        </p>\n        <p>\n          Details: {{ item1.otherData }}\n        </p>\n        <hr/>\n      </span>\n\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\notifications\notifications.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_notifications_service_notifications_service__["a" /* NotificationsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_orders_service_orders_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_common_posmodal__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderDetailsPage = (function () {
    function OrderDetailsPage(navCtrl, navParams, authService, ordersServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.ordersServiceProvider = ordersServiceProvider;
        this.orderDetails = new __WEBPACK_IMPORTED_MODULE_4__models_common_posmodal__["a" /* CommonPosmodal */]();
        this.organizationString = "";
        this.createdByString = "";
        this.updatedByString = "";
        this.startEndDateString = "";
        this.companyString = "";
        this.stageString = "";
        this.typeString = "";
        this.sourceString = "";
        this.inchargeString = "";
        this.selectedOrder = navParams.get('selectedOrder');
        this.getCompanyDetailsByData(this.selectedOrder.id);
    }
    OrderDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad OrderDetailsPage');
    };
    OrderDetailsPage.prototype.getCompanyDetailsByData = function (dataId) {
        var _this = this;
        console.log(dataId);
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.ordersServiceProvider.getDetailsByData(dataId).subscribe(function (data) {
            if (data["statusCode"] === 0) {
                // Hide Loader
                _this.authService.hideLoaderFn();
                _this.orderDetails = JSON.parse(data['response']);
                _this.createdByString = '';
                if (_this.orderDetails.createdBy && _this.orderDetails.createdBy.fullName) {
                    _this.createdByString += _this.orderDetails.createdBy.fullName + ' on ';
                    if (_this.orderDetails.createTimestamp) {
                        _this.createdByString += __WEBPACK_IMPORTED_MODULE_5_moment_moment__(_this.orderDetails.createTimestamp).format("DD MMM YYYY HH:mm");
                    }
                }
                else {
                    _this.createdByString = '----';
                }
                _this.updatedByString = '';
                if (_this.orderDetails.updatedBy && _this.orderDetails.updatedBy.fullName) {
                    _this.updatedByString += _this.orderDetails.updatedBy.fullName + ' on ';
                    if (_this.orderDetails.updateTimestamp) {
                        _this.updatedByString += __WEBPACK_IMPORTED_MODULE_5_moment_moment__(_this.orderDetails.updateTimestamp).format("DD MMM YYYY HH:mm");
                    }
                }
                else {
                    _this.updatedByString = '----';
                }
                if (_this.orderDetails.organization && _this.orderDetails.organization.organizationName) {
                    _this.organizationString = _this.orderDetails.organization.organizationName;
                }
                else {
                    _this.organizationString = '----';
                }
                _this.startEndDateString = "";
                if (_this.orderDetails.startDate) {
                    _this.startEndDateString += __WEBPACK_IMPORTED_MODULE_5_moment_moment__(_this.orderDetails.startDate).format("DD MMM YYYY");
                }
                if (_this.orderDetails.endDate) {
                    _this.startEndDateString += ' - '
                        + __WEBPACK_IMPORTED_MODULE_5_moment_moment__(_this.orderDetails.endDate).format("DD MMM YYYY");
                    ;
                }
                if (_this.orderDetails.company && _this.orderDetails.company.companyName) {
                    _this.companyString = _this.orderDetails.company.companyName;
                }
                else {
                    _this.companyString = "----";
                }
                if (_this.orderDetails.stage && _this.orderDetails.stage.name) {
                    _this.stageString = _this.orderDetails.stage.name;
                }
                else {
                    _this.stageString = "----";
                }
                if (_this.orderDetails.stage && _this.orderDetails.stage.name) {
                    _this.stageString = _this.orderDetails.stage.name;
                }
                else {
                    _this.stageString = "----";
                }
                if (_this.orderDetails.type && _this.orderDetails.type.name) {
                    _this.typeString = _this.orderDetails.type.name;
                }
                else {
                    _this.typeString = "----";
                }
                if (_this.orderDetails.source && _this.orderDetails.source.name) {
                    _this.sourceString = _this.orderDetails.source.name;
                }
                else {
                    _this.sourceString = "----";
                }
                if (_this.orderDetails.projectIncharge && _this.orderDetails.projectIncharge.name) {
                    _this.inchargeString = _this.orderDetails.projectIncharge.name;
                }
                else {
                    _this.inchargeString = "----";
                }
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
        });
    };
    OrderDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\order-details\order-details.html"*/'<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Order Details</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item text-wrap>\n      <strong class="color-primary">NAME</strong>\n      <br/> {{ orderDetails.name }}\n    </ion-item>\n\n    <!-- <ion-item text-wrap>\n      <strong class="color-primary">UID</strong>\n      <br/> {{ orderDetails.uniqueNumber }}\n    </ion-item> -->\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Company Name</strong>\n      <br/> {{ companyString }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Stage</strong>\n      <br/> {{ stageString }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Price Value</strong>\n      <br/> {{ orderDetails.priceVariation }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Start Date - End Date</strong>\n      <br/> {{ startEndDateString }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Source</strong>\n      <br/> {{ sourceString }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Created By/Last Updated By</strong>\n      <br/> {{ createdByString }} - {{ updatedByString }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">Incharge</strong>\n      <br/> {{ inchargeString }}\n    </ion-item>\n\n    <!-- <ion-item text-wrap>\n        <strong class="color-primary">Organization</strong>\n        <br/> \n          {{ organizationString }}\n      </ion-item> -->\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_orders_service_orders_service__["a" /* OrdersServiceProvider */]])
    ], OrderDetailsPage);
    return OrderDetailsPage;
}());

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_orders_service_orders_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details_order_details__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrdersPage = (function () {
    function OrdersPage(navCtrl, navParams, ordersServiceProvider, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ordersServiceProvider = ordersServiceProvider;
        this.authService = authService;
        this.ordersList = [];
        this.ordersSearchList = [];
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.ordersServiceProvider.getAll().subscribe(function (data) {
            if (data["statusCode"] === 0) {
                _this.ordersList = JSON.parse(data['response']);
                _this.initializeItems();
                // Hide Loader
                _this.authService.hideLoaderFn();
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad OrdersPage');
    };
    OrdersPage.prototype.initializeItems = function () {
        var _this = this;
        this.ordersSearchList = [];
        this.ordersList.forEach(function (element) {
            _this.ordersSearchList.push(element);
        });
    };
    OrdersPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.ordersSearchList = this.ordersList.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    OrdersPage.prototype.viewOrderDetails = function (selectedOrder) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__order_details_order_details__["a" /* OrderDetailsPage */], {
            selectedOrder: selectedOrder
        });
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\orders\orders.html"*/'<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Orders</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n  <ion-toolbar>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of ordersSearchList" (click)=\'viewOrderDetails(item);\'>\n      {{ item.name }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\orders\orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_orders_service_orders_service__["a" /* OrdersServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projects_service_projects_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_common_posmodal__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectDetailsPage = (function () {
    function ProjectDetailsPage(navCtrl, navParams, authService, projectsServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.projectsServiceProvider = projectsServiceProvider;
        this.projectDetails = new __WEBPACK_IMPORTED_MODULE_4__models_common_posmodal__["a" /* CommonPosmodal */]();
        this.organizationString = "";
        this.createdByString = "";
        this.updatedByString = "";
        this.startEndDateString = "";
        this.companyString = "";
        this.stageString = "";
        this.typeString = "";
        this.sourceString = "";
        this.inchargeString = "";
        this.selectedProject = navParams.get('selectedProject');
        this.getCompanyDetailsByData(this.selectedProject.id);
    }
    ProjectDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ProjectDetailsPage');
    };
    ProjectDetailsPage.prototype.getCompanyDetailsByData = function (dataId) {
        var _this = this;
        console.log(dataId);
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.projectsServiceProvider.getDetailsByData(dataId).subscribe(function (data) {
            if (data["statusCode"] === 0) {
                // Hide Loader
                _this.authService.hideLoaderFn();
                _this.projectDetails = JSON.parse(data['response']);
                _this.createdByString = '';
                if (_this.projectDetails.createdBy && _this.projectDetails.createdBy.fullName) {
                    _this.createdByString += _this.projectDetails.createdBy.fullName + ' on ';
                    if (_this.projectDetails.createTimestamp) {
                        _this.createdByString += __WEBPACK_IMPORTED_MODULE_5_moment_moment__(_this.projectDetails.createTimestamp).format("DD MMM YYYY HH:mm");
                    }
                }
                else {
                    _this.createdByString = '----';
                }
                _this.updatedByString = '';
                if (_this.projectDetails.updatedBy && _this.projectDetails.updatedBy.fullName) {
                    _this.updatedByString += _this.projectDetails.updatedBy.fullName + ' on ';
                    if (_this.projectDetails.updateTimestamp) {
                        _this.updatedByString += __WEBPACK_IMPORTED_MODULE_5_moment_moment__(_this.projectDetails.updateTimestamp).format("DD MMM YYYY HH:mm");
                    }
                }
                else {
                    _this.updatedByString = '----';
                }
                if (_this.projectDetails.organization && _this.projectDetails.organization.organizationName) {
                    _this.organizationString = _this.projectDetails.organization.organizationName;
                }
                else {
                    _this.organizationString = '----';
                }
                _this.startEndDateString = "";
                if (_this.projectDetails.startDate) {
                    _this.startEndDateString += __WEBPACK_IMPORTED_MODULE_5_moment_moment__(_this.projectDetails.startDate).format("DD MMM YYYY");
                }
                if (_this.projectDetails.endDate) {
                    _this.startEndDateString += ' - '
                        + __WEBPACK_IMPORTED_MODULE_5_moment_moment__(_this.projectDetails.endDate).format("DD MMM YYYY");
                }
                if (_this.projectDetails.company && _this.projectDetails.company.companyName) {
                    _this.companyString = _this.projectDetails.company.companyName;
                }
                else {
                    _this.companyString = "----";
                }
                if (_this.projectDetails.stage && _this.projectDetails.stage.name) {
                    _this.stageString = _this.projectDetails.stage.name;
                }
                else {
                    _this.stageString = "----";
                }
                if (_this.projectDetails.stage && _this.projectDetails.stage.name) {
                    _this.stageString = _this.projectDetails.stage.name;
                }
                else {
                    _this.stageString = "----";
                }
                if (_this.projectDetails.type && _this.projectDetails.type.name) {
                    _this.typeString = _this.projectDetails.type.name;
                }
                else {
                    _this.typeString = "----";
                }
                if (_this.projectDetails.source && _this.projectDetails.source.name) {
                    _this.sourceString = _this.projectDetails.source.name;
                }
                else {
                    _this.sourceString = "----";
                }
                if (_this.projectDetails.projectIncharge && _this.projectDetails.projectIncharge.name) {
                    _this.inchargeString = _this.projectDetails.projectIncharge.name;
                }
                else {
                    _this.inchargeString = "----";
                }
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
        });
    };
    ProjectDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-project-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\project-details\project-details.html"*/'<ion-header>\n\n    <ion-navbar color="crmmagentalight">\n      <ion-title>Project Details</ion-title>\n      <button ion-button menuToggle right>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n      <ion-list>\n        <ion-item text-wrap>\n          <strong class="color-primary">NAME</strong><br/> \n          {{ projectDetails.name }}\n        </ion-item>\n    \n        <!-- <ion-item text-wrap>\n          <strong class="color-primary">UID</strong><br/> \n          {{ projectDetails.uniqueNumber }}\n        </ion-item> -->\n    \n        <ion-item text-wrap>\n          <strong class="color-primary">Company Name</strong><br/> \n          {{ companyString }}\n        </ion-item>\n\n        <ion-item text-wrap>\n          <strong class="color-primary">Type</strong><br/> \n          {{ typeString }}\n        </ion-item>\n    \n        <ion-item text-wrap>\n          <strong class="color-primary">Stage</strong><br/> \n          {{ stageString }}\n        </ion-item>\n    \n        <ion-item text-wrap>\n          <strong class="color-primary">Price Value</strong><br/> \n          {{ projectDetails.priceVariation }}\n        </ion-item>\n    \n        <ion-item text-wrap>\n          <strong class="color-primary">Start Date - End Date</strong><br/> \n          {{ startEndDateString }}\n        </ion-item>\n  \n        <ion-item text-wrap>\n          <strong class="color-primary">Source</strong><br/> \n          {{ sourceString }}\n        </ion-item>\n    \n        <ion-item text-wrap>\n          <strong class="color-primary">Created By/Last Updated By</strong><br/> \n          {{ createdByString }}/{{ updatedByString }}\n        </ion-item>\n  \n        <ion-item text-wrap>\n            <strong class="color-primary">Incharge</strong><br/> \n              {{ inchargeString }}\n          </ion-item>\n  \n        <!-- <ion-item text-wrap>\n          <strong class="color-primary">Organization</strong><br/> \n            {{ organizationString }}\n        </ion-item> -->\n  \n      </ion-list>\n    </ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\project-details\project-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_projects_service_projects_service__["a" /* ProjectsServiceProvider */]])
    ], ProjectDetailsPage);
    return ProjectDetailsPage;
}());

//# sourceMappingURL=project-details.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_projects_service_projects_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_details_project_details__ = __webpack_require__(120);
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
    function ProjectsPage(navCtrl, navParams, projectsServiceProvider, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.projectsServiceProvider = projectsServiceProvider;
        this.authService = authService;
        this.projectsList = [];
        this.projectsSearchList = [];
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.projectsServiceProvider.getAll().subscribe(function (data) {
            if (data["statusCode"] === 0) {
                _this.projectsList = JSON.parse(data['response']);
                _this.initializeItems();
                // Hide Loader
                _this.authService.hideLoaderFn();
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    ProjectsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ProjectsPage');
    };
    ProjectsPage.prototype.initializeItems = function () {
        var _this = this;
        this.projectsSearchList = [];
        this.projectsList.forEach(function (element) {
            _this.projectsSearchList.push(element);
        });
    };
    ProjectsPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.projectsSearchList = this.projectsList.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ProjectsPage.prototype.viewProjectDetails = function (selectedProject) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__project_details_project_details__["a" /* ProjectDetailsPage */], {
            selectedProject: selectedProject
        });
    };
    ProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projects',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\projects\projects.html"*/'\n<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Projects</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of projectsSearchList" (click)=\'viewProjectDetails(item);\'>\n      {{ item.name }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\projects\projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_projects_service_projects_service__["a" /* ProjectsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], ProjectsPage);
    return ProjectsPage;
}());

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_common_posmodal__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_services_service_services_service__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ServiceDetailsPage = (function () {
    function ServiceDetailsPage(navCtrl, navParams, authService, servicesServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.servicesServiceProvider = servicesServiceProvider;
        this.serviceDetails = new __WEBPACK_IMPORTED_MODULE_4__models_common_posmodal__["a" /* CommonPosmodal */]();
        this.organizationString = "";
        this.createdByString = "";
        this.updatedByString = "";
        this.startEndDateString = "";
        this.companyString = "";
        this.stageString = "";
        this.typeString = "";
        this.sourceString = "";
        this.inchargeString = "";
        this.selectedService = navParams.get('selectedService');
        this.getCompanyDetailsByData(this.selectedService.id);
    }
    ServiceDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ServiceDetailsPage');
    };
    ServiceDetailsPage.prototype.getCompanyDetailsByData = function (dataId) {
        var _this = this;
        console.log(dataId);
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.servicesServiceProvider.getDetailsByData(dataId).subscribe(function (data) {
            if (data["statusCode"] === 0) {
                // Hide Loader
                _this.authService.hideLoaderFn();
                _this.serviceDetails = JSON.parse(data['response']);
                _this.createdByString = '';
                if (_this.serviceDetails.createdBy && _this.serviceDetails.createdBy.fullName) {
                    _this.createdByString += _this.serviceDetails.createdBy.fullName + ' on ';
                    if (_this.serviceDetails.createTimestamp) {
                        _this.createdByString += __WEBPACK_IMPORTED_MODULE_2_moment_moment__(_this.serviceDetails.createTimestamp).format("DD MMM YYYY HH:mm");
                    }
                }
                else {
                    _this.createdByString = '----';
                }
                _this.updatedByString = '';
                if (_this.serviceDetails.updatedBy && _this.serviceDetails.updatedBy.fullName) {
                    _this.updatedByString += _this.serviceDetails.updatedBy.fullName + ' on ';
                    if (_this.serviceDetails.updateTimestamp) {
                        _this.updatedByString += __WEBPACK_IMPORTED_MODULE_2_moment_moment__(_this.serviceDetails.updateTimestamp).format("DD MMM YYYY HH:mm");
                    }
                }
                else {
                    _this.updatedByString = '----';
                }
                if (_this.serviceDetails.organization && _this.serviceDetails.organization.organizationName) {
                    _this.organizationString = _this.serviceDetails.organization.organizationName;
                }
                else {
                    _this.organizationString = '----';
                }
                _this.startEndDateString = "";
                if (_this.serviceDetails.startDate) {
                    _this.startEndDateString += __WEBPACK_IMPORTED_MODULE_2_moment_moment__(_this.serviceDetails.startDate).format("DD MMM YYYY");
                }
                if (_this.serviceDetails.endDate) {
                    _this.startEndDateString += ' - '
                        + __WEBPACK_IMPORTED_MODULE_2_moment_moment__(_this.serviceDetails.endDate).format("DD MMM YYYY");
                    ;
                }
                if (_this.serviceDetails.company && _this.serviceDetails.company.companyName) {
                    _this.companyString = _this.serviceDetails.company.companyName;
                }
                else {
                    _this.companyString = "----";
                }
                if (_this.serviceDetails.stage && _this.serviceDetails.stage.name) {
                    _this.stageString = _this.serviceDetails.stage.name;
                }
                else {
                    _this.stageString = "----";
                }
                if (_this.serviceDetails.stage && _this.serviceDetails.stage.name) {
                    _this.stageString = _this.serviceDetails.stage.name;
                }
                else {
                    _this.stageString = "----";
                }
                if (_this.serviceDetails.type && _this.serviceDetails.type.name) {
                    _this.typeString = _this.serviceDetails.type.name;
                }
                else {
                    _this.typeString = "----";
                }
                if (_this.serviceDetails.source && _this.serviceDetails.source.name) {
                    _this.sourceString = _this.serviceDetails.source.name;
                }
                else {
                    _this.sourceString = "----";
                }
                if (_this.serviceDetails.projectIncharge && _this.serviceDetails.projectIncharge.name) {
                    _this.inchargeString = _this.serviceDetails.projectIncharge.name;
                }
                else {
                    _this.inchargeString = "----";
                }
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
        });
    };
    ServiceDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\service-details\service-details.html"*/'<ion-header>\n\n    <ion-navbar color="crmmagentalight">\n      <ion-title>Service Details</ion-title>\n      <button ion-button menuToggle right>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n      <ion-list>\n        <ion-item text-wrap>\n          <strong class="color-primary">NAME</strong><br/> \n          {{ serviceDetails.name }}\n        </ion-item>\n    \n        <!-- <ion-item text-wrap>\n          <strong class="color-primary">UID</strong><br/> \n          {{ serviceDetails.uniqueNumber }}\n        </ion-item> -->\n    \n        <ion-item text-wrap>\n          <strong class="color-primary">Company Name</strong><br/> \n          {{ companyString }}\n        </ion-item>\n    \n        <ion-item text-wrap>\n          <strong class="color-primary">Stage</strong><br/> \n          {{ stageString }}\n        </ion-item>\n    \n        <ion-item text-wrap>\n          <strong class="color-primary">Price Value</strong><br/> \n          {{ serviceDetails.priceVariation }}\n        </ion-item>\n    \n        <ion-item text-wrap>\n          <strong class="color-primary">Start Date - End Date</strong><br/> \n          {{ startEndDateString }}\n        </ion-item>\n  \n        <ion-item text-wrap>\n          <strong class="color-primary">Source</strong><br/> \n          {{ sourceString }}\n        </ion-item>\n    \n        <ion-item text-wrap>\n          <strong class="color-primary">Created By/Last Updated By</strong><br/> \n          {{ createdByString }}/{{ updatedByString }}\n        </ion-item>\n  \n        <ion-item text-wrap>\n            <strong class="color-primary">Incharge</strong><br/> \n              {{ inchargeString }}\n          </ion-item>\n  \n        <!-- <ion-item text-wrap>\n          <strong class="color-primary">Organization</strong><br/> \n            {{ organizationString }}\n        </ion-item> -->\n  \n      </ion-list>\n    </ion-content>\n  '/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\service-details\service-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_services_service_services_service__["a" /* ServicesServiceProvider */]])
    ], ServiceDetailsPage);
    return ServiceDetailsPage;
}());

//# sourceMappingURL=service-details.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_services_service_services_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_details_service_details__ = __webpack_require__(122);
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
    function ServicesPage(navCtrl, navParams, servicesServiceProvider, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.servicesServiceProvider = servicesServiceProvider;
        this.authService = authService;
        this.servicesList = [];
        this.servicesSearchList = [];
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.servicesServiceProvider.getAll().subscribe(function (data) {
            if (data["statusCode"] === 0) {
                _this.servicesList = JSON.parse(data['response']);
                _this.initializeItems();
                // Hide Loader
                _this.authService.hideLoaderFn();
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ServicesPage');
    };
    ServicesPage.prototype.initializeItems = function () {
        var _this = this;
        this.servicesSearchList = [];
        this.servicesList.forEach(function (element) {
            _this.servicesSearchList.push(element);
        });
    };
    ServicesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.servicesSearchList = this.servicesList.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ServicesPage.prototype.viewServiceDetails = function (selectedService) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__service_details_service_details__["a" /* ServiceDetailsPage */], {
            selectedService: selectedService
        });
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-services',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\services\services.html"*/'<!--\n  Generated template for the ServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Services</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of servicesSearchList" (click)=\'viewServiceDetails(item);\'>\n      {{ item.name }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\services\services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_services_service_services_service__["a" /* ServicesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsSaveUpdatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__ = __webpack_require__(7);
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
    function TaskDetailsSaveUpdatePage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.selectedItem = navParams.get('item');
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        // Hide Loader
        this.authService.hideLoaderFn();
    }
    TaskDetailsSaveUpdatePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad TaskDetailsSaveUpdatePage');
    };
    TaskDetailsSaveUpdatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task-details-save-update',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details-save-update\task-details-save-update.html"*/'\n<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Task Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details-save-update\task-details-save-update.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], TaskDetailsSaveUpdatePage);
    return TaskDetailsSaveUpdatePage;
}());

//# sourceMappingURL=task-details-save-update.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__ = __webpack_require__(7);
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
    function TaskDetailsPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.toggleSubtasksFlag = false;
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.selectedItem = navParams.get('item');
        // Hide Loader
        this.authService.hideLoaderFn();
    }
    TaskDetailsPage.prototype.ionViewDidLoad = function () {
    };
    TaskDetailsPage.prototype.toggleSubtasksFn = function () {
        this.toggleSubtasksFlag = !this.toggleSubtasksFlag;
    };
    TaskDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details\task-details.html"*/'<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Task Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div *ngIf="selectedItem">\n\n    <div class="mob-task-container">\n\n      <ul class="mob-task-list">\n        <li *ngIf="selectedItem">\n\n          <div class="task-list-top">\n            <div class="task-list-top-cell">\n              <span class="star starred" *ngIf="selectedItem.taskDetailsObj.isStarred === \'YES\'">\n                <ion-icon name="star"></ion-icon>\n              </span>\n              <span class="star" *ngIf="selectedItem.taskDetailsObj.isStarred === \'NO\'">\n                <ion-icon name="star"></ion-icon>\n              </span>\n            </div>\n\n            <div class="task-cate">\n              <p>{{selectedItem.taskDetailsObj.companyName}}</p>\n            </div>\n            <div class="task-list-top-cell">\n              <span class="task-compl-action completed" \n                *ngIf="selectedItem.taskDetailsObj.isCompleted === \'YES\'"></span>\n              <span class="task-compl-action"\n                *ngIf="selectedItem.taskDetailsObj.isCompleted === \'NO\'"></span>\n            </div>\n          </div>\n\n          <div class="task-title">{{selectedItem.taskDetailsObj.taskName}}</div>\n          <div class="task-info">\n            <span>\n              <ion-icon name="calendar"></ion-icon>\n              {{selectedItem.taskDetailsObj.startDate | date: \'dd MMM yyyy\'}}</span>\n            <span (click)=\'toggleSubtasksFn();\'>\n              <ion-icon name="git-pull-request"></ion-icon>\n              {{selectedItem.taskDetailsObj.subTasksCount}}</span>\n            <span>\n              <ion-icon name="chatbubbles"></ion-icon>{{selectedItem.taskDetailsObj.commentsCount}}</span>\n          </div>\n\n          <div class="task-detail-subtask" *ngIf="toggleSubtasksFlag">\n\n            <ul class="subtask-list">\n              <li *ngFor="let subTaskObj of selectedItem.taskDetailsObj.subTasksList">\n                <p>\n                  <input type="checkbox" hidden/> {{subTaskObj.name}}</p>\n              </li>\n            </ul>\n\n          </div>\n\n          <div class="task-users-list">\n            <div class="assigned-user">\n              <label>Assigned to</label>\n              <div class="user-block" *ngFor="let mappedUser of selectedItem.taskDetailsObj.mappedUserList">\n                <span class="photo">\n                  <span>\n                    <ion-icon name="person"></ion-icon>\n                  </span>\n                </span>\n                <span class="name">{{mappedUser.userFullName}}</span>\n              </div>\n            </div>\n            <div class="assigned-by" *ngFor="let mappedUser of selectedItem.taskDetailsObj.mappedUserList">\n              <div *ngIf="mappedUser.isMine === \'YESs\'">\n                <label>by</label>\n                <div class="user-block">\n                  <span class="photo">\n                    <span>\n                      <ion-icon name="person"></ion-icon>\n                    </span>\n                  </span>\n                  <span class="name">{{mappedUser.userFullName}}</span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </li>\n\n      </ul>\n      <div class="mob-comments">\n        <ul class="mob-comment-list">\n          <!-- <li *ngIf="selectedItem.taskDetailsObj.taskCommentsList.length === 0" class="comment-by-me">\n              No comments\n            </li> -->\n          <li *ngFor="let subTasksObj of selectedItem.taskDetailsObj.taskCommentsList" class="comment-by-me">\n            <div class="comment-content">\n              <p class="comment-text">{{subTasksObj.name}}</p>\n              <p classs="date">\n                <ion-icon name="calendar"></ion-icon> {{subTasksObj.data}}</p>\n            </div>\n            <div class="user-block">\n              <span class="photo">\n                <span>\n                  <ion-icon name="person" role="img" class="icon icon-md ion-md-person" aria-label="person" ng-reflect-name="person"></ion-icon>\n                </span>\n              </span>\n              <p>{{subTasksObj.userFullName}}</p>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n<!-- <ion-footer no-border>\n  <ion-toolbar>\n      <ion-item>\n        <ion-label color="primary" floating>Add Comments Here...</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n  </ion-toolbar>\n</ion-footer> -->\n\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\task-details\task-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], TaskDetailsPage);
    return TaskDetailsPage;
}());

//# sourceMappingURL=task-details.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_details_task_details__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_details_save_update_task_details_save_update__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_authentication_service_authentication_service__ = __webpack_require__(7);
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
    function TasksPage(navCtrl, navParams, tasksServiceProvider, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tasksServiceProvider = tasksServiceProvider;
        this.authService = authService;
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
        // Show Loader
        // this.authService.showLoaderFn('');
        var _this = this;
        this.taskDetailsFormList = [];
        this.tasksServiceProvider.getAllTasksByData(0, 0, 'date', selectedTaskDate, 'no').subscribe(function (data) {
            if (data["statusCode"] === 0) {
                _this.taskDetailsFormList = data['response']; // JSON.parse(data['response']);
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            }
            // Hide Loader
            // this.authService.hideLoaderFn();
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
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
            selector: 'page-tasks',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\tasks\tasks.html"*/'<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Tasks</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar>\n      <div class="mob-task-hdr">\n          <a href="#" class="arrow arrow-prev" (click)=\'getAllTaskForPrevDate();\'>\n            <</a>\n              <p>\n                <span>\n                  <ion-datetime displayFormat="DD MMM YYYY" min="2016" max="2020" \n                    (ionChange)="changeTaskDate(selectedTaskDate)" [(ngModel)]="selectedTaskDate"></ion-datetime>\n                </span>\n              </p>\n              <a href="#" class="arrow arrow-next" (click)=\'getAllTaskForNextDate();\'>></a>\n        </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <!-- <ion-fab bottom right>\n      <button ion-fab color="danger" (click)=\'openTaskSaveUpdateDetails("");\'>\n        <ion-icon name="add"></ion-icon></button>\n  </ion-fab>  -->\n\n  <div class="mob-task-container">\n    \n    <ul class="mob-task-list">\n      <li *ngIf="taskDetailsFormList && taskDetailsFormList.length === 0">\n        <div class="task-info">\n          <span>\n            No tasks\n          </span>\n        </div>\n\n      </li>\n      \n      <li *ngFor="let obj of taskDetailsFormList" (click)=\'openTaskDetails(obj);\'>\n        <div class="task-list-top">\n          <div class="task-list-top-cell">\n            <span class="star starred" *ngIf="obj.taskDetailsObj.isStarred === \'YES\'">\n              <ion-icon name="star"></ion-icon>\n            </span>\n            <span class="star" *ngIf="obj.taskDetailsObj.isStarred === \'NO\'">\n              <ion-icon name="star"></ion-icon>\n            </span>\n          </div>\n\n          <div class="task-cate">\n            <p>{{obj.taskDetailsObj.companyName}}</p>\n          </div>\n          <div class="task-list-top-cell">\n            <span class="task-compl-action completed" *ngIf="obj.taskDetailsObj.isCompleted === \'YES\'"></span>\n            <span class="task-compl-action" *ngIf="obj.taskDetailsObj.isCompleted === \'NO\'"></span>\n          </div>\n        </div>\n        <div class="task-title">\n          {{obj.taskDetailsObj.taskName}}\n        </div>\n        <div class="task-info">\n          <span>\n            <ion-icon name="calendar"></ion-icon>\n            {{obj.taskDetailsObj.startDate | date: \'dd MMM yyyy\'}}\n          </span>\n          <span>\n            <ion-icon name="git-pull-request"></ion-icon>{{obj.taskDetailsObj.subTasksCount}}</span>\n          <span>\n            <ion-icon name="chatbubbles"></ion-icon>{{obj.taskDetailsObj.commentsCount}}</span>\n        </div>\n        <div class="task-users-list">\n          <div class="assigned-user">\n            <label>Assigned to</label>\n            <div class="user-block" *ngFor="let mappedUser of obj.taskDetailsObj.mappedUserList">\n              <span class="photo">\n                <span>\n                  <ion-icon name="person"></ion-icon>\n                </span>\n              </span>\n              <span class="name">{{mappedUser.userFullName}}</span>\n            </div>\n          </div>\n          <div class="assigned-by" *ngFor="let mappedUser of obj.taskDetailsObj.mappedUserList">\n            <div *ngIf="mappedUser.isMine === \'YESs\'">\n              <label>by</label>\n              <div class="user-block">\n                <span class="photo">\n                  <span>\n                    <ion-icon name="person"></ion-icon>\n                  </span>\n                </span>\n                <span class="name">{{mappedUser.userFullName}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n\n    </ul>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\tasks\tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tasks_service_tasks_service__["a" /* TasksServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], TasksPage);
    return TasksPage;
}());

//# sourceMappingURL=tasks.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__companies_companies__ = __webpack_require__(47);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loginModel = {};
        this.submitAttempt = false;
        this.loadingDefaultMessage = 'Authenticating, please wait...';
        this.successDefaultMessage = 'Authenticated Successfully';
        this.createLoginForm();
        // Show Loader
        this.authService.showLoaderFn(this.loadingDefaultMessage);
        var checkUserSessionFlag = this.authService.checkUserSessionService();
        if (checkUserSessionFlag === true) {
            // Check token validity
            this.authService.checkTokenValidity().subscribe(function (data) {
                // Hide Loader
                _this.authService.hideLoaderFn();
                // Show success message
                _this.authService.showMessageToastFn(_this.successDefaultMessage, 'success');
                // Open Homepage
                _this.openHomePage();
            }, function (err) {
                // Hide Loader and Show Message
                _this.authService.handleErrorFn(err);
            });
        }
        else {
            // Hide Loader
            this.authService.hideLoaderFn();
        }
    }
    LoginPage_1 = LoginPage;
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.createLoginForm = function () {
        this.loginFormGroup = this.formBuilder.group({
            username: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(150)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(300)]],
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.submitAttempt = true;
        if (this.loginFormGroup.valid) {
            // Show Loader
            this.authService.showLoaderFn(this.loadingDefaultMessage);
            // this.loadingObj.present().then(()=>{
            this.authService.signIn(this.loginModel.username, this.loginModel.password)
                .subscribe(function (data) {
                localStorage.setItem('misMobUser', JSON.stringify(data));
                _this.authService.showMessageToastFn(_this.successDefaultMessage, 'success');
                // Open Homepage
                _this.openHomePage();
                // Hide Loader
                _this.authService.hideLoaderFn();
            }, function (error) {
                // Hide Loader
                _this.authService.hideLoaderFn();
                _this.authService.showErrorMessageToastFn('');
                // let cusErroJson = JSON.parse(error['_body']);
                // let customizedErrorMsg = cusErroJson.message + ': ' + cusErroJson.error.message;
                if (error.status === 401) {
                }
            });
            // });   
        }
        else {
        }
    };
    LoginPage.prototype.openHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__companies_companies__["a" /* CompaniesPage */]); // Main
        // this.navCtrl.setRoot(ContactsPage);
    };
    LoginPage.prototype.openLoginPage = function () {
        this.navCtrl.setRoot(LoginPage_1);
    };
    LoginPage = LoginPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\login\login.html"*/'\n<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title text-center> MISDesk CRM</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="login-container">\n    <div style="text-align: center;">\n      \n      <img src="assets/imgs/logo.png" width="150px">\n      <h4>MISDesk CRM Login</h4>\n      <hr>\n    </div>\n    \n    <form [formGroup]="loginFormGroup" class="">\n\n      <ion-item>\n        <ion-label color="primary">USERNAME</ion-label>\n        <ion-input \n          type="email" \n          formControlName="username" \n          [(ngModel)]="loginModel.username" \n          placeholder="NAME"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="!loginFormGroup.controls.username.valid  \n        && (loginFormGroup.controls.username.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid username.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary">PASSWORD</ion-label>\n        <ion-input\n          type="password" \n          [(ngModel)]="loginModel.password" \n          formControlName="password" \n          placeholder="PASSWORD"></ion-input>\n\n      </ion-item>\n\n      <ion-item *ngIf="!loginFormGroup.controls.password.valid  \n        && (loginFormGroup.controls.password.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid password.</p>\n      </ion-item>\n\n      <br/>\n        <button type="submit" \n        ion-button full color="primary" \n        class="" (click) = "login();">LOGIN</button>\n      \n    </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
    var LoginPage_1;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 139:
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
webpackEmptyAsyncContext.id = 139;

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/companies/companies.module": [
		433,
		17
	],
	"../pages/company-details/company-details.module": [
		434,
		16
	],
	"../pages/company-save-update/company-save-update.module": [
		435,
		15
	],
	"../pages/contact-full-details/contact-full-details.module": [
		436,
		14
	],
	"../pages/contact-view-details/contact-view-details.module": [
		437,
		13
	],
	"../pages/contacts/contacts.module": [
		438,
		12
	],
	"../pages/login/login.module": [
		439,
		11
	],
	"../pages/notifications/notifications.module": [
		440,
		10
	],
	"../pages/order-details/order-details.module": [
		441,
		9
	],
	"../pages/orders/orders.module": [
		442,
		8
	],
	"../pages/project-details/project-details.module": [
		443,
		7
	],
	"../pages/projects/projects.module": [
		444,
		6
	],
	"../pages/save-update-company/save-update-company.module": [
		445,
		0
	],
	"../pages/service-details/service-details.module": [
		446,
		5
	],
	"../pages/services/services.module": [
		447,
		4
	],
	"../pages/task-details-save-update/task-details-save-update.module": [
		448,
		3
	],
	"../pages/task-details/task-details.module": [
		449,
		2
	],
	"../pages/tasks/tasks.module": [
		450,
		1
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
webpackAsyncContext.id = 180;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Company; });
var Company = (function () {
    function Company() {
    }
    return Company;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 30:
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

/***/ 301:
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

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(7);
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

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_service_authentication_service__ = __webpack_require__(7);
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

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tasks_tasks__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_task_details_task_details__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_task_details_save_update_task_details_save_update__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_full_details_contact_full_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_companies_companies__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_services_services__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_companies_service_companies_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_contacts_service_contacts_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_orders_service_orders_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_projects_service_projects_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_services_service_services_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_tasks_service_tasks_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_notifications_service_notifications_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_notifications_notifications__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_company_details_company_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_order_details_order_details__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_service_details_service_details__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_project_details_project_details__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_company_save_update_company_save_update__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_contact_view_details_contact_view_details__ = __webpack_require__(61);
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
                __WEBPACK_IMPORTED_MODULE_32__pages_contact_view_details_contact_view_details__["a" /* ContactViewDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_companies_companies__["a" /* CompaniesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_company_details_company_details__["a" /* CompanyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_company_save_update_company_save_update__["a" /* CompanySaveUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_project_details_project_details__["a" /* ProjectDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_service_details_service_details__["a" /* ServiceDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_task_details_save_update_task_details_save_update__["a" /* TaskDetailsSaveUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_full_details_contact_full_details__["a" /* ContactFullDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_notifications_notifications__["a" /* NotificationsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/companies/companies.module#CompaniesPageModule', name: 'CompaniesPage', segment: 'companies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/company-details/company-details.module#CompanyDetailsPageModule', name: 'CompanyDetailsPage', segment: 'company-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/company-save-update/company-save-update.module#CompanySaveUpdatePageModule', name: 'CompanySaveUpdatePage', segment: 'company-save-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-full-details/contact-full-details.module#ContactFullDetailsPageModule', name: 'ContactFullDetailsPage', segment: 'contact-full-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-view-details/contact-view-details.module#ContactViewDetailsPageModule', name: 'ContactViewDetailsPage', segment: 'contact-view-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/orders/orders.module#OrdersPageModule', name: 'OrdersPage', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/project-details/project-details.module#ProjectDetailsPageModule', name: 'ProjectDetailsPage', segment: 'project-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/save-update-company/save-update-company.module#SaveUpdateCompanyPageModule', name: 'SaveUpdateCompanyPage', segment: 'save-update-company', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/service-details/service-details.module#ServiceDetailsPageModule', name: 'ServiceDetailsPage', segment: 'service-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/services/services.module#ServicesPageModule', name: 'ServicesPage', segment: 'services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task-details-save-update/task-details-save-update.module#TaskDetailsSaveUpdatePageModule', name: 'TaskDetailsSaveUpdatePage', segment: 'task-details-save-update', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/task-details/task-details.module#TaskDetailsPageModule', name: 'TaskDetailsPage', segment: 'task-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tasks/tasks.module#TasksPageModule', name: 'TasksPage', segment: 'tasks', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tasks_tasks__["a" /* TasksPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_task_details_task_details__["a" /* TaskDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_contact_view_details_contact_view_details__["a" /* ContactViewDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_companies_companies__["a" /* CompaniesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_company_details_company_details__["a" /* CompanyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_company_save_update_company_save_update__["a" /* CompanySaveUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_project_details_project_details__["a" /* ProjectDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_order_details_order_details__["a" /* OrderDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_service_details_service_details__["a" /* ServiceDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_task_details_save_update_task_details_save_update__["a" /* TaskDetailsSaveUpdatePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_full_details_contact_full_details__["a" /* ContactFullDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_notifications_notifications__["a" /* NotificationsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(10);
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
    CompaniesServiceProvider.prototype.getCompanyDetailsByData = function (dataId) {
        var userToken = this.authService.getUserToken();
        var urlToCall = CompaniesServiceProvider_1.GET_DETAILS
            + '/' + dataId
            + '/' + userToken
            + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
        // .catch(this.handleError);
    };
    CompaniesServiceProvider.prototype.saveCompany = function (companyObj) {
        var userToken = this.authService.getUserToken();
        companyObj.userToken = userToken;
        // const urlToCall = CompaniesServiceProvider.SAVE_COMPANY + '.do';
        // return this.http.post(urlToCall, companyObj)
        // .map(res => res);
        var urlToCallGet = CompaniesServiceProvider_1.SAVE_COMPANY_GET
            + '/' + JSON.stringify(companyObj)
            + '.do';
        return this.http.get(urlToCallGet)
            .map(function (res) { return res; });
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
    CompaniesServiceProvider.GET_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/companies/get';
    CompaniesServiceProvider.SAVE_COMPANY = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/companies/save';
    CompaniesServiceProvider.SAVE_COMPANY_GET = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/companies/saveGet';
    CompaniesServiceProvider = CompaniesServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], CompaniesServiceProvider);
    return CompaniesServiceProvider;
    var CompaniesServiceProvider_1;
}());

//# sourceMappingURL=companies-service.js.map

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 182,
	"./af.js": 182,
	"./ar": 183,
	"./ar-dz": 184,
	"./ar-dz.js": 184,
	"./ar-kw": 185,
	"./ar-kw.js": 185,
	"./ar-ly": 186,
	"./ar-ly.js": 186,
	"./ar-ma": 187,
	"./ar-ma.js": 187,
	"./ar-sa": 188,
	"./ar-sa.js": 188,
	"./ar-tn": 189,
	"./ar-tn.js": 189,
	"./ar.js": 183,
	"./az": 190,
	"./az.js": 190,
	"./be": 191,
	"./be.js": 191,
	"./bg": 192,
	"./bg.js": 192,
	"./bm": 193,
	"./bm.js": 193,
	"./bn": 194,
	"./bn.js": 194,
	"./bo": 195,
	"./bo.js": 195,
	"./br": 196,
	"./br.js": 196,
	"./bs": 197,
	"./bs.js": 197,
	"./ca": 198,
	"./ca.js": 198,
	"./cs": 199,
	"./cs.js": 199,
	"./cv": 200,
	"./cv.js": 200,
	"./cy": 201,
	"./cy.js": 201,
	"./da": 202,
	"./da.js": 202,
	"./de": 203,
	"./de-at": 204,
	"./de-at.js": 204,
	"./de-ch": 205,
	"./de-ch.js": 205,
	"./de.js": 203,
	"./dv": 206,
	"./dv.js": 206,
	"./el": 207,
	"./el.js": 207,
	"./en-au": 208,
	"./en-au.js": 208,
	"./en-ca": 209,
	"./en-ca.js": 209,
	"./en-gb": 210,
	"./en-gb.js": 210,
	"./en-ie": 211,
	"./en-ie.js": 211,
	"./en-nz": 212,
	"./en-nz.js": 212,
	"./eo": 213,
	"./eo.js": 213,
	"./es": 214,
	"./es-do": 215,
	"./es-do.js": 215,
	"./es-us": 216,
	"./es-us.js": 216,
	"./es.js": 214,
	"./et": 217,
	"./et.js": 217,
	"./eu": 218,
	"./eu.js": 218,
	"./fa": 219,
	"./fa.js": 219,
	"./fi": 220,
	"./fi.js": 220,
	"./fo": 221,
	"./fo.js": 221,
	"./fr": 222,
	"./fr-ca": 223,
	"./fr-ca.js": 223,
	"./fr-ch": 224,
	"./fr-ch.js": 224,
	"./fr.js": 222,
	"./fy": 225,
	"./fy.js": 225,
	"./gd": 226,
	"./gd.js": 226,
	"./gl": 227,
	"./gl.js": 227,
	"./gom-latn": 228,
	"./gom-latn.js": 228,
	"./gu": 229,
	"./gu.js": 229,
	"./he": 230,
	"./he.js": 230,
	"./hi": 231,
	"./hi.js": 231,
	"./hr": 232,
	"./hr.js": 232,
	"./hu": 233,
	"./hu.js": 233,
	"./hy-am": 234,
	"./hy-am.js": 234,
	"./id": 235,
	"./id.js": 235,
	"./is": 236,
	"./is.js": 236,
	"./it": 237,
	"./it.js": 237,
	"./ja": 238,
	"./ja.js": 238,
	"./jv": 239,
	"./jv.js": 239,
	"./ka": 240,
	"./ka.js": 240,
	"./kk": 241,
	"./kk.js": 241,
	"./km": 242,
	"./km.js": 242,
	"./kn": 243,
	"./kn.js": 243,
	"./ko": 244,
	"./ko.js": 244,
	"./ky": 245,
	"./ky.js": 245,
	"./lb": 246,
	"./lb.js": 246,
	"./lo": 247,
	"./lo.js": 247,
	"./lt": 248,
	"./lt.js": 248,
	"./lv": 249,
	"./lv.js": 249,
	"./me": 250,
	"./me.js": 250,
	"./mi": 251,
	"./mi.js": 251,
	"./mk": 252,
	"./mk.js": 252,
	"./ml": 253,
	"./ml.js": 253,
	"./mr": 254,
	"./mr.js": 254,
	"./ms": 255,
	"./ms-my": 256,
	"./ms-my.js": 256,
	"./ms.js": 255,
	"./mt": 257,
	"./mt.js": 257,
	"./my": 258,
	"./my.js": 258,
	"./nb": 259,
	"./nb.js": 259,
	"./ne": 260,
	"./ne.js": 260,
	"./nl": 261,
	"./nl-be": 262,
	"./nl-be.js": 262,
	"./nl.js": 261,
	"./nn": 263,
	"./nn.js": 263,
	"./pa-in": 264,
	"./pa-in.js": 264,
	"./pl": 265,
	"./pl.js": 265,
	"./pt": 266,
	"./pt-br": 267,
	"./pt-br.js": 267,
	"./pt.js": 266,
	"./ro": 268,
	"./ro.js": 268,
	"./ru": 269,
	"./ru.js": 269,
	"./sd": 270,
	"./sd.js": 270,
	"./se": 271,
	"./se.js": 271,
	"./si": 272,
	"./si.js": 272,
	"./sk": 273,
	"./sk.js": 273,
	"./sl": 274,
	"./sl.js": 274,
	"./sq": 275,
	"./sq.js": 275,
	"./sr": 276,
	"./sr-cyrl": 277,
	"./sr-cyrl.js": 277,
	"./sr.js": 276,
	"./ss": 278,
	"./ss.js": 278,
	"./sv": 279,
	"./sv.js": 279,
	"./sw": 280,
	"./sw.js": 280,
	"./ta": 281,
	"./ta.js": 281,
	"./te": 282,
	"./te.js": 282,
	"./tet": 283,
	"./tet.js": 283,
	"./th": 284,
	"./th.js": 284,
	"./tl-ph": 285,
	"./tl-ph.js": 285,
	"./tlh": 286,
	"./tlh.js": 286,
	"./tr": 287,
	"./tr.js": 287,
	"./tzl": 288,
	"./tzl.js": 288,
	"./tzm": 289,
	"./tzm-latn": 290,
	"./tzm-latn.js": 290,
	"./tzm.js": 289,
	"./uk": 291,
	"./uk.js": 291,
	"./ur": 292,
	"./ur.js": 292,
	"./uz": 293,
	"./uz-latn": 294,
	"./uz-latn.js": 294,
	"./uz.js": 293,
	"./vi": 295,
	"./vi.js": 295,
	"./x-pseudo": 296,
	"./x-pseudo.js": 296,
	"./yo": 297,
	"./yo.js": 297,
	"./zh-cn": 298,
	"./zh-cn.js": 298,
	"./zh-hk": 299,
	"./zh-hk.js": 299,
	"./zh-tw": 300,
	"./zh-tw.js": 300
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
webpackContext.id = 403;

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonModel; });
var CommonModel = (function () {
    function CommonModel() {
    }
    return CommonModel;
}());

//# sourceMappingURL=common-model.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tasks_tasks__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contacts_contacts__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_companies_companies__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_projects_projects__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_orders_orders__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_services_services__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_authentication_service_authentication_service__ = __webpack_require__(7);
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
    function MyApp(platform, statusBar, splashScreen, alertCtrl, authService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */];
        this.userFullName = '';
        this.userEmail = '';
        this.userRoleName = '';
        this.userRoleId = 0;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Companies', component: __WEBPACK_IMPORTED_MODULE_6__pages_companies_companies__["a" /* CompaniesPage */] },
            { title: 'Contacts', component: __WEBPACK_IMPORTED_MODULE_5__pages_contacts_contacts__["a" /* ContactsPage */] },
            { title: 'Tasks', component: __WEBPACK_IMPORTED_MODULE_4__pages_tasks_tasks__["a" /* TasksPage */] },
            { title: 'Projects', component: __WEBPACK_IMPORTED_MODULE_7__pages_projects_projects__["a" /* ProjectsPage */] },
            { title: 'Orders', component: __WEBPACK_IMPORTED_MODULE_8__pages_orders_orders__["a" /* OrdersPage */] },
            { title: 'Services', component: __WEBPACK_IMPORTED_MODULE_9__pages_services_services__["a" /* ServicesPage */] },
            { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */] },
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
    MyApp.prototype.menuOpened = function () {
        var currentUserJson = this.authService.getUserDetails();
        this.userFullName = currentUserJson.fullName;
        this.userEmail = currentUserJson.userId;
        this.userRoleName = currentUserJson.userRoleName;
        this.userRoleId = currentUserJson.userRoleId;
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logoutMainFn = function () {
        this.logoutConfirm();
    };
    MyApp.prototype.logoutConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'MISDesk CRM',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        // Logout User
                        localStorage.removeItem('misMobUser');
                        // Open Loginpage
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]);
                        _this.authService.showMessageToastFn('Logged out successfully.', 'success');
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\app\app.html"*/'<ion-menu [content]="content" (ionOpen)="menuOpened();">\n  <ion-header>\n    <ion-toolbar color="crmmagentalight">\n      <ion-title>\n        MISDesk CRM\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    \n    <ion-list>\n      <ion-list-header color="crmmagentalight" text-uppercase>\n          <ion-icon name="person" item-start></ion-icon>\n          {{userFullName}}\n          <br>\n          {{userRoleName}}\n          \n      </ion-list-header>\n      <button menuClose ion-item detail-push *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      \n      <button menuClose ion-item detail-push (click)="logoutMainFn()">\n        Logout\n        <ion-icon name="log-out" item-end></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_12__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            selector: 'page-home',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar  color="crmmagentalight">\n    <ion-title>Home</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Home Menu</h3>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompaniesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_companies_service_companies_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__company_details_company_details__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__company_save_update_company_save_update__ = __webpack_require__(116);
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
    function CompaniesPage(navCtrl, navParams, companiesServiceProvider, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.companiesServiceProvider = companiesServiceProvider;
        this.authService = authService;
        this.companiesModelList = [];
        this.companiesModelSearchList = [];
        this.getAllCompanies();
    }
    CompaniesPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CompaniesPage');
    };
    CompaniesPage.prototype.initializeItems = function () {
        var _this = this;
        this.companiesModelSearchList = [];
        this.companiesModelList.forEach(function (element) {
            _this.companiesModelSearchList.push(element);
        });
    };
    CompaniesPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.companiesModelSearchList = this.companiesModelSearchList.filter(function (item) {
                return (item.companyName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    CompaniesPage.prototype.getAllCompanies = function () {
        var _this = this;
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.companiesServiceProvider.getAll().subscribe(function (data) {
            if (data["statusCode"] === 0) {
                _this.companiesModelList = JSON.parse(data['response']);
                _this.initializeItems();
                // Hide Loader
                _this.authService.hideLoaderFn();
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            }
        });
    };
    CompaniesPage.prototype.viewCompanyDetails = function (selectedCompany) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__company_details_company_details__["a" /* CompanyDetailsPage */], {
            selectedCompany: selectedCompany
        });
    };
    CompaniesPage.prototype.saveUpdateCompany = function (selectedCompany) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__company_save_update_company_save_update__["a" /* CompanySaveUpdatePage */], {
            selectedCompany: selectedCompany
        });
    };
    CompaniesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-companies',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\companies\companies.html"*/'\n<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Companies</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-fab bottom right>\n      <button ion-fab color="danger" (click)=\'saveUpdateCompany("");\'>\n        <ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-item *ngFor="let item of companiesModelSearchList" (click)=\'viewCompanyDetails(item);\'>\n      {{ item.companyName }}\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\companies\companies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_companies_service_companies_service__["a" /* CompaniesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], CompaniesPage);
    return CompaniesPage;
}());

//# sourceMappingURL=companies.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFullDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_contact_ui_form__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contacts_service_contacts_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_contacts__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_companies_service_companies_service__ = __webpack_require__(37);
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
    function ContactFullDetailsPage(navCtrl, navParams, formBuilder, contactsServiceProvider, authService, companiesServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.contactsServiceProvider = contactsServiceProvider;
        this.authService = authService;
        this.companiesServiceProvider = companiesServiceProvider;
        this.submitAttempt = false;
        this.contactUIForm = new __WEBPACK_IMPORTED_MODULE_3__models_contact_ui_form__["a" /* ContactUIForm */]();
        this.companiesModelList = [];
        this.designationsList = [];
        this.companyNameString = "";
        this.selectedContact = navParams.get('selectedContact');
        if (this.selectedContact) {
            this.contactUIForm = this.selectedContact;
        }
        this.saveContactFormValidate();
        this.getAllCompanies();
    }
    ContactFullDetailsPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ContactFullDetailsPage');
    };
    ContactFullDetailsPage.prototype.getAllCompanies = function () {
        var _this = this;
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.companiesServiceProvider.getAll().subscribe(function (data) {
            if (data["statusCode"] === 0) {
                _this.companiesModelList = JSON.parse(data['response']);
                // Hide Loader
                _this.authService.hideLoaderFn();
                _this.getAllDesignations();
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
        });
    };
    ContactFullDetailsPage.prototype.getAllDesignations = function () {
        var _this = this;
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.contactsServiceProvider.getAllDesignationsAPI().subscribe(function (data) {
            if (data["statusCode"] === 0) {
                _this.designationsList = JSON.parse(data['response']);
                // Hide Loader
                _this.authService.hideLoaderFn();
                if (_this.selectedContact.contactId) {
                    _this.getContactDetailsByData(_this.selectedContact.contactId);
                }
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
        });
    };
    ContactFullDetailsPage.prototype.getContactDetailsByData = function (dataId) {
        var _this = this;
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.contactsServiceProvider.getContactDetailsByData(dataId).subscribe(function (data) {
            if (data["statusCode"] === 0) {
                // Hide Loader
                _this.authService.hideLoaderFn();
                _this.contactUIForm = JSON.parse(data['response']);
                _this.companyNameString = _this.contactUIForm.company.companyName;
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
        });
    };
    ContactFullDetailsPage.prototype.saveContactForm = function () {
        var _this = this;
        this.submitAttempt = true;
        // Call for save
        // console.log('validddddddd----' + this.contactsForm.valid);
        // console.log('validddddddd----' + this.contactUIForm);
        if (this.contactsForm.valid) {
            // Show Loader
            this.authService.showLoaderFn('');
            this.contactsServiceProvider.saveContact(this.contactUIForm).subscribe(function (data) {
                if (data["statusCode"] === 0) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__contacts_contacts__["a" /* ContactsPage */]);
                    // Hide Loader
                    _this.authService.hideLoaderFn();
                    _this.authService.showMessageToastFn('Contact saved successfully.', 'success');
                }
                else {
                    _this.authService.handleResponseStatusFn(data);
                    if (data["statusCode"] === 2) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                    }
                }
            }, function (err) {
                // Hide Loader and Show Message
                _this.authService.handleErrorFn(err);
                if (err.status === 401) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            });
        }
    };
    ContactFullDetailsPage.prototype.saveContactFormValidate = function () {
        var emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.contactsForm = this.formBuilder.group({
            "contactId": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.contactId, []),
            "permissionType": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.contactName, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
            "prefix": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.contactName, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
            "contactName": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.contactName, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(100),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
            "company": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.company, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
            ]),
            "designation": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */](this.contactUIForm.designation, [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required])
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
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')])
            ]),
        });
    };
    ContactFullDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-full-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contact-full-details\contact-full-details.html"*/'<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Contact Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="contactsForm">\n\n    <div>\n\n      <!-- <input type="hidden" formControlName="contactId" \n         value="contactUIForm.contactId"> -->\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>PERMISSION TYPE</ion-label>\n        <ion-select interface="action-sheet" formControlName="permissionType" [(ngModel)]="contactUIForm.permissionType">\n\n          <ion-option value="0">Public</ion-option>\n          <ion-option value="1">Private</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.permissionType.valid  \n        && (contactsForm.controls.permissionType.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>Prefix</ion-label>\n        <ion-select interface="action-sheet" formControlName="prefix" [(ngModel)]="contactUIForm.prefix">\n          <ion-option value="1">Mr.</ion-option>\n          <ion-option value="2">Ms.</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.prefix.valid  \n        && (contactsForm.controls.prefix.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>NAME</ion-label>\n        <ion-input formControlName="contactName" placeholder="NAME" \n        [(ngModel)]="contactUIForm.contactName"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.contactName.valid  \n        && (contactsForm.controls.contactName.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item *ngIf="!contactUIForm.contactId">\n        <ion-label color="primary" text-uppercase>COMPANY</ion-label>\n\n        <ion-select interface="action-sheet" \n          formControlName="company"\n          [(ngModel)]="contactUIForm.company" >\n          <ion-option *ngFor="let item of companiesModelList" [value]="item">\n            {{item.companyName}}\n          </ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item *ngIf="contactUIForm.contactId">\n        <ion-label color="primary" text-uppercase>COMPANY</ion-label>\n\n        <ion-input type="text" disabled="disabled" value="{{companyNameString}}">{{companyNameString}}</ion-input>\n\n      </ion-item>\n\n      <ion-item\n        *ngIf="!contactsForm.controls.company.valid  \n        && (contactsForm.controls.company.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>DESIGNATION</ion-label>\n\n        <ion-select interface="action-sheet" \n          formControlName="designation"\n          [(ngModel)]="contactUIForm.designation" \n          >\n          <ion-option *ngFor="let item of designationsList" [value]="item.name">\n            {{item.name}}\n          </ion-option>\n\n        </ion-select>\n\n        <!-- <ion-input formControlName="designation" placeholder="DESIGNATION" \n          [(ngModel)]="contactUIForm.designation"></ion-input> -->\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.designation.valid  \n        && (contactsForm.controls.designation.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>MOBILE</ion-label>\n        <ion-input type="number" formControlName="number1" placeholder="MOBILE" \n          [(ngModel)]="contactUIForm.number1"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.number1.valid  \n        && (contactsForm.controls.number1.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>EMAIL</ion-label>\n        <ion-input type="email" formControlName="email1" placeholder="EMAIL" \n          [(ngModel)]="contactUIForm.email1"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.email1.valid  \n        && (contactsForm.controls.email1.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>TELEPHONE</ion-label>\n        <ion-input type="number" formControlName="number2" placeholder="TELEPHONE" \n          [(ngModel)]="contactUIForm.number2"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.number2.valid  \n        && (contactsForm.controls.number2.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label color="primary" text-uppercase>FAX</ion-label>\n        <ion-input type="number" formControlName="number3" placeholder="FAX" \n          [(ngModel)]="contactUIForm.number3"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.number3.valid  \n        && (contactsForm.controls.number3.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea formControlName="contactNote" placeholder="NOTES" [(ngModel)]="contactUIForm.contactNote"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!contactsForm.controls.contactNote.valid  \n        && (contactsForm.controls.contactNote.dirty || submitAttempt)">\n        <p class="error-msg-para">Please enter a valid data.</p>\n      </ion-item>\n\n      <br/>\n\n      <span *ngIf="!contactUIForm.contactId">\n          <button type="submit" ion-button full color="primary" text-uppercase class="" \n            (click)="saveContactForm();">SUBMIT</button>\n      </span>\n\n      <span style="opacity: 0;height: 0%; ">\n          <ion-input type="text" formControlName="contactId" \n          style="opacity: 0;height: 0%; "\n          [(ngModel)]="contactUIForm.contactId"></ion-input>\n        </span>\n      \n\n    </div>\n  </form>\n\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contact-full-details\contact-full-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_contacts_service_contacts_service__["a" /* ContactsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_companies_service_companies_service__["a" /* CompaniesServiceProvider */]])
    ], ContactFullDetailsPage);
    return ContactFullDetailsPage;
}());

//# sourceMappingURL=contact-full-details.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(7);
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
        var urlToCall = ContactsServiceProvider_1.GET_ALL_DETAILS + '/' + userToken + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    ContactsServiceProvider.prototype.getContactDetailsByData = function (dataId) {
        var userToken = this.authService.getUserToken();
        var urlToCall = ContactsServiceProvider_1.GET_DETAILS
            + '/' + dataId
            + '/' + userToken
            + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
        // .catch(this.handleError);
    };
    ContactsServiceProvider.prototype.getAllDesignationsAPI = function () {
        var userToken = this.authService.getUserToken();
        var urlToCall = ContactsServiceProvider_1.GET_ALL_DESIGNATIONS + '/' + userToken + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
    };
    ContactsServiceProvider.prototype.saveContact = function (contactUIForm) {
        var userToken = this.authService.getUserToken();
        contactUIForm.userToken = userToken;
        var urlToCallGet = ContactsServiceProvider_1.SAVE_CONTACT_GET
            + '/' + JSON.stringify(contactUIForm)
            + '.do';
        return this.http.get(urlToCallGet)
            .map(function (res) { return res; });
        // const urlToCall = ContactsServiceProvider.SAVE_CONTACT + '.do';
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // let options = new RequestOptions({ headers: headers });
        // set('Authorization', 'Bearer ' + this.getAuthAccessToken())
        // return this.http.post(urlToCall, JSON.stringify(contactUIForm), {
        // headers: new HttpHeaders().set('Content-Type', 'application/json') 
        // })
        // .map(res => res);
    };
    ContactsServiceProvider.GET_ALL_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/contacts/all';
    ContactsServiceProvider.SAVE_CONTACT = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/contacts/save';
    ContactsServiceProvider.SAVE_CONTACT_GET = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/contacts/saveGet';
    ContactsServiceProvider.GET_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/contacts/get';
    ContactsServiceProvider.GET_ALL_DESIGNATIONS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/designation/all';
    ContactsServiceProvider = ContactsServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], ContactsServiceProvider);
    return ContactsServiceProvider;
    var ContactsServiceProvider_1;
}());

//# sourceMappingURL=contacts-service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactViewDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_contact_ui_form__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_contacts_service_contacts_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_companies_service_companies_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_full_details_contact_full_details__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ContactViewDetailsPage = (function () {
    function ContactViewDetailsPage(navCtrl, navParams, formBuilder, contactsServiceProvider, authService, companiesServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.contactsServiceProvider = contactsServiceProvider;
        this.authService = authService;
        this.companiesServiceProvider = companiesServiceProvider;
        this.submitAttempt = false;
        this.contactUIForm = new __WEBPACK_IMPORTED_MODULE_3__models_contact_ui_form__["a" /* ContactUIForm */]();
        this.companiesModelList = [];
        this.designationsList = [];
        this.companyNameString = "";
        this.selectedContact = navParams.get('selectedContact');
        if (this.selectedContact) {
            this.contactUIForm = this.selectedContact;
            if (this.selectedContact.contactId) {
                this.getContactDetailsByData(this.selectedContact.contactId);
            }
        }
    }
    ContactViewDetailsPage.prototype.ionViewDidLoad = function () {
    };
    ContactViewDetailsPage.prototype.getContactDetailsByData = function (dataId) {
        var _this = this;
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.contactsServiceProvider.getContactDetailsByData(dataId).subscribe(function (data) {
            if (data["statusCode"] === 0) {
                // Hide Loader
                _this.authService.hideLoaderFn();
                _this.contactUIForm = JSON.parse(data['response']);
                _this.companyNameString = _this.contactUIForm.company.companyName;
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            }
        });
    };
    ContactViewDetailsPage.prototype.editContactDetails = function (selectedContact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__contact_full_details_contact_full_details__["a" /* ContactFullDetailsPage */], {
            selectedContact: selectedContact
        });
    };
    ContactViewDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-view-details',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contact-view-details\contact-view-details.html"*/'<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Contact Details {{ contactUIForm.contactName }}</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-fab bottom right>\n    <button ion-fab color="danger" (click)=\'editContactDetails(contactUIForm);\'>\n      <ion-icon name="create"></ion-icon>\n    </button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-item text-wrap>\n      <strong class="color-primary">NAME</strong>\n      <br/>\n      <span *ngIf="contactUIForm.prefix === 1">\n        Mr.\n      </span>\n      <span *ngIf="contactUIForm.prefix === 2">\n        Ms.\n      </span>\n      {{ contactUIForm.contactName }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">PERMISSION TYPE</strong>\n      <br/>\n      <span *ngIf="contactUIForm.permissionType === 0">\n        Public\n      </span>\n      <span *ngIf="contactUIForm.permissionType === 1">\n        Private\n      </span>\n      <span *ngIf="contactUIForm.permissionType === 1">\n        Restricted\n      </span>\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">COMPANY</strong>\n      <br/> \n      {{ companyNameString }}\n    </ion-item>\n\n    <ion-item text-wrap>\n      <strong class="color-primary">DESIGNATION</strong>\n      <br/> \n      {{ contactUIForm.designation }}\n    </ion-item>\n\n    <ion-item *ngIf="contactUIForm.number1">\n      <strong class="color-primary">MOBILE</strong>\n      <br/> \n      <a href="tel:{{ contactUIForm.number1 }}" >{{ contactUIForm.number1 }}</a>\n    </ion-item>\n\n    <ion-item *ngIf="contactUIForm.email1">\n      <strong class="color-primary">EMAIL</strong>\n      <br/>\n      <a href="mailto:{{ contactUIForm.email1 }}" >{{ contactUIForm.email1 }}</a>\n\n    </ion-item>\n\n    <ion-item *ngIf="contactUIForm.number2">\n      <strong class="color-primary">TELEPHONE</strong>\n      <br/> \n      <a href="tel:{{ contactUIForm.number2 }}" >{{ contactUIForm.number2 }}</a>\n    </ion-item>\n\n    <ion-item *ngIf="contactUIForm.number3">\n      <strong class="color-primary">FAX</strong>\n      <br/> \n      <a href="tel:{{ contactUIForm.number3 }}" >{{ contactUIForm.number3 }}</a>\n    </ion-item>\n\n    <ion-item *ngIf="contactUIForm.contactNote">\n      <strong class="color-primary">Contact Note</strong>\n      <br/> \n      {{ contactUIForm.contactNote }}\n    </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contact-view-details\contact-view-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_contacts_service_contacts_service__["a" /* ContactsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_companies_service_companies_service__["a" /* CompaniesServiceProvider */]])
    ], ContactViewDetailsPage);
    return ContactViewDetailsPage;
}());

//# sourceMappingURL=contact-view-details.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contacts_service_contacts_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_full_details_contact_full_details__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_view_details_contact_view_details__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContactsPage = (function () {
    function ContactsPage(navCtrl, navParams, contactsServiceProvider, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactsServiceProvider = contactsServiceProvider;
        this.authService = authService;
        this.contactsList = [];
        this.contactsSearchList = [];
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // Show Loader
        this.authService.showLoaderFn('');
        // API Call
        this.contactsServiceProvider.getAll().subscribe(function (data) {
            if (data["statusCode"] === 0) {
                _this.contactsList = JSON.parse(data['response']);
                _this.initializeItems();
                // Hide Loader
                _this.authService.hideLoaderFn();
            }
            else {
                _this.authService.handleResponseStatusFn(data);
                if (data["statusCode"] === 2) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                }
            }
        }, function (err) {
            // Hide Loader and Show Message
            _this.authService.handleErrorFn(err);
            if (err.status === 401) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
    };
    ContactsPage.prototype.initializeItems = function () {
        var _this = this;
        this.contactsSearchList = [];
        this.contactsList.forEach(function (element) {
            _this.contactsSearchList.push(element);
        });
    };
    ContactsPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.contactsSearchList = this.contactsList.filter(function (item) {
                return (item.contactName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ContactsPage.prototype.addContactDetails = function (selectedContact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_full_details_contact_full_details__["a" /* ContactFullDetailsPage */], {
            selectedContact: selectedContact
        });
    };
    ContactsPage.prototype.viewContactDetails = function (selectedContact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__contact_view_details_contact_view_details__["a" /* ContactViewDetailsPage */], {
            selectedContact: selectedContact
        });
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contacts\contacts.html"*/'<ion-header>\n\n  <ion-navbar color="crmmagentalight">\n    <ion-title>Contacts</ion-title>\n    <button ion-button menuToggle right>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-fab bottom right>\n        <button ion-fab color="danger" (click)=\'addContactDetails("");\'>\n          <ion-icon name="add"></ion-icon></button>\n    </ion-fab>    \n\n  <ion-list>\n    <ion-item *ngFor="let item of contactsSearchList" (click)=\'viewContactDetails(item);\'>\n\n        <!-- <ion-avatar item-start>\n            <ion-icon name="contact"></ion-icon>\n        </ion-avatar> -->\n        <ion-icon name="person" item-start></ion-icon>\n        {{ item.contactName }}\n      \n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\eclipse_workspace\AppWorkspace2017\MISDeskCRM_HybridMobileApp\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_contacts_service_contacts_service__["a" /* ContactsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(30);
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
    // private static readonly REFRESH_TOKEN_URL = environment.apiUrl + '/security/token/refresh/';
    function AuthenticationServiceProvider(http, loadingCtrl, toastCtrl) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingDefaultMessage = 'Please wait...';
        this.successDefaultMessage = 'Operation Success.';
        this.sessionExpiredMessage = 'Session Expired, login in again.';
        this.errorDefaultMessage = 'Some error occured, try again.';
    }
    AuthenticationServiceProvider_1 = AuthenticationServiceProvider;
    AuthenticationServiceProvider.prototype.checkUserSessionService = function () {
        var currentUser = localStorage.getItem('misMobUser');
        if (currentUser != null) {
            var currentUserJson = JSON.parse(currentUser);
            if (currentUserJson.userToken) {
                return true;
            }
            else {
                localStorage.removeItem('misMobUser');
                return false;
            }
        }
        else {
            return false;
        }
    };
    AuthenticationServiceProvider.prototype.getUserToken = function () {
        var currentUser = localStorage.getItem('misMobUser');
        if (currentUser != null) {
            var currentUserJson = JSON.parse(currentUser);
            if (currentUserJson.userToken) {
                return currentUserJson.userToken;
            }
            else {
                // remove user from local storage to log user out
                localStorage.removeItem('misMobUser');
                return '';
            }
        }
        else {
            return '';
        }
    };
    AuthenticationServiceProvider.prototype.getUserDetails = function () {
        var currentUser = localStorage.getItem('misMobUser');
        if (currentUser != null) {
            var currentUserJson = JSON.parse(currentUser);
            if (currentUserJson.userToken) {
                return currentUserJson;
            }
            else {
                localStorage.removeItem('misMobUser');
                return null;
            }
        }
        else {
            return null;
        }
    };
    AuthenticationServiceProvider.prototype.logoutService = function () {
        localStorage.removeItem('misMobUser');
    };
    /**
      * Check token for given user
      * @param username
      * @param token
     */
    AuthenticationServiceProvider.prototype.checkTokenValidity = function () {
        var userToken = this.getUserToken();
        var urlTemp = AuthenticationServiceProvider_1.TOKEN_CHECK_URL + userToken + ".do";
        return this.http.get(urlTemp)
            .map(function (res) { return res; });
    };
    /**
        * Check token for given user
        * @param username
        * @param token
       */
    AuthenticationServiceProvider.prototype.checkTokenData = function () {
        var userToken = this.getUserToken();
        var urlTemp = AuthenticationServiceProvider_1.TOKEN_CHECK_URL + userToken + ".do";
        return this.http.get(urlTemp)
            .map(function (res) { return res; });
        // .map((response: Response) => {
        //   let userSession = response.json();
        //   localStorage.setItem('misMobUser', JSON.stringify(userSession));
        // });
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
    };
    AuthenticationServiceProvider.prototype.showLoaderFn = function (msg) {
        this.loadingObj = this.loadingCtrl.create({ content: this.loadingDefaultMessage });
        if (msg !== '') {
            this.loadingObj.setContent(msg);
        }
        this.loadingObj.present();
    };
    AuthenticationServiceProvider.prototype.hideLoaderFn = function () {
        this.loadingObj.dismiss();
        return false;
    };
    AuthenticationServiceProvider.prototype.showMessageToastFn = function (msg, cssClassVar) {
        if (msg === '') {
            msg = this.successDefaultMessage;
        }
        // cssClassVar: 'warning', success, error
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            cssClass: cssClassVar,
            duration: 3000,
            showCloseButton: true
        });
        toast.present();
    };
    AuthenticationServiceProvider.prototype.showErrorMessageToastFn = function (msg) {
        if (msg === '') {
            msg = this.errorDefaultMessage;
        }
        var toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            cssClass: 'error',
            showCloseButton: true
        });
        toast.present();
    };
    AuthenticationServiceProvider.prototype.handleErrorFn = function (err) {
        // Hide Loader
        this.hideLoaderFn();
        if (err.status === 401) {
            this.logoutService();
            this.showMessageToastFn(this.sessionExpiredMessage, 'warning');
        }
        else {
            this.showMessageToastFn(this.errorDefaultMessage, 'error');
        }
    };
    AuthenticationServiceProvider.prototype.handleResponseStatusFn = function (data) {
        if (data["statusCode"] === 2) {
            // Hide Loader
            this.hideLoaderFn();
            var msgData = data["msg"];
            if (msgData === '') {
                msgData = this.errorDefaultMessage;
            }
            this.logoutService();
            this.showMessageToastFn(msgData, 'warning');
        }
        else if (data["statusCode"] === 0 || data["statusCode"] !== 0) {
            // Hide Loader
            this.hideLoaderFn();
            var msgData = data["msg"];
            if (msgData === '') {
                msgData = this.errorDefaultMessage;
            }
            this.showMessageToastFn(msgData, 'error');
        }
    };
    AuthenticationServiceProvider.SIGNIN_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/security/loginByGet/';
    // private static readonly TOKEN_VALID_URL = environment.apiUrl + '/security/account/';
    AuthenticationServiceProvider.TOKEN_CHECK_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl + '/security/token/checkSession/';
    AuthenticationServiceProvider = AuthenticationServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], AuthenticationServiceProvider);
    return AuthenticationServiceProvider;
    var AuthenticationServiceProvider_1;
}());

//# sourceMappingURL=authentication-service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(7);
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
    OrdersServiceProvider.prototype.getDetailsByData = function (dataId) {
        var userToken = this.authService.getUserToken();
        var urlToCall = OrdersServiceProvider_1.GET_DETAILS
            + '/' + dataId
            + '/' + userToken
            + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
        // .catch(this.handleError);
    };
    OrdersServiceProvider.GET_ALL_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/orders/all';
    OrdersServiceProvider.GET_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/orders/get';
    OrdersServiceProvider = OrdersServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], OrdersServiceProvider);
    return OrdersServiceProvider;
    var OrdersServiceProvider_1;
}());

//# sourceMappingURL=orders-service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonPosmodal; });
var CommonPosmodal = (function () {
    function CommonPosmodal() {
    }
    return CommonPosmodal;
}());

//# sourceMappingURL=common-posmodal.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(7);
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
    ProjectsServiceProvider.prototype.getDetailsByData = function (dataId) {
        var userToken = this.authService.getUserToken();
        var urlToCall = ProjectsServiceProvider_1.GET_DETAILS
            + '/' + dataId
            + '/' + userToken
            + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
        // .catch(this.handleError);
    };
    ProjectsServiceProvider.GET_ALL_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/projects/all';
    ProjectsServiceProvider.GET_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/projects/get';
    ProjectsServiceProvider = ProjectsServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], ProjectsServiceProvider);
    return ProjectsServiceProvider;
    var ProjectsServiceProvider_1;
}());

//# sourceMappingURL=projects-service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__ = __webpack_require__(7);
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
    ServicesServiceProvider.prototype.getDetailsByData = function (dataId) {
        var userToken = this.authService.getUserToken();
        var urlToCall = ServicesServiceProvider_1.GET_DETAILS
            + '/' + dataId
            + '/' + userToken
            + '.do';
        return this.http.get(urlToCall)
            .map(function (res) { return res; });
        // .catch(this.handleError);
    };
    ServicesServiceProvider.GET_ALL_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/services/all';
    ServicesServiceProvider.GET_DETAILS = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + '/mapp/api/services/get';
    ServicesServiceProvider = ServicesServiceProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__authentication_service_authentication_service__["a" /* AuthenticationServiceProvider */]])
    ], ServicesServiceProvider);
    return ServicesServiceProvider;
    var ServicesServiceProvider_1;
}());

//# sourceMappingURL=services-service.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map