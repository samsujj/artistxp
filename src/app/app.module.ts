import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {appRoutingProviders, routing} from 'route';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';
import {CookieService} from 'ngx-cookie-service';
import { NamefilterPipe } from './namefilter.pipe';
import {CKEditorModule} from 'ngx-ckeditor';
import { SafehtmlPipe } from './safehtml.pipe';
import { BlogfilterPipe } from './blogfilter.pipe';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import { SerchbyrolePipe } from './serchbyrole.pipe';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ArtistfooterComponent } from './artistfooter/artistfooter.component';
import { ArtistheaderComponent } from './artistheader/artistheader.component';
import { ProfileComponent } from './profile/profile.component';
import { CompetitionComponent } from './competition/competition.component';
import { TrendingartistComponent } from './trendingartist/trendingartist.component';

@NgModule({
  declarations: [
    AppComponent,
    NamefilterPipe,
    SafehtmlPipe,
    BlogfilterPipe,
    SerchbyrolePipe,
    HomeComponent,
    SignupComponent,
    ArtistfooterComponent,
    ArtistheaderComponent,
    ProfileComponent,
    CompetitionComponent,
    TrendingartistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
      CKEditorModule,
      ModalModule.forRoot(),
      ScrollToModule.forRoot()
  ],providers: [appRoutingProviders, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
