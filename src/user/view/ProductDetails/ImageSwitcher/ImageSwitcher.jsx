import React, { useState } from 'react';
import { Image } from 'primereact/image';
import { classNames } from 'primereact/utils';

export default function RealTimeImageSwitcher() {
    // Example: Unsplash random images
    const images = [
        { src: 'https://picsum.photos/300/200?random=1', thumb: 'https://picsum.photos/100/100?random=1' },
        { src: 'https://picsum.photos/300/200?random=2', thumb: 'https://picsum.photos/100/100?random=2' },
        { src: 'https://picsum.photos/300/200?random=3', thumb: 'https://picsum.photos/100/100?random=3' },
        { src: 'https://picsum.photos/300/200?random=4', thumb: 'https://picsum.photos/100/100?random=4' }
    ];

    const [selectedImage, setSelectedImage] = useState(images[0].src);

    return (
        <div className="p-d-flex p-flex-column p-ai-center">
            {/* Main Image */}
            <Image src={selectedImage} alt="Main" className="p-mb-3" width="100%" height="300px" preview />

            {/* Thumbnails */}
            <div className="p-d-flex p-flex-wrap p-gap-2">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img.thumb}
                        alt={`Thumbnail ${i}`}
                        className={classNames('p-m-2', {
                            'p-border-2 p-border-primary': selectedImage === img.src
                        })}
                        style={{ width: '80px', cursor: 'pointer' }}
                        onClick={() => setSelectedImage(img.src)}
                    />
                ))}
            </div>
        </div>
    );
}
