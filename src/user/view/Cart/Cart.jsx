import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { PrimeBadge } from "../../../shared/common/PrimeBadge/PrimeBadge";
import { PriceDetails } from "../../common/PriceDetails/PriceDetails";
import "../Cart/cartStyle.css"
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, removeCartItem } from "../../store/actions/cartAction/cartAction";
import QuantityForm from "./forms/QuantityForm";
import { Link, useNavigate } from "react-router-dom";
import { Checkout } from "../Checkout/Checkout";

export function Cart() {
    const cartItems = useSelector((state) => state.user.cart.cartItems)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);

    useEffect(() => {
        const user_id = 1;
        dispatch(getCartItems(user_id))
    }, [dispatch])

    const userId = 1;

    const deleteCartItem = (product_id) => {
        const payload = {
            user_id: userId,
            product_id: product_id
        }
        dispatch(removeCartItem(payload))
    }

    /* product card  */
    const productCardContent = (product, quantity) => (
        <div className="grid">
            <div className="col-4 sm:col-3 cursor-pointer" onClick={() => navigate(`/productDetails/${product.id}`)}>
                <img
                    src={"https://picsum.photos/300/200?random=70"}
                    alt={"https://picsum.photos/300/200?random=70"}
                    className="responsive-img"
                />
            </div>
            <div className="col-1 sm:col-2"></div>
            <div className="col-6 sm:col-4 -mt-4 sm:mt-0">
                <Link to={`/productDetails/${product.id}`} className="text-lg text-900 no-underline"><b>{product.title}</b></Link>
                <div>
                    <PrimeBadge value={`${product.discount}% OFF`} severity="warning" className="text-sm" />
                    <span className="ml-2" style={{ color: '#999', textDecoration: 'line-through' }}>{`₹${product.old_price}`}</span>
                    <span className="text-lg font-weight-bold ml-2" style={{ color: '#1a7f3c' }}>{`₹${product.new_price}`}</span>
                </div>
                <QuantityForm quantity={quantity} productId={product.id} userId={userId} quantityPerUser={product.quantity_per_user} />
                <p className="text-lg font-weight-bold ml-2" style={product.quantity_per_user ? { color: '#1a7f3c' } : { color: '#d51616' }}>{product.quantity_per_user ? "In Stock" : "Out of Stock"}</p>
                <p>Delivered By Mon May 5 </p>
            </div >
        </div >
    )

    const productFooter = (product) => (
        <div className="grid">
            <div className="col">
                <Button
                    label="Buy Now"
                    text
                    raised
                    className="w-full"
                    disabled={!product.quantity_per_user}
                    onClick={() => setShowCheckoutModal(true)}
                />
            </div>
            <div className="col">
                <Button
                    severity="secondary"
                    className="w-full"
                    label="Remove"
                    text
                    raised
                    onClick={() => deleteCartItem(product.id)}
                />
            </div>

        </div>
    )
    /* end of product conent */

    return (
        <>
            <Checkout visible={showCheckoutModal} setVisible={setShowCheckoutModal} />
            <div className="grid">
                {/* product card section on left */}
                <div className="col-12 sm:col-8">
                    {cartItems?.map((item, index) => (
                        <div key={index} className="shadow-2 border-round-md mt-2">
                            <div className="p-2">
                                {productCardContent(item.product, item.quantity)}
                                {productFooter(item.product)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* subtotal card section on right */}
                <div className="col-12 sm:col-4 mt-2">
                    <PriceDetails
                        cartItems={cartItems}
                        title="Price Details"
                        showButtons={true}
                        onPlaceOrder={() => setShowCheckoutModal(true)}
                    />
                </div>
            </div>
        </>
    );
}
