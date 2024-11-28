export default function CTABanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500 p-8 h-[300px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src="https://s3-alpha-sig.figma.com/img/fb82/c087/490cf4f3ddddfe807a6470e75cb276cf?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZMOEf~Omb6zkxfYoyYYvGCFnF12hvvybeO63zrYwLuWp7kAPK470pmvxPII~tqdWqk076QiNitRJiRFwUiEQGHQAzj2DfzDgWifHOvJwLlKQtmcbQeptivsPgvBCJWKBoqdP6-F4ujeh5U4aDM5Wqb9ILbZE~cEj-p43o7AE7V5RUKcFRGtk66R765YLehZ9n6Hbm7tqQK8ugYBtsOFy0RaAfqDpjYOhJQJeK~ASRNHrMKd7fSVl3Kys5MpYqG5mv1NRWlyZS9RVMTCtJCrY7tYVxShEsaBwhSLrRORUjVY1AN4PUSXOcuS0-MAI0nfxmdseKgL16AQgfJSQPDHWUQ__"
                 alt="Abstract 3D shape"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                 Get exponential reach<br />
                via AI Marketing
              </h2>
            </div>
          </div>
          <div className="flex w-full md:w-auto gap-4">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 md:w-64 px-4 py-2 rounded-full bg-white/10 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:border-white/40"
            />
            <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition-colors flex items-center gap-2">
              Get in touch
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
