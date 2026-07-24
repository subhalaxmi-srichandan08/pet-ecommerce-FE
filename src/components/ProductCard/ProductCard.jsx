import "./ProductCard.css";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import cartService from "../../services/cartService";
import useAuthStore from "../../store/authStore";
import useCartStore from "../../store/cartStore";

function ProductCard({ product }) {

    const navigate = useNavigate();

    const isAuthenticated = useAuthStore(
        state => state.isAuthenticated
    );

    const fetchCart = useCartStore(
        state => state.fetchCart
    );

    const {
        _id,
        slug,
        thumbnail,
        name,
        brand,
        price,
        discountPrice,
        rating,
        reviewCount,
        labels = [],
    } = product;

    const discount =
        price > 0
            ? Math.round(
                ((price - discountPrice) / price) * 100
            )
            : 0;

    const handleAddToCart = async (e) => {

        e.preventDefault();
        e.stopPropagation();

        if (!isAuthenticated) {

            toast.info("Please login first");

            navigate("/login");

            return;

        }

        try {

            await cartService.addToCart(
                _id,
                1
            );

            await fetchCart();

            toast.success("Added to cart");

        } catch (err) {

            console.error(err);

            toast.error(
                err.response?.data?.message ||
                "Failed to add to cart"
            );

        }

    };

    return (

        <div className="product-card">

            <Link
                to={`/products/${slug}`}
                className="product-image"
            >

                <img
                    src={thumbnail}
                    alt={name}
                />

                {

                    labels.length > 0 && (

                        <span className="product-badge">

                            {labels[0].replaceAll("_", " ")}

                        </span>

                    )

                }

            </Link>

            <div className="product-content">

                <p className="product-brand">

                    {brand?.name}

                </p>

                <Link
                    to={`/products/${slug}`}
                    className="product-name"
                >

                    {name}

                </Link>

                <div className="product-rating">

                    ⭐ {rating} ({reviewCount})

                </div>

                <div className="product-price">

                    <span className="discount-price">

                        ₹{discountPrice}

                    </span>

                    <span className="original-price">

                        ₹{price}

                    </span>

                    <span className="discount">

                        {discount}% OFF

                    </span>

                </div>

                <button
                    className="add-cart-btn"
                    onClick={handleAddToCart}
                >

                    Add To Cart

                </button>

            </div>

        </div>

    );

}

export default ProductCard;