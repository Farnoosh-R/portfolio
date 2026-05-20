import { useEffect, useState } from "react";
import bgImage from "./assets/images/layout/forest.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import slide1 from "./assets/images/layout/slide1.png";
import slide2 from "./assets/images/layout/slide2.png";
import slide3 from "./assets/images/layout/slide3.png";
import SwiperSlider from "./components/ui/slider/SwiperSlider";
import { HiCheck } from "react-icons/hi";
import { FaLightbulb } from "react-icons/fa";

export function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-anim");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("show");
            void entry.target.offsetWidth;
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.2,
      },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [count, setCount] = useState(0);
  useScrollAnimation();

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Luxury Resort",
      buttonText: "Explore",
    },
    {
      id: 2,
      image: slide2,
      title: "Luxury Resort",
      buttonText: "Explore",
    },
    {
      id: 3,
      image: slide3,
      title: "Luxury Resort",
      buttonText: "Explore",
    },
    {
      id: 4,
      image: slide1,
      title: "Luxury Resort",
      buttonText: "Explore",
    },
  ];

  return (
    <>
      <section
        id="main"
        className="relative min-h-[100dvh] bg-cover overflow-y-auto flex flex-col gap-5 items-center justify-center scroll-anim"
        style={{
          backgroundImage: `url(${bgImage})`,
          "--from": "scale(0.9)",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative app-container grid grid-cols-1 lg:grid-cols-2 border-3 border-white rounded-4xl overflow-hidden">
          <div className="flex flex-col gap-4 p-10">
            <h1 className="text-white text-left drop-shadow-2xl -ml-9">TAL</h1>
            <SwiperSlider items={slides} />
          </div>

          <div className="relative p-10 flex flex-col gap-7 text-white">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-0" />

            <div className="relative z-10 flex flex-col gap-7">
              <div className="-mr-10">
                <h1
                  className="bg-center bg-cover bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ backgroundImage: `url(${bgImage})` }}
                >
                  DIGI
                </h1>

                <h1
                  className="bg-center bg-cover bg-clip-text text-transparent drop-shadow-2xl"
                  style={{ backgroundImage: `url(${bgImage})` }}
                >
                  DREAMS
                </h1>
              </div>
              <div className="flex flex-col gap-10">
                <h4 className="text-[var(--text-secondary)]">
                  ترکیب طراحی و کدنویسی برای ساخت تجربه‌های دیجیتال جذاب و
                  کاربردی
                </h4>

                <div className="flex flex-col gap-5">
                  <div className="flex gap-1">
                    <FaLightbulb color="var(--brand-primary)" size={15} />
                    <div className="text-white">
                     ساخت UI های مدرن، سبک و کاربرمحور
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <FaLightbulb color="var(--brand-primary)" size={15} />
                    <div className="text-white">
                    هر پروژه نتیجه ترکیب طراحی و کدنویسی تمیز
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <FaLightbulb color="var(--brand-primary)" size={15} />
                    <div className="text-white">
                    تبدیل ایده‌ها به رابط‌های واقعی و قابل استفاده
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 justify-between mt-15">
                <div>
                  <div className="flex flex-col items-end gap-3 items-center">
                    <div className="flex gap-1">
                      <a
                        href="https://farnoosh-r.github.io/react-demo1"
                        target="_blank"
                        className="hover:text-[var(--brand-primary)]"
                      >
                        demo1.farnooshstudio.ir
                      </a>
                      <HiCheck color="var(--brand-primary)" size={15} />
                    </div>
                    <div className="flex gap-1">
                      <a
                        href="#"
                        target="_blank"
                        className="hover:text-[var(--brand-primary)]"
                      >
                        demo2.farnooshstudio.ir
                      </a>
                      <HiCheck color="var(--brand-primary)" size={15} />
                    </div>
                    <div className="flex gap-1">
                      <a
                        href="#"
                        target="_blank"
                        className="hover:text-[var(--brand-primary)]"
                      >
                        demo3.farnooshstudio.ir
                      </a>
                      <HiCheck color="var(--brand-primary)" size={15} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-7 items-end">
                  <button className="w-fit text-lg bg-[var(--brand-primary)] hover:bg-[#799c02] px-5 py-3 rounded-2xl cursor-pointer">
                    تماس بگیرید
                  </button>
                  <div className="flex justify-end gap-4">
                    <a
                      className="scroll-anim cursor-pointer p-2 hover:border hover:rounded-full transition-all duration-300 hover:text-white-500 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(197,257,0,1)]"
                      style={{ "--from": "translateX(-60px)" }}
                    >
                      <FaInstagram color="var(--text-primary)" size={20} />
                    </a>
                    <a
                      className="scroll-anim cursor-pointer p-2 hover:border hover:rounded-full transition-all duration-300 hover:text-white-500 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(197,257,0,1)]"
                      style={{ "--from": "translateX(-60px)" }}
                    >
                      <FaTelegramPlane color="var(--text-primary)" size={20} />
                    </a>
                    <a
                      className="scroll-anim cursor-pointer p-2 hover:border hover:rounded-full transition-all duration-300 hover:text-white-500 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(197,257,0,1)]"
                      style={{ "--from": "translateX(-60px)" }}
                    >
                      <FaWhatsapp color="var(--text-primary)" size={20} />
                    </a>
                    <a
                      className="scroll-anim cursor-pointer p-2 hover:border hover:rounded-full transition-all duration-300 hover:text-white-500 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(197,257,0,1)]"
                      style={{ "--from": "translateX(-60px)" }}
                    >
                      <FaLinkedin color="var(--text-primary)" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="text-[var(--brand-primary)]">Farnoosh</div>
          <div>Designed & Developed by</div>
          <div>|</div>
          <div>2026©</div>
        </div>
      </section>
    </>
  );
}

export default App;
