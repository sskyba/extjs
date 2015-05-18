Ext.define('Application.view.List', {
  extend: 'Ext.Panel',
  alias : 'widget.itemList',
  title : 'Items',
  header: false,
  autoScroll: true,

  config: {
    items:  [
      new Ext.DataView({
        store : Ext.create("Application.store.ItemStore", {
          autoLoad: true
        }),
        tpl   : new Ext.XTemplate(
          '{% var i = 0, iBoxX=0, iBoxY=0, iLineX=0, iLineY=0; %}',
          '<div class="container">',
            '<div class="verticalLine"></div>',
            '<tpl for=".">',
              '{% iBoxX=(i%2==0)?0:400; iBoxY=i*120+20; iLineX=(i%2==0)?200:300; iLineY=iBoxY+50; i++; %}',
              '<div class="box" id="box{[i]}" style="top: {[iBoxY]}px; left: {[iBoxX]}px">',
                '<div class="activity">Activity {no}</div>',
                '<div class="date">Date: {date:date("m/d/Y")}</div>',
                '<div class="username">Username: {username}</div>',
                '<div class="button" onClick="Ext.Msg.alert(\'Name\', \'Activity {no}\')">Open</div>',
              '</div>',
              '<div class="line" id="line{[i]}" style="top: {[iLineY]}px; left: {[iLineX]}px "></div>',
            '</tpl>',
          '</div>'
        )
      })        
    ]
  }
});