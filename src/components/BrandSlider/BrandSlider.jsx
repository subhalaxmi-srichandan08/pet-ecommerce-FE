import "./BrandSlider.css";

import { useEffect, useState } from "react";

import brandService from "../../services/brandService";

function BrandSlider() {

    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchBrands = async () => {

            try {

                const res = await brandService.getBrands();

                const featuredBrands = (res.data.data || [])
                    .filter(brand => brand.featured)
                    .sort((a, b) => a.displayOrder - b.displayOrder);

                setBrands(featuredBrands);

            } catch (err) {

                console.error(err);

            } finally {

                setLoading(false);

            }

        };

        fetchBrands();

    }, []);

    if (loading) {

        return (
            <section className="brand-slider container">
                <h2>Popular Brands</h2>
                <p>Loading...</p>
            </section>
        );

    }

    return (

        <section className="brand-slider container">

            <h2>Popular Brands</h2>

            <div className="brand-grid">

                {
                    brands.map(brand => (

                        <div
                            key={brand._id}
                            className="brand-card"
                        >

                            <img
                                src={
                                    brand.logo ||
                                    "https://placehold.co/120x120?text=" +
                                    encodeURIComponent(brand.name)
                                }
                                alt={brand.logoAlt}
                            />

                            <h3>{brand.name}</h3>

                        </div>

                    ))
                }

            </div>

        </section>

    );

}

export default BrandSlider;