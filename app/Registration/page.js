import React, { useState, useEffect } from 'react';

const Login = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://placehold.co/500x500/E5E7EB/4B5563?text=Slide+1",
      alt: "Illustration showing financial tracking",
      text: "Download and Share PDF & Excel Report"
    },
    {
      image: "https://placehold.co/500x500/D1D5DB/374151?text=Slide+2",
      alt: "Illustration showing data visualization",
      text: "Visualize Your Financial Data"
    },
    {
      image: "https://placehold.co/500x500/9CA3AF/1F2937?text=Slide+3",
      alt: "Illustration of a person managing money",
      text: "Manage Your Finances with Ease"
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <style>{`
        /* Custom styles for the auth buttons */
        .auth_button {
          @apply w-full py-3 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center;
        }
      `}</style>
      <div className="bg-white min-h-screen shadow-xl rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-3">
        {/* Left side: Custom Carousel for images (col-span-1) */}
        <div className="hidden md:block col-span-1 p-4 bg-indigo-100 relative">
          <div className='flex items-center justify-center min-h-full w-full'>
            <div className='w-2/3 relative'>
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ease-in-out absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="mx-auto w-auto h-auto"
                  />
                  <p className="text-xl text-gray-900 font-semibold text-center mt-4">
                    {slide.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Dot Navigation */}
          <div className="absolute bottom-6 w-full text-center flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full border-2 border-indigo-500 bg-white transition-all duration-300 ${index === currentSlide ? 'w-3 h-3 opacity-100 bg-indigo-500' : 'opacity-50'}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right side: Login form (col-span-2) */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center p-6 sm:p-12">
          <div className='flex items-center justify-center'>
            <div className='w-[385px]'>
              <div className="text-center mb-6">
                <img src="https://placehold.co/100x40/9CA3AF/1F2937?text=LOGO" alt="App logo" className="mx-auto" />
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                Log In/Create Account
              </h1>
              <div className="w-full max-w-md flex flex-col items-center border p-8 rounded-lg">
                <div className="space-y-4">
                  <p className="text-gray-600 text-base font-medium mb-4">Choose one option to continue</p>
                  
                  <button className="auth_button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48" className="inline-block"><path fill="#FFC107" d="M43.61 20.083H42V20H24v8h11.39A13.923 133.655 0 0 1 24 44c-9.39 0-17-7.61-17-17s7.61-17 17-17c4.7 0 8.84 1.95 11.83 5.73l5.66-5.66A23.996 23.996 0 0 0 24 3C10.745 3 0 13.745 0 27c0 13.255 10.745 24 24 24a23.996 23.996 0 0 0 17.514-6.494l-5.66-5.66A17.994 17.994 0 0 1 24 45c-10.493 0-19-8.507-19-19s8.507-19 19-19c6.9 0 12.8 3.73 16.095 9.42l-2.075 2.073z"/><path fill="#4CAF50" d="M11.95 36.32v-5.06h9.54v-3.79H11.95v-4.99H7v13.84z"/><path fill="#1976D2" d="M37.75 30.64l-2.073-2.075c2.4-1.92 4.09-4.83 4.09-8.17 0-3.34-1.69-6.25-4.09-8.17l2.075-2.073a14.814 14.814 0 0 1 5.378 10.245c0 3.86-1.57 7.42-4.09 10.17z"/><path fill="#F44336" d="M24 17c3.19 0 6.09 1.25 8.27 3.28L37.9 15c-3.6-3.32-8.39-5-13.9-5-6.62 0-12.28 3.54-15.42 8.76l4.95 3.32C15.21 16.92 19.33 17 24 17z"/></svg>
                    <span className="ml-3">Sign Up with Google</span>
                  </button>
                  
                  <button className="auth_button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700 inline-block"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                    <span className="ml-3">Sign Up with Email</span>
                  </button>

                  <div className="text-sm text-gray-500">
                    <p className="mb-2 text-sm font-regular">
                      By continuing, you are indicating that you accept our
                      <a href="#" className="text-indigo-500 hover:underline"> Terms of Service</a> and
                      <a href="#" className="text-indigo-500 hover:underline"> Privacy Policy</a>.
                    </p>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500 font-semibold">OR</span>
                  </div>
                  <button className="auth_button">
                    <span className="ml-3">Other Ways To Login</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
