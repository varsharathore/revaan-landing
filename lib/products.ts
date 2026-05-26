export type ProductTag = 'new' | 'bestseller' | 'limited'

export interface ProductColor {
  hex: string
  name: string
}

export interface Product {
  id: string
  name: string
  price: number
  images: string[]
  colors: ProductColor[]
  tag?: ProductTag
  slug: string
}

export const featuredProducts: Product[] = [
  {
    id: 'pulpy',
    name: 'Pulpy Oversized T-Shirt',
    price: 1499,
    images: ['/ai-images/product-card-pulpy-tee.png', '/images/pulpy-1.jpg'],
    colors: [
      { hex: '#1432C8', name: 'Electric Blue' },
      { hex: '#FFFFFF', name: 'White' },
    ],
    tag: 'new',
    slug: 'pulpy-oversized-tee',
  },
  {
    id: 'rebel',
    name: 'Rebel With Revaan Oversized Tee',
    price: 2199,
    images: ['/ai-images/product-card-rebel-rebel-tee.png', '/images/rebel-1.png'],
    colors: [
      { hex: '#EDE5D8', name: 'Cream' },
      { hex: '#1A1A1A', name: 'Black' },
    ],
    tag: 'bestseller',
    slug: 'rebel-with-revaan-oversized-tee',
  },
  {
    id: 'city-beats',
    name: 'City Beats Oversized T-Shirt',
    price: 1499,
    images: ['/ai-images/product-card-art-district-tee.png', '/images/liar-2.jpg'],
    colors: [
      { hex: '#C8A87A', name: 'Khaki' },
      { hex: '#1A1A1A', name: 'Black' },
    ],
    tag: 'new',
    slug: 'city-beats-oversized-tee',
  },
  {
    id: 'liar',
    name: "F*cking Liar Oversized T-Shirt",
    price: 1499,
    images: ['/images/insta-unapologetic-texture.jpg'],
    colors: [
      { hex: '#1A1A1A', name: 'Black' },
      { hex: '#FFFFFF', name: 'White' },
    ],
    tag: 'limited',
    slug: 'fcking-liar-oversized-tee',
  },
  {
    id: 'wavy',
    name: 'Wavy Core Oversized T-Shirt',
    price: 1499,
    images: ['/images/wavy-1.jpg', '/images/wavy-2.jpg'],
    colors: [
      { hex: '#FFFFFF', name: 'White' },
      { hex: '#1A1A1A', name: 'Black' },
    ],
    tag: 'new',
    slug: 'wavy-core-oversized-tee',
  },
]
