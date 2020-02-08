/* eslint-disable global-require */

import { NodeCG } from 'nodecg/types/server';
import { set } from './util/nodecg';

export = (nodecg: NodeCG): void => {
  set(nodecg);

  require('./layouts');
  require('./tracker');
  require('./music');
  require('./streamdeck-buttons');
  require('./timer');
  require('./logging');
  require('./sponsors');
  require('./video-player');
  require('./tts-donations');
  require('./twitch-ext');
  require('./fcb');
};
