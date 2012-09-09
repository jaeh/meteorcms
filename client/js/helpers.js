"use strict";
if(Handlebars) {
  
  Handlebars.registerHelper('render_or_404',function() {
    var pathname = MCMS.Router.current_page();
    
    if(Template[pathname]) {
      return Template[pathname]();
    }
    if(Template.static_page) {
      return Template.static_page();
    }
  });
      
  Handlebars.registerHelper('current_page_content', function(field) {
    return MCMS.get_page_content(field);
  });
  
  Handlebars.registerHelper('page_list', function () {
    if(this && MCMS.isType(this.type, 'string')) {
      if(this.type === 'table') {
        return Template.page_list_table({list: this});
      }else if(this.type === 'list') {
        return Template.page_list_list({list: this});
      }else if(this.type === 'form') {
        return Template.page_list_form({form: this});
      }
    }
  });
}
