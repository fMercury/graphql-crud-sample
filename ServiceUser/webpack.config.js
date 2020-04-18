const path = require('path')

module.exports = {
  entry: {
    'main.js': [
      path.resolve(__dirname, 'index.js'),
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../public')
  }
}
