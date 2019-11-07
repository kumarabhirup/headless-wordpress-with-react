require('dotenv').config()
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  target: 'serverless',
  env: {
    WP_URL: process.env.WP_URL,
  },
  cssModules: true,
})
