Package.describe({
  summary: "MCMS is a content management system built on top of meteor"
});

Package.on_use(function (api, where) {
  //api.use('', 'client');
  api.add_files('lib/mcms.js', ['client', 'server']);
  api.add_files('client/router.js', 'client');
  api.add_files('client/helpers.js', 'client');
  api.add_files('server/startup.js', 'server');
  api.add_files('server/methods/methods_pages.js', 'server');
  api.add_files('server/models/models.js', 'server');
});

/*
Package.on_test(function (api) {
  api.use('router', 'client');
  api.use('test-helpers', 'client');
  api.use('tinytest', 'client');

  api.add_files('router_tests.js', 'client');
});
*/
