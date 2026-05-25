import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { inject } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly translate = inject(TranslateService);

  readonly email = 'dkaddar12@gmail.com';
  readonly form = {
    name: '',
    email: '',
    message: '',
  };
  readonly sent = signal(false);

  send(): void {
    const subject = encodeURIComponent(`Portfolio · ${this.form.name}`);
    const body = encodeURIComponent(`${this.form.message}\n\n— ${this.form.name} (${this.form.email})`);
    window.location.href = `mailto:${this.email}?subject=${subject}&body=${body}`;
    this.sent.set(true);
  }
}
