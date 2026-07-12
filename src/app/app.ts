import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import {input } from '@angular/core';
import { About } from './pages/about/about';
import { Shipper } from './shared/shipper/shipper';
@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    RouterOutlet,
    About,
    Shipper
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  protected readonly title = signal('structure');
}
