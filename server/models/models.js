Meteor.publish("page", function (show) {
  if(!show){
    console.log('error when publishing pages, show is missing');
    throw new Meteor.Error(666, 'args for pages modelsubscription missing');
    return false;
  }
  return MCMS.collections.Pages.findOne({slug: show, published: true});
});

Meteor.publish('allpages', function () {
  return MCMS.collections.Pages.find();
});
