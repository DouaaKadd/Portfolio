import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type LangCode = 'es' | 'en' | 'ca' | 'fr';

const STORAGE_KEY = 'portfolio.lang';

@Injectable({ providedIn: 'root' })
export class Language {
  private readonly translate = inject(TranslateService);

  readonly available: ReadonlyArray<{ code: LangCode; labelKey: string }> = [
    { code: 'es', labelKey: 'lang.es' },
    { code: 'en', labelKey: 'lang.en' },
    { code: 'ca', labelKey: 'lang.ca' },
    { code: 'fr', labelKey: 'lang.fr' },
  ];

  readonly current = signal<LangCode>('es');

  init(): void {
    const supported: LangCode[] = ['es', 'en', 'ca', 'fr'];
    this.translate.addLangs(supported);

    const stored = (typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null) as LangCode | null;
    const browser = (typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'es') as LangCode;

    const initial: LangCode = stored && supported.includes(stored)
      ? stored
      : (supported.includes(browser) ? browser : 'es');

    this.use(initial);
  }

  use(code: LangCode): void {
    this.translate.use(code);
    this.current.set(code);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, code);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = code;
    }
  }
}
