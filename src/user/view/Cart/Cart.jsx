import React, { useEffect } from "react";
import { Button } from "primereact/button";
import { Chip } from 'primereact/chip'
import { PrimeBadge } from "../../../shared/common/PrimeBadge/PrimeBadge";
import "../Cart/cartStyle.css"
import { useDispatch, useSelector } from "react-redux";
import { getCartItems, removeCartItem } from "../../store/actions/cartAction/cartAction";
import QuantityForm from "./forms/QuantityForm";
import { Link, useNavigate } from "react-router-dom";

export function Cart() {
    const cartItems = useSelector((state) => state.user.cart.cartItems)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const user_id = 1;
        dispatch(getCartItems(user_id))
    }, [dispatch])

    const userId = 1;

    const subtotal = cartItems?.reduce((sum, p) => sum + p.product.new_price * p.quantity, 0);
    const totalDiscount = cartItems?.reduce((total, item) => {
        const oldPrice = item.product.old_price;
        const newPrice = item.product.new_price;
        const qty = item.quantity;

        return total + ((oldPrice - newPrice) * qty);
    }, 0);

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

    // subtotal content
    const subTotalCardContent = (
        <>
            <div className="flex justify-between mb-2 gap-2">
                <span>Price:</span>
                <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between mb-2 gap-2">
                <span>Discount: </span>
                <span style={{ color: "#6cc66c" }}>-₹{totalDiscount}</span>
            </div>
            <div className="flex justify-between mb-2 gap-2">
                <span>Inclusive of all taxes</span>
            </div>
        </>
    )

    const subTotalFooter = (
        <div className="flex align-items-center sm:static fixed bottom-0 mt-2 left-0 right-0 z-5">
            <Chip label={`Total: ₹${(subtotal * 1.05).toFixed(2)}`} className="border-noround w-full h-3rem" />
            <Button
                label="Place Order"
                className="p-button-success border-noround h-3rem w-8"
            />
        </div>
    )

    const subTotalTitle = (
        <h2 className="-mt-1">Price Details</h2>
    )

    return (
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
                <div className="shadow-2 border-round-md">
                    <div className="p-2">
                        {subTotalTitle}
                        {subTotalCardContent}
                        {subTotalFooter}
                    </div>
                </div>
            </div>
        </div>
    );
}
