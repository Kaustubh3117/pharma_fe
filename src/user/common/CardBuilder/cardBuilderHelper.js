import { PrimeBadge } from "../../../shared/common/PrimeBadge/PrimeBadge";

export const cardContent = (item) => {
    const header = (
        <div className="product-image-wrapper">
            <img
                src={item.image}
                alt={item.image}
                className="product-image"
            />
            <div className="product-image-overlay">
                <i className="pi pi-eye" />
            </div>
        </div>
    );

    const content = (
        <div className="-mt-4 -ml-3">
            <span style={{ color: '#999', textDecoration: 'line-through' }}>₹{item.old_price}</span>
            <div className='flex justify-content-start gap-2'>
                <span className="text-lg font-weight-bold" style={{ color: '#1a7f3c' }}>₹{item.new_price}</span>
                <PrimeBadge value={`${item.discount}% OFF`} severity="warning" className="text-sm" />
            </div>
        </div>
    );

    const title = <h6 className="-mt-3 -ml-3 white-space-nowrap overflow-hidden text-overflow-ellipsis">{item.title}</h6>

    return {
        header: header,
        title: title,
        subTitle: item?.new_price ? content : undefined,
    }
}
