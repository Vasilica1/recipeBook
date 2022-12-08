import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saveFeature: string = 'recipe';

  onNavigate(element: string) {
    this.saveFeature = element;
  }
}
