import {
  NgModule
} from '@angular/core';

import {
  AppSkyModule
} from './app-sky.module';

import { SkyModalDemoFormComponent } from './modal/modal-demo-form.component';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  exports: [
    AppSkyModule
  ],
  providers: [],
  entryComponents: [
    SkyModalDemoFormComponent
  ]
})
export class AppExtrasModule { }
