export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'Верхняя одежда' | 'Платья' | 'Брюки' | 'Аксессуары';
  sizes: string[];
  colors: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
