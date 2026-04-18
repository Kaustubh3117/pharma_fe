import { Carousel } from 'primereact/carousel';

const bannerItems = [
    {
        id: 1,
        title: 'Summer Health Sale',
        subtitle: 'Stay fit with best pharma prices',
        price: '₹99',
        image: 'https://picsum.photos/id/1018/800/400',
        quote: 'Get 20% off on everyday essentials.'
    },
    {
        id: 2,
        title: 'Immunity Boosters',
        subtitle: 'Vitamin C collection',
        price: '₹79',
        image: 'https://picsum.photos/id/1025/800/400',
        quote: 'Power up your wellness routine with best sellers.'
    },
    {
        id: 3,
        title: 'Wellness Essentials',
        subtitle: 'Healthy living made simple',
        price: '₹149',
        image: 'https://picsum.photos/id/1049/800/400',
        quote: 'Discover curated products for everyday care.'
    },
    {
        id: 4,
        title: 'Doctor Recommended',
        subtitle: 'Trusted pharma brands',
        price: '₹280',
        image: 'https://picsum.photos/id/1060/800/400',
        quote: 'Quality medicines with fast delivery.'
    }
];

const itemTemplate = (item) => (
    <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
        <img
            src={item.image}
            alt={item.title}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
            }}
            onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/1200x400?text=Image+Unavailable';
            }}
        />
        <div
            style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem',
                background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)',
                color: '#fff'
            }}
        >
            <div>
                <h2 style={{
                    margin: '0 0 12px',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    letterSpacing: '0.05em',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>
                    {item.title}
                </h2>
                <p style={{
                    margin: '0 0 16px',
                    fontSize: '1.2rem',
                    opacity: 0.95,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                    {item.subtitle}
                </p>
                <p style={{
                    margin: 0,
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    maxWidth: '600px',
                    marginInline: 'auto',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                    {item.quote}
                </p>
            </div>
        </div>
    </div>
);

export const Banner = () => {
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    return (
        <div className="banner-carousel" style={{
            padding: '0',
            position: 'relative'
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
