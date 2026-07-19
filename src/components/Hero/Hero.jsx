import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banners from "../../data/banners";

const Hero = () => {
  return (
    <section className="hero">

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
        ]}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
        }}
        loop
      >
        {banners
          .filter((banner) => banner.active)
          .sort((a, b) => a.priority - b.priority)
          .map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                className="hero-slide"
                style={{
                  background:
                    banner.backgroundColor,
                }}
              >
                <div className="hero-left">

                  <span className="hero-badge">
                    {banner.badge}
                  </span>

                  <h1>
                    {banner.title}
                  </h1>

                  <h3>
                    {banner.subtitle}
                  </h3>

                  <p>
                    {banner.description}
                  </p>

                  <button>
                    {banner.buttonText}
                  </button>

                </div>

                <div className="hero-right">

                  <img
                    src={banner.desktopImage}
                    alt={banner.title}
                  />

                </div>

              </div>
            </SwiperSlide>
          ))}
      </Swiper>

    </section>
  );
};

export default Hero;