import { useSelector } from "react-redux";

const Loader = () => {
    const loading = useSelector((state) => state.common.loading)
    return (
        <>
            {loading &&
                <div className="loader-overlay">
                    <div className="loader-content">
                        <div className="puff-loader">
                        </div>
                        <p className="loader-text">Loading Please Wait...</p>
                    </div>
                </div>
            }
        </>
    );
};

export default Loader;
