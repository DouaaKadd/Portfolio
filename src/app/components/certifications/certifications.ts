import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-certifications',
  imports: [TranslatePipe],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
})
export class Certifications {
  readonly items = [
    'certifications.items.vertex',
    'certifications.items.spring',
    'certifications.items.responsive',
    'certifications.items.python',
    'certifications.items.cloud',
    'certifications.items.react',
  ];
}
