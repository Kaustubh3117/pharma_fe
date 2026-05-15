import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "primereact/button";
import { AddAddress } from "./AddAddress/AddAddress";
import { PrimeDialog } from "../../../shared/common/PrimeDialog/PrimeDialog";

export const Address = ({ userAddress }) => {
    const [showAddAddress, setShowAddAddress] = useState(false);

    const noAddressContent = () => {
        return (
            <div className="shadow-2 surface-card border-round p-3">
                <h3>No address found. Please add a new address.</h3>
                <Button label="Add Address" severity="primary" onClick={() => setShowAddAddress(true)} />
            </div>
        )
    }

    const addressDetails = () => {
        return (
            <div className="shadow-2 surface-card border-round p-3 mt-2">
                <div className="flex justify-content-between w-full">
                    <div className="flex align-items-start">
                        <h3>Deliver To:</h3>
                    </div>
                    <div className="flex justify-content-end align-items-end">
                        <Button
                            label="Change Address"
                            severity="secondary"
                            onClick={() => setShowAddAddress(true)}
                        />
                    </div>
                </div>
                <div className="mb-2">
                    <strong>{userAddress.fullName}</strong>
                </div>
                <div className="mb-2">{userAddress.address1}</div>
                {userAddress.address2 && <div className="mb-2">{userAddress.address2}</div>}
                <div className="mb-2">
                    {userAddress.city}, {userAddress.state} {userAddress.zip}
                </div>
                <div className="mb-2">{userAddress.country}</div>
                <div className="mb-2">{userAddress.phone}</div>
                <div className="mb-2">{userAddress.email}</div>
            </div>
        )
    }

    const content = !userAddress ? noAddressContent() : addressDetails();

    return (
        <>
            {content}
            <PrimeDialog
                visible={showAddAddress}
                onHide={() => setShowAddAddress(false)}
                header="Add Address"
                style={{ width: "90vw", maxWidth: "900px" }}
                content={<AddAddress />}
            />
        </>
    );
};