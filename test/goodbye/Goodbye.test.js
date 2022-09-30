import tap from 'tap'
import Goodbye from '../../src/goodbye/Goodbye.js'

// const { Goodbye } = require('../../src')

tap.test('Test sayGoodbye', async () => {
  tap.equal((new Goodbye()).sayGoodbye(), 'goodbye pippo', 'Call sayGoodbye without agruments')
  tap.equal((new Goodbye()).sayGoodbye('andrea'), 'goodbye andrea', 'Call sayGoodbye with andrea as argument')
})
