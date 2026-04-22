import { Button } from "@/components/ui/3d-button"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function Hero() {
  return (
    <section className="pt-32 pb-12 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
            {"Собственное производство"}
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
            {"Любые объёмы и форматы"}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-center leading-[1.1] mb-6 text-balance"
        >
          Гофрокартон и упаковка{" "}
          <span className="inline-flex items-center gap-3">
            для
            <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-[rgba(10,10,10,0.10)]">
              <Icon name="Package" className="w-5 h-5 md:w-7 md:h-7 text-[rgba(255,117,38,1)]" />
            </span>
            бизнеса,
          </span>{" "}
          которому важна надёжность.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          Производим микро-, трёх- и пятислойный гофрокартон, короба и индивидуальную упаковку. Экологично, быстро, под любые задачи.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center"
        >
          <Button size="lg" className="rounded-full px-8 text-base">
            Получить прайс-лист
          </Button>
        </motion.div>
      </div>
    </section>
  )
}