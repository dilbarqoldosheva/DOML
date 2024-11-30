import img from '../assets/Vector (14).png'

export default function CTABanner() {
  return (
    <div className="w-full max-w-7xl mx-auto py-20">
  <div className="relative rounded-[1rem] overflow-hidden bg-gradient-to-r from-[#9333EA] via-[#3B82F6] to-[#06B6D4] py-1 pb-1 pt-1 px-10">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="relative h-[350px] w-[450px]"> {/* Heightni 350px ga o'zgartirdim */}
        <img 
          src="https://s3-alpha-sig.figma.com/img/fb82/c087/490cf4f3ddddfe807a6470e75cb276cf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMOEf~Omb6zkxfYoyYYvGCFnF12hvvybeO63zrYwLuWp7kAPK470pmvxPII~tqdWqk076QiNitRJiRFwUiEQGHQAzj2DfzDgWifHOvJwLlKQtmcbQeptivsPgvBCJWKBoqdP6-F4ujeh5U4aDM5Wqb9ILbZE~cEj-p43o7AE7V5RUKcFRGtk66R765YLehZ9n6Hbm7tqQK8ugYBtsOFy0RaAfqDpjYOhJQJeK~ASRNHrMKd7fSVl3Kys5MpYqG5mv1NRWlyZS9RVMTCtJCrY7tYVxShEsaBwhSLrRORUjVY1AN4PUSXOcuS0-MAI0nfxmdseKgL16AQgfJSQPDHWUQ__"
          alt="3D Abstract Shape"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="space-y-4 relative">
        <h1 className="w-[515px] h-[136px] font-[400] text-[50px] leading-[68.25px] text-white">
          Get exponential reach <br />
          via <span className="text-white font-[700]">AI Marketing</span>
        </h1>
        <form className="flex max-w-md gap-3 mt-6 py-5">
          <input
            type="email"
            placeholder="Enter your work email"
            className="flex-grow bg-white/10 border border-white/20 text-white placeholder-white/70 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="bg-black text-white hover:bg-black/90 rounded-full px-6 py-2 font-medium flex gap-3 items-center transition-colors duration-200"
          >
            Get in touch
            <img src={img} alt="icon" />
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}
