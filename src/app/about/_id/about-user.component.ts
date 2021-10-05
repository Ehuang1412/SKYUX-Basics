import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { AboutService } from '../../shared/about.service';

@Component({
  selector: 'my-about-user',
  templateUrl: './about-user.component.html'
})
export class AboutUserComponent {
  private _userId: string;

  @Input()
  public set userId(value: string) {
    this._userId = value;
    this.user = this.aboutService.getUserById(this.userId);
  }

  public get userId() {
    return this._userId;
  }

  public user: any;

  constructor(
    private aboutService: AboutService
  ) { }
}
