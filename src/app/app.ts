import { Component, inject, OnInit } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Certifications } from './components/certifications/certifications';
import { Languages } from './components/languages/languages';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Language } from './services/language';
import { Reveal } from './directives/reveal.directive';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    About,
    Skills,
    Experience,
    Projects,
    Education,
    Certifications,
    Languages,
    Contact,
    Footer,
    Reveal,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly language = inject(Language);

  ngOnInit(): void {
    this.language.init();
  }
}
