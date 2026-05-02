import { useEffect } from "react";
import { useSelector } from "react-redux";
import "../Loader/loader.css"

const Loader = () => {
    const loading = useSelector((state) => state.common.loading)
    useEffect(() => {
        if (loading) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [loading]);
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
