import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageSwitcher } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe, LanguageSwitcher],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly handle = '@douaa';
  readonly links = [
    { key: 'header.github', href: 'https://github.com/DouaaKadd' },
    { key: 'header.linkedin', href: 'https://www.linkedin.com/in/douaa-kaddar' },
    { key: 'header.contact', href: '#contact' },
  ];
}
