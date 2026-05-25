import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Job {
  id: string;
  companyKey: string;
  periodKey: string;
  roleKey: string;
  tasksKeys: string[];
}

@Component({
  selector: 'app-experience',
  imports: [TranslatePipe],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  readonly jobs: Job[] = [
    {
      id: 'infuse',
      companyKey: 'experience.infuse.company',
      periodKey: 'experience.infuse.period',
      roleKey: 'experience.infuse.role',
      tasksKeys: [
        'experience.infuse.task1',
        'experience.infuse.task2',
        'experience.infuse.task3',
        'experience.infuse.task4',
        'experience.infuse.task5',
      ],
    },
    {
      id: 'porta',
      companyKey: 'experience.porta.company',
      periodKey: 'experience.porta.period',
      roleKey: 'experience.porta.role',
      tasksKeys: [
        'experience.porta.task1',
        'experience.porta.task2',
        'experience.porta.task3',
      ],
    },
  ];
}
