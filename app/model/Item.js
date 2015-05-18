Ext.define('Application.model.Item', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'no',       type: 'int' },
    { name: 'date',     type: 'date' },
    { name: 'username', type: 'string' }
  ]
});