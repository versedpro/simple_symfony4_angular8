// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular 8';
// }

import { Component } from '@angular/core';
import { customers } from './customers';
import { ConfigService } from './config.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { Config } from 'protractor';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <kendo-grid
          [data]="gridView"
          [pageSize]="pageSize"
          [skip]="skip"
          [pageable]="true"
          [height]="750"
          (pageChange)="pageChange($event)"
        >
        <kendo-grid-column field="id" title="ID">
        </kendo-grid-column><kendo-grid-column field="date" title="Date">
        </kendo-grid-column>
        <kendo-grid-column field="customer" title="Customer">
        </kendo-grid-column>
        <kendo-grid-column field="address1" title="Address 1">
        </kendo-grid-column>
        <kendo-grid-column field="city" title="City">
        </kendo-grid-column>
        <kendo-grid-column field="postcode" title="Postcode">
        </kendo-grid-column>
        <kendo-grid-column field="ContactName" field="country" title="Country">
        </kendo-grid-column>
        <kendo-grid-column field="ContactName" field="amount" title="Amount">
        </kendo-grid-column>
        <kendo-grid-column field="ContactName" field="status" title="Status">
        </kendo-grid-column>
        <kendo-grid-column field="ContactName" field="deleted" title="Deleted">
        </kendo-grid-column>
        <kendo-grid-column field="ContactName" field="last_modified" title="Last modified">
        </kendo-grid-column>
      </kendo-grid>
    </div>
  `
})
export class AppComponent {
    public gridView: GridDataResult;
    public pageSize = 10;
    public skip = 0;
    private data: Object[];

    // private items: any[] = customers;
    private items: any = [];

    constructor(private _service: ConfigService) {
        this._service.getOrder().then((res) => {
            console.log(res);
            this.items = res;
            this.loadItems();
        })
    }

    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }
}