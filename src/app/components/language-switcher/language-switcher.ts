import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Language, LangCode } from '../../services/language';

@Component({
  selector: 'app-language-switcher',
  imports: [TranslatePipe],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcher {
  readonly language = inject(Language);

  select(code: LangCode): void {
    this.language.use(code);
  }
}
