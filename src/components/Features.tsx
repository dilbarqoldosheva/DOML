import Button from "./ui/button";
import Line from '/src/assets/home/Line 2.png'
export default function Features() {
    return (
      <div className="space-y-32 py-20">
  {/* First Feature Section */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text text-[32px] sm:text-[40px] font-[Nunito Sans] font-normal leading-[54.6px]">
            AI Marketing
          </span>
          <br />
          <span className="text-gray-900 dark:text-white text-[32px] sm:text-[40px] font-[Al Nile] font-normal leading-[54.6px]">
            Optimized Reach
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-[18px] sm:text-[20px] font-[Montserrat] font-normal leading-[39.38px]">
          DOML is a digital media agency powered by AI technology providing real-time, 
          <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">
        data-driven insights
</a><br />
          on your business and audience. The mission of DOML is to create the best experiences for companies
          through intelligent insights, powerful analytics and
          <br /><a href="#" className="text-blue-500 hover:text-blue-600 font-bold">strategic execution</a>.
        </p>
        <div className="py-3">
          <img src={Line} alt="Line Graphic" className="w-full" />
        </div>
        <Button />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="relative w-full aspect-square">
          <img
            src="https://s3-alpha-sig.figma.com/img/e509/f62d/d8da0e72ccc47f8e3c0cd9c94f9d8c4e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FemiyYTGfn~S~lhKmk5LivDeg-cEvlq4GRiRvYEvDOA2l9Naw~QCGMs5ypT8HmhrydDNgh5oKhhXsz7I3tsF3JH6bHhpR7veT~12MjG3spqKMsplswMRc9rcLGEjLGcW0gqwt1QVNI7MEPErrBlTXcJMYpz6RsBkZnRe2WXCRhODKmdbvxrv69gvmAfKBMwkksHW1VrlctSZ9t-gNgJq7fZaDkrbFtZ0lxPS8LePjoL8MCRjYQJcGISIaKOEXHwXykSaxvgZrX08EqhtDAk98BFpt6o2vIJ8zJqIXlggzBLNnMhKsuy-9FKwHN22G4GFuBls34NJfoHu5xe4udE3jQ__"
            alt="Graphic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Second Feature Section */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text text-[32px] sm:text-[40px] font-[Nunito Sans] font-normal leading-[54.6px]">
            AI Marketing
          </span>
          <br />
          <span className="text-gray-900 dark:text-white text-[32px] sm:text-[40px] font-[Al Nile] font-normal leading-[54.6px]">
            Optimized Reach
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-[18px] sm:text-[20px] font-[Montserrat] font-normal leading-[39.38px]">
          It's all about getting your message in front of the right audience and creating those valuable     
             <a href="#" className="text-blue-500 hover:text-blue-600 font-bold">relationships</a><br />
          Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.
        </p>
        <div className="py-3">
          <img src={Line} alt="Line Graphic" className="w-full" />
        </div>
        <Button />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="relative w-full aspect-square">
          <img
            src="https://s3-alpha-sig.figma.com/img/8387/f65a/ec4444a6b642118b6518730921604362?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iMvB433xpZH2PtN1pTraUaxTt5rKyoPXeDC7s40evobfNruXfv43OwvZ20DN36I5yB8UfVBev2nKWCd9Q9-4NaIvGL6haEeekfYbqOyD22Rmz352lZ-QEW3TvRHM37lH7~3KzJEgKGkmxnLufL-jIK~DG-ykRkOKTAmtxhP9RHuTclRP-S2YyhQocnPLuY5A00pV7HXqX4kVsuLJMmH87zivBPeiQlNfUv8bClV8bh4GL3EfjhbWAjhuzHN0Q0Rv1m~k4uB06gRROT6TtgflRibi1UNwQPO7RNQ0PTCbb07F8OYokODq55JbMzfeoQlKdGmxtVWZSZbe71gC5FNP0A__"
            alt="Graphic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>

    )
  }
  
  