import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Наша свадьба прошла просто волшебно! Ведущий держал зал в руках весь вечер, гости до сих пор говорят, что это лучшая свадьба, на которой они были. Огромное спасибо!",
    name: "Анна и Дмитрий",
    role: "Молодожёны, Курган",
  },
  {
    quote:
      "Заказывали корпоратив на 150 человек в Тюмени. Всё прошло на высшем уровне: программа, музыка, настроение — всё было идеально. Коллеги ещё долго вспоминали этот вечер!",
    name: "Ольга Сергеевна",
    role: "HR-директор, Тюмень",
  },
  {
    quote:
      "Мама очень хотела запоминающийся юбилей. Ведущий так тонко вплёл в программу истории из её жизни, что гости смеялись и плакали одновременно. Это было невероятно!",
    name: "Семья Петровых",
    role: "Юбилей, Челябинск",
  },
  {
    quote:
      "Выпускной удался на 100%! Ребята веселились без остановки, родители были в восторге. Профессионализм чувствовался в каждой детали. Однозначно рекомендуем!",
    name: "Татьяна Михайловна",
    role: "Классный руководитель, Курган",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Лучшая награда для нас — когда гости не хотят расходиться, а клиенты звонят с благодарностью на следующий день.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}