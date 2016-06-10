import test from 'ava';
import { action } from 'actions';

// does the result action have the given payload?
test('returns payload', t => {
  t.deepEqual(
    action('FOO', 'bar'),
    { type: 'FOO', payload: 'bar' }
  );
});

// we don't want to set an unefined payload,
// we'd rather skip it in that case
test('skips payload if it\'s not defined', t => {
  t.deepEqual(
    action('FOO'),
    { type: 'FOO' }
  );
});

// but we do want it to return other falsy values, like 0 or false
test('doesn\'t skip a falsy, but defined payload', t => {
  t.deepEqual(
    action('FOO', false),
    { type: 'FOO', payload: false }
  );
});
