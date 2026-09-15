import villaGiorgiaCover from "../assets/img/villa-giorgia/villa-giorgia-cover.jpg";
import villaGiorgiaFacciata from "../assets/img/villa-giorgia/villa-giorgia-facciata.jpg";
import villaGiorgiaPiscina from "../assets/img/villa-giorgia/villa-giorgia-piscina.jpg";
import villaGiorgiaGiardino from "../assets/img/villa-giorgia/villa-giorgia-giardino.jpg";
import villaGiorgiaPortico from "../assets/img/villa-giorgia/villa-giorgia-portico.jpg";
import villaGiorgiaSala from "../assets/img/villa-giorgia/villa-giorgia-sala.jpg";
import villaGiorgiaCucina from "../assets/img/villa-giorgia/villa-giorgia-cucina.jpg";
import villaGiorgiaCameraArco from "../assets/img/villa-giorgia/villa-giorgia-camera-arco.jpg";
import villaGiorgiaDependance from "../assets/img/villa-giorgia/villa-giorgia-dependance.jpg";

import villaGiuliaCover from "../assets/img/Villa-Giulia/villa-giulia-cover.jpg";
import villaGiuliaFacciata from "../assets/img/Villa-Giulia/villa-giulia-facciata.jpg";
import villaGiuliaIngresso from "../assets/img/Villa-Giulia/villa-giulia-ingresso.jpg";
import villaGiuliaSoggiorno from "../assets/img/Villa-Giulia/villa-giulia-soggiorno.jpg";
import villaGiuliaArredi from "../assets/img/Villa-Giulia/villa-giulia-arredi.jpg";
import villaGiuliaAngoloVerde from "../assets/img/Villa-Giulia/villa-giulia-angolo-verde.jpg";

import casaAmeliaCover from "../assets/img/Casa-Amelia/casa-amelia-cover.jpg";
import casaAmeliaFacciata from "../assets/img/Casa-Amelia/casa-amelia-facciata.jpg";
import casaAmeliaIngresso from "../assets/img/Casa-Amelia/casa-amelia-ingresso.jpg";
import casaAmeliaSoggiorno from "../assets/img/Casa-Amelia/casa-amelia-soggiorno.jpg";
import casaAmeliaCucina from "../assets/img/Casa-Amelia/casa-amelia-cucina.jpg";
import casaAmeliaCamera from "../assets/img/Casa-Amelia/casa-amelia-camera.jpg";
import casaAmeliaBagno from "../assets/img/Casa-Amelia/casa-amelia-bagno.jpg";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  name: string;
  category: string;
  slug: string;
  location: string;
  year: string;
  surface: string;
  image: string;
  imageAlt: string;
  description: string[];
  gallery: ProjectImage[];
};

export const projects: Project[] = [
  {
    id: "01",
    name: "Villa Giorgia",
    category: "Residenza privata",
    slug: "villa-giorgia",
    location: "Colline lucchesi, Toscana",
    year: "2023",
    surface: "480 m²",
    image: villaGiorgiaCover,
    imageAlt: "Villa Giorgia immersa nel verde, vista dalla piscina",
    description: [
      "Villa Giorgia nasce sul crinale di una collina toscana, dove il terreno digrada dolcemente verso la valle. Il progetto ha cercato fin dall'inizio un dialogo diretto con la pendenza naturale, evitando sbancamenti invasivi e lasciando che la casa si adagiasse sul profilo del terreno.",
      "Pietra locale, intonaci a calce e grandi aperture verso il giardino definiscono un'architettura che respira con le stagioni: fresca d'estate grazie ai portici ombreggiati, luminosa d'inverno grazie all'esposizione studiata di ogni ambiente.",
    ],
    gallery: [
      {
        src: villaGiorgiaFacciata,
        alt: "Facciata principale di Villa Giorgia",
      },
      {
        src: villaGiorgiaPiscina,
        alt: "Piscina panoramica con vista sulla vallata",
      },
      {
        src: villaGiorgiaGiardino,
        alt: "Giardino paesaggistico di Villa Giorgia",
      },
      { src: villaGiorgiaPortico, alt: "Portico ombreggiato in pietra locale" },
      { src: villaGiorgiaSala, alt: "Soggiorno luminoso con travi a vista" },
      {
        src: villaGiorgiaCucina,
        alt: "Cucina in muratura con materiali naturali",
      },
      {
        src: villaGiorgiaCameraArco,
        alt: "Camera da letto con apertura ad arco",
      },
      {
        src: villaGiorgiaDependance,
        alt: "Dependance nel giardino di Villa Giorgia",
      },
    ],
  },
  {
    id: "02",
    name: "Villa Giulia",
    category: "Residenza privata",
    slug: "villa-giulia",
    location: "Costa mediterranea",
    year: "2022",
    surface: "310 m²",
    image: villaGiuliaCover,
    imageAlt: "Villa Giulia circondata dalla vegetazione",
    description: [
      "Villa Giulia interpreta l'architettura mediterranea attraverso volumi puri e intonaci chiari, pensati per riflettere la luce intensa della costa senza mai abbagliare. Le palme e la vegetazione esistente sono state preservate e integrate nel progetto come elementi strutturanti dello spazio esterno.",
      "Gli ambienti interni si aprono verso logge e terrazze ombreggiate, in una sequenza continua tra dentro e fuori che accompagna la vita quotidiana di chi la abita, giorno dopo giorno, stagione dopo stagione.",
    ],
    gallery: [
      {
        src: villaGiuliaFacciata,
        alt: "Facciata bianca di Villa Giulia tra le palme",
      },
      { src: villaGiuliaIngresso, alt: "Ingresso di Villa Giulia" },
      { src: villaGiuliaSoggiorno, alt: "Soggiorno luminoso di Villa Giulia" },
      { src: villaGiuliaArredi, alt: "Dettaglio degli arredi su misura" },
      {
        src: villaGiuliaAngoloVerde,
        alt: "Angolo verde nel giardino di Villa Giulia",
      },
    ],
  },
  {
    id: "03",
    name: "Casa Amelia",
    category: "Residenza privata",
    slug: "casa-amelia",
    location: "Area boschiva, montagna",
    year: "2024",
    surface: "220 m²",
    image: casaAmeliaCover,
    imageAlt: "Casa Amelia circondata da un giardino alberato",
    description: [
      "Casa Amelia sorge ai margini di un bosco di conifere, ed è stata progettata per scomparire tra gli alberi più che per imporsi su di essi. Legno e pietra a vista raccontano un'architettura che nasce dai materiali del luogo, lavorati con tecniche artigianali locali.",
      "Gli interni caldi e avvolgenti si alternano a grandi vetrate che inquadrano il bosco circostante, trasformando ogni stanza in un punto di osservazione privilegiato sul paesaggio che cambia con le stagioni.",
    ],
    gallery: [
      {
        src: casaAmeliaFacciata,
        alt: "Facciata in legno e pietra di Casa Amelia",
      },
      { src: casaAmeliaIngresso, alt: "Ingresso illuminato di Casa Amelia" },
      { src: casaAmeliaSoggiorno, alt: "Soggiorno con vetrate sul bosco" },
      { src: casaAmeliaCucina, alt: "Cucina artigianale in legno naturale" },
      { src: casaAmeliaCamera, alt: "Camera da letto avvolgente" },
      { src: casaAmeliaBagno, alt: "Bagno con finiture naturali" },
    ],
  },
];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}
export function getAdjacentProject(slug: string, direction: 1 | -1) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  const nextIndex = (index + direction + projects.length) % projects.length;
  return projects[nextIndex];
}
