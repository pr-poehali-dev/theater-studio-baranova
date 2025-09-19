import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

export default function Index() {
  const [activeSection, setActiveSection] = useState('home')

  const menuItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'groups', label: 'Группы', icon: 'Users' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'teacher', label: 'Преподаватель', icon: 'User' },
    { id: 'gallery', label: 'Галерея', icon: 'Image' },
    { id: 'reviews', label: 'Отзывы', icon: 'Star' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-theater-black/95 backdrop-blur-sm border-b border-theater-yellow/20 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Icon name="Drama" className="text-theater-yellow" size={32} />
              <div>
                <h1 className="text-xl font-bold text-theater-yellow">Театральная мастерская</h1>
                <p className="text-sm text-theater-white">Оксаны Барановой</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground hover:bg-theater-yellow/20'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-theater-black via-theater-gray to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-theater-white">
                  Театральная мастерская
                </h1>
                <h2 className="text-2xl lg:text-3xl text-theater-yellow mb-6">
                  Оксаны Барановой
                </h2>
                <div className="text-3xl lg:text-4xl font-bold text-theater-yellow mb-8">
                  ✨ Трансформация театром
                </div>
              </div>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Мы приглашаем вас для знакомства с собой – с человеком, который даже не подозревал о наличии столь большого творческого потенциала у самого себя.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Записаться на занятие
                </Button>
                <Button variant="outline" size="lg" className="border-theater-yellow text-theater-yellow hover:bg-theater-yellow/10">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://cdn.poehali.dev/files/8819a1e8-0cc4-4392-9119-27f8bc8b79e4.png" 
                alt="Театральная мастерская" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Трансформация через театр */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Трансформация через театр</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Activity', title: 'Движение', subtitle: 'Свобода тела', description: 'Пластика, координация, выразительность и раскрепощение' },
              { icon: 'Mic', title: 'Речь', subtitle: 'Сила голоса', description: 'Дикция, интонации, умение быть услышанным' },
              { icon: 'Heart', title: 'Чувства', subtitle: 'Эмоциональный интеллект', description: 'Выражение и управление эмоциями, искренность' },
              { icon: 'Sparkles', title: 'Вера в себя', subtitle: 'Внутренняя сила', description: 'Уверенность, харизма, лидерские качества' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-300 bg-theater-gray border-theater-yellow/20">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-theater-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} size={32} className="text-theater-yellow" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-theater-white">{item.title}</h3>
                  <p className="text-theater-yellow text-sm font-medium mb-3">{item.subtitle}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Группы */}
      <section id="groups" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши группы</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-theater-gray border-theater-yellow/20">
              <div className="h-48 bg-gradient-to-br from-theater-yellow/20 to-theater-yellow/40 flex items-center justify-center">
                <div className="text-6xl">🎭</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-theater-yellow">🎯 Арлекино</h3>
                <p className="text-theater-white mb-2 font-medium">Дети 10–15 лет</p>
                <p className="text-muted-foreground mb-4 text-sm">Уверенный, творческий, открытый подросток</p>
                
                <div className="space-y-3 text-sm mb-4">
                  <div className="bg-theater-black/50 p-3 rounded">
                    <h4 className="font-semibold text-theater-yellow mb-2">Результат:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Уверенность среди сверстников и на сцене</li>
                      <li>• Красивая, ясная речь</li>
                      <li>• Умение выражать эмоции</li>
                      <li>• Радость от выступлений</li>
                      <li>• Командная работа и дружба</li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-theater-yellow text-theater-black hover:bg-theater-yellow/90">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-theater-gray border-theater-yellow/20">
              <div className="h-48 bg-gradient-to-br from-theater-yellow/20 to-theater-yellow/40 flex items-center justify-center">
                <div className="text-6xl">⚡</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-theater-yellow">🎯 Импульс</h3>
                <p className="text-theater-white mb-2 font-medium">Подростки 16–20 лет</p>
                <p className="text-muted-foreground mb-4 text-sm">Смелость заявлять о себе</p>
                
                <div className="space-y-3 text-sm mb-4">
                  <div className="bg-theater-black/50 p-3 rounded">
                    <h4 className="font-semibold text-theater-yellow mb-2">Результат:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Уверенность и свобода самовыражения</li>
                      <li>• Навыки выступления перед публикой</li>
                      <li>• Развитие харизмы и артистичности</li>
                      <li>• Возможности в театре, кино, блогинге</li>
                      <li>• Инструмент для будущей профессии</li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-theater-yellow text-theater-black hover:bg-theater-yellow/90">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-theater-gray border-theater-yellow/20">
              <div className="h-48 bg-gradient-to-br from-theater-yellow/20 to-theater-yellow/40 flex items-center justify-center">
                <div className="text-6xl">👑</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-theater-yellow">🎯 Браво</h3>
                <p className="text-theater-white mb-2 font-medium">Взрослые 21+</p>
                <p className="text-muted-foreground mb-4 text-sm">Лидер, к которому прислушиваются</p>
                
                <div className="space-y-3 text-sm mb-4">
                  <div className="bg-theater-black/50 p-3 rounded">
                    <h4 className="font-semibold text-theater-yellow mb-2">Результат:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Навыки оратора и самопрезентации</li>
                      <li>• Поставленный голос и речь</li>
                      <li>• Управление эмоциями в стрессе</li>
                      <li>• Лидерские качества</li>
                      <li>• Успех в профессии и жизни</li>
                    </ul>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-theater-yellow text-theater-black hover:bg-theater-yellow/90">Записаться</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Главное */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Самое главное</h2>
            <div className="bg-theater-yellow/10 border border-theater-yellow/20 rounded-2xl p-8">
              <p className="text-2xl text-theater-yellow font-bold mb-4">
                Каждый участник театральной мастерской учится верить в себя и не бояться пробовать новое.
              </p>
              <p className="text-lg text-muted-foreground">
                Это ключ к трансформации, который открывает двери к новой версии себя – более уверенной, яркой и творческой.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-theater-black text-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Drama" className="text-theater-yellow" size={32} />
                <h3 className="text-xl font-bold text-theater-yellow">Театральная мастерская</h3>
              </div>
              <p className="text-muted-foreground">
                Трансформация через театр. Раскрытие творческого потенциала.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-theater-yellow">Контакты</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-theater-yellow" />
                  <span>+7 977 108 60 00 (Михаил)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-theater-yellow" />
                  <span>+7 977 148 60 00 (Оксана)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Building" size={16} className="text-theater-yellow" />
                  <span>ООО «КС «Браво»</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-theater-yellow">Подать заявку</h4>
              <Button className="w-full bg-theater-yellow text-theater-black hover:bg-theater-yellow/90 mb-4">
                Записаться на занятие
              </Button>
              <p className="text-xs text-muted-foreground">
                ИНН: 9102287366<br/>
                ОГРН: 1239100001777
              </p>
            </div>
          </div>
          
          <div className="border-t border-theater-yellow/20 mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Театральная мастерская Оксаны Барановой. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}