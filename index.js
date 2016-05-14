'use strict';

const SDK = require('inline-sdk');
const CommandType = SDK.CommandType;

const inline = new SDK();

inline.onCommand((type, payload, context) => {
  if (type !== CommandType.MESSAGE) return;

  context.sendText(payload.args.join(' '));
});
