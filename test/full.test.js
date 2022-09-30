import tap from 'tap'
import {Hello} from '../src/hello/index.js'

tap.test('Testing the export of libraries', async () => {
  let h = new Hello()
  console.log(h.sayHello())
})

