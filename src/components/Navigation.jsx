import React, { useState } from 'react'
import { Menu, X, Coffee } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '../utils'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Меню', href: '#menu' },
    { name: 'О проекте', href: '#about' },
    { name: 'Контакты', href: '#contacts' }
  ]

  return (
    <nav className="fixed w-full z-50 bg-slate-900/60 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Coffee className="text-amber-500" size={32} />
          <span className="text-xl font-bold text-white">CoffeeEco</span>
        </div>

        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-amber-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-slate-900 md:hidden"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-white hover:bg-slate-800"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navigation