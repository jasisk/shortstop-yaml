# shortstop-yaml

[![Build Status](https://travis-ci.org/jasisk/shortstop-yaml.svg?branch=master)](https://travis-ci.org/jasisk/shortstop-yaml)

### Example

``` js
const shortstop = require('shortstop');
const yaml = require('shortstop-yaml');

const resolver = shortstop.create();

resolver.use('yaml', yaml());

resolver.resolve({obj: 'yaml:path/to/file.yaml'}, (err, contents) => {
  // ...  
});
```
