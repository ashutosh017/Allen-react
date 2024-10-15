import { useEffect, useState } from "react";

export default function Dreams() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310905%2Fc_1_aorh14.webp&w=640&q=75",
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310904%2Fc_2_ix0igr.webp&w=828&q=75",
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310904%2Fc_3_qurxw1.webp&w=640&q=75",
 
    "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310905%2Fc_1_aorh14.webp&w=828&q=75",
    // "https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1707310905%2Fc_4_olon7a.webp&w=640&q=75",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Automatically go to the next slide
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <div className=" px-32 py-4 text-white flex    ">
      <div className=" w-1/2 pt-12">
        <div className="text-white text-3xl font-extrabold  mb-16">
          <div>Your Dream.</div>
          <div>Our Experties.</div>
        </div>
        <div className="font-medium text-xl my-4 ">
          What brings you to us today?
        </div>
        <div className="">
          <button className=" border-2 border-blue-400 px-4 py-2 mr-2 rounded-full font-medium">
            NEET
          </button>
          <button className=" border-2 border-blue-400 px-4 py-2 mr-2 rounded-full font-medium">
            JEE
          </button>
          <button className=" border-2 border-blue-400 px-4 py-2 mr-2 rounded-full font-medium">
            Grade 6 - 10
          </button>
        </div>
      </div>
      <div className=" w-1/2 flex flexcol justify-center  ">
        <div className="relative w-full max-w-4xl mx-auto ">
          <div className="overflow-hidden  ">
            <div
              className="flex transition-transform duration-500 ease-in-out "
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-3/4 flex-shrink-0 flex justify-center"
                  style={{ width: "100%" }}
                >
                  <img
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className="w-3/4 h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-4 space-x-4 ">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={` rounded-full cursor-pointer bg-gray-300  ${
                  index === currentIndex ?'h-3 w-3':'h-2 w-2'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
