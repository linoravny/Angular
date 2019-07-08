import { Component, ViewEncapsulation  } from '@angular/core';

@Component({// @  is decorator that includes metatada (angular familiar)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent {
  title = 'courseApp';
}