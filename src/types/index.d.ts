/* eslint-disable @typescript-eslint/indent */
import { Tween } from 'gsap';
import moment from 'moment';
import { Controller, Scene, SceneConstructorOptions } from 'scrollmagic';

import { companyRepositoryFactory } from '~/domains/company';
import { pressRepositoryFactory } from '~/domains/press';

declare class ExtendScene extends Scene {
  setTween(
    TweenObject: string | Tween,
    duration?: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: any,
  ): ExtendScene;
  removeTween(result: boolean): ExtendScene;
}

interface InjectedByPlugin {
  $press: ReturnType<typeof pressRepositoryFactory>;
  $company: ReturnType<typeof companyRepositoryFactory>;
  $moment: typeof moment;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  $scrollmagic: Controller & {
    scene(options?: SceneConstructorOptions): ExtendScene;
  };
}

declare module '@nuxt/types' {
  interface Context extends InjectedByPlugin {}
}

declare module 'vue/types/vue' {
  interface Vue extends InjectedByPlugin {}
}
