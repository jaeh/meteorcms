Meteor.publish("page", function (show) {
  if(!show){
    console.log('error when publishing pages, show is missing');
    throw new Meteor.Error(666, 'args for pages modelsubscription missing');
    return false;
  }
  
  return MCMS.collections.Pages.findOne({slug: show, published: true});
});

Meteor.publish('allpages', function (language) {
  if(!language)
    language = MCMS.default_language;
  
  return MCMS.collections.Pages.find();
});


Meteor.publish('alltranslatedpages', function (language) {
  if(!language)
    language = MCMS.default_language;
  
  var pages = MCMS.collections.Pages.find();
  
  var pages_in_language = [];
  
  _.each(pages, function (page) {
    pages_in_language.push(page[language]);
  });
  
  return pages_in_language;
  
});
