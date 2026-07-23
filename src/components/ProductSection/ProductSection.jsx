import "./ProductSection.css";

function ProductSection({
    title,
    subtitle,
    children,
    actionText = "View All",
    onAction
}) {

    return (

        <section className="product-section container">

            <div className="product-section-header">

                <div>

                    <h2>

                        {title}

                    </h2>

                    {

                        subtitle &&

                        <p>

                            {subtitle}

                        </p>

                    }

                </div>

                <button
                    onClick={onAction}
                >

                    {actionText}

                </button>

            </div>

            {children}

        </section>

    );

}

export default ProductSection;