import Link from "next/link";

function page() {
  return (
   
    <div className="flex justify-center items-center h-screen bg-gray-900 text-gray-100">
      <div className="flex flex-col lg:flex-row w-full lg:w-3/4 xl:w-2/3 bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Left Component - Image */}
        <div className="lg:w-1/3 mb-4 lg:mb-0">
          <img
            src="../../../courses/blues.jpg"
            alt="Contact Us Image"
            className="rounded-lg"
          />
        </div>
        {/* Right Component - Contact Details */}
        <div className="lg:w-2/3 lg:pl-8">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="mb-4">
            <p className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Phone: +1 234 567 890
            </p>
            <p className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
              Gmail: example@gmail.com
            </p>
            <p className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 12H4"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 12h6"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4 4-4M17 16l4-4-4-4"
                />
              </svg>
             <Link href={'www.github.com/apoorvvikram01'} target="_blank">Github : apoorvvikram01</Link>
            </p>
            <p className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 9l6 6 6-6"
                />
              </svg>
              Address: 123 Example St, City, Country
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default page