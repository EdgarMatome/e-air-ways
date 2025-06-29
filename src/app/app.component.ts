import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'e-air-ways';

  constructor(protected _spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this._spinner.show();
    setTimeout(() => {
      this._spinner.hide();
    }, 1500);
  }
}
