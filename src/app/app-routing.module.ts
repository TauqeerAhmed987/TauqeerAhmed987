
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { ExploreComponent } from './explore/explore.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { LoginComponent } from './login/login.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { RegisterComponent } from './register/register.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestHistoryComponent } from './requests/request-history/request-history.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceRequestComponent } from './services/service-request/service-request.component';
import { VendorTypesComponent } from './vendor-types/vendor-types.component';
import { VendorAppointmentsComponent } from './vendors/vendor-appointments/appointments.component';
import { VendorRegisterComponent } from './vendors/vendor-register/vendor-register.component';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedGuard } from './_guards/prevent-unsaved.guard';
import { MemberDetailedResolver } from './_resolvers/member-detailed.resolver';

const routes: Routes = [
  // {
  //   path:'',component:HomeComponent
  // },
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
      {path:'',component:HomeComponent},
      // {path:'members',component:MemberListComponent},
      // {path:'members/:username',component:MemberDetailComponent, resolve:{member: MemberDetailedResolver}},
      // {path:'member/edit',component:MemberEditComponent},
      {path:'services',component:ServiceListComponent},
      {path:'services/:url',component:ServiceDetailComponent},
      {path:'services-request/:url',component:ServiceRequestComponent},
      {path:'account',component:AccountComponent/*,canDeactivate:[PreventUnsavedGuard]*/},
      {path:'request-list',component:RequestListComponent},
      {path:'request/:url',component:RequestDetailComponent},
      {path:'categories',component:ServiceCategoryComponent},
      {path:'categories/:url',component:ServiceCategoryComponent},
      {path:'specialists',component:VendorTypesComponent},
      {path:'specialists/:url',component:ServiceListComponent},
      {path:'explore',component:ExploreComponent},
    ]
  },
  {
    path:'business',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
      {path:'account',component:MemberListComponent},
      {path:'onboarding',component:MemberDetailComponent, resolve:{member: MemberDetailedResolver}},
      {path:'appointments',component:ListsComponent},
      {path:'pending-request/:id',component:ServiceRequestComponent},
      {path:'appointments-list',component:VendorAppointmentsComponent},
      {path:'appointments/:id',component:ServiceRequestComponent},
      {path:'create-dispute',component:ServiceRequestComponent},
      {path:'view-dispute',component:ServiceRequestComponent},
    ]
  },
  {
    path:'admin',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
      {path:'users',component:MemberListComponent},
      {path:'onboarding',component:MemberDetailComponent, resolve:{member: MemberDetailedResolver}},
      {path:'vendors',component:ListsComponent},
      {path:'customers',component:ListsComponent},
      {path:'requests/pending',component:ServiceRequestComponent},
      {path:'requests/:id',component:ServiceRequestComponent},
      {path:'appointments',component:ServiceRequestComponent},
      {path:'appointments/:id',component:ServiceRequestComponent},
      {path:'create-dispute',component:ServiceRequestComponent},
      {path:'view-dispute',component:ServiceRequestComponent},
    ]
  },
  {path:'errors',component:TestErrorsComponent}
  ,
  {path:'messages',component:MessagesComponent}
  ,
  {path:'not-found',component:NotFoundComponent}
  ,
  {path:'server-error',component:ServerErrorComponent}
  ,
  {path:'account/login',component:LoginComponent}
  ,
  {path:'account/signup',component:RegisterComponent}
  ,
  {path:'account/resetPassword',component:ResetPasswordComponent}
  ,
  {path:'account/forgotPassword',component:ForgotPasswordComponent}
  ,
  {path:'business-signup',component:VendorRegisterComponent}
   ,
   {path:'**',component:NotFoundComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }