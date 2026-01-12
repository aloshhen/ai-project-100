import React from 'react'
import { Coffee } from 'lucide-react'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <div className="py-20 bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-700"
        >
          Готов Попробовать?
        </motion.h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Присоединяйся к революции умного кофе прямо сейчас!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-600 text-white px-10 py-4 text-lg rounded-full flex items-center space-x-3 mx-auto hover:bg-amber-700 transition-colors"
        >
          <Coffee size={24} />
          <span>Начать в Telegram</span>
        </motion.button>
      </div>
    </div>
  )
}

export default CTA