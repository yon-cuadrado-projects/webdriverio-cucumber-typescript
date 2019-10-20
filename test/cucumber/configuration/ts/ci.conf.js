const merge = require('merge');
const stagingConfig = require('./master.conf.js');

localConfig = merge(stagingConfig.config, {
  maxInstances: 3,
  host: 'MacBookMt.local',

  capabilities: [
    {
      browserName: 'firefox'
  }
  ],
});



exports.config = localConfig;

