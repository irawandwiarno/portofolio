import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const UISlider = ({ imageLinks }) => {
    const [sliderRef] = useKeenSlider({
        loop: false,
        mode: 'free-snap',
        slides: {
            perView: 'auto',
            spacing: 20, // spacing antar slide real
        },
    });

    return (
        <div
            ref={sliderRef}
            className="keen-slider overflow-x-auto"
        >
            {imageLinks.map((src, index) => (
                <div
                    key={index}
                    className="keen-slider__slide min-w-60 flex justify-center items-start"
                >
                    <div className="aspect-[9/20] max-h-150 rounded-xl overflow-hidden border shadow bg-white">
                        <img
                            src={src}
                            alt={`App UI ${index}`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UISlider;
