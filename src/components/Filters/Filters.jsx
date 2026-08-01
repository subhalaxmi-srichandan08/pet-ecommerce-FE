import "./Filters.css";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import brandService from "../../services/brandService";

import {
    PRICE_RANGES,
    RATINGS,
    AVAILABILITY,
} from "../../constants/filterOptions";

function Filters() {

    const [brands, setBrands] = useState([]);

    const [searchParams, setSearchParams] =
        useSearchParams();

    useEffect(() => {

        const fetchBrands = async () => {

            try {

                const res =
                    await brandService.getBrands();

                setBrands(
                    res.data.data || []
                );

            } catch (err) {

                console.error(err);

            }

        };

        fetchBrands();

    }, []);

const updateParam = (key, value) => {

    const params = new URLSearchParams(searchParams);

    // Clear search when selecting a filter
    params.delete("search");

    if (value) {
        params.set(key, value);
    } else {
        params.delete(key);
    }

    params.set("page", 1);

    setSearchParams(params);

};

    const clearFilters = () => {

        const params =
            new URLSearchParams();

        const search =
            searchParams.get("search");

        if (search) {

            params.set(
                "search",
                search
            );

        }

        setSearchParams(params);

    };

    return (

        <aside className="filters">

            <div className="filters-header">

                <h3>Filters</h3>

                <button
                    onClick={clearFilters}
                >
                    Clear
                </button>

            </div>

            <div className="filter-group">

                <h4>Brand</h4>

                {

                    brands.map(brand => (

                        <label
                            key={brand._id}
                        >

                            <input
                                type="radio"
                                name="brand"
                                checked={
                                    searchParams.get("brand") ===
                                    brand.slug
                                }
                                onChange={() => {

                                    console.log("Clicked Brand:", brand);

                                    updateParam(
                                        "brand",
                                        brand.slug
                                    );

                                }}
                            />

                            {brand.name}

                        </label>

                    ))

                }

            </div>

            <div className="filter-group">

                <h4>Price</h4>

                {

                    PRICE_RANGES.map(price => (

                        <label
                            key={price.label}
                        >

                            <input
                                type="radio"
                                name="price"
                                checked={
                                    searchParams.get("minPrice") ===
                                    String(price.minPrice)
                                }
                                onChange={() => {

                                    const params =
                                        new URLSearchParams(
                                            searchParams
                                        );

                                    params.set(
                                        "minPrice",
                                        price.minPrice
                                    );

                                    if (
                                        price.maxPrice !== ""
                                    ) {

                                        params.set(
                                            "maxPrice",
                                            price.maxPrice
                                        );

                                    } else {

                                        params.delete(
                                            "maxPrice"
                                        );

                                    }

                                    params.set(
                                        "page",
                                        1
                                    );

                                    setSearchParams(
                                        params
                                    );

                                }}
                            />

                            {price.label}

                        </label>

                    ))

                }

            </div>

            <div className="filter-group">

                <h4>Rating</h4>

                {

                    RATINGS.map(rating => (

                        <label
                            key={rating}
                        >

                            <input
                                type="radio"
                                name="rating"
                                checked={
                                    searchParams.get("rating") ===
                                    String(rating)
                                }
                                onChange={() =>
                                    updateParam(
                                        "rating",
                                        rating
                                    )
                                }
                            />

                            {rating} ★ & Up

                        </label>

                    ))

                }

            </div>

            <div className="filter-group">

                <h4>Availability</h4>

                {

                    AVAILABILITY.map(item => (

                        <label
                            key={item.value}
                        >

                            <input
                                type="radio"
                                name="availability"
                                checked={
                                    searchParams.get(
                                        "availability"
                                    ) ===
                                    item.value
                                }
                                onChange={() =>
                                    updateParam(
                                        "availability",
                                        item.value
                                    )
                                }
                            />

                            {item.label}

                        </label>

                    ))

                }

            </div>

        </aside>

    );

}

export default Filters;