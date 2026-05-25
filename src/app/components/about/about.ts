import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly facts = [
    { labelKey: 'about.facts.location', valueKey: 'about.facts.locationValue' },
    { labelKey: 'about.facts.studies', valueKey: 'about.facts.studiesValue' },
    { labelKey: 'about.facts.languages', valueKey: 'about.facts.languagesValue' },
    { labelKey: 'about.facts.availability', valueKey: 'about.facts.availabilityValue' },
  ];
}
