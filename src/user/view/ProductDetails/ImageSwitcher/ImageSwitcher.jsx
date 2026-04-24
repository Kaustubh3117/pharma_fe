import React, { useState } from 'react';
import { Image } from 'primereact/image';
import { classNames } from 'primereact/utils';

export default function RealTimeImageSwitcher({ images }) {
    // Example: Unsplash random images
    const imageList = images || []

    const [selectedImage, setSelectedImage] = useState(images && images.length > 0 ? images[0] : '');

    return (
        <div className="p-d-flex p-flex-column p-ai-center">
            {/* Main Image */}
            <Image src={selectedImage} alt="Main" className="p-mb-3" width="100%" height="300px" preview />

            {/* Thumbnails */}
            <div className="p-d-flex p-flex-wrap p-gap-2">
                {imageList.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        alt={`Thumbnail ${i}`}
                        className={classNames('p-m-2', {
                            'p-border-2 p-border-primary': selectedImage === img
                        })}
                        style={{ width: '80px', cursor: 'pointer' }}
                        onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>
        </div>
    );
}
