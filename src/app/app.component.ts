import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
// import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //   template: `
  //   <h1>Hello World!</h1>
  //   <p>This template definition spans multiple lines.</p>
  // `,
  styleUrls: ['./app.component.scss']
  // styles: ['h1 { font-weight: normal; }']
})
export class AppComponent {
  title = 'my-app';

  constructor(private spinner: NgxSpinnerService) {

  }

  // ngOnInit() {

  // }

  showSpinner() {
    this.spinner.show()

    setTimeout(() => {
      this.spinner.hide()

    }, 2000);
  }
}
