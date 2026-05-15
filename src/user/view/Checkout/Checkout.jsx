import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrimeDialog } from "../../../shared/common/PrimeDialog/PrimeDialog";
import { Address } from "../../common/Address/Address";
import { Button } from "primereact/button";
import { PriceDetails } from "../../common/PriceDetails/PriceDetails";
import { showToast } from "../../../shared/utils/toastService";

export const Checkout = ({ visible, setVisible }) => {
    const cartItems = useSelector((state) => state.user.cart.cartItems) || [];
    // const userAddress = useSelector((state) => state.user.address?.defaultAddress);
    const navigate = useNavigate();
    const userAddress = {
        fullName: "Kaustubh Tanajirao Patil",
        email: "john.doe@example.com",
        phone: "1234567890",
        country: "INDIA",
        address1: "AT/PO: Pimpalgaon Baswant, Tal: Dindori",
        address2: "Near Dindori Bus Stop",
        city: "Nashik",
        state: "Maharashtra",
        zip: "422001"
    }
    // const userAddress = ""

    const onPlaceOrder = () => {
        showToast("success", "", "Order placed successfully!");
        setVisible(false);
        navigate("/");
    };

    const footer = (
        <div className="flex justify-content-end gap-2">
            <Button label="Cancel" severity="secondary" outlined onClick={() => setVisible(false)} />
            <Button label="Proceed to Payment" severity="success" onClick={onPlaceOrder} disabled={!userAddress} />
        </div>
    );

    const content = (
        <div className="grid gap-3">
            <div className="col-12">
                <Address userAddress={userAddress} />
            </div>
            <div className="col-12">
                <PriceDetails
                    cartItems={cartItems}
                    title="Order Summary"
                    showButtons={false}
                />
            </div>
        </div>
    );

    return (
        <PrimeDialog
            visible={visible}
            onHide={() => setVisible(false)}
            header="Checkout"
            style={{ width: "90vw", maxWidth: "900px" }}
            footer={footer}
            content={content}
        />
    );
};