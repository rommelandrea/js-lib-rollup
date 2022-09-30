import tap from 'tap'
import Hello from '../../src/hello/index.js'

tap.test('Testing the export of libraries', async () => {
  const h = new Hello()
  tap.equal(h.sayHello(), 'hello pippo', 'Test sayHello without param')
})
