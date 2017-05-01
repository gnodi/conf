'use strict';

const Ajv = require('ajv');

exports.get = function get(key, schema) {
  const ajv = new Ajv({coerceTypes: 'array'});
  const data = {};

  const value = ajv.validate(schema, data);

  console.log(value);
};