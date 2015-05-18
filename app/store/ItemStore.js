Ext.define('Application.store.ItemStore', {
  extend: 'Ext.data.Store',
  model: 'Application.model.Item',
  storeId: 'ItemStore',
  sorters: [{
    property: 'no',
    direction: 'DESC'
  }],
  proxy: {
    type: 'ajax',
    url: 'data/items.php',
    reader: {
      type: 'json',
      root: 'activities'
    }
  }
});

