import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
  currentTheme = 'light'
  constructor() { }

  setActiveTheme(theme = 'light'){
    this.currentTheme = theme
    this.loadThemeCss(theme)
  }

  getActivetheme(){
    return this.currentTheme
  }

  loadThemeCss(theme){
    const existingLinkElement = document.getElementById('theme-css') as HTMLLinkElement
    if(existingLinkElement){
      existingLinkElement.href = `${theme}.css`
    }else{
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.id = 'theme-css';
      linkElement.href = `${theme}.css`;
      document.head.appendChild(linkElement);
    }
  }
}
