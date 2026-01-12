import React from 'react'
import { Coffee, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-700"
        >
          Твой IoT Кофейный Помощник
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Управляй кофемашиной через Telegram, отслеживай статус напитка в реальном времени и наслаждайся идеальным кофе
        </motion.p>

        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-amber-700 transition-colors"
          >
            <Coffee size={24} />
            <span>Заказать кофе</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-800 text-gray-300 px-8 py-3 rounded-full flex items-center space-x-2 hover:bg-slate-700 transition-colors"
          >
            <Zap size={24} />
            <span>Как это работает</span>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Hero