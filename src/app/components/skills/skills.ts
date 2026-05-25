import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface SkillGroup {
  titleKey: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  readonly groups: SkillGroup[] = [
    {
      titleKey: 'skills.groups.backend',
      items: ['PHP', 'Laravel', 'Java', 'C#', 'Visual Basic .NET'],
    },
    {
      titleKey: 'skills.groups.frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Bootstrap'],
    },
    {
      titleKey: 'skills.groups.databases',
      items: ['MySQL'],
    },
    {
      titleKey: 'skills.groups.tools',
      items: ['GitHub', 'Docker', 'WordPress', 'Elementor', 'n8n'],
    },
  ];
}
