import "./ProductCard.css";

import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const {
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
            ? Math.round(((price - discountPrice) / price) * 100)
            : 0;

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

                {labels.length > 0 && (
                    <span className="product-badge">
                        {labels[0].replaceAll("_", " ")}
                    </span>
                )}
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

                <button className="add-cart-btn">
                    Add To Cart
                </button>

            </div>

        </div>
    );
}

export default ProductCard;