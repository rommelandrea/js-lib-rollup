import tap from 'tap'
import { Hello, Goodbye } from '../src/index.js'

tap.test('Testing the export of libraries', async () => {
  const h = new Hello()
  const g = new Goodbye();
  tap.equal(h.sayHello(), 'hello pippo', 'Test sayHello without param')
  tap.equal(g.sayGoodbye(), 'goodbye pippo', 'Test sayHello without param')
})
