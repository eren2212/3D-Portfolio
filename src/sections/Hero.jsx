import { words } from "../constants/index";
import Button from "../components/Button";
const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="bg" />
      </div>

      <div className="hero-layout">
        {/* LEFT:HERO CONTENT */}
        <header className="flex flex-col justify-center md:w-full md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Şekillendiriyorum
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-8 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Gerçek Projelere Dönüştürüyorum</h1>
              <h1>Sonuç Üretiyorum</h1>
            </div>
            <p className="text-white-50 md:text-xl z-10 pointer-events-none">
              Merhaba, ben Konya'da yaşayan ve kodlamaya tutkusu olan bir
              geliştiriciyim.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12 "
              id="button"
              text="Projelerimi Görün"
            />
          </div>
        </header>
      </div>
    </section>
  );
};

export default Hero;
