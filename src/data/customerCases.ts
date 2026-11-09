export interface CustomerCase {
  slug: string;
  name: string;
  category: string;
  location: string;
  imageAlt: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  darkLogoBackground?: boolean;
  eyebrow: string;
  heading: string;
  introduction: string;
  paragraphs: string[];
  delivery: string[];
  website: string;
}

// Ordningen här är också ordningen på sidan. Varje case har ett eget ankare
// som kan användas för kundval när fler projekt tillkommer.
export const customerCases: CustomerCase[] = [
  {
    slug: 'steningevik',
    name: 'Steningevik',
    category: 'Hotell & konferens',
    location: 'Steninge, Sigtuna',
    imageAlt: 'Ljusa konferensrum på Steningevik med projektorer, presentationsytor och utsikt mot trädgården.',
    logo: '/kundcase/steningevik-logo.webp',
    logoWidth: 480,
    logoHeight: 293,
    darkLogoBackground: true,
    eyebrow: 'Ett långvarigt samarbete',
    heading: 'Mötesteknik som gästerna kan använda direkt',
    introduction: 'På Steningevik möts nya grupper varje dag. Tekniken behöver vara enkel att använda, också för den som kliver in i konferensrummet för första gången.',
    paragraphs: [
      'Vid Mälarens strand i Steninge ligger Steningevik, en konferensanläggning med hotell, restaurang och mötesrum i flera storlekar. Här finns lugnet vid vattnet, med både Arlanda och Stockholm inom räckhåll.',
      'Steningevik har varit kund hos oss på SamTech i många år. Vi har installerat styrsystem, projektorer, bildskärmar och professionellt ljud, med utgångspunkt i hur rummen används av gäster och personal.',
      'Alla ytor har trådlös bilddelning och är anpassade för att gästerna tar med sin egen dator, så kallat Bring Your Own Device. Den som ska hålla i mötet kan ansluta sin dator och visa sin presentation. Styrsystemen samlar hanteringen av rummets teknik, så att gästerna enkelt kan komma igång med sitt möte.',
    ],
    delivery: ['Styrsystem', 'Projektorer & bildskärmar', 'Trådlös bilddelning', 'Professionellt ljud', 'Bring Your Own Device'],
    website: 'https://steningevik.se/',
  },
  {
    slug: 'harry-b-james',
    name: 'Harry B James',
    category: 'Bar & restaurang',
    location: 'Kungsträdgården, Stockholm',
    imageAlt: 'Baren och sittplatserna på Harry B James i Kungsträdgården, med bildskärmar ovanför bardisken.',
    logo: '/kundcase/harry-b-james-logo.webp',
    logoWidth: 480,
    logoHeight: 322,
    eyebrow: 'Bild och ljud för matchkvällen',
    heading: 'Rätt match på rätt skärm',
    introduction: 'När flera matcher pågår samtidigt behöver personalen snabbt kunna välja vad som visas, var det visas och vilket ljud som hörs i lokalen.',
    paragraphs: [
      'Mitt i Kungsträdgården ligger Harry B James. Här samlas gäster för mat, en öl efter jobbet, matchkvällar och karaoke. Restaurangen och baren har ett centralt läge i Stockholm, med parken alldeles utanför.',
      'Vi på SamTech har installerat ljud, styrsystem och en AV över IP-lösning, där bild och ljud distribueras via nätverket. Personalen kan välja vilken källa som ska visas på respektive skärm och växla mellan sändningarna när det behövs.',
      'Ljudet är indelat i zoner som kan styras var för sig. Skärmar, källor och ljudzoner är samlade i samma styrsystem. Det gör handgreppen färre när en match börjar, en sändning behöver bytas eller ljudet ska justeras i en del av lokalen.',
    ],
    delivery: ['AV över IP', 'Styrsystem', 'Skärm- & källval', 'Ljudsystem', 'Separata ljudzoner'],
    website: 'https://harrybjames.se/',
  },
];
