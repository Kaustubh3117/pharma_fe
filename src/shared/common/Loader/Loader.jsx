import { useSelector } from "react-redux";

const Loader = () => {
    const loading = useSelector((state) => state.common.loading)
    return (
        <>
            {loading &&
                <div class="loader-overlay">
                    <div class="loader-content">
                        <div class="puff-loader">
                        </div>
                        <p class="loader-text">Loading Please Wait...</p>
                    </div>
                </div>
            }
        </>
    );
};

export default Loader;
