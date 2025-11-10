import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/61fd1e72-6bb3-4664-a4e7-f5b5bc02cc08/files/680e4d66-d874-4e91-ba7f-e3d3c8f8b18b.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center text-white animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Новая коллекция
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">
          Стиль, который вдохновляет
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-6"
          onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Смотреть коллекцию
        </Button>
      </div>
    </section>
  );
};

export default Hero;
