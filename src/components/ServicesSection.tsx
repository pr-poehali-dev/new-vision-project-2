import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Cake, Briefcase, GraduationCap, Music, PartyPopper } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Свадьба",
    description:
      "Ваш особенный день заслуживает идеального ведущего. Создаём тёплую, романтическую атмосферу, следим за каждым моментом программы — от первого танца до финального тоста. Гости уйдут в восторге.",
  },
  {
    icon: Cake,
    title: "День рождения и юбилей",
    description:
      "Юбилей — это не просто дата, это праздник жизни! Разрабатываем индивидуальную программу с конкурсами, сюрпризами и живой музыкой. Сделаем так, чтобы именинник запомнил этот вечер навсегда.",
  },
  {
    icon: Briefcase,
    title: "Корпоратив",
    description:
      "Объединяем команду через искренние эмоции и позитив. Форматы на любой вкус: от деловых банкетов до неформальных вечеринок. Ваши сотрудники будут гордиться своей компанией.",
  },
  {
    icon: GraduationCap,
    title: "Выпускной",
    description:
      "Финальный аккорд школьных лет должен быть незабываемым! Создаём программу, которая трогает до слёз и заряжает энергией. Конкурсы, танцы, яркие моменты — всё продумано до мелочей.",
  },
  {
    icon: Music,
    title: "DJ-сет",
    description:
      "Профессиональное музыкальное сопровождение любого мероприятия. Современное оборудование, богатая фонотека всех жанров, умение чувствовать зал — танцпол не пустует весь вечер.",
  },
  {
    icon: PartyPopper,
    title: "Вечеринка",
    description:
      "Тематические вечеринки, частные праздники, девичники и мальчишники — берёмся за любой формат. Гарантируем энергию, смех и атмосферу, которую захочется повторить.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши мероприятия
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Проведём любой <span className="text-primary">праздник</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Каждое мероприятие — уникальное шоу, созданное специально для вас. Индивидуальный подход, живые эмоции и профессиональный сервис.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
