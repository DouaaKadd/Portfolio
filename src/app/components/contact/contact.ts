import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjgzpqqa';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly http = inject(HttpClient);

  readonly email = 'dkaddar12@gmail.com';
  readonly form = {
    name: '',
    email: '',
    message: '',
  };
  readonly status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  send(formRef: NgForm): void {
    if (formRef.invalid || this.status() === 'sending') return;

    this.status.set('sending');

    const payload = {
      name: this.form.name,
      email: this.form.email,
      message: this.form.message,
      _subject: `Portfolio · ${this.form.name}`,
    };

    this.http
      .post(FORMSPREE_ENDPOINT, payload, {
        headers: { Accept: 'application/json' },
      })
      .subscribe({
        next: () => {
          this.status.set('success');
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
          formRef.resetForm();
        },
        error: () => this.status.set('error'),
      });
  }
}
