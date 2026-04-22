import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "Интернет-магазин электроники",
      project: "Короб 4-х клапанный на заказ",
      metric: "50 000 коробов в месяц",
      description: "Разработали индивидуальный короб для защиты хрупкой техники при доставке. Трёхслойный гофрокартон с усиленными углами.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Алкогольный дистрибьютор",
      project: "Гофрорешётки для бутылок",
      metric: "0% боя при транспортировке",
      description: "Изготовили решётки из пятислойного гофрокартона для перевозки бутылок. Полностью исключили бой продукции при доставке.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Производство косметики",
      project: "Упаковка сложной высечки",
      metric: "Срок изготовления — 5 дней",
      description: "Создали фигурные короба с ручками и окошками из микрогофрокартона для премиальной линейки продуктов.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Логистическая компания",
      project: "Пятислойные короба для склада",
      metric: "10 тонн в неделю",
      description: "Наладили регулярные поставки прочных транспортных коробов. Выдерживают статическую нагрузку при штабелировании на складе.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Кейсы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Примеры задач, которые мы решили для наших клиентов из разных отраслей.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">{study.client}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{study.project}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{study.metric}</div>
                <p className="text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}