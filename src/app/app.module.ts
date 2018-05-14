import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { HomeservicesPage } from '../pages/homeservices/homeservices';
import { JobsPage } from '../pages/jobs/jobs';
import { SkillPage } from '../pages/skill/skill';
import { HirePage } from '../pages/hire/hire';
import { RegisterPage } from '../pages/register/register';
import { NearbyPage } from '../pages/nearby/nearby';
import { MaplistPage } from '../pages/maplist/maplist';
import { ElecPage} from '../pages/elec/elec';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SettingsPage} from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConnectivityProvider } from '../providers/connectivity/connectivity';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { LocationsProvider } from '../providers/locations/locations';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SkillPage,
    HomePage,
    TabsPage,
ProfilePage,
    HomeservicesPage,
    JobsPage,
    HirePage,
    RegisterPage,
    NearbyPage,
    MaplistPage,
    ElecPage,
    AboutPage,
    ContactPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SkillPage,
    HomePage,
    TabsPage,
ProfilePage,
    HomeservicesPage,
    JobsPage,
    HirePage,
    RegisterPage,
    NearbyPage,
    MaplistPage,
    ElecPage,
    AboutPage,
    ContactPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast,
    ConnectivityProvider,
    GoogleMapsProvider,
    LocationsProvider
  ]

})
export class AppModule {}
