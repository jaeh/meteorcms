"use strict";

Meteor.subscribe('allpages', pages_loaded);

var pages_have_loaded = false;

function pages_loaded() {
  pages_have_loaded = true;
  
  var page = MCMS.collections.Pages.findOne({slug:MCMS.Router.current_page()});
  if(!Template[MCMS.Router.current_page()] && !page) {
    MCMS.Router.navigate('404', {trigger: true});
  }
}

var MCMSRouter = FilteredRouter.extend({
  initialize: function() {
    FilteredRouter.prototype.initialize.call(this);
    this.filter(this.require_login, {only: ['welcome']});
  },
  
  require_login: function(page) {
    var username = Session.get('username');
    if (username) {
      return page;
    } else {
      return 'sign_in';
    }
  },
  routes: {
    ':controller': 'controller',
    ':controller/:action': 'action',
    ':controller/:action/*subaction': 'subaction',
    '': 'home'
  },
  home: function() { 
    this.goto('home');
  },

  controller: function(controller) { 
    this.goto(controller);
  },
  action: function(controller,action) { 
    this.goto(controller+'/'+action); 
    
  },
  subaction: function(controller,action,subaction) { this.goto(controller+'/'+action+'/'+subaction); }
})

MCMS.Router = new MCMSRouter();

Meteor.startup(function() {
  Backbone.history.start({pushState: true});
});
