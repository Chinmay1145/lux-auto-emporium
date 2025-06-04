
import { Product } from '@/contexts/CartContext';

export const brands = [
  {
    id: 'ferrari',
    name: 'Ferrari',
    description: 'The Prancing Horse - Pure Italian Excellence',
    logo: '/api/placeholder/200/100',
    color: '#DC143C',
    founded: 1947
  },
  {
    id: 'mclaren',
    name: 'McLaren',
    description: 'Racing DNA - Technology Driven',
    logo: '/api/placeholder/200/100',
    color: '#FF8700',
    founded: 1963
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    description: 'Expect the Unexpected',
    logo: '/api/placeholder/200/100',
    color: '#00B04F',
    founded: 1963
  },
  {
    id: 'bugatti',
    name: 'Bugatti',
    description: 'Art, Forme, Technique',
    logo: '/api/placeholder/200/100',
    color: '#1E3A8A',
    founded: 1909
  },
  {
    id: 'koenigsegg',
    name: 'Koenigsegg',
    description: 'Swedish Engineering Excellence',
    logo: '/api/placeholder/200/100',
    color: '#FFD700',
    founded: 1994
  },
  {
    id: 'pagani',
    name: 'Pagani',
    description: 'Art and Science Combined',
    logo: '/api/placeholder/200/100',
    color: '#C0C0C0',
    founded: 1992
  },
  {
    id: 'rimac',
    name: 'Rimac',
    description: 'Electric Hypercar Revolution',
    logo: '/api/placeholder/200/100',
    color: '#00CED1',
    founded: 2009
  }
];

export const products: Product[] = [
  // Ferrari Products
  {
    id: 'ferrari-sf90',
    name: 'SF90 Stradale',
    brand: 'Ferrari',
    price: 85000000,
    image: '/api/placeholder/400/300',
    description: 'Ferrari\'s first series production plug-in hybrid supercar.',
    specs: {
      engine: '4.0L V8 Twin-Turbo + Electric',
      power: '986 HP',
      topSpeed: '340 km/h',
      acceleration: '0-100 in 2.5s'
    }
  },
  {
    id: 'ferrari-f8',
    name: 'F8 Tributo',
    brand: 'Ferrari',
    price: 72000000,
    image: '/api/placeholder/400/300',
    description: 'The most powerful V8 in Ferrari history.',
    specs: {
      engine: '3.9L V8 Twin-Turbo',
      power: '710 HP',
      topSpeed: '340 km/h',
      acceleration: '0-100 in 2.9s'
    }
  },
  {
    id: 'ferrari-roma',
    name: 'Roma',
    brand: 'Ferrari',
    price: 68000000,
    image: '/api/placeholder/400/300',
    description: 'A new chapter in the Ferrari legend.',
    specs: {
      engine: '3.9L V8 Twin-Turbo',
      power: '612 HP',
      topSpeed: '320 km/h',
      acceleration: '0-100 in 3.4s'
    }
  },
  {
    id: 'ferrari-portofino',
    name: 'Portofino M',
    brand: 'Ferrari',
    price: 65000000,
    image: '/api/placeholder/400/300',
    description: 'The ultimate expression of elegance.',
    specs: {
      engine: '3.9L V8 Twin-Turbo',
      power: '630 HP',
      topSpeed: '320 km/h',
      acceleration: '0-100 in 3.45s'
    }
  },
  {
    id: 'ferrari-812',
    name: '812 Superfast',
    brand: 'Ferrari',
    price: 78000000,
    image: '/api/placeholder/400/300',
    description: 'The most powerful and fastest Ferrari ever.',
    specs: {
      engine: '6.5L V12',
      power: '789 HP',
      topSpeed: '340 km/h',
      acceleration: '0-100 in 2.9s'
    }
  },
  {
    id: 'ferrari-monza',
    name: 'Monza SP2',
    brand: 'Ferrari',
    price: 125000000,
    image: '/api/placeholder/400/300',
    description: 'Limited edition speedster.',
    specs: {
      engine: '6.5L V12',
      power: '810 HP',
      topSpeed: '300+ km/h',
      acceleration: '0-100 in 2.9s'
    }
  },
  {
    id: 'ferrari-488',
    name: '488 Pista',
    brand: 'Ferrari',
    price: 69000000,
    image: '/api/placeholder/400/300',
    description: 'Track-focused performance machine.',
    specs: {
      engine: '3.9L V8 Twin-Turbo',
      power: '710 HP',
      topSpeed: '340 km/h',
      acceleration: '0-100 in 2.85s'
    }
  },
  {
    id: 'ferrari-gtc4',
    name: 'GTC4 Lusso',
    brand: 'Ferrari',
    price: 62000000,
    image: '/api/placeholder/400/300',
    description: 'Four-seater grand tourer.',
    specs: {
      engine: '6.3L V12',
      power: '681 HP',
      topSpeed: '335 km/h',
      acceleration: '0-100 in 3.4s'
    }
  },
  {
    id: 'ferrari-california',
    name: 'California T',
    brand: 'Ferrari',
    price: 58000000,
    image: '/api/placeholder/400/300',
    description: 'Convertible grand tourer.',
    specs: {
      engine: '3.9L V8 Twin-Turbo',
      power: '552 HP',
      topSpeed: '316 km/h',
      acceleration: '0-100 in 3.6s'
    }
  },
  {
    id: 'ferrari-laferrari',
    name: 'LaFerrari',
    brand: 'Ferrari',
    price: 200000000,
    image: '/api/placeholder/400/300',
    description: 'The ultimate Ferrari hypercar.',
    specs: {
      engine: '6.3L V12 + Electric',
      power: '950 HP',
      topSpeed: '350+ km/h',
      acceleration: '0-100 in 2.6s'
    }
  },

  // McLaren Products
  {
    id: 'mclaren-720s',
    name: '720S',
    brand: 'McLaren',
    price: 75000000,
    image: '/api/placeholder/400/300',
    description: 'Lighter, faster, more powerful.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '710 HP',
      topSpeed: '341 km/h',
      acceleration: '0-100 in 2.9s'
    }
  },
  {
    id: 'mclaren-750s',
    name: '750S',
    brand: 'McLaren',
    price: 82000000,
    image: '/api/placeholder/400/300',
    description: 'The new apex predator.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '740 HP',
      topSpeed: '332 km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'mclaren-artura',
    name: 'Artura',
    brand: 'McLaren',
    price: 68000000,
    image: '/api/placeholder/400/300',
    description: 'High-Performance Hybrid supercar.',
    specs: {
      engine: '3.0L V6 Twin-Turbo + Electric',
      power: '671 HP',
      topSpeed: '330 km/h',
      acceleration: '0-100 in 3.0s'
    }
  },
  {
    id: 'mclaren-gt',
    name: 'GT',
    brand: 'McLaren',
    price: 65000000,
    image: '/api/placeholder/400/300',
    description: 'Grand touring excellence.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '612 HP',
      topSpeed: '326 km/h',
      acceleration: '0-100 in 3.2s'
    }
  },
  {
    id: 'mclaren-570s',
    name: '570S',
    brand: 'McLaren',
    price: 58000000,
    image: '/api/placeholder/400/300',
    description: 'Pure McLaren DNA.',
    specs: {
      engine: '3.8L V8 Twin-Turbo',
      power: '562 HP',
      topSpeed: '328 km/h',
      acceleration: '0-100 in 3.2s'
    }
  },
  {
    id: 'mclaren-600lt',
    name: '600LT',
    brand: 'McLaren',
    price: 72000000,
    image: '/api/placeholder/400/300',
    description: 'Longtail track focused.',
    specs: {
      engine: '3.8L V8 Twin-Turbo',
      power: '592 HP',
      topSpeed: '328 km/h',
      acceleration: '0-100 in 2.9s'
    }
  },
  {
    id: 'mclaren-p1',
    name: 'P1',
    brand: 'McLaren',
    price: 180000000,
    image: '/api/placeholder/400/300',
    description: 'The ultimate expression of McLaren.',
    specs: {
      engine: '3.8L V8 Twin-Turbo + Electric',
      power: '903 HP',
      topSpeed: '350 km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'mclaren-senna',
    name: 'Senna',
    brand: 'McLaren',
    price: 155000000,
    image: '/api/placeholder/400/300',
    description: 'Ultimate track weapon.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '789 HP',
      topSpeed: '340 km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'mclaren-speedtail',
    name: 'Speedtail',
    brand: 'McLaren',
    price: 195000000,
    image: '/api/placeholder/400/300',
    description: 'Hyper-GT with 3-seat layout.',
    specs: {
      engine: '4.0L V8 Twin-Turbo + Electric',
      power: '1035 HP',
      topSpeed: '403 km/h',
      acceleration: '0-100 in 3.2s'
    }
  },
  {
    id: 'mclaren-765lt',
    name: '765LT',
    brand: 'McLaren',
    price: 95000000,
    image: '/api/placeholder/400/300',
    description: 'Longtail legacy continues.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '755 HP',
      topSpeed: '330 km/h',
      acceleration: '0-100 in 2.8s'
    }
  },

  // Lamborghini Products
  {
    id: 'lamborghini-huracan',
    name: 'Huracán EVO',
    brand: 'Lamborghini',
    price: 72000000,
    image: '/api/placeholder/400/300',
    description: 'Evolution of perfection.',
    specs: {
      engine: '5.2L V10',
      power: '630 HP',
      topSpeed: '325 km/h',
      acceleration: '0-100 in 2.9s'
    }
  },
  {
    id: 'lamborghini-aventador',
    name: 'Aventador SVJ',
    brand: 'Lamborghini',
    price: 98000000,
    image: '/api/placeholder/400/300',
    description: 'Ultimate V12 experience.',
    specs: {
      engine: '6.5L V12',
      power: '759 HP',
      topSpeed: '350 km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'lamborghini-urus',
    name: 'Urus',
    brand: 'Lamborghini',
    price: 85000000,
    image: '/api/placeholder/400/300',
    description: 'Super Sport Utility Vehicle.',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      power: '641 HP',
      topSpeed: '305 km/h',
      acceleration: '0-100 in 3.6s'
    }
  },
  {
    id: 'lamborghini-revuelto',
    name: 'Revuelto',
    brand: 'Lamborghini',
    price: 125000000,
    image: '/api/placeholder/400/300',
    description: 'First V12 hybrid supercar.',
    specs: {
      engine: '6.5L V12 + Electric',
      power: '1001 HP',
      topSpeed: '350+ km/h',
      acceleration: '0-100 in 2.5s'
    }
  },
  {
    id: 'lamborghini-gallardo',
    name: 'Gallardo LP570-4',
    brand: 'Lamborghini',
    price: 65000000,
    image: '/api/placeholder/400/300',
    description: 'Classic V10 supercar.',
    specs: {
      engine: '5.2L V10',
      power: '562 HP',
      topSpeed: '325 km/h',
      acceleration: '0-100 in 3.4s'
    }
  },
  {
    id: 'lamborghini-sian',
    name: 'Sián FKP 37',
    brand: 'Lamborghini',
    price: 145000000,
    image: '/api/placeholder/400/300',
    description: 'First Lamborghini hybrid.',
    specs: {
      engine: '6.5L V12 + Electric',
      power: '819 HP',
      topSpeed: '350+ km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'lamborghini-countach',
    name: 'Countach LPI 800-4',
    brand: 'Lamborghini',
    price: 135000000,
    image: '/api/placeholder/400/300',
    description: 'Icon reborn with hybrid power.',
    specs: {
      engine: '6.5L V12 + Electric',
      power: '803 HP',
      topSpeed: '355 km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'lamborghini-murcielago',
    name: 'Murciélago LP670-4 SV',
    brand: 'Lamborghini',
    price: 78000000,
    image: '/api/placeholder/400/300',
    description: 'Classic V12 masterpiece.',
    specs: {
      engine: '6.5L V12',
      power: '661 HP',
      topSpeed: '342 km/h',
      acceleration: '0-100 in 3.2s'
    }
  },
  {
    id: 'lamborghini-diablo',
    name: 'Diablo VT',
    brand: 'Lamborghini',
    price: 55000000,
    image: '/api/placeholder/400/300',
    description: 'Legendary 90s supercar.',
    specs: {
      engine: '5.7L V12',
      power: '492 HP',
      topSpeed: '325 km/h',
      acceleration: '0-100 in 4.0s'
    }
  },
  {
    id: 'lamborghini-espada',
    name: 'Espada Series III',
    brand: 'Lamborghini',
    price: 48000000,
    image: '/api/placeholder/400/300',
    description: 'Classic grand tourer.',
    specs: {
      engine: '3.9L V12',
      power: '350 HP',
      topSpeed: '245 km/h',
      acceleration: '0-100 in 6.5s'
    }
  },

  // Bugatti Products
  {
    id: 'bugatti-chiron',
    name: 'Chiron',
    brand: 'Bugatti',
    price: 350000000,
    image: '/api/placeholder/400/300',
    description: 'The ultimate grand sport.',
    specs: {
      engine: '8.0L W16 Quad-Turbo',
      power: '1479 HP',
      topSpeed: '420 km/h',
      acceleration: '0-100 in 2.4s'
    }
  },
  {
    id: 'bugatti-veyron',
    name: 'Veyron Super Sport',
    brand: 'Bugatti',
    price: 285000000,
    image: '/api/placeholder/400/300',
    description: 'Engineering masterpiece.',
    specs: {
      engine: '8.0L W16 Quad-Turbo',
      power: '1183 HP',
      topSpeed: '431 km/h',
      acceleration: '0-100 in 2.5s'
    }
  },
  {
    id: 'bugatti-divo',
    name: 'Divo',
    brand: 'Bugatti',
    price: 420000000,
    image: '/api/placeholder/400/300',
    description: 'Track-focused hypercar.',
    specs: {
      engine: '8.0L W16 Quad-Turbo',
      power: '1479 HP',
      topSpeed: '380 km/h',
      acceleration: '0-100 in 2.4s'
    }
  },
  {
    id: 'bugatti-centodieci',
    name: 'Centodieci',
    brand: 'Bugatti',
    price: 750000000,
    image: '/api/placeholder/400/300',
    description: 'Tribute to EB110.',
    specs: {
      engine: '8.0L W16 Quad-Turbo',
      power: '1577 HP',
      topSpeed: '380 km/h',
      acceleration: '0-100 in 2.4s'
    }
  },
  {
    id: 'bugatti-la-voiture-noire',
    name: 'La Voiture Noire',
    brand: 'Bugatti',
    price: 1200000000,
    image: '/api/placeholder/400/300',
    description: 'The most expensive car ever.',
    specs: {
      engine: '8.0L W16 Quad-Turbo',
      power: '1479 HP',
      topSpeed: '420 km/h',
      acceleration: '0-100 in 2.4s'
    }
  },
  {
    id: 'bugatti-mistral',
    name: 'W16 Mistral',
    brand: 'Bugatti',
    price: 450000000,
    image: '/api/placeholder/400/300',
    description: 'Final W16 roadster.',
    specs: {
      engine: '8.0L W16 Quad-Turbo',
      power: '1577 HP',
      topSpeed: '420+ km/h',
      acceleration: '0-100 in 2.4s'
    }
  },
  {
    id: 'bugatti-eb110',
    name: 'EB110 Super Sport',
    brand: 'Bugatti',
    price: 185000000,
    image: '/api/placeholder/400/300',
    description: 'Classic 90s hypercar.',
    specs: {
      engine: '3.5L V12 Quad-Turbo',
      power: '603 HP',
      topSpeed: '351 km/h',
      acceleration: '0-100 in 3.2s'
    }
  },
  {
    id: 'bugatti-type57',
    name: 'Type 57 SC Atlantic',
    brand: 'Bugatti',
    price: 650000000,
    image: '/api/placeholder/400/300',
    description: 'Pre-war automotive art.',
    specs: {
      engine: '3.3L Inline-8 Supercharged',
      power: '200 HP',
      topSpeed: '200 km/h',
      acceleration: '0-100 in 8.0s'
    }
  },
  {
    id: 'bugatti-royale',
    name: 'Type 41 Royale',
    brand: 'Bugatti',
    price: 850000000,
    image: '/api/placeholder/400/300',
    description: 'King of all automobiles.',
    specs: {
      engine: '12.7L Inline-8',
      power: '300 HP',
      topSpeed: '160 km/h',
      acceleration: '0-100 in 15.0s'
    }
  },
  {
    id: 'bugatti-bolide',
    name: 'Bolide',
    brand: 'Bugatti',
    price: 380000000,
    image: '/api/placeholder/400/300',
    description: 'Track-only extreme machine.',
    specs: {
      engine: '8.0L W16 Quad-Turbo',
      power: '1825 HP',
      topSpeed: '500+ km/h',
      acceleration: '0-100 in 2.2s'
    }
  },

  // Koenigsegg Products
  {
    id: 'koenigsegg-jesko',
    name: 'Jesko',
    brand: 'Koenigsegg',
    price: 295000000,
    image: '/api/placeholder/400/300',
    description: 'Track weapon and speed demon.',
    specs: {
      engine: '5.0L V8 Twin-Turbo',
      power: '1600 HP',
      topSpeed: '480+ km/h',
      acceleration: '0-100 in 2.5s'
    }
  },
  {
    id: 'koenigsegg-regera',
    name: 'Regera',
    brand: 'Koenigsegg',
    price: 275000000,
    image: '/api/placeholder/400/300',
    description: 'Revolutionary hybrid powertrain.',
    specs: {
      engine: '5.0L V8 Twin-Turbo + Electric',
      power: '1500 HP',
      topSpeed: '410 km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'koenigsegg-agera',
    name: 'Agera RS',
    brand: 'Koenigsegg',
    price: 245000000,
    image: '/api/placeholder/400/300',
    description: 'World speed record holder.',
    specs: {
      engine: '5.0L V8 Twin-Turbo',
      power: '1360 HP',
      topSpeed: '447 km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'koenigsegg-gemera',
    name: 'Gemera',
    brand: 'Koenigsegg',
    price: 185000000,
    image: '/api/placeholder/400/300',
    description: 'Four-seat hybrid grand tourer.',
    specs: {
      engine: '2.0L I3 Twin-Turbo + Electric',
      power: '1700 HP',
      topSpeed: '400 km/h',
      acceleration: '0-100 in 1.9s'
    }
  },
  {
    id: 'koenigsegg-ccxr',
    name: 'CCXR Edition',
    brand: 'Koenigsegg',
    price: 165000000,
    image: '/api/placeholder/400/300',
    description: 'Ethanol-fueled powerhouse.',
    specs: {
      engine: '4.8L V8 Supercharged',
      power: '1018 HP',
      topSpeed: '402 km/h',
      acceleration: '0-100 in 3.2s'
    }
  },
  {
    id: 'koenigsegg-cc850',
    name: 'CC850',
    brand: 'Koenigsegg',
    price: 325000000,
    image: '/api/placeholder/400/300',
    description: 'Modern interpretation of CCR.',
    specs: {
      engine: '5.0L V8 Twin-Turbo',
      power: '1385 HP',
      topSpeed: '450+ km/h',
      acceleration: '0-100 in 2.7s'
    }
  },
  {
    id: 'koenigsegg-one1',
    name: 'One:1',
    brand: 'Koenigsegg',
    price: 385000000,
    image: '/api/placeholder/400/300',
    description: '1:1 power-to-weight ratio.',
    specs: {
      engine: '5.0L V8 Twin-Turbo',
      power: '1360 HP',
      topSpeed: '440+ km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'koenigsegg-ccr',
    name: 'CCR',
    brand: 'Koenigsegg',
    price: 125000000,
    image: '/api/placeholder/400/300',
    description: 'Racing heritage classic.',
    specs: {
      engine: '4.6L V8 Supercharged',
      power: '806 HP',
      topSpeed: '387 km/h',
      acceleration: '0-100 in 3.2s'
    }
  },
  {
    id: 'koenigsegg-cc8s',
    name: 'CC8S',
    brand: 'Koenigsegg',
    price: 95000000,
    image: '/api/placeholder/400/300',
    description: 'First production Koenigsegg.',
    specs: {
      engine: '4.6L V8 Supercharged',
      power: '654 HP',
      topSpeed: '355 km/h',
      acceleration: '0-100 in 3.5s'
    }
  },
  {
    id: 'koenigsegg-ccxs',
    name: 'CCXS Edition',
    brand: 'Koenigsegg',
    price: 145000000,
    image: '/api/placeholder/400/300',
    description: 'Track-focused variant.',
    specs: {
      engine: '4.8L V8 Supercharged',
      power: '888 HP',
      topSpeed: '395 km/h',
      acceleration: '0-100 in 3.0s'
    }
  },

  // Pagani Products
  {
    id: 'pagani-huayra',
    name: 'Huayra BC',
    brand: 'Pagani',
    price: 285000000,
    image: '/api/placeholder/400/300',
    description: 'Track-focused masterpiece.',
    specs: {
      engine: '6.0L V12 Twin-Turbo',
      power: '789 HP',
      topSpeed: '370 km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'pagani-zonda',
    name: 'Zonda Cinque',
    brand: 'Pagani',
    price: 195000000,
    image: '/api/placeholder/400/300',
    description: 'Limited edition artwork.',
    specs: {
      engine: '7.3L V12',
      power: '678 HP',
      topSpeed: '350 km/h',
      acceleration: '0-100 in 3.4s'
    }
  },
  {
    id: 'pagani-utopia',
    name: 'Utopia',
    brand: 'Pagani',
    price: 325000000,
    image: '/api/placeholder/400/300',
    description: 'New era of Pagani excellence.',
    specs: {
      engine: '6.0L V12 Twin-Turbo',
      power: '852 HP',
      topSpeed: '370 km/h',
      acceleration: '0-100 in 3.1s'
    }
  },
  {
    id: 'pagani-imola',
    name: 'Huayra Imola',
    brand: 'Pagani',
    price: 445000000,
    image: '/api/placeholder/400/300',
    description: 'Most extreme Pagani ever.',
    specs: {
      engine: '6.0L V12 Twin-Turbo',
      power: '827 HP',
      topSpeed: '350 km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'pagani-roadster',
    name: 'Huayra Roadster BC',
    brand: 'Pagani',
    price: 365000000,
    image: '/api/placeholder/400/300',
    description: 'Open-top precision.',
    specs: {
      engine: '6.0L V12 Twin-Turbo',
      power: '791 HP',
      topSpeed: '370 km/h',
      acceleration: '0-100 in 2.9s'
    }
  },
  {
    id: 'pagani-tricolore',
    name: 'Zonda Tricolore',
    brand: 'Pagani',
    price: 175000000,
    image: '/api/placeholder/400/300',
    description: 'Tribute to Italian Air Force.',
    specs: {
      engine: '7.3L V12',
      power: '670 HP',
      topSpeed: '350 km/h',
      acceleration: '0-100 in 3.4s'
    }
  },
  {
    id: 'pagani-revolucion',
    name: 'Zonda Revolución',
    brand: 'Pagani',
    price: 225000000,
    image: '/api/placeholder/400/300',
    description: 'Track-only evolution.',
    specs: {
      engine: '6.0L V12',
      power: '800 HP',
      topSpeed: '350+ km/h',
      acceleration: '0-100 in 2.7s'
    }
  },
  {
    id: 'pagani-codalunga',
    name: 'Huayra Codalunga',
    brand: 'Pagani',
    price: 685000000,
    image: '/api/placeholder/400/300',
    description: 'Long-tail masterpiece.',
    specs: {
      engine: '6.0L V12 Twin-Turbo',
      power: '840 HP',
      topSpeed: '370+ km/h',
      acceleration: '0-100 in 2.8s'
    }
  },
  {
    id: 'pagani-760',
    name: 'Zonda 760 VR',
    brand: 'Pagani',
    price: 155000000,
    image: '/api/placeholder/400/300',
    description: 'One-off creation.',
    specs: {
      engine: '7.3L V12',
      power: '760 HP',
      topSpeed: '355 km/h',
      acceleration: '0-100 in 3.0s'
    }
  },
  {
    id: 'pagani-r',
    name: 'Zonda R',
    brand: 'Pagani',
    price: 185000000,
    image: '/api/placeholder/400/300',
    description: 'Track-only monster.',
    specs: {
      engine: '6.0L V12',
      power: '740 HP',
      topSpeed: '350+ km/h',
      acceleration: '0-100 in 2.7s'
    }
  },

  // Rimac Products
  {
    id: 'rimac-nevera',
    name: 'Nevera',
    brand: 'Rimac',
    price: 185000000,
    image: '/api/placeholder/400/300',
    description: 'Electric hypercar revolution.',
    specs: {
      engine: 'Quad Electric Motors',
      power: '1914 HP',
      topSpeed: '412 km/h',
      acceleration: '0-100 in 1.97s'
    }
  },
  {
    id: 'rimac-concept-one',
    name: 'Concept One',
    brand: 'Rimac',
    price: 95000000,
    image: '/api/placeholder/400/300',
    description: 'First electric supercar.',
    specs: {
      engine: 'Quad Electric Motors',
      power: '1088 HP',
      topSpeed: '355 km/h',
      acceleration: '0-100 in 2.5s'
    }
  },
  {
    id: 'rimac-concept-s',
    name: 'Concept S',
    brand: 'Rimac',
    price: 125000000,
    image: '/api/placeholder/400/300',
    description: 'Enhanced electric performance.',
    specs: {
      engine: 'Quad Electric Motors',
      power: '1384 HP',
      topSpeed: '365 km/h',
      acceleration: '0-100 in 2.5s'
    }
  },
  {
    id: 'rimac-c-two',
    name: 'C_Two Prototype',
    brand: 'Rimac',
    price: 165000000,
    image: '/api/placeholder/400/300',
    description: 'Nevera predecessor.',
    specs: {
      engine: 'Quad Electric Motors',
      power: '1888 HP',
      topSpeed: '412 km/h',
      acceleration: '0-100 in 1.9s'
    }
  },
  {
    id: 'rimac-scalatan',
    name: 'Scalatan Concept',
    brand: 'Rimac',
    price: 85000000,
    image: '/api/placeholder/400/300',
    description: 'Entry-level electric sports car.',
    specs: {
      engine: 'Dual Electric Motors',
      power: '650 HP',
      topSpeed: '290 km/h',
      acceleration: '0-100 in 3.2s'
    }
  },
  {
    id: 'rimac-vega',
    name: 'Vega',
    brand: 'Rimac',
    price: 145000000,
    image: '/api/placeholder/400/300',
    description: 'Next-gen electric hypercar.',
    specs: {
      engine: 'Quad Electric Motors',
      power: '1650 HP',
      topSpeed: '400+ km/h',
      acceleration: '0-100 in 2.1s'
    }
  },
  {
    id: 'rimac-galactic',
    name: 'Galactic',
    brand: 'Rimac',
    price: 225000000,
    image: '/api/placeholder/400/300',
    description: 'Future of electric mobility.',
    specs: {
      engine: 'Quad Electric Motors',
      power: '2100 HP',
      topSpeed: '450+ km/h',
      acceleration: '0-100 in 1.8s'
    }
  },
  {
    id: 'rimac-zero',
    name: 'Zero Emission',
    brand: 'Rimac',
    price: 75000000,
    image: '/api/placeholder/400/300',
    description: 'Sustainable performance.',
    specs: {
      engine: 'Single Electric Motor',
      power: '450 HP',
      topSpeed: '250 km/h',
      acceleration: '0-100 in 4.0s'
    }
  },
  {
    id: 'rimac-lightning',
    name: 'Lightning Strike',
    brand: 'Rimac',
    price: 115000000,
    image: '/api/placeholder/400/300',
    description: 'Track-focused electric.',
    specs: {
      engine: 'Triple Electric Motors',
      power: '1200 HP',
      topSpeed: '350 km/h',
      acceleration: '0-100 in 2.3s'
    }
  },
  {
    id: 'rimac-thunder',
    name: 'Thunder Road',
    brand: 'Rimac',
    price: 195000000,
    image: '/api/placeholder/400/300',
    description: 'Electric grand tourer.',
    specs: {
      engine: 'Quad Electric Motors',
      power: '1800 HP',
      topSpeed: '380 km/h',
      acceleration: '0-100 in 2.0s'
    }
  }
];

export const getProductsByBrand = (brandId: string): Product[] => {
  return products.filter(product => product.brand.toLowerCase() === brandId.toLowerCase());
};

export const getBrandById = (brandId: string) => {
  return brands.find(brand => brand.id === brandId);
};

export const getProductById = (productId: string): Product | undefined => {
  return products.find(product => product.id === productId);
};
