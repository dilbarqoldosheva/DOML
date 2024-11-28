'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
  company: string
  image: string
  platform: {
    name: string
    logo: string
  }
}

// Ma'lumotlarni ortga olib kelish
const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "DOML platformasi sizga auditoriyangizga xabarlarni yetkazish va aloqalarni osonlikcha yaratishda yordam beradi.",
    author: "Amaka Micheal",
    title: "Media Executive",
    company: "Buying's Control",
    image: "https://s3-alpha-sig.figma.com/img/b188/62b4/9a51b1fe199adf938b35886d1198895c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RRCXIVlRujkE7qfCCBjgMYbjDcXNlvJmOZamgCduNfsWaJmppm9mCJAC~BDACZ~qOw4gI9RtpNNgaTiI0uJQB3oyTc0JiQqyJdtiPdX~3RfXffZtWiNvK60MLdGbYzB2G~CJ6HYuktJJ1O01~--6RWFJdZ1iyI84RTe-CIb-2ykVESRuoU3bB5DxN5MjSztnqK4mfFkjEM0~lhIbBlm6R9MXearBknEa0aXL2nj6MZgRqQWvr8LV379mLMbwMu5pokWmIK8yI-0-IUXju00qBMfSumHgjHYknQ9LGNSFiqo2SuxJcWtXW3IXLHiTiRwr0ZlOnxO-GrSkINK6JGhjMw__",
    platform: {
      name: "Discord",
      logo: "https://s3-alpha-sig.figma.com/img/867f/f8c6/4a34dbf028de6d74c51b44d55155e97e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=atS88u6BWhEuoPw~R8Pv0UBT0zALtZZ38N8Pb-PvtJcA2fLuw2Ag2Mdh6HqPQMaTY65-0R4tgmpCBOLkXH~uxPxjQGrc6fcUZeYLQK5vDsg5H7VF1Dh3FWyVM0~6HJn72HwrlAshu7SnwJz8emKCqNzIpE4qVvmG2yP2lNx~UuwuestnAXpSSDPFZRKwjZw7nazaOX0j74KiczhacNPaDUyHd8SL05-IslGn3xv787dwwaNCvmz0a7T9~v4UUe6Lx5~MJobywM323teoO7IxAjKMbrz2y3AV9utBtU1wZCwoB4QHWCqbDXf6-p0~-awPHF9XVxshxepUdCByAnVZhg__"
    }
  },
  {
    id: 2,
    quote: "DOML marketing strategiyamizni tubdan o'zgartirdi. AI-driven tahlillari juda qimmatli bo'ldi.",
    author: "Sarah Johnson",
    title: "Marketing Director",
    company: "Tech Solutions",
    image: "https://s3-alpha-sig.figma.com/img/75f5/a4a6/ce41beb755456d263f3eea051ae892f5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T8iFX148uiAMYuzbAmH-6pgI9eev0n6J4B8rzLYTc001eTKKdfbsjAJ9DUDtnmAM2308Lpx0JHz5fy~KrjAlk5RftQx5ex~xhfLI8xToiOURGF6v~lElVDf4rX~cSwjyUXH~l7L~4aEvszH7kZEWoP8hMllz~dPqkmPnB5RD~lA7bjdA1Lqs7~J36YDzt9Prn6speRqGA0VCMp~lHyesXxk54sXbTw1djK2mU2-JwtaQeTbsaFAtGaG5Jm9RPwlzLAI8zYH0q2PrFYF62ngKFz0-PfqYNzFnjK-gkXkLOJvJ~g4XphXdzfi4LjIurijCtECmhNS8Oz32~Mq3XRMN6A__",
    platform: {
      name: "Discord",
      logo: "https://s3-alpha-sig.figma.com/img/867f/f8c6/4a34dbf028de6d74c51b44d55155e97e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=atS88u6BWhEuoPw~R8Pv0UBT0zALtZZ38N8Pb-PvtJcA2fLuw2Ag2Mdh6HqPQMaTY65-0R4tgmpCBOLkXH~uxPxjQGrc6fcUZeYLQK5vDsg5H7VF1Dh3FWyVM0~6HJn72HwrlAshu7SnwJz8emKCqNzIpE4qVvmG2yP2lNx~UuwuestnAXpSSDPFZRKwjZw7nazaOX0j74KiczhacNPaDUyHd8SL05-IslGn3xv787dwwaNCvmz0a7T9~v4UUe6Lx5~MJobywM323teoO7IxAjKMbrz2y3AV9utBtU1wZCwoB4QHWCqbDXf6-p0~-awPHF9XVxshxepUdCByAnVZhg__"
    }
  },
  {
    id: 3,
    quote: "Yangi texnologiyalar orqali mijozlar bilan muloqot qilish yanada samarali bo'ldi.",
    author: "John Doe",
    title: "Tech Manager",
    company: "Innovate Co.",
    image: "https://s3-alpha-sig.figma.com/img/24e7/eefa/7ff1bdbd71b7ea85029c82a179b3eb28?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NlEQgZizfOZjiIa6H7gvmIo0X0VUVvVekV1BAG1lZZJ-L96CA3cLbw-eBvCehHx~ay0-fq7puCCZuhoWc5NrnXYdCJ67wCACH4HtRo-g5eMlAjCjNnk0EGJlKb8pWfAHA0bpQWdrFH7WmT-ZAcA0rp1Mcl2MLhK~4zdW~mC8HZSxOpsLermicPgxmyRVpDr0-fElCbXKUSYNLxZTryxXh9PmTS-i6kuXeC8hEhzQqGyJzM9oNn-S0nL50AhKqb-b-XRngvZfPlsKB7fqDvP8vdzm3D6Bv4Wasq8pwSwmWsv2RoA2hrzQrUk9-EXMUjTiZqOAs~uF1g7UUXV0I5JRNA__",
    platform: {
      name: "Slack",
      logo: "https://s3-alpha-sig.figma.com/img/867f/f8c6/4a34dbf028de6d74c51b44d55155e97e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=atS88u6BWhEuoPw~R8Pv0UBT0zALtZZ38N8Pb-PvtJcA2fLuw2Ag2Mdh6HqPQMaTY65-0R4tgmpCBOLkXH~uxPxjQGrc6fcUZeYLQK5vDsg5H7VF1Dh3FWyVM0~6HJn72HwrlAshu7SnwJz8emKCqNzIpE4qVvmG2yP2lNx~UuwuestnAXpSSDPFZRKwjZw7nazaOX0j74KiczhacNPaDUyHd8SL05-IslGn3xv787dwwaNCvmz0a7T9~v4UUe6Lx5~MJobywM323teoO7IxAjKMbrz2y3AV9utBtU1wZCwoB4QHWCqbDXf6-p0~-awPHF9XVxshxepUdCByAnVZhg__"
    }
  },
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true)
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const nextSlide = () => {
    if (!isAnimating) {
      const next = (currentSlide + 1) % testimonials.length
      goToSlide(next)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      const prev = currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1
      goToSlide(prev)
    }
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [currentSlide])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-30">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500" style={{ height: '350px' }}>
        <div className="relative w-full  pt-20 pl-10">
          <div 
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                } absolute top-0 left-0 w-full transition-opacity duration-500 ease-in-out`}
                style={{ transform: `translateX(${index * 100}%)` }}
              >
                <div className="flex flex-col md:flex-row items-center gap-8 px-12 py-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-2xl overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-white" style={{ paddingLeft: '50px', paddingRight: '50px' }}>
                    <p className="text-lg md:text-xl mb-4">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.author}</h3>
                        <p className="text-white/80">{testimonial.title}, {testimonial.company}</p>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 p-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex justify-center items-center"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex justify-center items-center"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}
