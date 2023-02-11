"use client";
import Navbar from "@/components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { UilCompressArrows, UilBedDouble, UilBath } from "@iconscout/react-unicons";

const propertyImages = [
  "/images/property/single/1.jpg",
  "/images/property/single/2.jpg",
  "/images/property/single/3.jpg",
  "/images/property/single/4.jpg",
  "/images/property/single/5.jpg",
]

export default function PropertyDetails() {
  return (
    <div className="dark:bg-slate-900">
      <Navbar />

      { /* Property Images */}
      <section className="relative md:pb-24 pb-16 mt-20">
        <Carousel showThumbs={false}>
          {
            propertyImages.map((image, index) => (
              <div key={`carousel-${index}`}>
                <img src={image} style={{ maxHeight: '800px' }} />
              </div>
            ))
          }
        </Carousel>
      </section>
      { /* End Property Images */}

      { /* Property Details */}
      <div className="container md:mt-24 mt-16">
        <div className="md:flex">
          <div className="lg:w-2/3 md:w-1/2 md:p-4 px-3">
            <h4 className="text-2xl font-medium">10765 Hillshire Ave, Baton Rouge, LA 70810, USA</h4>

            <ul className="py-6 flex items-center list-none">
              <li className="flex items-center lg:mr-6 mr-4">
                <UilCompressArrows className="lg:text-3xl text-2xl ltr:mr-2 rtl:ml-2 text-orange-600" />
                <span className="lg:text-xl">8000sqf</span>
              </li>

              <li className="flex items-center lg:mr-6 mr-4">
                <UilBedDouble className="lg:text-3xl text-2xl ltr:mr-2 rtl:ml-2 text-orange-600" />
                <span className="lg:text-xl">4 Beds</span>
              </li>

              <li className="flex items-center">
                <UilBath className="lg:text-3xl text-2xl ltr:mr-2 rtl:ml-2 text-orange-600" />
                <span className="lg:text-xl">4 Baths</span>
              </li>
            </ul>

            <p className="text-slate-400">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <p className="text-slate-400 mt-4">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
            <p className="text-slate-400 mt-4">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>

            <div className="w-full leading-[0] border-0 mt-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                style={{border: 0}}
                className="w-full h-[500px]"
                allowFullScreen={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}