global.expect = require('expect')

const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')
const scripts = [
  path.resolve(__dirname, '..', 'js', 'selectors.js'),
  path.resolve(__dirname, '..', 'js', 'jquery-2.1.1.min.js')
]

global.$
jsdom({ html, scripts })

before(() => {
  $ = require('jquery')
})
