import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Свадьбы",
    category: "Свадьба · Курган",
    image: "/placeholder.jpg",
    description:
      "Фрагменты лучших моментов: от трепетной церемонии до весёлого банкета. Каждая фотография — история любви, рассказанная без слов.",
    tags: ["Свадьба", "DJ-сет", "120 гостей"],
  },
  {
    title: "Юбилей компании «СтройГрупп»",
    category: "Корпоратив · Тюмень",
    image: "/placeholder.jpg",
    description:
      "10-летие компании на 200 человек. Деловая часть плавно перетекла в яркую вечеринку с тематическими конкурсами и профессиональным DJ-сетом.",
    tags: ["Корпоратив", "200 гостей", "DJ-сет"],
  },
  {
    title: "Выпускной 11-А класса",
    category: "Выпускной · Челябинск",
    image: "/placeholder.jpg",
    description:
      "Незабываемый выпускной для 80 выпускников и их родителей. Трогательные моменты, зажигательные танцы и яркое шоу-программа — вечер прошёл на одном дыхании.",
    tags: ["Выпускной", "80 гостей"],
  },
  {
    title: "Юбилей Натальи Ивановны — 50 лет",
    category: "День рождения · Курган",
    image: "/placeholder.jpg",
    description:
      "Тёплый семейный праздник с близкими и друзьями. Индивидуальный сценарий с историями из жизни именинницы, трогательные видеопоздравления и живая музыка.",
    tags: ["Юбилей", "День рождения", "50 гостей"],
  },
]

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
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}