Ext.define('Application.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: {
    type: 'fit'
  },
  autoScroll: false,
  width: "100%",
  items: [
    {
      xtype: 'itemList',
      id: 'itemListCmp'
    }
  ]
});