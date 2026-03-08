/** @type {import('npm-check-updates').RcOptions } */
module.exports = {
  target: (name) => {
    if (name === '@types/node' || name === 'react' || name === 'react-dom' || name === '@types/react' || name === '@types/react-dom') {
      return 'minor'
    }
    return 'newest'
  },
  cooldown: 7,
}
