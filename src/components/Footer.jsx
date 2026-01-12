import React from 'react'
import { Coffee, Twitter, Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-6">
          <Coffee className="text-amber-500 mr-3" size={32} />
          <span className="text-2xl font-bold text-white">CoffeeEco</span>
        </div>

        <nav className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Главная</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">О Проекте</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
        </nav>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Github size={24} />
          </a>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} CoffeeEco. Все права защищены.
        </p>
      </div>
    </footer>
  )
}

export default Footer