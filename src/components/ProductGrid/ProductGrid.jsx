import "./ProductGrid.css";

import {
    useEffect,
    useState
} from "react";

import {
    useNavigate,
    useLocation
} from "react-router-dom";

import productService from "../../services/productService";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";

function ProductGrid({
    label,
    pet,
    category,
    brand,
    search,
    minPrice,
    maxPrice,
    rating,
    availability,
    sort,
    limit = 8,
    page = 1,
}) {

    const [products, setProducts] =
        useState([]);

    const [pagination, setPagination] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const navigate = useNavigate();

    const location = useLocation();

    useEffect(() => {

        const fetchProducts = async () => {

            setLoading(true);

            try {

                const params = {

                    label,

                    pet,

                    category,

                    brand,

                    search,

                    minPrice,

                    maxPrice,

                    rating,

                    availability,

                    sort,

                    page,

                    limit,

                };

                const res =
                    await productService.getProducts(
                        params
                    );

                setProducts(
                    res.data.products || []
                );

                setPagination(
                    res.data.pagination || null
                );

            } catch (error) {

                console.error(
                    "Failed to fetch products:",
                    error
                );

                setProducts([]);

                setPagination(null);

            } finally {

                setLoading(false);

            }

        };

        fetchProducts();

    }, [
        label,
        pet,
        category,
        brand,
        search,
        minPrice,
        maxPrice,
        rating,
        availability,
        sort,
        page,
        limit
    ]);

    const changePage = newPage => {

        const params =
            new URLSearchParams(
                location.search
            );

        params.set(
            "page",
            String(newPage)
        );

        navigate(
            `${location.pathname}?${params.toString()}`
        );

    };

    if (loading) {
        return <Loader />;
    }

    if (!products.length) {
        return (
            <h3>
                No products found.
            </h3>
        );
    }

    return (
        <>

            <div className="product-grid">

                {products.map(product => (

                    <ProductCard
                        key={product._id}
                        product={product}
                    />

                ))}

            </div>

            {
                !label &&
                pagination &&
                pagination.totalPages > 1 && (

                    <div className="pagination">

                        <button
                            disabled={
                                pagination.page === 1
                            }
                            onClick={() =>
                                changePage(
                                    pagination.page - 1
                                )
                            }
                        >
                            Previous
                        </button>

                        <span>

                            Page{" "}
                            {pagination.page}
                            {" "}of{" "}
                            {pagination.totalPages}

                        </span>

                        <button
                            disabled={
                                pagination.page ===
                                pagination.totalPages
                            }
                            onClick={() =>
                                changePage(
                                    pagination.page + 1
                                )
                            }
                        >
                            Next
                        </button>

                    </div>

                )
            }

        </>
    );
}

export default ProductGrid;