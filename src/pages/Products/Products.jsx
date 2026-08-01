import { useSearchParams } from "react-router-dom";

import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Filters from "../../components/Filters/Filters";

import "./Products.css";

function Products() {

    const [searchParams, setSearchParams] =
        useSearchParams();

    return (

        <div className="products-page container">

            <h1>Products</h1>

            <div className="products-layout">

                <Filters />

                <div className="products-content">

                    <div className="products-toolbar">

                        <select

                            value={searchParams.get("sort") || "newest"}

                            onChange={e => {

                                const params =
                                    new URLSearchParams(searchParams);

                                params.set(
                                    "sort",
                                    e.target.value
                                );

                                params.set("page", 1);

                                setSearchParams(params);

                            }}

                        >

                            <option value="newest">

                                Newest

                            </option>

                            <option value="priceAsc">

                                Price: Low to High

                            </option>

                            <option value="priceDesc">

                                Price: High to Low

                            </option>

                            <option value="rating">

                                Highest Rated

                            </option>

                        </select>

                    </div>

                    <ProductGrid

                        search={searchParams.get("search") || ""}

                        pet={searchParams.get("pet") || ""}

                        category={searchParams.get("category") || ""}

                        brand={searchParams.get("brand") || ""}

                        sort={searchParams.get("sort") || "newest"}

                        page={Number(searchParams.get("page")) || 1}

                    />


                </div>

            </div>

        </div>

    );

}

export default Products;