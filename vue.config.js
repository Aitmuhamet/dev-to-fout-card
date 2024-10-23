module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dev-to-fout-card/' // замените на имя вашего репозитория
    : '/'
}
