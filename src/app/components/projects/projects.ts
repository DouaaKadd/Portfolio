import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project';

@Component({
  selector: 'app-projects',
  imports: [TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  readonly all = signal<Project[]>(PROJECTS);
  readonly featured = computed(() => this.all().filter((p) => p.featured));
  readonly others = computed(() => this.all().filter((p) => !p.featured));
}
