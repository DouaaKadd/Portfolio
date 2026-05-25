import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Lang {
  id: string;
  flag: string;
  nameKey: string;
  level: 'native' | 'b2';
  bars: number;
}

@Component({
  selector: 'app-languages',
  imports: [TranslatePipe],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
})
export class Languages {
  readonly items: Lang[] = [
    { id: 'es', flag: '🇪🇸', nameKey: 'languages.spanish', level: 'native', bars: 5 },
    { id: 'ca', flag: '🇨🇦', nameKey: 'languages.catalan', level: 'native', bars: 5 },
    { id: 'en', flag: '🇬🇧', nameKey: 'languages.english', level: 'b2', bars: 4 },
    { id: 'ar', flag: '🇲🇦', nameKey: 'languages.arabic', level: 'native', bars: 5 },
  ];

  bars(n: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i < n ? 1 : 0);
  }
}
