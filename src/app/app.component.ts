import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  whichClicked = '';

  title = 'toDoApp';

  onNavClicked(navClicked: string) {
    this.whichClicked = navClicked;
  }
}
