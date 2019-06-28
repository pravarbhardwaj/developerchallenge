import { Component, OnInit } from '@angular/core';
import { array } from '../array';

import * as moment from 'moment';

import {PastComponent} from '../past/past.component';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})



export class HomeComponent implements OnInit {
 
  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
    ngOnInit() {
  
  
      
  
  
    }
  }