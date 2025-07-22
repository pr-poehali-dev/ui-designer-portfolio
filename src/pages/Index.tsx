import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-vibrant-purple to-bright-pink bg-clip-text text-transparent">
            UI Designer
          </h1>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-slate-700 hover:text-vibrant-purple transition-colors">Главная</a>
            <a href="#portfolio" className="text-slate-700 hover:text-vibrant-purple transition-colors">Портфолио</a>
            <a href="#about" className="text-slate-700 hover:text-vibrant-purple transition-colors">Обо мне</a>
            <a href="#services" className="text-slate-700 hover:text-vibrant-purple transition-colors">Услуги</a>
            <a href="#contact" className="text-slate-700 hover:text-vibrant-purple transition-colors">Контакты</a>
          </div>
          <Button className="bg-vibrant-purple hover:bg-vibrant-purple/90">
            Связаться
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-vibrant-purple/10 to-bright-pink/10 border border-vibrant-purple/20 mb-6">
                <Icon name="Sparkles" size={16} className="text-vibrant-purple mr-2" />
                <span className="text-sm text-vibrant-purple font-medium">UI/UX Designer</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Создаю
                <span className="bg-gradient-to-r from-vibrant-purple to-bright-pink bg-clip-text text-transparent"> современные </span>
                интерфейсы
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Превращаю сложные идеи в понятные и красивые пользовательские интерфейсы. 
                Специализируюсь на мобильных приложениях и веб-сервисах.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-vibrant-purple to-bright-pink hover:from-vibrant-purple/90 hover:to-bright-pink/90 transform hover:scale-105 transition-all">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать резюме
                </Button>
                <Button variant="outline" size="lg" className="border-vibrant-purple text-vibrant-purple hover:bg-vibrant-purple hover:text-white transition-all">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-vibrant-purple to-bright-pink rounded-3xl blur-2xl opacity-20 animate-float"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-emerald-green rounded-full"></div>
                  </div>
                  <Icon name="Maximize2" size={16} className="text-slate-400" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-vibrant-purple to-bright-pink rounded w-3/4"></div>
                  <div className="h-3 bg-slate-200 rounded w-full"></div>
                  <div className="h-3 bg-slate-200 rounded w-2/3"></div>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="h-20 bg-gradient-to-br from-vibrant-purple/20 to-bright-pink/20 rounded-lg"></div>
                    <div className="h-20 bg-gradient-to-br from-bright-pink/20 to-emerald-green/20 rounded-lg"></div>
                    <div className="h-20 bg-gradient-to-br from-emerald-green/20 to-vibrant-purple/20 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-vibrant-purple/10 text-vibrant-purple border-vibrant-purple/20">Портфолио</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Мои лучшие работы</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Каждый проект — это уникальное решение с фокусом на пользователя и современном дизайне
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50">
                <div className="aspect-video bg-gradient-to-br from-vibrant-purple/20 via-bright-pink/20 to-emerald-green/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Icon name="Eye" size={14} />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Icon name="ExternalLink" size={14} />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-emerald-green/10 text-emerald-green border-emerald-green/20">
                      Мобильное приложение
                    </Badge>
                    <span className="text-sm text-slate-500">2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-vibrant-purple transition-colors">
                    Финтех приложение
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Современный интерфейс для управления финансами с интуитивной навигацией
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Badge variant="outline" className="text-xs">Figma</Badge>
                      <Badge variant="outline" className="text-xs">iOS</Badge>
                    </div>
                    <Icon name="ArrowUpRight" size={16} className="text-vibrant-purple group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <Badge className="mb-4 bg-emerald-green/10 text-emerald-green border-emerald-green/20">Обо мне</Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Привет! Я — UI дизайнер с опытом более 
                <span className="text-vibrant-purple"> 5 лет</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Начинал как графический дизайнер, но полюбил создание пользовательских интерфейсов. 
                За годы работы помог более чем 50 компаниям создать современные и функциональные продукты.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="text-3xl font-bold text-vibrant-purple mb-1">50+</div>
                  <div className="text-sm text-slate-600">Проектов</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <div className="text-3xl font-bold text-bright-pink mb-1">5</div>
                  <div className="text-sm text-slate-600">Лет опыта</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Навыки и инструменты</h3>
              
              {[
                { name: 'Figma', level: 95, color: 'bg-vibrant-purple' },
                { name: 'Adobe XD', level: 88, color: 'bg-bright-pink' },
                { name: 'Sketch', level: 82, color: 'bg-emerald-green' },
                { name: 'Prototyping', level: 90, color: 'bg-vibrant-purple' },
                { name: 'User Research', level: 85, color: 'bg-bright-pink' },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-bright-pink/10 text-bright-pink border-bright-pink/20">Услуги</Badge>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Что я предлагаю</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Полный цикл разработки пользовательских интерфейсов от идеи до готового продукта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Smartphone',
                title: 'Мобильный дизайн',
                description: 'iOS и Android приложения с современным и интуитивным интерфейсом',
                color: 'from-vibrant-purple to-bright-pink'
              },
              {
                icon: 'Monitor',
                title: 'Веб-дизайн',
                description: 'Адаптивные сайты и веб-приложения с фокусом на пользовательский опыт',
                color: 'from-bright-pink to-emerald-green'
              },
              {
                icon: 'Palette',
                title: 'Design System',
                description: 'Создание единой дизайн-системы для масштабируемых продуктов',
                color: 'from-emerald-green to-vibrant-purple'
              },
              {
                icon: 'Users',
                title: 'UX Исследования',
                description: 'Анализ пользователей и тестирование интерфейсов для оптимальных решений',
                color: 'from-vibrant-purple to-emerald-green'
              },
              {
                icon: 'Zap',
                title: 'Прототипирование',
                description: 'Интерактивные прототипы для демонстрации концепций и идей',
                color: 'from-bright-pink to-vibrant-purple'
              },
              {
                icon: 'Brush',
                title: 'Брендинг',
                description: 'Создание визуальной идентичности и фирменного стиля',
                color: 'from-emerald-green to-bright-pink'
              }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-gradient-to-br from-white to-slate-50 hover:-translate-y-2">
                <CardContent className="p-8 relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-vibrant-purple transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-vibrant-purple via-bright-pink to-emerald-green">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Контакты</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Готовы воплотить идею в жизнь?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Свяжитесь со мной, и мы обсудим ваш проект. Всегда открыт к новым вызовам и интересным задачам.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: 'Mail', title: 'Email', value: 'hello@designer.com', href: 'mailto:hello@designer.com' },
                { icon: 'Phone', title: 'Телефон', value: '+7 (999) 123-45-67', href: 'tel:+79991234567' },
                { icon: 'MessageCircle', title: 'Telegram', value: '@designer', href: 'https://t.me/designer' }
              ].map((contact, index) => (
                <a key={index} href={contact.href} className="group block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                  <Icon name={contact.icon as any} size={32} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-2">{contact.title}</h3>
                  <p className="text-white/80">{contact.value}</p>
                </a>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-vibrant-purple hover:bg-white/90 transform hover:scale-105 transition-all">
                <Icon name="Send" size={20} className="mr-2" />
                Написать сообщение
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-vibrant-purple transition-all">
                <Icon name="Calendar" size={20} className="mr-2" />
                Запланировать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-slate text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-vibrant-purple to-bright-pink bg-clip-text text-transparent">
                UI Designer
              </h3>
              <p className="text-slate-400 mt-2">Создаю впечатляющие интерфейсы</p>
            </div>
            <div className="flex space-x-6">
              {[
                { icon: 'Instagram', href: '#' },
                { icon: 'Twitter', href: '#' },
                { icon: 'Linkedin', href: '#' },
                { icon: 'Github', href: '#' }
              ].map((social, index) => (
                <a key={index} href={social.href} className="text-slate-400 hover:text-white transition-colors">
                  <Icon name={social.icon as any} size={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">© 2024 UI Designer. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}