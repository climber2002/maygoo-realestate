import FeaturedProperties from "../pageComponents/Homepage/FeaturedProperties";
import HowItWorks from "../pageComponents/Homepage/HowItWorks";
import Navbar from "../components/Navbar";
import { UilEstate, UilSearch, UilUsdCircle } from "@iconscout/react-unicons";
import AwardsGained from "@/pageComponents/Homepage/AwardsGained";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="relative table w-full py-36 lg:py-44 overflow-hidden zoom-image">
        <div
          className="absolute inset-0 image-wrap z-1 bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/styles/images/bg/04.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/70 z-2" />
        { /* Hero Start */}
        <div className="container z-3">
          <div className="grid grid-cols-1 mt-10">
            <div className="text-center">
              <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6">Easy way to find your <br /> dream property</h1>
              <p className="text-white/70 text-xl max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
            </div>

            <ul className="inline-block mx-auto sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-t-xl border-b dark:border-gray-800 mt-10" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
              <li role="presentation" className="inline-block">
                <button className="sm:px-8 px-6 py-2 text-base font-medium rounded-xl w-full hover:text-orange-600 transition-all duration-500 ease-in-out" id="buy-home-tab" data-tabs-target="#buy-home" type="button" role="tab" aria-controls="buy-home" aria-selected="true">Buy</button>
              </li>
              <li role="presentation" className="inline-block">
                <button className="sm:px-8 px-6 py-2 text-base font-medium rounded-xl w-full transition-all duration-500 ease-in-out" id="sell-home-tab" data-tabs-target="#sell-home" type="button" role="tab" aria-controls="sell-home" aria-selected="false">Sell</button>
              </li>
              <li role="presentation" className="inline-block">
                <button className="sm:px-8 px-6 py-2 text-base font-medium rounded-xl w-full transition-all duration-500 ease-in-out" id="rent-home-tab" data-tabs-target="#rent-home" type="button" role="tab" aria-controls="rent-home" aria-selected="false">Rent</button>
              </li>
            </ul>

            <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 rounded-tl-none rounded-tr-none md:rounded-tr-xl rounded-xl shadow-md dark:shadow-gray-700">
              <div className="" id="buy-home" role="tabpanel" aria-labelledby="buy-home-tab">
                <form action="#">
                  <div className="registration-form text-dark text-start">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                      <div>
                        <label className="form-label font-medium">Search : <span className="text-red-600">*</span></label>
                        <div className="filter-search-form relative filter-border mt-2">
                          <UilSearch className="uil uil-search icons text-orange-600" />
                          <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your keaywords" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="buy-properties" className="form-label font-medium">Select Categories:</label>
                        <div className="filter-search-form relative filter-border mt-2 bg-gray-50">
                          <UilEstate className="uil uil-estate icons text-orange-600" />
                          <select className="form-select z-2 filter-input-box bg-gray-50" data-trigger name="choices-catagory" id="choices-catagory-buy" aria-label="Default select example">
                            <option>Houses</option>
                            <option>Apartment</option>
                            <option>Offices</option>
                            <option>Townhome</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="buy-min-price" className="form-label font-medium">Min Price :</label>
                        <div className="filter-search-form relative filter-border mt-2 bg-gray-50">
                          <UilUsdCircle className="uil uil-usd-circle icons text-orange-600" />
                          <select className="form-select z-2 filter-input-box bg-gray-50" data-trigger name="choices-min-price" id="choices-min-price-buy" aria-label="Default select example">
                            <option>Min Price</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                            <option>3000</option>
                            <option>4000</option>
                            <option>5000</option>
                            <option>6000</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="buy-max-price" className="form-label font-medium">Max Price :</label>
                        <div className="filter-search-form relative mt-2 bg-gray-50">
                          <UilUsdCircle className="uil uil-usd-circle icons text-orange-600" />
                          <select className="form-select z-2 filter-input-box bg-gray-50" data-trigger name="choices-max-price" id="choices-max-price-buy" aria-label="Default select example">
                            <option>Max Price</option>
                            <option>500</option>
                            <option>1000</option>
                            <option>2000</option>
                            <option>3000</option>
                            <option>4000</option>
                            <option>5000</option>
                            <option>6000</option>
                          </select>
                        </div>
                      </div>

                      <div className="lg:mt-6">
                        <input type="submit" id="search-buy" name="search" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white searchbtn submit-btn w-full !h-12 rounded" value="Search" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        { /* End of Hero Section */}
      </section>

      <HowItWorks />

      <FeaturedProperties />

      <AwardsGained />

      <section className="relative lg:py-24 py-16">
        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

            <p className="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>

            <div className="mt-6">
              <a href="contact.html" className="btn bg-orange-600 hover:bg-orange-700 text-white rounded-md"><i className="uil uil-phone align-middle ltr:mr-2 rtl:ml-2"></i> Contact us</a>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}