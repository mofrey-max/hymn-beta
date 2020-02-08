import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme = '';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  enableDarkMode(enableDarkMode: boolean) {
    let theme = this.getLightTheme()
  if (enableDarkMode) theme = this.getDarkTheme()
    this.document.documentElement.style.cssText = theme
  }
  
  getDarkTheme() {
    return `
      ${this.currentTheme}
      --ion-background-color: #171717;
      --ion-item-background-color: #171717;
      --ion-border-color: #444;
      --ion-text-color: #fff;
      --ion-text-color-step-400: #fff;
      --ion-text-color-step-600: #fff;
    `;
  }

  getLightTheme() {
    return `
      ${this.currentTheme}
      --ion-background-color: #fff;
      --ion-item-background-color: #fff;
      --ion-border-color: #d8d8d8;
      --ion-text-color: #222;
      --ion-text-color-step-400: #222;
      --ion-text-color-step-600: #222;
    `;
  }
}