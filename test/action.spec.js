import test from 'ava';
import { action } from 'actions';

test('returns payload', t => {
  t.deepEqual(
    action('FOO', 'bar'),
    { type: 'FOO', payload: 'bar' }
  );
});

test('skips payload if it\'s not defined', t => {
  t.deepEqual(
    action('FOO'),
    { type: 'FOO' }
  );
});

test('doesn\'t skip a falsy, but defined payload', t => {
  t.deepEqual(
    action('FOO', false),
    { type: 'FOO', payload: false }
  );
});
