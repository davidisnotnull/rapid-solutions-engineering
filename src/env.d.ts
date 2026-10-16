/// <reference types="astro/client" />

declare module "lbh-frontend/lbh/components/lbh-button/button" {
  export default class Button {
    constructor(element: HTMLElement);
    init(): void;
  }
}
