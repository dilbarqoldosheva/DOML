import Button from "./ui/button";
import Line from '/src/assets/home/Line 2.png'
export default function Features2() {
  return (
   <div>
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text text-[40px] font-[Nunito Sans] font-normal leading-[54.6px]">
              AI Marketing
            </span>
            <br />
            <span className="text-gray-900 dark:text-white text-[40px] font-[Al Nile] font-normal leading-[54.6px]">
              Optimized Reach
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-[20px] font-[Montserrat] font-normal leading-[39.38px] w-full lg:w-[542px]">
            DOML is a digital media agency powered by AI technology providing real-time,
            <a href="#" className="text-blue-500 hover:text-blue-600">data-driven insights</a>
            on your business and audience. The mission of DOML is to create the best experiences for companies
            through intelligent insights, powerful analytics, and
            <a href="#" className="text-blue-500 hover:text-blue-600">strategic execution</a>.
          </p>
          <div className="py-3">
            <img src={Line} alt="Line Graphic" className="w-full" />
          </div>
          <Button />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-square">
            <img
              src="https://s3-alpha-sig.figma.com/img/d297/115e/904f4a6cde4f981d27301d0563b8df15?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLEsJftuLRas6p88ZwnUrAdpSMQJvKCHJN08~VMt8P7RLicsJHIBYd0ZD-hYZ0UO-c86z3B73F~uNA7G7l8GIolIgYJFUd7MiPvLyCeKdSm5Rk0eeZl5ddE1oYOsA6zSTl751GjQh50KhHSc3~mETIyPMuqCBh99hJDwula9peQP5Z~XnzPKC4znTkT~YY30XteNjQ4jG1hllbTvtr81agVNljMfRtciqU2gCdoihm~mLBP9u3GpqGZI2NFJ0xGQxDEDxw~qXCcYZ3Ys3LG7n-T2OlUvPtmnSDOnC87cLnooJUXv8ezeWNOlhUwGL7zfp5aiAvSMwhy84J1k1CcJjA__"
              alt="Curved 3D shape"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text text-[40px] font-[Nunito Sans] font-normal leading-[54.6px]">
              AI Marketing
            </span>
            <br />
            <span className="text-gray-900 dark:text-white text-[40px] font-[Al Nile] font-normal leading-[54.6px]">
              Optimized Reach
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-[20px] font-[Montserrat] font-normal leading-[39.38px] w-full lg:w-[542px]">
            It's all about getting your message in front of the right audience and creating those valuable
            <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">relationships</a>.
            Learn more about how DOML can help you do just that - all with a simple, easy-to-use platform.
          </p>
          <div className="py-3">
            <img src={Line} alt="Line Graphic" className="w-full" />
          </div>
          <Button />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative w-full aspect-square">
            <img
              src="https://s3-alpha-sig.figma.com/img/35d4/5a3b/15465c65408c3a93ce2db5fe20bce5b0?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qmOZgoL3TOrsrn0pMj5-mzGgaWyuJqysqGHm-nL74jz2tYcA9XKQ0ur9JzFvJwdhLqid9vDgIEok-rWEqR6N4FNEqNb5eJ0pUQ6GaYg8AMi7AiJ2IxggQ0mzgszAymvOdKe3~BdWb9NN3Nt~RSPQucuMEbW2pygJqsOIrMH7weJYCuMkSGi87hzOUkwYJ2ggvGF9ug5A4sKKnLi~Njzdf-aMPfO7bK~I4d6RiqDipMuYdQjd8kkZ4ECESNQPrmWHwUCXyoyJ3g81ufpG1rRBem7PMLck25CpLQw7-saCIb4D7QOxBQgyL51txWeGguT4srluS5uCSYeSUkWkmfp84g__"
              alt="Curved 3D shape"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}
