import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {ThemeService } from './../services/theme.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  private currentTheme = '';
  fontSize;

  ngOnInit() {
  }



  constructor(@Inject(DOCUMENT) private document: Document, private cdr: ChangeDetectorRef, private themeService: ThemeService) {}

  setPrimaryColor(color: string) {
    this.setVariable('--ion-color-primary', color);
  }

  setVariable(name: string, value: string) {
    this.currentTheme = `${name}: ${value};`;
    this.document.documentElement.style.setProperty(name, value);
  }

  enableDarkMode(enableDarkMode: boolean) {
    let theme = this.getLightTheme();
    if (enableDarkMode) {
    theme = this.getDarkTheme();
    this.document.documentElement.style.cssText = theme;
  }
  }

  onChangeToggle(ev: CustomEvent) {
    this.themeService.enableDarkMode(ev.detail.checked);
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

  onChange(fontsize) {
    const body = document.getElementsByTagName('body')[0];
    body.setAttribute('style', `font-size: ${fontsize}rem`);
    this.cdr.detectChanges();
    console.log(body);
    // fontsize
  }

}
