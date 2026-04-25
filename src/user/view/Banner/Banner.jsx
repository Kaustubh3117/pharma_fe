import { Carousel } from 'primereact/carousel';
import { bannerItems, itemTemplate, responsiveOptions } from './bannerHelper';

export const Banner = () => {
    return (
        <div className="banner-carousel" style={{
            padding: '0',
            position: 'relative',
            marginBottom: '-6rem'
        }}>
            <Carousel
                value={bannerItems}
                itemTemplate={itemTemplate}
                numVisible={1}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                circular
                autoplayInterval={4500}
                showIndicators={false}
                showNavigators
                style={{
                    height: '400px',
                    overflow: 'hidden'
                }}
                className="custom-carousel"
            />
        </div>
    );
};
