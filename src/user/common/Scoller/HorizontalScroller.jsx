import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import './horizontalScroller.css';

export const HorizontalScroller = ({ content }) => {
    const scrollerRef = useRef(null);

    const scrollLeft = () => {
        scrollerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="scroller-container">
            <Button icon="pi pi-chevron-left" className="scroll-btn left" onClick={scrollLeft} />
            <div className="scroller p-0 md:p-3" ref={scrollerRef}>
                {content}
            </div>

            <Button icon="pi pi-chevron-right" className="scroll-btn right" onClick={scrollRight} />
        </div>
    );
};
