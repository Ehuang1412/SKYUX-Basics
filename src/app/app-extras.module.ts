import {
  NgModule
} from '@angular/core';
import { AboutService } from './shared/about.service';

import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  exports: [
    AppSkyModule
  ],
  providers: [
    AboutService
  ],
  entryComponents: []
})
export class AppExtrasModule { }
