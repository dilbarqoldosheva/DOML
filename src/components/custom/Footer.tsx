import { Link } from 'react-router-dom'
import img from '../../assets/brands/Line 3.png'

export default function Footer() {
  return (
    <footer className="bg-transparent mx-auto py-10 container">
      <div className="flex justify-center items-center py-5">
  <img src={img} alt="" className="max-w-full h-auto pt-9" />
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p className='className="font-montserrat font-normal text-[19.41px] leading-[23.67px] text-center"'>Copyright © 2022 DOML. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 font-montserrat font-normal text-[19.41px] leading-[23.67px] text-center">
            <Link to="/terms" className="hover:text-gray-700 dark:hover:text-gray-300">
              Terms of Use
            </Link>
            <Link to="/privacy" className="hover:text-gray-700 dark:hover:text-gray-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

