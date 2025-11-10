import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">USB</h3>
            <p className="text-sm opacity-80">
              Современная одежда для тех, кто ценит стиль и качество
            </p>
          </div>

          <div id="about">
            <h4 className="font-semibold mb-4">О бренде</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>О нас</li>
              <li>Наша миссия</li>
              <li>Карьера</li>
              <li>Пресс-центр</li>
            </ul>
          </div>

          <div id="delivery">
            <h4 className="font-semibold mb-4">Доставка</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Способы доставки</li>
              <li>Оплата</li>
              <li>Возврат</li>
              <li>Гарантия</li>
            </ul>
          </div>

          <div id="contacts">
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (999) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@usb.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, ул. Примерная, 1
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 USB. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;