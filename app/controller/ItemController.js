Ext.define('Application.controller.ItemController', {
  extend: 'Ext.app.Controller',
  stores: ['ItemStore'],
  models: ['Item'],
  views: ['List']
});