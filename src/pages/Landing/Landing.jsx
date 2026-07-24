import { useNavigate } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import ShopByPet from "../../components/ShopByPet/ShopByPet";
import ProductSection from "../../components/ProductSection/ProductSection";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import BrandSlider from "../../components/BrandSlider/BrandSlider";

function Landing() {

    const navigate = useNavigate();

    return (
        <>
            <Hero />

            <ShopByPet />

            <ProductSection
                title="Featured Products"
                subtitle="Most loved by pet parents."
                onAction={() => navigate("/products?label=FEATURED")}
            >
                <ProductGrid
                    label="FEATURED"
                    limit={8}
                />
            </ProductSection>

            <ProductSection
                title="New Arrivals"
                subtitle="Freshly added products."
                onAction={() => navigate("/products?label=NEW_ARRIVAL")}
            >
                <ProductGrid
                    label="NEW_ARRIVAL"
                    limit={8}
                />
            </ProductSection>

            <ProductSection
                title="Best Sellers"
                subtitle="Top selling products."
                onAction={() => navigate("/products?label=BEST_SELLER")}
            >
                <ProductGrid
                    label="BEST_SELLER"
                    limit={8}
                />
            </ProductSection>

            <BrandSlider />
        </>
    );
}

export default Landing;