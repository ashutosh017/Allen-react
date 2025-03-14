import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex w-full text-white h-16 items-center justify-center py-10 px-2">
        <div className=" pr-12 font-extrabold cursor-pointer">
          <Link to="/">
            <img src="../../public/logo_dark.svg" className="h-7" alt="" />
          </Link>
        </div>
        <div className="flex flex-1  cursor-pointer space-x-7 text-base font-medium ">
          <Link
            className="hover:underline  hover:underline-offset-8 hover:decoration-4 hover:decoration-blue-400 "
            to="/Exams"
          >
            <p>Exams</p>
          </Link>
          <Link
            className="hover:underline  hover:underline-offset-8 hover:decoration-4 hover:decoration-blue-400 "
            to="/Programs"
          >
            Programs
          </Link>
          <Link
            className="hover:underline  hover:underline-offset-8 hover:decoration-4 hover:decoration-blue-400 "
            to="/Scholarships"
          >
            Scholarships
          </Link>
          <Link
            className="relative hover:underline  hover:underline-offset-8 hover:decoration-4 hover:decoration-blue-400 pr-7 "
            to="/Test-series"
          >
            Test Series
            <span className=" absolute top-0 right-0 -translate-y-2 translate-x-2 bg-yellow-500 text-black text-xs px-1 py-0.5 rounded-r-full rounded-tl-full">
              New
            </span>
          </Link>
          <Link
            className="hover:underline  hover:underline-offset-8 hover:decoration-4 hover:decoration-blue-400 "
            to="/Study-materials"
          >
            Study Materials
          </Link>
        </div>
        <div className="w-1/5  flex space-x-4 items-center justify-end">
          <div className="bg-white text-allen_theme text-sm font-medium px-4 py-2 rounded-full flex space-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vuesax/bold/call-calling">
                <g id="call-calling">
                  <path
                    id="Vector"
                    d="M17.62 10.7501C17.19 10.7501 16.85 10.4001 16.85 9.9801C16.85 9.6101 16.48 8.8401 15.86 8.1701C15.25 7.5201 14.58 7.1401 14.02 7.1401C13.59 7.1401 13.25 6.7901 13.25 6.3701C13.25 5.9501 13.6 5.6001 14.02 5.6001C15.02 5.6001 16.07 6.1401 16.99 7.1101C17.85 8.0201 18.4 9.1501 18.4 9.9701C18.4 10.4001 18.05 10.7501 17.62 10.7501Z"
                    fill="#233A6C"
                  ></path>
                  <path
                    id="Vector_2"
                    d="M21.23 10.75C20.8 10.75 20.46 10.4 20.46 9.98C20.46 6.43 17.57 3.55 14.03 3.55C13.6 3.55 13.26 3.2 13.26 2.78C13.26 2.36 13.6 2 14.02 2C18.42 2 22 5.58 22 9.98C22 10.4 21.65 10.75 21.23 10.75Z"
                    fill="#233A6C"
                  ></path>
                  <path
                    id="Vector_3"
                    d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z"
                    fill="#233A6C"
                  ></path>
                  <path
                    id="Vector_4"
                    d="M21.97 18.33C21.97 18.61 21.92 18.9 21.82 19.18C21.79 19.26 21.76 19.34 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C19.39 21.62 19.38 21.63 19.37 21.63C18.78 21.87 18.14 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C10.36 19 9.96998 18.71 9.59998 18.4L12.87 15.13C13.15 15.34 13.4 15.5 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                    fill="#233A6C"
                  ></path>
                </g>
              </g>
            </svg>
            <p>Talk to us</p>
          </div>
          <div className="text-sm border px-4 py-2 rounded-full hover:bg-allen_theme_hover cursor-pointer transition duration-500">
            Login
          </div>
        </div>
      </div>
    </>
  );
}
