import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  const steps = [
    {
      title: 'Выбор Кофе',
      description: 'Открываешь бота, выбираешь напиток из интерактивного меню'
    },
    {
      title: 'Настройка Параметров',
      description: 'Регулируешь крепость, молоко, сахар одним касанием'
    },
    {
      title: 'Моментальный Заказ',
      description: 'Кофемашина начинает готовить твой идеальный напиток'
    },
    {
      title: 'Отслеживание',
      description: 'Получаешь уведомления и можешь наблюдать за процессом'
    }
  ]

  return (
    <div className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-700">
          Как Это Работает
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center mr-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-gray-400">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block text-center my-4">
                  <ArrowRight className="mx-auto text-amber-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About