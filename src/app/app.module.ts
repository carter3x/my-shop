import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {HomeComponent} from './components/pages/home.component';
import {AboutComponent} from './components/pages/about.component';
import {ContactComponent} from './components/pages/contact.component';
import {ProductComponent} from './components/pages/product.component';
import {routing} from './app.routing';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyC0JnatSKkMf4pnnPkoX903VGFqauwtl0Q',
  authDomain: 'shopitems-89a34.firebaseapp.com',
  databaseURL: 'https://shopitems-89a34.firebaseio.com',
  storageBucket: 'shopitems-89a34.appspot.com',
  messagingSenderId: '1051667805383'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
