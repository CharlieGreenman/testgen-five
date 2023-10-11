import { Component } from '@angular/core';

@Component({
  selector: 'testgen-five-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-five';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
