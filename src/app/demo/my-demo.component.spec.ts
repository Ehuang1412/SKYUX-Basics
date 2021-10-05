import {
  inject,
  TestBed
} from '@angular/core/testing';

import {
  SkyAppTestModule
} from '@skyux-sdk/builder/runtime/testing/browser';

import {
  expect
} from '@skyux-sdk/testing';
import { config } from 'rxjs';

import {
  MyDemoComponent
} from './my-demo.component';

import {
  expectAsync
} from '@skyux-sdk/testing';

// import'@skyux/config';


describe('My demo component', () => {

  /**
   * This configureTestingModule function imports SkyAppTestModule, which brings in all of
   * the SKY UX modules and components in your application for testing convenience. If this has
   * an adverse effect on your test performance, you can individually bring in each of your app
   * components and the SKY UX modules that those components rely upon.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });

  it('should do something', () => {
    const fixture = TestBed.createComponent(MyDemoComponent);

    fixture.detectChanges();

    expect(true).toBe(false);
  });

  it('should pass accessibility', async () => {
    let element;
    await expectAsync(element).toBeAccessible();
  }));

  // it('should pass accessibility',
  //   inject([SkyAppConfig], async (appConfig: SkyAppConfig) => {
  //     let element;
  //     await expectAsync(element).toBeAccessible(config.skyux.a11y);
  //   })
  // );

});
