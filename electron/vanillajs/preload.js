const { contextBridge } = require('electron/renderer');
const path = require('node:path');
const { QuikDB, CanisterMethod } = require(path.resolve(__dirname, 'node_modules/quikdb-cli-beta/v1/sdk'));

const quikdb = new QuikDB();

contextBridge.exposeInMainWorld('quikdbAPI', {
 init: async () => {

    try {
      const result = await quikdb.init();

      const owner = await quikdb.callCanisterMethod(CanisterMethod.GetOwner, []);

      return { success: true, data: owner };
    } catch (error) {
      return { success: false, error: error.message || 'An error occurred' };
    }
  },
});
