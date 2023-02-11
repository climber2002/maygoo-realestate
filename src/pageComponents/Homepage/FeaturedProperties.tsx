'use client';
import TinySlider from "tiny-slider-react";
import FeaturedProperty from "@/components/FeaturedProperty/FeaturedProperty";

const tinySliderSettings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  controls: false // remove built-in nav buttons
}

export default function FeaturedProperties() {
  return (
    <div className="container lg:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Featured Properties</h3>

        <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
      </div>

      <div className="grid grid-cols-1 mt-8 relative">
        <div className="tiny-home-slide-three">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-2">
            <FeaturedProperty />
            <FeaturedProperty />
            <FeaturedProperty />
        </div>
        </div>
      </div>
    </div>
  );
}