const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'en-US',
  title: 'Meta Belarus',

  theme: path.resolve(__dirname, './theme'),
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Meta Belarus',
      description: 'Digital State for the New Belarus',
    },
    '/ru/': {
      lang: 'ru-BY',
      title: 'Мэта Беларусь',
      description: 'Цифровое Государство Новой Беларуси',
    },
  }
}
