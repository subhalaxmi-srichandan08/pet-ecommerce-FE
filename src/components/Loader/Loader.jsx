import "./Loader.css";

function Loader({ size = 60 }) {
    return (
        <div className="loader-wrapper">
            <div
                className="loader-spinner"
                style={{
                    width: size,
                    height: size,
                }}
            />
        </div>
    );
}

export default Loader;