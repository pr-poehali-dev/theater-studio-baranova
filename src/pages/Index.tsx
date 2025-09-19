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
      <nav className="fixed top-0 left-0 right-0 bg-theater-navy/95 backdrop-blur-sm border-b border-theater-purple/20 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Icon name="Drama" className="text-theater-gold" size={32} />
              <div>
                <h1 className="text-xl font-bold text-theater-gold">Театральная мастерская</h1>
                <p className="text-sm text-theater-purple">Оксаны Барановой</p>
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
                      : 'text-foreground hover:bg-theater-purple/20'
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
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-theater-navy via-theater-dark to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-theater-gold to-theater-purple bg-clip-text text-transparent">
                Театральная мастерская
              </h1>
              <h2 className="text-2xl lg:text-3xl text-theater-purple mb-8">
                Оксаны Барановой
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Развиваем актёрское мастерство, движение, речь и уверенность в себе
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Записаться на занятие
                </Button>
                <Button variant="outline" size="lg" className="border-theater-purple text-theater-purple hover:bg-theater-purple/10">
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

      {/* Направления обучения */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Направления обучения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'Activity', title: 'Движение', subtitle: 'От 10 лет', description: 'Пластика тела, координация, выразительность движений' },
              { icon: 'Mic', title: 'Речь', subtitle: 'От 8 лет', description: 'Дикция, интонации, работа с текстом' },
              { icon: 'Heart', title: 'Чувства', subtitle: 'От 12 лет', description: 'Эмоциональная выразительность, работа с переживаниями' },
              { icon: 'Sparkles', title: 'Вера в себя', subtitle: 'Для всех', description: 'Уверенность на сцене, преодоление страхов' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-theater-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} size={32} className="text-theater-purple" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-theater-gold text-sm font-medium mb-3">{item.subtitle}</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-theater-purple/20 to-theater-gold/20 flex items-center justify-center">
                <Icon name="BookOpen" size={64} className="text-theater-purple" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-theater-gold">Арлекино</h3>
                <p className="text-muted-foreground mb-4">Развиваем творческие способности и уверенность в себе</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} className="text-theater-purple" />
                    <span>Возраст: 10-15 лет</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-theater-purple" />
                    <span>Суббота 10:00-12:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Wallet" size={16} className="text-theater-purple" />
                    <span className="font-semibold text-theater-gold">3000₽/месяц</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-theater-red/20 to-theater-purple/20 flex items-center justify-center">
                <Icon name="Zap" size={64} className="text-theater-red" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-theater-red">Движ</h3>
                <p className="text-muted-foreground mb-4">Актерское мастерство и эмоциональная выразительность</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} className="text-theater-red" />
                    <span>Возраст: 15-21 год</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-theater-red" />
                    <span>Воскресенье 14:00-16:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Wallet" size={16} className="text-theater-red" />
                    <span className="font-semibold text-theater-gold">3500₽/месяц</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-theater-gold/20 to-theater-purple/20 flex items-center justify-center">
                <Icon name="Trophy" size={64} className="text-theater-gold" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-theater-gold">Браво</h3>
                <p className="text-muted-foreground mb-4">Профессиональное развитие и глубокая работа с ролью</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Users" size={16} className="text-theater-gold" />
                    <span>Возраст: 21+ лет</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={16} className="text-theater-gold" />
                    <span>Среда 19:00-21:00</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Wallet" size={16} className="text-theater-gold" />
                    <span className="font-semibold text-theater-gold">4000₽/месяц</span>
                  </div>
                </div>
                <Button className="w-full mt-4" variant="outline">Записаться</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* О нас */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">О нас</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                ТМ Оксаны Барановой - это пространство для тех, кто хочет познать себя, раскрыть свой потенциал и свой талант, 
                найти единомышленников, самосовершенствоваться и, возможно, даже изменить мировоззрение.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Target" className="text-theater-purple" size={32} />
                  <h3 className="text-xl font-semibold">Авторская методика</h3>
                </div>
                <p className="text-muted-foreground">
                  Тренинги и упражнения с индивидуальным подходом по методике «Поверь в себя. Движение. Чувства. Речь», 
                  основанной на работах величайших режиссеров.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Users" className="text-theater-gold" size={32} />
                  <h3 className="text-xl font-semibold">Театр для себя</h3>
                </div>
                <p className="text-muted-foreground">
                  Мы приглашаем вас для знакомства с собой - с человеком, который даже не подозревал о наличии 
                  столь большого творческого потенциала у самого себя.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Занятия и группы */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">О занятиях и группах</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Icon name="BookOpen" className="text-theater-purple" size={32} />
                <h3 className="text-xl font-semibold">Студия чтеца</h3>
              </div>
              <p className="text-muted-foreground mb-4">Дети от 4 до 9 лет</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Актерское мастерство</li>
                <li>• Сценическая речь</li>
                <li>• Сценическое движение</li>
                <li>• Продолжительность: октябрь - май</li>
                <li>• Занятия: 2 раза в неделю</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Icon name="Music" className="text-theater-gold" size={32} />
                <h3 className="text-xl font-semibold">Школа мюзикла</h3>
              </div>
              <p className="text-muted-foreground mb-4">Дети от 10 до 17 лет, взрослые от 18 до 85 лет</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Актерское мастерство</li>
                <li>• Вокал</li>
                <li>• Танец</li>
                <li>• Занятия: 2 раза в неделю по 1 часу</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Наши постановки */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши постановки</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Кошкин дом',
              'Апрель 45',
              'Бременские немузыканты или 25 лет в бутоне',
              'Остановившие фашизм'
            ].map((title, index) => (
              <Card key={index} className="overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gradient-to-br from-theater-purple/20 to-theater-red/20 flex items-center justify-center">
                  <Icon name="Video" size={48} className="text-theater-purple" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center">{title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* О результатах */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">О результатах</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-theater-purple">Литературно-музыкальная композиция</h3>
                <p className="text-muted-foreground mb-4">Для студии чтеца</p>
                <p className="text-sm text-muted-foreground">
                  Театральное представление на основе поэтического слова, музыки, танца и пластики. 
                  Развивает речь, эмоциональный интеллект, творческое самочувствие.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-theater-gold">Мюзикл</h3>
                <p className="text-muted-foreground mb-4">Для школы мюзикла</p>
                <p className="text-sm text-muted-foreground">
                  Музыкально-сценическое произведение с вокалом, танцами и монологами. 
                  Помогает быть легче в отношениях и ярче воспринимать жизнь.
                </p>
              </Card>
            </div>
            
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Что дают занятия</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <Icon name="Volume2" className="text-theater-purple mx-auto mb-2" size={24} />
                  <p>Четкая дикция и интонирование</p>
                </div>
                <div>
                  <Icon name="Shield" className="text-theater-gold mx-auto mb-2" size={24} />
                  <p>Отсутствие страхов и зажимов</p>
                </div>
                <div>
                  <Icon name="Sparkles" className="text-theater-red mx-auto mb-2" size={24} />
                  <p>Развитие воображения и фантазии</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-theater-navy text-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Drama" className="text-theater-gold" size={32} />
                <h3 className="text-xl font-bold text-theater-gold">Театральная мастерская</h3>
              </div>
              <p className="text-muted-foreground">
                Пространство для раскрытия творческого потенциала и самосовершенствования
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-theater-purple" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-theater-purple" />
                  <span>info@baranova-theater.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-theater-purple" />
                  <span>г. Москва, ул. Театральная, 15</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Подать заявку</h4>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Записаться на занятие
              </Button>
            </div>
          </div>
          
          <div className="border-t border-theater-purple/20 mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Театральная мастерская Оксаны Барановой. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}