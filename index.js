'use strict';

const SDK = require('inline-sdk');
const CommandType = SDK.CommandType;

const inline = new SDK();

inline.onCommand((type, payload) => {
  if (type !== CommandType.MESSAGE) return;

  inline.sendText(payload.args.join(' '));
});
