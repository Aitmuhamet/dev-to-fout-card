import { createApp } from 'vue'
import App from './App.vue'
import './theme.scss'
import translateDirective from './translateDirective'

const en = {
  app: {
    taskLink: 'Link to the source code',
    taskDescription: '<h3>Tasks in the project:</h3><ul><li>Deal with i18n</li><li>Make a teleport for this model in the body #modal</li></ul>',
    textTitle: 'Reliable, efficient delivery',
    textTitleHighlight: 'Powered by Technology',
    textSubtitle: 'Our Artificial intelligence powered tools use millions of project data points to ensure that your project is successful',
    card1:{ title: 'Supervisor', text: 'Monitors activity to identify project roadblocks'},
    card2:{ title: 'Team Builder', text: 'Scans our talent network to create the optimal team for your project'},
    card3:{ title: 'Karma', text: 'Regularly evaluates our talent to ensure quality'},
    card4:{ title: 'Calculator', text: 'Uses data from past projects to provide better delivery extimates'},
  }
}

const ru = {
  app: {
    taskLink: 'Ссылка на исходник',
    taskDescription: '<h3>Задачи в проекте:</h3><ul><li>Разобраться с i18n</li><li>Сделать телепорт для этой модалки в body #modal</li></ul>',
    textTitle: 'Надежная и эффективная доставка',
    textTitleHighlight: 'Основанная на технологиях',
    textSubtitle: 'Наши инструменты на базе искусственного интеллекта используют миллионы точек проектных данных, чтобы гарантировать успех вашего проекта',
    card1:{ title: 'Руководитель', text: 'Осуществляет мониторинг деятельности с целью выявления препятствий на пути реализации проекта'},
    card2:{ title: 'Создание команды', text: 'Просматривайте нашу сеть специалистов, чтобы создать оптимальную команду для вашего проекта'},
    card3:{ title: 'Карма', text: 'Регулярно оценивает наши таланты, чтобы гарантировать качество'},
    card4:{ title: 'Калькулятор', text: 'Использует данные из прошлых проектов для получения более точных оценок результатов'},
  }
}

const app = createApp(App)

app.use(translateDirective, {en, ru})

app.mount('#app')
