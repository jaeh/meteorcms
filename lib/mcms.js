"use strict";
//this is the global MCMS namespace object.
var MCMS = {};

MCMS.default_language = 'en';
MCMS.language = 'en';
if(Meteor.is_client) {
  Session.set('language', 'en');
}

MCMS.plugins = {};
MCMS.themes = {};

MCMS.debug = true;


MCMS.special_chars = {"\u00e4":"ae", "\u00fc":"ue", "\u00f6":"oe", "\u00df":"ss" };

MCMS.slugify = function(slug) {
  //first replace spaces with underscores and lowercase the slug
   slug = slug.replace(/\s/g, '_').toLowerCase();
   
  //replace äüö with ae ue and oe for german titles
  //later add support for more/other special chars defined in the admin interface 
  //removing the need of adding them all here and always test against those that we need to test against
  slug = slug.replace(/[\u00e4|\u00fc|\u00f6|\u00df]/g, function($0) { return MCMS.special_chars[$0] });
  
  //remove all remaining specialchars, i dont like multiple underscores, so replace with nothing?
  slug = slug.replace(/[^a-z0-9_]+/g, '');
  
  return slug;
}

MCMS.isType = function(item, object_types) {
  
  //first make an array of object_types if it isnt one already
  if(typeof object_types === 'array' === -1 && typeof object_types === 'object' === -1) {
    object_types = [object_types];
  }
  
  //this bool will be true if typeof item == the type we look for
  var is_type = false;
  
  //loop to determine if the object has one of the passed types
  for(var k in object_types) {
    if(typeof item === object_types[k] !== -1) {
      
      //if the object has one of the passed types, return true
      is_type = true;
      //and break this loop
      break;
    }
  }
  //return a bool telling if the types matched or not
  return is_type;
}

MCMS.isArray = function(item) {
  //check if object is object or array (iteratable)
  if(typeof item === Array !== -1 || typeof item === Object !== -1) {
    //if there are more than 0 items.
    if(item.length > 0){
      return true;
    }
  }
  return false;
}

MCMS.getPageContent = function(pathname) {
  var page = MCMS.collections.Pages.findOne({slug: pathname});
  
  if(page && page.languages && page.languages[MCMS.language]) {
    return page.languages[MCMS.language];
  }
  
}

MCMS.get_page_content = function (field) {
    
  if(MCMS.Router) {
    var pathname = MCMS.Router.current_page();
    
    var page = MCMS.collections.Pages.findOne({slug: pathname});

    //console.log('page =');
    //console.log(page);
    
    if(page && page.languages[MCMS.language] && page.languages[MCMS.language][field]) {
      
      return page.languages[MCMS.language][field];
    }
    
    if(pages_have_loaded && !page) {
      MCMS.Router.navigate('404', {trigger: true});
    }
  }
  return '';
}

MCMS.log = function(log) {
  if(MCMS.debug) {
    console.log('log: '+log);
  }
}

MCMS.checkAuth = function(userId) {
  return Meteor.user();
}

//wrapper to create database collections
MCMS.Collection = function(name, manager, driver) {
  if(Meteor.is_server) {
    Meteor.startup(function () {
      _.each(['insert', 'update', 'remove'], function(method) {
        Meteor.default_server.method_handlers['/' + name + '/' + method] = function() {};
      });
    });
  }
  return new Meteor.Collection(name, manager, driver);
}


MCMS.collections = {};

//defining the db models:
MCMS.collections.Pages = MCMS.Collection('pages');
MCMS.collections.PageContents = MCMS.Collection('pagecontents');

MCMS.collections.Menus = MCMS.Collection('menus');
MCMS.collections.MenuItems = MCMS.Collection('menuitems');


//run once after the first startup then comment or delete:
/*
if(Meteor.isClient) {
  Meteor.startup(function () {
    console.log('meteor =');
    console.log(Meteor);
    Meteor.createUser({username:'ja_admin', password: 'testing'},{role: 'admin'}, created);
    
    Meteor.subscribe('users',function() {
      var users = users.find();
      console.log(users);
    });
  });
}

  function created(error) {
    if(error) {
      console.log(error);
    }else{
      console.log('user created');
    }
  }
*/
