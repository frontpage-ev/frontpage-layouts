import { Configschema } from 'configschema';
import obsWebsocketJs from 'obs-websocket-js';
import { ItemPosition } from 'types';
import { get as nodecg } from './nodecg';

const config = (nodecg().bundleConfig as Configschema).obs;

// Extending the OBS library with some of our own functions.
class OBSUtility extends obsWebsocketJs {
  /**
   * Change to this OBS scene.
   * @param name Name of the scene.
   */
  async changeScene(name: string): Promise<void> {
    if (!config.enable) {
      // OBS not enabled, don't even try to set.
      return;
    }
    try {
      await this.send('SetCurrentScene', { 'scene-name': name });
    } catch (err) {
      nodecg().log.warn(`[OBS] Cannot change scene [${name}]: ${err.error}`);
    }
  }

  /**
   * Hide this item in the specified OBS scene.
   * @param item Name of the item.
   * @param scene Name of the scene.
   */
  async hideItemInScene(item: string, scene: string): Promise<void> {
    if (!config.enable) {
      // OBS not enabled, don't even try to set.
      return;
    }
    try {
      // @ts-ignore: Typings say we need to specify more than we actually do.
      await this.send('SetSceneItemProperties', {
        item,
        visible: false,
        'scene-name': scene,
      });
    } catch (err) {
      nodecg().log.warn(`[OBS] Cannot hide item [${scene}: ${item}]: ${err.error}`);
    }
  }

  /**
   * Set up game/camera capture in specified OBS scene; turns on, repositions and resizes.
   * @param item Name of the item.
   * @param scene Name of the scene.
   * @param position Position details (x/y/width/height/cropping).
   */
  async setUpCaptureInScene(item: string, scene: string, position: ItemPosition): Promise<void> {
    if (!config.enable) {
      // OBS not enabled, don't even try to set.
      return;
    }
    try {
      await this.send('SetSceneItemProperties', {
        item,
        visible: true,
        'scene-name': scene,
        position: {
          x: position.x,
          y: position.y,
        },
        bounds: {
          x: position.width,
          y: position.height,
        },
        crop: {
          top: position.croptop,
          right: position.cropright,
          bottom: position.cropbottom,
          left: position.cropleft,
        },
        scale: {},
      });
    } catch (err) {
      nodecg().log.warn(`[OBS] Cannot setup item [${scene}: ${item}]: ${err.error}`);
    }
  }
}

const obs = new OBSUtility();
const settings = {
  address: config.address,
  password: config.password,
};

async function connect(): Promise<void> {
  try {
    await obs.connect(settings);
    nodecg().log.info('[OBS] Connection successful');
  } catch (err) {
    nodecg().log.warn('[OBS] Connection error');
    nodecg().log.debug('[OBS] Connection error:', err);
  }
}

if (config.enable) {
  nodecg().log.info('[OBS] Setting up connection');
  connect();
  obs.on('ConnectionClosed', () => {
    nodecg().log.warn('[OBS] Connection lost, retrying in 5 seconds');
    setTimeout(connect, 5000);
  });

  // @ts-ignore: Pretty sure this emits an error.
  obs.on('error', (err) => {
    nodecg().log.warn('[OBS] Connection error');
    nodecg().log.debug('[OBS] Connection error:', err);
  });
}

export default obs;
