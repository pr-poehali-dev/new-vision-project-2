import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const weddingPhotos = [
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/88f99e9a-0faa-41a7-9e70-8522bec594c3.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/e3419b76-4d7a-43a9-bc4e-342809264e5c.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/314cf467-1cfb-4105-86ee-25fff4802e0a.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/ef769249-dd6d-4fd9-a04f-0f13f6baa998.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/b5b2724f-6ef7-46d6-8148-b02ce8981c27.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/79444730-e11c-4d20-8fad-fbbe54476851.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/c307b644-5895-46ac-b441-cdf3548ce3a9.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/3a776f48-4d47-4357-9454-75fd06fed386.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/59fb121f-8538-4e18-97d2-7d77b36a2920.jpg",
]

const birthdayPhotos = [
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/8296b09e-6ffb-4cc8-9f4f-80df899e9620.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/5bfee5d5-c573-40b3-8216-21dcfcc709ed.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/c4d6dff0-9367-40f7-8944-96c8230b42c1.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/8a44dc48-caaf-4a04-aec0-8bda96661c42.jpg",
  "https://cdn.poehali.dev/projects/47521221-ac51-4e9b-89b5-14a730bd0f03/bucket/852f1e2e-8b0a-46c5-a626-117cd982d863.jpg",
]

const projects = [
  {
    title: "Юбилеи компаний и корпоративы",
    image: "/placeholder.jpg",
    description:
      "Деловая часть плавно перетекла в яркую вечеринку с тематическими конкурсами и профессиональным DJ-сетом.",
  },
  {
    title: "Выпускной 11-А класса",
    image: "/placeholder.jpg",
    description:
      "Незабываемый выпускной для 80 выпускников и их родителей. Трогательные моменты, зажигательные танцы и яркое шоу-программа — вечер прошёл на одном дыхании.",
  },
]

function PhotoSlider({ photos, title, description, wide }: { photos: string[], title: string, description: string, wide?: boolean }) {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length)
  const next = () => setCurrent((c) => (c + 1) % photos.length)

  return (
    <Card className={`group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300${wide ? " md:col-span-2" : ""}`}>
      <div className="relative overflow-hidden aspect-video">
        <img
          src={photos[current]}
          alt={title}
          className="w-full h-full object-cover object-center transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/90 rounded-full p-2 transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/60 hover:bg-background/90 rounded-full p-2 transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {photos.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/50"}`} />
          ))}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши мероприятия</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Каждое событие — отдельная история. Посмотрите на несколько наших любимых работ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PhotoSlider photos={weddingPhotos} title="Свадебное торжество" description="Фрагменты лучших моментов: от трепетной церемонии до весёлого банкета. Каждая фотография — история любви, рассказанная без слов." wide />
          <PhotoSlider photos={birthdayPhotos} title="Дни рождения и юбилеи" description="Тёплый семейный праздник с близкими и друзьями. С историями из жизни именинницы и трогательными видеопоздравлениями." wide />
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}