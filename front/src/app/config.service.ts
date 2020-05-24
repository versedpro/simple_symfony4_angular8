import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  // url = 'http://httpbin.org/get';
  url = 'http://localhost:8000/order/get';
  getOrder() {
    // return this
    //         .http
    //         .get(`${this.url}/data`)
    //         .toPromise().then(res => {

    //           console.log(res);
    //           return res;
    //         });
    return new Promise((resolve, reject) => {
      this.http.get(`${this.url}`)
        .subscribe(res => {
          resolve(res);
          
        }, (err) => {
          reject(err);
        }, () => {
        });
    });
  //   return [
  //     {
  //         "id": 1094,
  //         "date": "2019-09-19 03:03:01",
  //         "customer": "Noelle Estrada",
  //         "address1": "540 Malesuada Rd.",
  //         "city": "Lewiston",
  //         "postcode": "54517",
  //         "country": "Singapore",
  //         "amount": 3281,
  //         "status": "cancelled",
  //         "deleted": "Yes",
  //         "last_modified": "2019-12-24 19:18:46"
  //     },
  //     {
  //         "id": 1095,
  //         "date": "2019-09-03 13:18:25",
  //         "customer": "Yeo Ramsey",
  //         "address1": "1532 Eget Road",
  //         "city": "Castri di Lecce",
  //         "postcode": "I99 7GL",
  //         "country": "Lesotho",
  //         "amount": 8833,
  //         "status": "cancelled",
  //         "deleted": "Yes",
  //         "last_modified": "2019-08-24 16:44:38"
  //     },
  //     {
  //         "id": 1096,
  //         "date": "2020-01-08 07:47:51",
  //         "customer": "Yael Vaughan",
  //         "address1": "7779 Tortor Rd.",
  //         "city": "Sulzbach",
  //         "postcode": "74718",
  //         "country": "Western Sahara",
  //         "amount": 6560,
  //         "status": "in_production",
  //         "deleted": "Yes",
  //         "last_modified": "2020-11-19 13:09:42"
  //     },
  //     {
  //         "id": 1097,
  //         "date": "2020-03-25 23:16:36",
  //         "customer": "Quyn Nixon",
  //         "address1": "3879 Orci Road",
  //         "city": "Córdoba",
  //         "postcode": "25682",
  //         "country": "Pakistan",
  //         "amount": 7158,
  //         "status": "pending",
  //         "deleted": "No",
  //         "last_modified": "2021-01-26 19:31:16"
  //     },
  //     {
  //         "id": 1098,
  //         "date": "2019-12-14 19:32:45",
  //         "customer": "Aphrodite Olson",
  //         "address1": "5104 Ipsum. Rd.",
  //         "city": "Busan",
  //         "postcode": "778606",
  //         "country": "Azerbaijan",
  //         "amount": 4869,
  //         "status": "in_production",
  //         "deleted": "No",
  //         "last_modified": "2019-06-26 15:22:20"
  //     },
  //     {
  //         "id": 1099,
  //         "date": "2019-06-27 02:19:01",
  //         "customer": "Delilah Whitfield",
  //         "address1": "P.O. Box 268, 6132 Iaculis St.",
  //         "city": "Caerphilly",
  //         "postcode": "2295",
  //         "country": "Poland",
  //         "amount": 6501,
  //         "status": "in_production",
  //         "deleted": "Yes",
  //         "last_modified": "2021-03-19 11:05:55"
  //     }
  // ]
  }
}
