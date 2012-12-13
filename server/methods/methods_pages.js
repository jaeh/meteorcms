"use strict";

Meteor.methods({
  insertPage: insertPage,
  updatePage: updatePage,
  removePage: removePage
});

function insertPage(args) {
  if(user = MCMS.checkAuth(args.auth)) {
    var published = args.published;
    var slug = args.slug;
    var languages = args.languages;
    
    var pageId = MCMS.collections.Pages.insert({
      published: published,
      slug: MCMS.slugify(args.slug),
      languages: languages
    });
    return pageId;
  }
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
}

function updatePage(args) {
  if(user = MCMS.checkAuth(args.auth)) {
    charId = MCMS.collections.Pages.update({_id: args._id},{$set: {
      name: args.name,
      level: args.level
    }});
    
    return charId;
  }
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
}

function removePage(args) {
  if(user = MCMS.checkAuth(args.auth)) {
    console.log("removePage");
    Pages.remove({_id: args._id});
    return true;
  }
  throw new Meteor.Error(401, 'You are not logged in');
  return false;
}
