import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './components/about/about';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import { Contact } from './components/contact/contact';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    About,
    Navbar,
    Hero,
    Footer,
    Contact,
    Projects
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('landing-page-profissional');
}
