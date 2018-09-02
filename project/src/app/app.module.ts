import {RouterModule,Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { IndexheaderComponent } from './indexheader/indexheader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserdataComponent } from './userdata/userdata.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UpdateComponent } from './update/update.component';
import { AdduserComponent } from './adduser/adduser.component';


const appRoutes:Routes=[

{
  path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'footer',component:FooterComponent},
  {path:'userdata',component:UserdataComponent},
  {path:'userlist',component:UserlistComponent},
   {path:'indexheader',component:IndexheaderComponent},
   {path:'header',component:HeaderComponent},
   {path:'adduser',component:AdduserComponent},
   {path:"update/:id",component:UpdateComponent}

 
 
   
 /* {path:'**',component:PageNotFoundComponent},*/
];

@NgModule({
  declarations: [
    IndexheaderComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AppComponent,
    SignupComponent,LoginComponent,UserdataComponent,UserlistComponent, UpdateComponent, AdduserComponent

  ],
  imports: [
    BrowserModule,HttpModule,
    ReactiveFormsModule,FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
