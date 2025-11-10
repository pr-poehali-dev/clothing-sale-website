import { useState } from 'react';
import { Product } from '@/types/product';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import ProductDetail from '@/components/ProductDetail';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface CatalogProps {
  onAddToCart: (product: Product, size: string, color: string) => void;
}

const Catalog = ({ onAddToCart }: CatalogProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [selectedSize, setSelectedSize] = useState<string>('Все');
  const [selectedColor, setSelectedColor] = useState<string>('Все');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['Все', 'Верхняя одежда', 'Платья', 'Брюки', 'Аксессуары'];
  const sizes = ['Все', 'XS', 'S', 'M', 'L', 'XL', 'Один размер'];
  const colors = ['Все', 'Черный', 'Белый', 'Бежевый', 'Серый', 'Синий', 'Розовый', 'Голубой', 'Коричневый', 'Красный', 'Золотой', 'Зеленый'];

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === 'Все' || product.category === selectedCategory;
    const sizeMatch = selectedSize === 'Все' || product.sizes.includes(selectedSize);
    const colorMatch = selectedColor === 'Все' || product.colors.includes(selectedColor);
    return categoryMatch && sizeMatch && colorMatch;
  });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <section id="catalog" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Каталог</h2>

        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <div className="w-full md:w-auto">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-auto">
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Размер" />
              </SelectTrigger>
              <SelectContent>
                {sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-auto">
            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Цвет" />
              </SelectTrigger>
              <SelectContent>
                {colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-2 right-2">{product.category}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-2xl font-bold mb-4">{product.price.toLocaleString('ru-RU')} ₽</p>
                <div className="flex gap-2 mb-3 text-sm text-muted-foreground">
                  <span>Размеры: {product.sizes.join(', ')}</span>
                </div>
                <Button
                  className="w-full"
                  onClick={() => handleProductClick(product)}
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Товары не найдены. Попробуйте изменить фильтры.
            </p>
          </div>
        )}
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={handleCloseDetail}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <ProductDetail
              product={selectedProduct}
              onAddToCart={onAddToCart}
              onClose={handleCloseDetail}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Catalog;