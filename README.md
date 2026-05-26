# Portfolio · Douaa Kaddar

> Portfolio personal. Desarrollado con Angular 21, Tailwind CSS v4 y soporte multilingüe (ES · EN · CA · FR).

🌐 **Live demo**: [douaa-kaddar.vercel.app](https://douaa-kaddar.vercel.app/)

## Stack

| Capa | Tecnología |
|---|---|
| Framework | **Angular 21** standalone components · Signals · Reactive Forms |
| Estilos | **Tailwind CSS v4** · diseño minimalista monocromo |
| Tipografía | Cormorant Garamond (serif display) + Inter (sans) + JetBrains Mono |
| i18n | `@ngx-translate/core` v17 con carga remota de JSON |
| Routing | Lazy components |

## Funcionalidades

- **9 secciones**: Hero, Sobre mí, Proyectos, Experiencia profesional, Tecnologías, Formación, Certificaciones, Idiomas, Contacto.
- **Selector de idioma** en el header (ES/EN/CA/FR) con persistencia en localStorage + autodetección del navegador.
- **Sticky header** con backdrop blur y subrayados animados en los enlaces.
- **8 proyectos** con captura real, tags, descripción traducida y enlace al repo de GitHub.
- **Formulario de contacto** que abre el cliente de email del visitante.
- **Botones CTA**: Ver proyectos · Descargar CV · Contactar.
- **Accesible**: focus visible, contraste WCAG AA, `alt` en imágenes, `lang` dinámico.

## Estructura

```
src/app/
├── components/
│   ├── header/           ← nav + selector de idioma
│   ├── hero/             ← presentación + CTAs
│   ├── about/
│   ├── projects/         ← grid destacados + grid otros
│   ├── experience/       ← timeline (Infuse, PortAventura)
│   ├── skills/
│   ├── education/
│   ├── certifications/
│   ├── languages/
│   ├── contact/
│   ├── footer/
│   └── language-switcher/
├── data/projects.data.ts ← catálogo de proyectos
├── models/project.ts     ← interfaz tipada
└── services/language.ts  ← TranslateService wrapper + persistencia
```

Las traducciones viven en [`public/i18n/`](public/i18n/) (`es.json`, `en.json`, `ca.json`, `fr.json`) — todo el texto está fuera del código.

## Cómo arrancarlo

```bash
npm install
npm start             # http://localhost:4200
```

Build de producción:

```bash
npm run build         # genera dist/
```

## Proyectos destacados en el portfolio

- **NutriPlan** — App de planificación nutricional full-stack (Laravel API + Angular 21) · [repo](https://github.com/DouaaKadd/NutriPlan)
- **Sistema de Gestión Académica** — CRUD de estudiantes/ciclos con Laravel · [repo](https://github.com/DouaaKadd/PROJECTE-LARAVEL-STUDENTS)
- **GreenBite** — Recetas saludables con info nutricional · [repo](https://github.com/DouaaKadd/GreenBite)

Y otros: DragonBall API, Fires Catalanes, Dungeon Quest (Java), Rutines.

## Autora

Douaa Kaddar · Desarrolladora Full Stack Junior
[GitHub](https://github.com/DouaaKadd) · [LinkedIn](https://www.linkedin.com/in/douaa-kaddar) · dkaddar12@gmail.com

## Licencia

MIT
