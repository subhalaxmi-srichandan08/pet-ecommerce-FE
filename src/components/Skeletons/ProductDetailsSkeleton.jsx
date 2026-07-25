import "./Skeleton.css";
import "./ProductDetailsSkeleton.css";

function ProductDetailsSkeleton() {
    return (
        <div className="container product-details">

            <div className="details-top">

                <div className="gallery">

                    <div className="skeleton main-image-skeleton"></div>

                    <div className="thumb-row">
                        {[1,2,3,4].map(i=>(
                            <div
                                key={i}
                                className="skeleton thumb-skeleton"
                            />
                        ))}
                    </div>

                </div>

                <div className="details">

                    <div className="skeleton title-skeleton"></div>

                    <div className="skeleton subtitle-skeleton"></div>

                    <div className="skeleton price-skeleton"></div>

                    <div className="skeleton desc-skeleton"></div>

                    <div className="skeleton desc-skeleton"></div>

                    <div className="skeleton button-skeleton"></div>

                </div>

            </div>

        </div>
    );
}

export default ProductDetailsSkeleton;