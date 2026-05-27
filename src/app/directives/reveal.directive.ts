import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { class: 'reveal' },
})
export class Reveal implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const target = this.el.nativeElement;

    if (typeof IntersectionObserver === 'undefined') {
      target.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            target.classList.add('is-visible');
            this.observer?.unobserve(target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    this.observer.observe(target);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
