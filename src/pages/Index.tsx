import { useState } from 'react';
import { Product, CartItem } from '@/types/product';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import Cart from '@/components/Cart';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = (product: Product, size: string, color: string) => {
    const existingItem = cartItems.find(
      (item) => item.id === product.id && item.selectedSize === size && item.selectedColor === color
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id && item.selectedSize === size && item.selectedColor === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
          selectedSize: size,
          selectedColor: color,
        },
      ]);
    }

    toast({
      title: 'Добавлено в корзину',
      description: `${product.name} (${size}, ${color})`,
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast({
      title: 'Удалено из корзины',
      variant: 'destructive',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      <main className="flex-1">
        <Hero />
        <Catalog onAddToCart={handleAddToCart} />
      </main>
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
