import "./Filters.css";

import {
    useEffect,
    useState
} from "react";

import {
    useSearchParams
} from "react-router-dom";

import brandService from "../../services/brandService";

import {
    PRICE_RANGES,
    RATINGS,
    AVAILABILITY,
} from "../../constants/filterOptions";

function Filters() {

    const [brands, setBrands] =
        useState([]);

    const [
        searchParams,
        setSearchParams
    ] = useSearchParams();

    useEffect(() => {

        const fetchBrands = async () => {

            try {

                const res =
                    await brandService.getBrands();

                setBrands(
                    res.data.data || []
                );

            } catch (error) {

                console.error(
                    "Failed to fetch brands:",
                    error
                );

            }

        };

        fetchBrands();

    }, []);

    /*
     * Generic filter update
     *
     * Used by:
     * Brand
     * Rating
     * Availability
     */
    const updateParam = (
        key,
        value
    ) => {

        const params =
            new URLSearchParams(
                searchParams
            );

        if (
            value !== undefined &&
            value !== null &&
            value !== ""
        ) {

            params.set(
                key,
                String(value)
            );

        } else {

            params.delete(key);

        }

        /*
         * Always restart pagination
         * after changing a filter.
         */
        params.set(
            "page",
            "1"
        );

        setSearchParams(params);

    };

    /*
     * Price filter
     */
    const updatePrice = price => {

        const params =
            new URLSearchParams(searchParams);

        if (
            price.minPrice !== "" &&
            price.minPrice !== undefined
        ) {
            params.set(
                "minPrice",
                String(price.minPrice)
            );
        } else {
            params.delete("minPrice");
        }

        if (
            price.maxPrice !== "" &&
            price.maxPrice !== undefined
        ) {
            params.set(
                "maxPrice",
                String(price.maxPrice)
            );
        } else {
            params.delete("maxPrice");
        }

        params.set("page", "1");

        setSearchParams(params);
    };

    /*
     * Clear all filters but
     * preserve product search.
     */
    const clearFilters = () => {

        const params =
            new URLSearchParams();

        const search =
            searchParams.get(
                "search"
            );

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

                <h3>
                    Filters
                </h3>

                <button
                    type="button"
                    onClick={clearFilters}
                >
                    Clear
                </button>

            </div>


            {/* =========================
                BRAND
            ========================== */}

            <div className="filter-group">

                <h4>
                    Brand
                </h4>

                {
                    brands.map(brand => (

                        <label
                            key={brand._id}
                        >

                            <input
                                type="radio"
                                name="brand"

                                checked={
                                    searchParams.get(
                                        "brand"
                                    ) ===
                                    brand.slug
                                }

                                onChange={() =>
                                    updateParam(
                                        "brand",
                                        brand.slug
                                    )
                                }
                            />

                            {brand.name}

                        </label>

                    ))
                }

            </div>


            {/* =========================
                PRICE
            ========================== */}

            <div className="filter-group">

                <h4>Price</h4>

                {PRICE_RANGES.map(price => {

                    const currentMin =
                        searchParams.get("minPrice");

                    const currentMax =
                        searchParams.get("maxPrice");

                    const isSelected =
                        currentMin === String(price.minPrice) &&
                        (
                            price.maxPrice === ""
                                ? !currentMax
                                : currentMax === String(price.maxPrice)
                        );

                    return (

                        <label key={price.label}>

                            <input
                                type="radio"
                                name="price"
                                checked={isSelected}
                                onChange={() =>
                                    updatePrice(price)
                                }
                            />

                            {price.label}

                        </label>

                    );

                })}

            </div>


            {/* =========================
                RATING
            ========================== */}

            <div className="filter-group">

                <h4>
                    Rating
                </h4>

                {
                    RATINGS.map(
                        rating => (

                            <label
                                key={rating}
                            >

                                <input
                                    type="radio"
                                    name="rating"

                                    checked={
                                        searchParams.get(
                                            "rating"
                                        ) ===
                                        String(
                                            rating
                                        )
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

                        )
                    )
                }

            </div>


            {/* =========================
                AVAILABILITY
            ========================== */}

            <div className="filter-group">

                <h4>
                    Availability
                </h4>

                {
                    AVAILABILITY.map(
                        item => (

                            <label
                                key={
                                    item.value
                                }
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

                        )
                    )
                }

            </div>

        </aside>

    );
}

export default Filters;