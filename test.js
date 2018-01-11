import { serial as test } from 'ava';

test('Log an object', (t) => {
  const myObject = { a: 1 };
  t.log(myObject);
  t.is(true, true);
});

