import React, { useState, useEffect } from 'react';
import { Check, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const TopBar = () => {
  const [timeLeft, setTimeLeft] = useState(180);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-[#9b6bce] text-white py-2.5 px-4 flex justify-center items-center gap-3 w-full sticky top-0 z-50">
      <span className="font-bold text-[13px] tracking-wide">Oferta por tempo limitado!!</span>
      <div className="bg-[#8155b0] px-2 py-0.5 rounded text-[13px] font-bold tracking-widest">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1788400867_76d575f7d18c.png",
    "https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1788400885_5875c2ce3e36.jpg",
    "https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1788400904_6360d40b0707.jpg",
    "https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1788400921_9473012152d5.jpg",
    "https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1784484708_3263b86b530b.jpg",
    "https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1788400933_520681f46fb4.jpg",
    "https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1788400959_fe77389a0626.jpg",
    "https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1788400970_73a2f9967a0d.jpg",
    "https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1788400991_5041a2175cb5.jpg"
  ];

  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative w-full mx-auto my-4 px-2">
      <div className="overflow-hidden rounded-2xl relative">
        <img src={images[currentIndex]} alt={`Kit ${currentIndex + 1}`} className="w-full h-auto object-cover aspect-square" />
        
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full hover:bg-black/60 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1.5 rounded-full hover:bg-black/60 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="flex justify-center gap-1.5 mt-4">
        {images.map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === currentIndex ? 'bg-[#9b6bce]' : 'bg-gray-300'}`} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2 bg-white rounded-lg">
      <button 
        className="w-full text-left px-4 py-3.5 flex justify-between items-center text-gray-700 text-[13px] font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown size={16} className={`text-[#38b6ff] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-xs text-gray-500 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center font-sans selection:bg-purple-200">
      <div className="w-full max-w-[420px] bg-white relative pb-0 shadow-[0_0_40px_rgba(0,0,0,0.08)] flex flex-col">
        
        <TopBar />
        
        {/* HERO */}
        <div>
          <img src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1788835216/ChatGPT_Image_7_de_set._de_2026_23_39_35_ozlbiz.png" alt="Hero" className="w-full h-auto" />
        </div>

        {/* ALGUNS DOS NOSSOS KITS */}
        <section className="px-5 pt-10 pb-8 text-center">
          <h2 className="text-xl font-black uppercase tracking-tight mb-2">
            <span className="text-[#497db3]">ALGUNS DOS </span>
            <span className="text-[#c168cf]">NOSSOS KITS</span>
          </h2>
          <p className="text-[#497db3] text-[11px] font-bold mb-5 px-2">
            Todos contêm moldes 100% editáveis no canva prontos para imprimir, cortar e montar.
          </p>
          <Carousel />
          <p className="text-[#497db3] text-xs font-bold mt-5">
            São mais de <span className="text-[#c168cf]">10.000 temas de festa</span> para você escolher 🎉
          </p>
        </section>

        {/* COMO FUNCIONA */}
        <section className="w-full bg-white">
          <img src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1788835539/ChatGPT_Image_7_de_set._de_2026_23_45_25_a9ow2r.png" alt="Como funciona" className="w-full h-auto block" />
        </section>

        {/* DEPOIMENTOS */}
        <section className="py-8 bg-white">
          <h2 className="text-xl font-black text-center mb-6 uppercase leading-tight tracking-tight">
            <span className="text-[#497db3]">DEPOIMENTOS DE QUEM JÁ</span><br/>
            <span className="text-[#c168cf]">COMPROU</span>
          </h2>
          <div className="px-5">
            <img src="https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1787882958_064f8e1c26ef.png" alt="Depoimentos" className="w-full h-auto" />
          </div>
        </section>

        {/* O QUE VEM NO KIT */}
        <section className="py-8 bg-white">
          <h2 className="text-xl font-black text-center text-[#497db3] mb-6 uppercase tracking-tight">
            O QUE VEM NO <span className="text-[#c168cf]">KIT ?</span>
          </h2>
          <div className="px-5">
            <img src="https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1787882968_b7a9b9e1cdba.png" alt="O que vem no kit" className="w-full h-auto" />
          </div>
        </section>

        {/* BÔNUS ESPECIAL */}
        <section className="pt-8 text-center bg-white">
          <h2 className="text-xl font-black text-[#497db3] mb-3 uppercase tracking-tight">
            BÔNUS ESPECIAL
          </h2>
          <p className="text-[#14b86b] text-[11px] font-bold px-8 mb-6 leading-relaxed">
            Aproveite o preço de lançamento! Garanta <span className="font-extrabold">+900 moldes, + 1.600 topos de bolo</span> e aulas exclusivas. Transforme as festas da sua família agora!
          </p>
          <img src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1788918892/ChatGPT_Image_8_de_set._de_2026_22_54_01_tcktph.png" alt="Bônus Especial" className="w-full h-auto block" />
        </section>

        {/* OFERTA / PREÇO */}
        <section className="pt-4 pb-12 px-6 bg-white">
          <div className="border border-gray-100 bg-[#effaf4] rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative">
            <div className="text-center mb-6">
              <p className="text-gray-500 text-[11px] font-bold mb-1">De R$ 87,00 Por Apenas:</p>
              <h3 className="text-4xl font-black text-[#14b86b]">R$ 10,00</h3>
            </div>

            <div className="flex flex-col gap-3.5 mb-8 px-2">
              {[
                "+10.000 TEMAS DE FESTA",
                "100% EDITÁVEL NO CANVA",
                "TOPOS DE BOLO E BANDEIROLAS",
                "ARQUIVOS EM ALTA QUALIDADE",
                "ACESSO IMEDIATO E VITALÍCIO",
                "GRUPO EXCLUSIVO NO WHATSAPP",
                "ATUALIZAÇÕES GRATUITAS"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="bg-[#14b86b] rounded-full p-[2px] shrink-0 w-[18px] h-[18px] flex items-center justify-center">
                    <Check size={12} className="text-white" strokeWidth={4} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <a href="https://checkout.lowify.com.br/checkout.php?product_id=czlX3K" className="block w-full bg-[#1ed760] text-white text-center font-black py-4 rounded-xl text-lg uppercase shadow-[0_6px_20px_rgba(30,215,96,0.35)] hover:bg-[#1bc055] hover:-translate-y-0.5 transition-all active:translate-y-0">
              Comprar agora
            </a>
          </div>

          {/* Aviso Whatsapp */}
          <div className="mt-5 border border-[#dcfce7] bg-[#f0fdf4] rounded-xl p-3 flex items-center gap-3">
            <div className="shrink-0 text-[#25d366]">
              <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </div>
            <p className="text-[10px] text-gray-600 leading-tight font-semibold pr-2">
              Após a compra, você recebe acesso ao Material em PDF diretamente no seu WhatsApp e e-mail
            </p>
          </div>
        </section>

        {/* PERGUNTAS FREQUENTES */}
        <section className="py-8 px-5 bg-[#f8f9fa]">
          <h2 className="text-xl font-black text-center text-gray-800 mb-6">
            Perguntas Frequentes
          </h2>
          <div className="flex flex-col gap-0.5">
            <FAQItem question="Como vou receber o material?" answer="Após a confirmação do pagamento, você receberá um e-mail com as instruções e o link de acesso imediato ao material." />
            <FAQItem question="Preciso imprimir o material?" answer="Você pode imprimir o material para usar fisicamente ou utilizar digitalmente, de acordo com a sua necessidade." />
            <FAQItem question="Em que formato são os arquivos ?" answer="Os arquivos são disponibilizados em formato PDF de alta qualidade e também como templates 100% editáveis no Canva." />
            <FAQItem question="Preciso do Canva pro ?" answer="Não, todos os templates foram criados para que você possa editá-los e personalizá-los usando apenas a versão gratuita do Canva." />
            <FAQItem question="Quais formas de pagamento são aceitas?" answer="Aceitamos PIX (com liberação imediata), cartão de crédito (em até 12x) e boleto bancário." />
            <FAQItem question="Tem garantia?" answer="Sim! Oferecemos uma garantia incondicional de 7 dias. Se você não gostar do material, devolvemos 100% do seu dinheiro." />
          </div>
        </section>

        {/* GARANTIA */}
        <section className="pt-6 pb-10 px-5 bg-[#f8f9fa]">
          <img src="https://pub-e1f5fdc45b674261b2ccda7b284afbb9.r2.dev/images/4fd72156-b604-4083-b073-722760ee3eb0/1787883085_9fa385dca328.png" alt="Garantia" className="w-full h-auto rounded-xl shadow-sm" />
        </section>

        {/* RODAPÉ */}
        <footer className="pt-8 pb-12 px-6 text-center bg-[#f8f9fa]">
          <p className="text-[9px] text-gray-400 mb-6 leading-relaxed">
            © 2026 Inspira & Rabisca. Todos os direitos reservados. Este material é protegido por direitos autorais. É proibida a reprodução, distribuição, compartilhamento ou revenda deste conteúdo, total ou parcial, sem autorização prévia do autor.
          </p>
          <a href="https://checkout.lowify.com.br/checkout.php?product_id=czlX3K" className="inline-block text-[#497db3] font-bold text-xs uppercase underline">
            QUERO ACESSAR AGORA
          </a>
        </footer>
      </div>
    </div>
  );
}
