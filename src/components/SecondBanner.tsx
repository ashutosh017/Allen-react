import  { useState, useEffect } from "react";

export default function SecondBanner() {
  const slides = [
'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944261/w6oi3seuvlmsggphhpxi.webp?_upload_ref=ic_img_tool'  , 'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944598/wr9qyk4gyqgnntgonfvy.webp?_upload_ref=ic_img_tool',
    'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1024,f_auto,q_auto/v1728295471/gbvvlbtgpsecq57ivwff.png?_upload_ref=ic_img_tool',
    'https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1280,f_auto,q_auto/v1727944619/v6cgvy44tde2yjq4yguo.webp?_upload_ref=ic_img_tool',
    'https://res.cloudinary.com/dpzpn3dkw/image/upload/v1728302450/Homepage_Banner_1_sn5css.webp'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [currentIndex, slides.length]);

  return (
    <div className="relative  overflow-hidden my-16   mx-32 ">
      <div
        className="flex transition-transform duration-1000 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 rounded-full"
            style={{ backgroundImage: `url(${slide})` }}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className=" object-cover rounded-3xl "
            />
          </div>
        ))}
      </div>

      <div className="mt-4 bottom-8  flex justify-center items-center space-x-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={` rounded-full bg-gray-300 transition-transform duration-1000 ease-in-out   ${
              index === currentIndex ?'w-3 h-3':'w-2 h-2'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
