import { UilCompressArrows, UilBath, UilBedDouble } from "@iconscout/react-unicons";

export default function FeaturedProperty() {
  return (
    <div className="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:hover:shadow-md dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500 m-3">
      <div className="relative">
        <img src="/images/property/1.jpg" alt="" />
      </div>

      <div className="p-6">
        <div className="pb-6">
          <a href="property-detail.html" className="text-lg hover:text-orange-600 font-medium ease-in-out duration-500">
            10765 Hillshire Ave, Baton Rouge, LA 70810, USA
          </a>
        </div>

        <ul className="py-6 border-y dark:border-gray-800 flex items-center list-none">
          <li className="flex items-center mr-4">
            <UilCompressArrows className="text-2xl mr-2 text-orange-600" />
            <span>8000sqf</span>
          </li>

          <li className="flex items-center mr-4">
            <UilBedDouble className="text-2xl mr-2 text-orange-600" />
            <span>4 Beds</span>
          </li>

          <li className="flex items-center">
            <UilBath className="text-2xl mr-2 text-orange-600" />
            <span>4 Baths</span>
          </li>
        </ul>

        <ul className="pt-6 flex justify-between items-center list-none">
          <li>
            <span className="text-slate-400">Price</span>
            <p className="text-lg font-medium">$5000</p>
          </li>

          <li>
            <span className="text-slate-400">Rating</span>
            <ul className="text-lg font-medium text-amber-400 list-none">
              <li className="inline"><i className="mdi mdi-star"></i></li>
              <li className="inline"><i className="mdi mdi-star"></i></li>
              <li className="inline"><i className="mdi mdi-star"></i></li>
              <li className="inline"><i className="mdi mdi-star"></i></li>
              <li className="inline"><i className="mdi mdi-star"></i></li>
              <li className="inline text-black dark:text-white">5.0(30)</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}