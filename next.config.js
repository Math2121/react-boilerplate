//eslint-disable-next-line
const withPWA = require('next-pwa')
const isPRod = process.env.NODE_ENV === 'production'
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isPRod
  }
})
