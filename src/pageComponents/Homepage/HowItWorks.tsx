import { UilEstate, UilBag, UilKeySkeleton } from "@iconscout/react-unicons";
import { Hexagon } from "react-feather";

export default function HowItWorks() {
  return (

    <div className="container lg:mt-24 mt-16">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">How It Works</h3>

        <p className="text-slate-400 max-w-xl mx-auto">
          A great plateform to buy, sell and rent your properties without any agent or commisions.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
        { /* Content */}
        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <Hexagon className="h-32 w-32 fill-orange-600/5 mx-auto" />
            <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-orange-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
              <UilEstate />
            </div>
          </div>

          <div className="mt-6">
            <h5 className="text-xl font-medium">Evaluate Property</h5>
            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          </div>
        </div>
        { /* End Content */}

        { /* Content */}
        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <Hexagon className="h-32 w-32 fill-orange-600/5 mx-auto" />
            <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-orange-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
              <UilBag />
            </div>
          </div>

          <div className="mt-6">
            <h5 className="text-xl font-medium">Meeting with Agent</h5>
            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          </div>
        </div>
        { /* End Content */}

        { /* Content */}
        <div className="group relative lg:px-10 transition-all duration-500 ease-in-out rounded-xl bg-white dark:bg-slate-900 overflow-hidden text-center">
          <div className="relative overflow-hidden text-transparent -m-3">
            <Hexagon className="h-32 w-32 fill-orange-600/5 mx-auto" />
            <div className="absolute top-2/4 -translate-y-2/4 left-0 right-0 mx-auto text-orange-600 rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
              <UilKeySkeleton />
            </div>
          </div>

          <div className="mt-6">
            <h5 className="text-xl font-medium">Close the Deal</h5>
            <p className="text-slate-400 mt-3">If the distribution of letters and 'words' is random, the reader will not be distracted from making.</p>
          </div>
        </div>
        { /* End Content */}
      </div>
    </div>
  );
}