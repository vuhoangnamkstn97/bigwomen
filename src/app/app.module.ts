import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './screens/header/header.component';
import { FooterComponent } from './screens/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupHeaderMobileComponent } from './screens/popup-header-mobile/popup-header-mobile.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { AboutScreenComponent } from './screens/about-screen/about-screen.component';
import { RoadmapScreenComponent } from './screens/roadmap-screen/roadmap-screen.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopupHeaderMobileComponent,
    HomeScreenComponent,
    AboutScreenComponent,
    RoadmapScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatDialogModule,
    CarouselModule,
  ],
  exports: [MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
