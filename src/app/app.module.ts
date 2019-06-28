import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule , Routes} from '@angular/router'
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PastComponent } from './past/past.component';
import { LiveComponent } from './live/live.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdDatepickerBasic} from './dp-basic';
import {NgbdDropdownBasic} from './models/dropdown'
import {DemoDatePickerCustomFormatComponent} from './models/vldp';
import {dataservice} from './data.service'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
const appRoutes: Routes =[
{path: 'live' ,component: LiveComponent },
{path: 'upcoming' ,component: UpcomingComponent },
{path: 'past' ,component: PastComponent }
]
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    UpcomingComponent,
    PastComponent,
    LiveComponent,
    HomeComponent,

    DemoDatePickerCustomFormatComponent,
    NgbdDatepickerBasic,
    NgbdDropdownBasic
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DatePickerModule,
    FormsModule,
    MomentModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot()
    
 
    
  ],
  providers: [dataservice],
  bootstrap: [HomeComponent]
})

export class AppModule { }
