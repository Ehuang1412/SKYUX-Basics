import {
  Component, Input
} from '@angular/core';

@Component({
  selector: 'app-my-demo',
  templateUrl: './my-demo.component.html',
  styleUrls: ['./my-demo.component.scss']
})
export class MyDemoComponent {
  @Input()
  public message: string;
}
