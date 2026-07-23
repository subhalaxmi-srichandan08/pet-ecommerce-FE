import Hero from "../../components/Hero/Hero";
import ShopByPet from "../../components/ShopByPet/ShopByPet";
import ProductSection from "../../components/ProductSection/ProductSection";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import BrandSlider from "../../components/BrandSlider/BrandSlider";

function Landing() {
    return (
        <>
            <Hero />

            <ShopByPet />

            <ProductSection
                title="Featured Products"
                subtitle="Most loved by pet parents."
            >
                <ProductGrid label="FEATURED" />
            </ProductSection>

            <ProductSection
                title="New Arrivals"
                subtitle="Freshly added products."
            >
                <ProductGrid label="NEW_ARRIVAL" />
            </ProductSection>

            <ProductSection
                title="Best Sellers"
                subtitle="Top selling products."
            >
                <ProductGrid label="BEST_SELLER" />
            </ProductSection>

            <BrandSlider />
        </>
    );
}

export default Landing;