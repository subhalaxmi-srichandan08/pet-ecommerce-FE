import "./Cart.css";

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import cartService from "../../services/cartService";
import useCartStore from "../../store/cartStore";

function Cart() {

    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchGlobalCart = useCartStore(
    state => state.fetchCart
);

    const fetchCart = async () => {

        try {

            const res = await cartService.getCart();

            setCart(res.data.data);

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchCart();

    }, []);

    const total = useMemo(() => {

        if (!cart) return 0;

        return cart.items.reduce((sum, item) => {

            return sum + item.product.discountPrice * item.quantity;

        }, 0);

    }, [cart]);

    const totalItems = useMemo(() => {

        if (!cart) return 0;

        return cart.items.reduce((sum, item) => sum + item.quantity, 0);

    }, [cart]);

    const increase = async item => {

    await cartService.updateQuantity(
        item.product._id,
        item.quantity + 1
    );

    await fetchCart();
    await fetchGlobalCart();

};

const decrease = async item => {

    if (item.quantity === 1) {

        await cartService.removeItem(
            item.product._id
        );

    } else {

        await cartService.updateQuantity(
            item.product._id,
            item.quantity - 1
        );

    }

    await fetchCart();
    await fetchGlobalCart();

};

const remove = async item => {

    await cartService.removeItem(
        item.product._id
    );

    await fetchCart();
    await fetchGlobalCart();

};

    if (loading)
        return (
            <div className="container loading-cart">
                Loading Cart...
            </div>
        );

    if (!cart || cart.items.length === 0)
        return (

            <div className="empty-cart container">

                <div className="empty-cart-box">

                    <div className="empty-icon">
                        🛒
                    </div>

                    <h2>Your Cart is Empty</h2>

                    <p>
                        Looks like you haven't added any products yet.
                    </p>

                    <Link
                        to="/products"
                        className="shop-btn"
                    >
                        Continue Shopping
                    </Link>

                </div>

            </div>

        );

    return (

        <div className="container cart-page">

            <div className="cart-header">

                <h1>Shopping Cart</h1>

                <span>
                    {totalItems} Item{totalItems > 1 ? "s" : ""}
                </span>

            </div>

            <div className="cart-layout">

                <div className="cart-list">

                    {cart.items.map(item => (

                        <div
                            key={item.product._id}
                            className="cart-item"
                        >

                            <img
                                src={item.product.thumbnail}
                                alt={item.product.name}
                            />

                            <div className="cart-info">

                                <p className="brand">
                                    {item.product.brand?.name}
                                </p>

                                <h3>
                                    {item.product.name}
                                </h3>

                                <h4>
                                    ₹{item.product.discountPrice}
                                </h4>

                            </div>

                            <div className="cart-actions">

                                <button
                                    onClick={() => decrease(item)}
                                >
                                    −
                                </button>

                                <span>
                                    {item.quantity}
                                </span>

                                <button
                                    onClick={() => increase(item)}
                                >
                                    +
                                </button>

                            </div>

                            <button
                                className="remove-btn"
                                onClick={() => remove(item)}
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                </div>

                <div className="cart-summary">

                    <h2>Order Summary</h2>

                    <div className="summary-row">

                        <span>Items</span>

                        <span>{totalItems}</span>

                    </div>

                    <div className="summary-row">

                        <span>Subtotal</span>

                        <span>₹{total}</span>

                    </div>

                    <div className="summary-row">

                        <span>Shipping</span>

                        <span>FREE</span>

                    </div>

                    <hr />

                    <div className="summary-total">

                        <span>Total</span>

                        <span>₹{total}</span>

                    </div>

                    <button className="checkout-btn">

                        Proceed to Checkout

                    </button>

                </div>

            </div>

        </div>

    );

}

export default Cart;