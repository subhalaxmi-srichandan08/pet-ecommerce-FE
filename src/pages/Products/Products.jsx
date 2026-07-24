import { useSearchParams } from "react-router-dom";

import ProductGrid from "../../components/ProductGrid/ProductGrid";

import "./Products.css";

function Products() {

    const [searchParams] = useSearchParams();

    return (

        <div className="products-page container">

            <h1>Products</h1>

            <ProductGrid

                search={searchParams.get("search") || ""}

                pet={searchParams.get("pet") || ""}

                category={searchParams.get("category") || ""}

                brand={searchParams.get("brand") || ""}

                sort={searchParams.get("sort") || "newest"}

                page={Number(searchParams.get("page")) || 1}

            />

        </div>

    );

}

export default Products;