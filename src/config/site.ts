export const site = {
  name: 'SafeScaff Göteborg AB',
  shortName: 'SafeScaff',
  founded: 2017,
  orgNumber: '559116-5435',
  phone: '031-82 82 84',
  phoneTel: '+4631828284',
  email: 'info@safescaff.se',
  address: {
    visiting: 'Kungsbackavägen 152, 431 90 Mölndal',
    invoice: 'Box 24124, 400 22 Göteborg',
  },
  hours: 'Mån–fre 06:30–16, lör–sön stängt',
  social: {
    instagram: 'https://www.instagram.com/safescaff',
    facebook: 'https://www.facebook.com/GothenburgAB',
  },
  team: [
    {
      name: 'Patrik Spahiu',
      role: 'VD',
      phone: '0705-83 12 26',
      phoneTel: '+46705831226',
      email: 'patrik@safescaff.se',
      image: '/images/patrik.webp',
    },
    {
      name: 'Christian Hahne',
      role: 'Projektledare',
      phone: '0705-83 18 91',
      phoneTel: '+46705831891',
      email: 'christian@safescaff.se',
      image: '/images/Christian-500x500.jpg',
    },
  ],
} as const

export const services = [
  {
    slug: 'byggnadsstallningar',
    number: '01',
    title: 'Byggnadsställningar',
    tagline: 'Layher i alla dess former.',
    short: 'Modul allround och Speedyscaff aluminium — för allt från villarenovering till flervåningsfasad.',
    image: '/images/IMG_6978.jpeg',
  },
  {
    slug: 'vaderskydd',
    number: '02',
    title: 'Väderskydd',
    tagline: 'Arbeta året runt.',
    short: 'Keder XL-system som höll genom två stormar på Östra Sjukhuset.',
    image: '/images/IMG_1483-scaled.jpg',
  },
  {
    slug: 'skyltstall',
    number: '03',
    title: 'Skyltställ',
    tagline: 'Synlighet som inte missas.',
    short: 'Skyltställ i alla storlekar — hyr eller köp. Vi tar fram reklamen.',
    image: '/images/IMG_6971-800x800.jpeg',
  },
  {
    slug: 'byggstaket',
    number: '04',
    title: 'Byggstaket',
    tagline: 'Trygg arbetsplats från dag ett.',
    short: 'Säkra, kvalitetsmärkta staket — kompletterbara med ID06 och transportgrindar.',
    image: '/images/safescaff_i51.jpg',
  },
] as const

export type Service = (typeof services)[number]
