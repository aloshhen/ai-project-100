import React from 'react'
import { Coffee, Zap, Clock, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-amber-600 transition-all"
  >
    <div className="mb-4 text-amber-500">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
)

const Features = () => {
  const features = [
    {
      icon: <Coffee size={48} />,
      title: 'IoT Управление',
      description: 'Полный контроль над кофемашиной через Telegram, включая настройку параметров'
    },
    {
      icon: <Zap size={48} />,
      title: 'Быстрый Заказ',
      description: 'Моментальный заказ с сохранением твоих предпочтений и историей'
    },
    {
      icon: <Clock size={48} />,
      title: 'Статус в Реальном Времени',
      description: 'Отслеживай приготовление кофе с точностью до секунды'
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Мобильное Приложение',
      description: 'Полностью адаптивный интерфейс для смартфонов и Telegram'
    }
  ]

  return (
    <div className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-700">
          Возможности Экосистемы
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features