import { Injectable } from '@angular/core';
import { Theme, orig, dark } from './theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private active: Theme = orig;
  private availableThemes: Theme[] = [orig, dark];

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    localStorage.setItem('theme', JSON.stringify(dark));
    this.setActiveTheme(dark);
  }

  setOriginalTheme(): void {
    localStorage.setItem('theme', JSON.stringify(orig));
    this.setActiveTheme(orig);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach((property) => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
