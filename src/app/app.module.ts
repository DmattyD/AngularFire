import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MarkdownModule } from 'ngx-markdown';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

const config = {
  issuer: 'https://dev-110678.okta.com',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oad6xwwbR38Ymyg1356'
};

const firebaseConfig = {
  apiKey: "AIzaSyCGDYmWBKeW6xGxSVNCCKZh1CGdSjyl_jQ",
  authDomain: "angularwiki-17fd9.firebaseapp.com",
  databaseURL: "https://angularwiki-17fd9.firebaseio.com",
  projectId: "angularwiki-17fd9",
  storageBucket: "angularwiki-17fd9.appspot.com",
  messagingSenderId: "855082282146",
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OktaAuthModule.initAuth(config),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MarkdownModule.forRoot()
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
