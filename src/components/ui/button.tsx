import img from '/src/assets/bnt/akar-icons_arrow-right.png'

function Button() {
  return (
    <button className="w-[219px] h-[45.82px] bg-transparent text-white font-[Montserrat] text-[19.41px] leading-[23.67px] flex items-center justify-center space-x-2 rounded-full border-2 border-transparent bg-clip-border border-t-[#9b4dca] border-r-[#00f0ff] border-b-[#5200FF] border-l-[#FF2DF7]">
     <span className="text-black dark:text-white text-[19.41px] leading-[23.67px] font-[Montserrat]">
    Get Started
  </span>
    <img src={img} alt="" className="w-4 h-4" />
  </button>
  )
}

export default Button