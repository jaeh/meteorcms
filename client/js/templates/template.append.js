//template vars
//header prepend and append
//Template.header = {};
Template.header.prepend = [];
Template.header.append = [];

//footer prepend and append
Template.footer.prepend = [];
Template.footer.append = [];
Template.footer.extend = [];

Template.header.append.push({content: '<div id="bla">header append</div>'});
Template.footer.append.push({content: '<div id="bla">header append 2</div>'});


Template.footer.extend.push({content: '&copy; 2011-2012 meteorcms.com'});


//custom menu array to put in menu items, menu id and stuff like that
Template.header.custom_menu = [];

