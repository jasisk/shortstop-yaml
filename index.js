const handlers = require('shortstop-handlers');
const caller = require('caller');
const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

module.exports = function createParser(basedir) {
  const resolver = handlers.path(basedir || path.dirname(caller()));

  return function yamlParser(path, cb) {
    const filename = resolver(path);

    fs.readFile(filename, parse);

    function parse(err, contents) {
      const opts = {filename};

      if (err) return cb(err);

      try {
        const parsed = yaml.safeLoad(contents, opts);
        return cb(null, parsed);
      } catch (e) {
        return cb(e);
      }
    }
  }
}
