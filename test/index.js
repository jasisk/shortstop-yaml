const test = require('tap').test;
const thunk = require('../');

const good = (path, basedir) => t => {
  thunk(basedir)(path, (err, parsed) => {
    t.error(err);
    t.equal(parsed.root.key, 'value');
    t.end();
  });
};

const bad = (path, basedir) => t => {
  thunk(basedir)(path, err => {
    t.ok(err);
    t.end();
  });
};

test('parse yaml', t => {
  t.test('implicit basedir', good('mocks/good.yaml'));
  t.test('explicit basedir', good('mocks/good.yaml', __dirname));
  t.test('bad yaml', bad('mocks/bad.yaml'));
  t.end();
});

test('bad path', bad('not-a-real-file.yaml'));
