import "./Hero.css";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bannerService from "../../services/bannerService";

const Hero = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const res = await bannerService.getBanners();

                setBanners(res.data.data || []);
            } catch (err) {
                console.error("Failed to load banners:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBanners();
    }, []);

    if (loading) {
        return (
            <section className="hero">
                <div className="hero-loading">
                    Loading banners...
                </div>
            </section>
        );
    }

    if (!banners.length) {
        return null;
    }

    return (
        <section className="hero">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
            >
                {banners
                    .filter((banner) => banner.isActive)
                    .sort((a, b) => a.displayOrder - b.displayOrder)
                    .map((banner) => (
                        <SwiperSlide key={banner._id}>
                            <div
                                className="hero-slide"
                                style={{
                                    background: banner.backgroundColor,
                                }}
                            >
                                <div className="hero-left">
                                    <span className="hero-badge">
                                        {banner.badge}
                                    </span>

                                    <h1>{banner.title}</h1>

                                    <h3>{banner.subtitle}</h3>

                                    <p>{banner.description}</p>

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