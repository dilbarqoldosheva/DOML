'use client'

import * as React from "react"

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  position: string
  image: string
  quote: string
  platform: "discord" | "twitter" | "linkedin"
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amaka Micheal",
    position: "Media Executive, Buying & Control",
    image: "https://s3-alpha-sig.figma.com/img/24e7/eefa/7ff1bdbd71b7ea85029c82a179b3eb28?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NlEQgZizfOZjiIa6H7gvmIo0X0VUVvVekV1BAG1lZZJ-L96CA3cLbw-eBvCehHx~ay0-fq7puCCZuhoWc5NrnXYdCJ67wCACH4HtRo-g5eMlAjCjNnk0EGJlKb8pWfAHA0bpQWdrFH7WmT-ZAcA0rp1Mcl2MLhK~4zdW~mC8HZSxOpsLermicPgxmyRVpDr0-fElCbXKUSYNLxZTryxXh9PmTS-i6kuXeC8hEhzQqGyJzM9oNn-S0nL50AhKqb-b-XRngvZfPlsKB7fqDvP8vdzm3D6Bv4Wasq8pwSwmWsv2RoA2hrzQrUk9-EXMUjTiZqOAs~uF1g7UUXV0I5JRNA__",
    quote: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
    platform: "discord"
  },
  {
    id: 1,
    name: "Amaka Micheal",
    position: "Media Executive, Buying & Control",
    image: "https://s3-alpha-sig.figma.com/img/5a7d/8784/39b2864fd68334db7bc338d05dc09e6c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KtINE5SEsXBfPzPMKOjUOv0kLY4GoqIGCMo~K6vz3xY4zcZllgxbLi3OmGA-gkNkeQl87lTowq1lc1-bj2LTD9J-GjHNzZiOeKXn3o2uKXxOcWR~N1C~oc705U7oj6p0tqBqy7nozhK61uGv26nzCnlEkCIbdeWbSnAE6QUUNM8uKbhaxi~2d1n-IPc-8XsOFMh0QPqZ-udX6YTJILU6S1lRK2U9tp7ChRoeTgTtlxdcBU9dhiyTe~J5ckTNR3ic9EfuVcgcscYEDtOcfJKs6U4foOmah6O6GJYqUiMgXyfHdxOruvtDcyKW-GvqYoWhK1KAkZ7lCiwJ6XxMFAk0iQ__",
    quote: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
    platform: "discord"
  },
  {
    id: 1,
    name: "Amaka Micheal",
    position: "Media Executive, Buying & Control",
    image: "https://s3-alpha-sig.figma.com/img/b188/62b4/9a51b1fe199adf938b35886d1198895c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRCXIVlRujkE7qfCCBjgMYbjDcXNlvJmOZamgCduNfsWaJmppm9mCJAC~BDACZ~qOw4gI9RtpNNgaTiI0uJQB3oyTc0JiQqyJdtiPdX~3RfXffZtWiNvK60MLdGbYzB2G~CJ6HYuktJJ1O01~--6RWFJdZ1iyI84RTe-CIb-2ykVESRuoU3bB5DxN5MjSztnqK4mfFkjEM0~lhIbBlm6R9MXearBknEa0aXL2nj6MZgRqQWvr8LV379mLMbwMu5pokWmIK8yI-0-IUXju00qBMfSumHgjHYknQ9LGNSFiqo2SuxJcWtXW3IXLHiTiRwr0ZlOnxO-GrSkINK6JGhjMw__",
    quote: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
    platform: "discord"
  },
  {
    id: 1,
    name: "Amaka Micheal",
    position: "Media Executive, Buying & Control",
    image: "https://s3-alpha-sig.figma.com/img/75f5/a4a6/ce41beb755456d263f3eea051ae892f5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T8iFX148uiAMYuzbAmH-6pgI9eev0n6J4B8rzLYTc001eTKKdfbsjAJ9DUDtnmAM2308Lpx0JHz5fy~KrjAlk5RftQx5ex~xhfLI8xToiOURGF6v~lElVDf4rX~cSwjyUXH~l7L~4aEvszH7kZEWoP8hMllz~dPqkmPnB5RD~lA7bjdA1Lqs7~J36YDzt9Prn6speRqGA0VCMp~lHyesXxk54sXbTw1djK2mU2-JwtaQeTbsaFAtGaG5Jm9RPwlzLAI8zYH0q2PrFYF62ngKFz0-PfqYNzFnjK-gkXkLOJvJ~g4XphXdzfi4LjIurijCtECmhNS8Oz32~Mq3XRMN6A__",
    quote: "It's all about getting your message in front of the right audience and creating those valuable relationships. Learn More about how DOML can help you do just that - all with a simple, easy-to-use platform.",
    platform: "discord"
  },
  
  // Add more testimonials as needed
]

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-[1rem] overflow-hidden bg-gradient-to-r from-[#9333EA] via-[#3B82F6] to-[#06B6D4] pb-16 pt-8 px-4 sm:px-10 md:px-12">
        <div className="p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 shrink-0">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-white">
            <p className="text-base sm:text-lg md:text-xl mb-6">
              {testimonials[currentSlide].quote}
            </p>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              {testimonials[currentSlide].name}
            </h3>
            <p className="text-white/90 text-sm sm:text-base mb-4">
              {testimonials[currentSlide].position}
            </p>
            {testimonials[currentSlide].platform === "discord" && (
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span className="uppercase tracking-wider text-sm font-medium">
                  Discord
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center h-16 bg-gradient-to-r from-[#9333EA] via-[#3B82F6] to-[#06B6D4]">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}

            <button
              onClick={nextSlide}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
