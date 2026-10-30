# Radici

Sito vetrina per uno studio di bioarchitettura: presenta il metodo di lavoro, i materiali naturali e i progetti realizzati. Progetto personale di Marta Righetti, nato come esercizio di design e sviluppo front-end.

<!-- Aggiungi qui uno screenshot o il link al sito pubblicato -->

## Cosa c'è nel sito

- **Home** con presentazione, manifesto, metodo, materiali e contatti
- **Progetti**: elenco e pagina di dettaglio per ogni progetto, con galleria
- **Tema chiaro e scuro**, scelto dall'utente e ricordato nel browser
- **Animazioni** con GSAP e scorrimento fluido con Lenis
- **Banner dei cookie**

## Tecnologie

React 19, TypeScript, Vite, React Router, GSAP, Lenis. Pubblicato su Netlify.

## Come avviarlo

```bash
git clone https://github.com/uattina18/radici.git
cd radici
npm install
npm run dev
```

Altri comandi: `npm run build` (versione di produzione), `npm run preview`, `npm run lint`.

## Struttura

```
src/
  Pages/       elenco progetti e dettaglio
  sections/    sezioni della home (Hero, Manifesto, Method, Materials, Projects, Contacts)
  components/  header, footer, cambio tema, cookie, scorrimento fluido
  data/        dati dei progetti
  assets/      font, immagini, video
```

## Accessibilità e prestazioni

Il progetto tiene conto delle linee guida di accessibilità e del peso delle pagine (immagini e video ottimizzati).

## Autrice

Marta Righetti, [martarighetticodeux.it](https://martarighetticodeux.it)
