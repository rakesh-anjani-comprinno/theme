import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../../services/theme-service.service';
import { NgClass } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-theme-component',
  standalone: true,
  imports: [NgClass,RouterLink],
  templateUrl: './theme-component.component.html'
})
export class ThemeComponentComponent implements OnInit{

  currentTheme = 'light';
  constructor(private themeService:ThemeServiceService,
    private activatedRoute : ActivatedRoute
  ){}


  ngOnInit(): void {
      this.currentTheme = this.themeService.getActivetheme();
  
  }
  
  toggleTheme(newTheme){
    const currentTheme = this.themeService.getActivetheme();
    // const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    this.themeService.setActiveTheme(newTheme)
    this.currentTheme = newTheme
  }
}
