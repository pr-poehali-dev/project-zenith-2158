import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Какой минимальный тираж для заказа?",
      answer:
        "Минимальный тираж зависит от вида продукции. Для стандартных коробов — от 100 штук, для индивидуальной высечки и нестандартных форматов — от 300 штук. Уточните у менеджера под ваш конкретный запрос.",
    },
    {
      question: "Какие виды гофрокартона вы производите?",
      answer:
        "Мы производим микрогофрокартон (для мелкой и хрупкой продукции), трёхслойный (для большинства транспортных задач) и пятислойный (для тяжёлых грузов и высоких статических нагрузок). Поможем подобрать оптимальный вариант.",
    },
    {
      question: "Сколько времени занимает изготовление?",
      answer:
        "Стандартные форматы — от 3 рабочих дней. Индивидуальная высечка и нестандартные размеры — от 5–7 рабочих дней. Срочные заказы обсуждаем отдельно.",
    },
    {
      question: "Вы доставляете по всей России?",
      answer:
        "Да, работаем с транспортными компаниями по всей России. Для крупных партнёров возможна доставка собственным транспортом в оговорённые точки.",
    },
    {
      question: "Можно ли заказать упаковку по каталогу FEFCO?",
      answer:
        "Да, мы работаем по стандартам каталога FEFCO. Просто укажите номер типа упаковки и параметры — изготовим по чертежам.",
    },
    {
      question: "Есть ли возможность нанесения печати на упаковку?",
      answer:
        "Да, выполняем флексопечать на гофрокартоне: логотип, маркировка, брендирование. Количество цветов и тираж уточняйте у менеджера.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Частые вопросы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Всё, что нужно знать перед оформлением заказа.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-secondary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}