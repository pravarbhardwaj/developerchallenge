import {Injectable} from '@angular/core'
import {array} from './array'
@Injectable() 
export class  dataservice{

    private data: array[] = 
    [
        {id:1,
        name:'Test Whatsapp',
        date: "01-22-2019",
        pricing:'View Pricing',
        place:'US',
        days:-154,
        src:"assets/img/whatsapp.png"
      },
      {
        id:2,
        name:'Test Snapchat',
        date: "01/27/2019",
        pricing:'View Pricing',
        place:'US',
        days:-149,
        src:"assets/img/snapchat.png"
      },
      {
        id:3,
        name:'Instagram Event',
        date: "02/15/2019",
        pricing:'View Pricing',
        place: 'CA, FR',
        days:-130,
        src:"assets/img/instagram.png"
      },
      {
        id:4,
        name:'Test Facebook',
        date: "11/05/2018",
        pricing:'View Pricing',
        place:'FR',
        days:-232,
        src:"assets/img/facebook.png"
      },
      {
        id:5,
        name:'Test Youtube',
        date: "03/22/2019",
        pricing:'View Pricing',
        place:'CA, FR, JP',
        days:-95,
        src:"assets/img/youtube.png"
      }
      ];
      
      getdata():array[]
      {
        return this.data;
      }
}