import Image from "next/image";
import heroImg from "../../public/images/heroImg.png";
import Link from "next/link";
import News from "./components/News";
import CancerFighter from "./components/cancerFighter";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row h-[90vh] w-full justify-center items-center px-4 md:px-10">
        <div className="w-full md:w-[45%] h-full flex flex-col justify-center items-center md:p-8">
          <h1 className="text-2xl md:text-7xl font-semibold text-center mb-7">
            Breast Cancer Detection and Prediction
          </h1>
          <div className="flex flex-row md:flex-row items-center gap-2 md:gap-4">
            <Link
              href="/prediction"
              className="bg-pink-500 py-2 px-4 rounded-lg text-white text-center hover:bg-pink-400 transition duration-600"
            >
              Prediction
            </Link>
            <Link
              href="/detection"
              className="bg-pink-500 py-2 px-4 rounded-lg text-white text-center  hover:bg-pink-400 transition duration-600"
            >
              Detection
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[45%] h-full flex justify-center items-center md:mt-0 mt-[-150px] p-4">
          <Image
            src={heroImg}
            alt="Hero Image"
            layout="intrinsic"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* second box */}
      {/* d2f2f5dbad844d34a3231e2f375a563f */}
      <div className="h-[100vh]">
        <h1 className="text-center text-5xl font-bold my-4">
          Breast Cancer News
        </h1>
        <News />
      </div>

      <div className="h-[100vh]">
        <h1 className="text-center text-5xl font-bold my-4">Cancer Fighter</h1>

        <CancerFighter />
      </div>
    </>
  );
}
