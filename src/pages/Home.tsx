import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CTABanner from '../components/CTABanner'

import Features2 from '../components/Features2'
import Button from '../components/ui/button'

//img
import airtel from '../assets/brands/Group 22 (1).png';
import uba from '../assets/brands/Group 21 (1).png';
import paga from '../assets/brands/Group 19 (1).png';
import mnt from '../assets/brands/Vector (13).png';
import dangore from '../assets/brands/image 6 (Traced) (1).png';
import firstbank from '../assets/brands/Group 23.png';
import cloud from '../assets/navbar/Google cloud (1).png';
import ebay from '../assets/brands/Ebay.png';
import tux from '../assets/brands/Tux.png';
import spotify from '../assets/brands/Spotify.png';
import airbnb from '../assets/brands/Airbnb.png';
import facebook from '../assets/brands/Facebook.png';
import cola from '../assets/brands/Coca Cola.png';
import creativeCloud from '../assets/brands/Creative Cloud.png';
import netflix from '../assets/brands/Netflix.png';
import discord from '../assets/brands/Discord.png';
import figma from '../assets/brands/Figma.png';
import paypal from '../assets/brands/Paypal.png';
import adobe from '../assets/brands/Adobe.png';
import zoom from '../assets/brands/Zoom.png';

export default function Home() {
  const brands = [
    { name: 'airtel', src: airtel },
    { name: 'UBA', src: uba },
    { name: 'paga', src: paga },
    { name: 'mnt', src: mnt },
    { name: 'dangore', src: dangore },
    { name: 'firstbank', src: firstbank },
    { name: 'cloud', src: cloud },
    { name: 'ebay', src: ebay },
    { name: 'tux', src: tux },
    { name: 'Spotify', src: spotify },
    { name: 'Airbnb', src: airbnb },
    { name: 'facebook', src: facebook },
    { name: 'cola', src: cola },
    {name:'zoom', src: zoom },
    { name: 'Cloud', src: creativeCloud },
    { name: 'Netflix', src: netflix },
    { name: 'Discord', src: discord },
    { name: 'figma', src: figma },
    { name: 'paypal', src: paypal },
    { name: 'adobe', src: adobe },
  ];
  const footer = [
    { name: 'cloud', src: cloud },
    { name: 'ebay', src: ebay },
    { name: 'tux', src: tux },
    { name: 'Spotify', src: spotify },
    { name: 'Airbnb', src: airbnb },
    { name: 'facebook', src: facebook },
    { name: 'cola', src: cola },
    { name: 'zoom', src: zoom },
    { name: 'Cloud', src: creativeCloud },
    { name: 'Netflix', src: netflix },
    { name: 'Discord', src: discord },
    { name: 'figma', src: figma },
    { name: 'paypal', src: paypal },
    { name: 'adobe', src: adobe },
  ];


  return (
    <div>
    <div className="relative">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text font-[Nunito Sans] font-normal text-[72.62px] leading-[99.13px]">
                AI Marketing.
              </span>
              <br />
              <span className="text-gray-900 dark:text-white font-[Nunito Sans] font-normal text-[72.62px] leading-[99.13px]">
                Optimized Reach.
              </span>
            </h1>
  
            <div className="w-full md:w-[715px] h-[60px] flex items-center">
              <p className="text-gray-600 dark:text-gray-400 font-[Montserrat] font-normal text-[25px] leading-[30.48px]">
                Our vision is to revolutionize the way brands and <br /> advertisers target, reach.
              </p>
            </div>
  
            <div>
              <img src="/src/assets/home/Line 2.png" alt="Line Graphic" className="w-full" />
            </div>
  
            <Button /> {/* Assuming you have the Button component */}
          </div>
  
          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="relative w-full aspect-square">
              <img
                src="https://s3-alpha-sig.figma.com/img/61ee/f9e1/c482cbc7c3f35823bec718e4a8075031?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dP5f-hgKBRkaDrz0f4o5uNwrUUP~JCJPYiXpiMd97mdR0SQUL4EyOwX0yUMYyNS11opsn2IPg1Hv6Nt2gZOqIZZKk5WSmvcLZNjHzFzVm9FddU4I2R0CNaNllwMGwQQ~b2bhA4LOoCyGhJGpg6bSlSmwK1UYtFsfBm9mOtRlKOpTdAyyfyR0MJs8bbycNehVd1v33iAqUi7OVKzgPEtZj2MYeDNzrysY6sMBjs8r1th863SUCzEtYbvCTNeOdTJ3RpzOsaMi0Ue5Ctjj4BrUqXHdI4XhRJwtk7BhUVt6FyavU9qqSsGU60DP60lxCj6~9S65ZeVpwARU-iUL-QGPCw__"
                alt="Hero Image"
                className="absolute w-full lg:w-[546px] lg:h-[526px] left-1/2 transform -translate-x-1/2 lg:top-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
  
      {/* Brands Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <img key={brand.name} src={brand.src} alt={brand.name} className="max-w-full h-auto" />
          ))}
        </div>
        <div className="text-center mt-10 px-4 sm:px-6 lg:px-8">
          <p className="hidden md:block text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Trusted by the world's most ambitious teams.
          </p>
        </div>
      </div>
  
      <Features />
      <Testimonials />
      <Features2 />
      <CTABanner />
  
      {/* Footer Brands Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {footer.map((brand) => (
            <img key={brand.name} src={brand.src} alt={brand.name} className="max-w-full h-auto" />
          ))}
        </div>
        <div className="text-center mt-10 px-4 sm:px-6 lg:px-8">
          <p className="hidden md:block text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Trusted by the world's most ambitious teams.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

