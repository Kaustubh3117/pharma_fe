import React from "react";
import { Button } from "primereact/button";
import { Chip } from "primereact/chip";

export const PriceDetails = ({
    cartItems = [],
    title = "Price Details",
    showButtons = false,
    onPlaceOrder
}) => {
    const subtotal = cartItems?.reduce((sum, item) => sum + (item.product.new_price || 0) * (item.quantity || 0), 0);
    const totalDiscount = cartItems?.reduce((sum, item) => sum + (((item.product.old_price || 0) - (item.product.new_price || 0)) * (item.quantity || 0)), 0);
    const total = subtotal + subtotal * 0.05;

    const cardContent = (
        <>
            <div className="flex justify-content-between mb-2">
                <span>Items</span>
                <span>{cartItems?.length}</span>
            </div>
            <div className="flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal?.toFixed(2)}</span>
            </div>
            <div className="flex justify-content-between mb-2">
                <span>Discount</span>
                <span className="text-green-600">-₹{totalDiscount?.toFixed(2)}</span>
            </div>
            <div className="flex justify-content-between mb-3">
                <span>Tax (5%)</span>
                <span>₹{(subtotal * 0.05).toFixed(2)}</span>
            </div>
            <div className="flex justify-content-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
            </div>
        </>
    );

    const footer = showButtons ? (
        <div className="flex align-items-center sm:static fixed bottom-0 mt-2 left-0 right-0 z-5">
            <Chip label={`Total: ₹${total.toFixed(2)}`} className="border-noround w-full h-3rem" />
            <Button
                label="Place Order"
                className="p-button-success border-noround h-3rem w-8"
                onClick={onPlaceOrder}
            />
        </div>
    ) : null;

    return (
        <div className="shadow-2 surface-card border-round p-3">
            <h4>{title}</h4>
            {cardContent}
            {footer}
        </div>
    );
};