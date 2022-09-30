import tap from 'tap';
import Goodbye from "../../src/goodbye/Goodbye.js";

tap.test('Test sayGoodbye', async () => {
  tap.equal((new Goodbye()).sayGoodbye(), 'goodbye pippo', 'Call sayGoodbye without agruments');
  tap.equal((new Goodbye()).sayGoodbye('andrea'), 'goodbye andrea', 'Call sayGoodbye with andrea as argument');
});
