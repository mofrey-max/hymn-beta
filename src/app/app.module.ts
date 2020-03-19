import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRScanner} from '@ionic-native/qr-scanner/ngx';

// plugins
import {SQLitePorter} from '@ionic-native/sqlite-porter/ngx';
import {SQLite} from '@ionic-native/sqlite/ngx';
import { IonicStorageModule } from '@ionic/storage';
import {DatabaseService} from './services/database.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    QRScanner,
    BarcodeScanner,
    SQLitePorter,
    SQLite,
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
