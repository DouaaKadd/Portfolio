import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface EducationItem {
  id: string;
  titleKey: string;
  institutionKey: string;
  periodKey: string;
}

@Component({
  selector: 'app-education',
  imports: [TranslatePipe],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  readonly items: EducationItem[] = [
    {
      id: 'daw',
      titleKey: 'education.daw.title',
      institutionKey: 'education.daw.institution',
      periodKey: 'education.daw.period',
    },
    {
      id: 'nutrition',
      titleKey: 'education.nutrition.title',
      institutionKey: 'education.nutrition.institution',
      periodKey: 'education.nutrition.period',
    },
    {
      id: 'bachillerato',
      titleKey: 'education.bachillerato.title',
      institutionKey: 'education.bachillerato.institution',
      periodKey: 'education.bachillerato.period',
    },
  ];
}
