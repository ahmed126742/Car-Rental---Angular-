import { UserProfileService } from './services/user-profileService/user-profile.service';
import { TryServiceService } from './services/try-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownlistComponent } from './dropdownlist/dropdownlist.component';
import { FeaturedSectionComponent } from './featured-section/featured-section.component';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent } from './ads/ads.component';
import { LatestCarComponent } from './latest-car/latest-car.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './services/registerService/register.service';
import { LoginService } from './services/loginService/login.service';
//import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { PostCarComponent } from './post-car/post-car.component';
import { PostCarService } from './services/post-carService/post-car.service';
import { PostRegisterService } from './services/post-registerService/post-register.service';
import { ReadMoreComponent } from './read-more/read-more.component';
import { ReadMoreService } from './services/read-moreService/read-more.service';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownlistComponent,
    FeaturedSectionComponent,
    FooterComponent,
    AdsComponent,
    LatestCarComponent,
    LoginComponent,
    RegisterComponent,
    PostCarComponent,
    ReadMoreComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    //RxReactiveFormsModule
  ],
  providers: [
    TryServiceService,
    RegisterService , 
    LoginService ,
    PostCarService,
    PostRegisterService,
    ReadMoreService,
    UserProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
