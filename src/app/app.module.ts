import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './_modules/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { PhotoEditorComponent } from './members/photo-editor/photo-editor.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';
import { DateInputComponent } from './_forms/date-input/date-input.component';
import { MemberMessagesComponent } from './member-messages/member-messages.component';
import { LoginComponent } from './login/login.component';
import { VendorRegisterComponent } from './vendors/vendor-register/vendor-register.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AccountComponent } from './account/account.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceEditComponent } from './services/service-edit/service-edit.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RatingModule } from 'ngx-bootstrap/rating';
import { ServiceRequestComponent } from './services/service-request/service-request.component';
import { RequestHistoryComponent } from './requests/request-history/request-history.component';
import { JwtModule } from '@auth0/angular-jwt';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VendorAccountComponent } from './vendors/vendor-account/vendor-account.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { VendorTypesComponent } from './vendor-types/vendor-types.component';
import { ExploreComponent } from './explore/explore.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { UsersComponent } from './admin/users/users.component';
import { OnboardingComponent } from './admin/onboarding/onboarding.component';
import { VendorsBaseComponent } from './admin/vendors-base/vendors-base.component';
import { CreateDisputeComponent } from './admin/create-dispute/create-dispute.component';
import { ViewDisputeComponent } from './admin/view-dispute/view-dispute.component';
import { AlertsComponent } from './vendors/alerts/alerts.component';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { AppointmentsListComponent } from './admin/appointments-list/appointments-list.component';
import { VendorAppointmentsComponent } from './vendors/vendor-appointments/appointments.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { DisputeComponent } from './dispute/dispute.component';

export function tokenGetter(){
  return localStorage.getItem("user");
}
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MemberCardComponent,
    MemberEditComponent,
    PhotoEditorComponent,
    TextInputComponent,
    DateInputComponent,
    MemberMessagesComponent,
    LoginComponent,
    VendorRegisterComponent,
    AccountComponent,
    ServiceListComponent,
    ServiceEditComponent,
    ServiceDetailComponent,
    RequestDetailComponent,
    RequestListComponent,
    RequestEditComponent,
    ServiceRequestComponent,
    RequestHistoryComponent,
    VendorAccountComponent,
    ServiceCategoryComponent,
    VendorTypesComponent,
    ExploreComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    UsersComponent,
    OnboardingComponent,
    VendorsBaseComponent,
    CreateDisputeComponent,
    ViewDisputeComponent,
    AlertsComponent,
    AppointmentsListComponent,
    VendorAppointmentsComponent,
    DisputeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxSpinnerModule, UiSwitchModule,
    TimepickerModule.forRoot(),
    CarouselModule.forRoot(),
    RatingModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44387"],
        disallowedRoutes:[]
      }
    }),
    TimepickerModule.forRoot(),
    ModalModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor, multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor, multi:true},
    BsModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
