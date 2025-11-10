import { useState } from 'react';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product, size: string, color: string) => void;
  onClose: () => void;
}

const ProductDetail = ({ product, onAddToCart, onClose }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor);
    onClose();
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary/20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-4 right-4">{product.category}</Badge>
      </div>

      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-4xl font-bold mb-6">{product.price.toLocaleString('ru-RU')} ₽</p>

        <div className="space-y-6 flex-1">
          <div>
            <Label className="text-base font-semibold mb-3 block">Выберите размер</Label>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <div key={size} className="relative">
                    <RadioGroupItem
                      value={size}
                      id={`size-${size}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`size-${size}`}
                      className="flex items-center justify-center px-4 py-2 border-2 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground hover:border-primary/50"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-base font-semibold mb-3 block">Выберите цвет</Label>
            <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <div key={color} className="relative">
                    <RadioGroupItem
                      value={color}
                      id={`color-${color}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`color-${color}`}
                      className="flex items-center justify-center px-4 py-2 border-2 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground hover:border-primary/50"
                    >
                      {color}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="pt-4">
            <h3 className="font-semibold mb-2">Описание</h3>
            <p className="text-muted-foreground">
              Высококачественное изделие из премиальных материалов. Идеальная посадка и современный дизайн.
              {product.category === 'Верхняя одежда' && ' Подходит для любой погоды.'}
              {product.category === 'Платья' && ' Создано для особых случаев.'}
              {product.category === 'Брюки' && ' Универсальное решение для любого образа.'}
              {product.category === 'Аксессуары' && ' Дополнит любой образ.'}
            </p>
          </div>
        </div>

        <div className="space-y-3 mt-6">
          <Button
            size="lg"
            className="w-full text-lg"
            onClick={handleAddToCart}
          >
            <Icon name="ShoppingBag" size={20} className="mr-2" />
            Добавить в корзину
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full text-lg"
            onClick={onClose}
          >
            Продолжить покупки
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
