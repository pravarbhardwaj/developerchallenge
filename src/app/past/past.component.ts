import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { array } from '../array';
import * as moment from 'moment';
import { dataservice } from '../data.service'
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {
  data: array[];
  myDate: any;
  myId: number;
  myList: any = [];
  a: any;
  nn: number;
  m: any;
  t: any;
  aa: any;
  date: string;
  cc: any;
  constructor(private _dataservice: dataservice, private translate: TranslateService) {
    let nn = this.myId;

    let date = new Date();
    translate.setDefaultLang('en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
    this.data = this._dataservice.getdata()

  }
  final(num: number) {


    if (num == 1) {
      let aa = moment(this.myDate, 'MM/DD/YYYY');

      console.log(this.cc = aa.diff(this.date, 'days'));
      let currentDate = new Date();

      this.myList = this.data
      let itemUpdated = { id: this.myId, days: this.cc };
      let a = this.data.find(item => item.id == itemUpdated.id).days = itemUpdated.days;

      this.date =
        currentDate.toDateString()
      var date = moment()
      date.set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
      date.toISOString()
      date.format()
      this.date = moment(date, 'MM-DD-YYYY HH:mm:ss', true).format("MM-DD-YYYY HH:mm:ss");
      console.log(date);
      return date;
    }
  }
  updateMyDate(newDate: number) {
    this.myDate = newDate;
    return newDate;
  }
  updateMyId(newId: number) {
    this.myId = newId;

  }
}
