import {
  Component
} from '@angular/core';

import { AboutService } from '../shared/about.service';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  // public team: { name: string; email: string; }[] = [
  public team: any;
  //   {
  //     name: 'Robert Hernandez',
  //     email: 'rh@edu.org'
  //   },
  //   {
  //     name: 'Samantha Jones',
  //     email: 'sam@jones.com'
  //   },
  //   {
  //     name: 'Michael Jordan',
  //     email: 'michael@jordon.net'
  //   }
  // ];
  constructor(
    aboutService: AboutService
  ) {
    this.team = aboutService.getUsers();
  }
}
