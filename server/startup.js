"use strict";

Meteor.startup(function() {
  if(!MCMS.collections.Pages.findOne()) {
    
    var pageHomeId = MCMS.collections.Pages.insert( {
      slug: 'home',
      published: true,
      en: {
        title: 'welcome to meteorcms',
        menutext: 'home',
        body: '<p>this is the home page of meteorcms.com</p>'+
              '<p>meteorcms or MCMS in short will soon be an awesome (i promised) content management system built on top of <a href="http://nodejs.org">nodejs</a> and <a href="http://meteor.com">meteor</a>.</p>'+
              '<p>this will soon become a collection of <a href="http://oortcloud.github.com/meteorite/">meteorite (mrt)</a> packages to be used independently of each other.</p>',
        footer: ''
      },
      de: {
        title: 'willkommen bei meteorcms',
        menutext: 'startseite',
        body: '<p>dies ist die startseite von meteorcms.com</p>'+
              '<p>meteorcms, kurz MCMS, wird bald ein brilliantes(ich habs versprochen) content verwaltungs system, gebaut mit <a href="http://nodejs.org">nodejs</a> und <a href="http://meteor.com">meteor</a>.</p>'+
              '<p>ziel des projektes ist eine sammlung von  <a href="http://oortcloud.github.com/meteorite/">meteorite (mrt)</a> packages die voneinander unabhängig verwenden können.</p>',
        footer: ''
      }
    });
  
 
    var pageAboutId = MCMS.collections.Pages.insert({
      menu: 'main',
      slug: 'about',
      published: true,
      en: {
        title: 'about meteorcms',
        image: '/about.png',
        menutext: 'about',
        body: '<p>this page will give some informations about current and future features of meteorcms</p>', 
        footer: '<p>i hope this few lines of text were able to give you a picture of what my intentions with meteorcms are.</p>',
        
        page_lists: [ 
          { type: 'table', title: 'current features', slug: 'current_features',
            items: [
              {tbl_items: [{type: 'title', text: 'meteor features'}, {type: 'body', text: 'meteorcms inherits all those awesome features of meteor. just take a look at <a href="http://meteor.com">the meteor feature list</a> for more information.'}]},
              {tbl_items: [{type: 'title', text: 'routing'}, {type: 'body', text: 'meteorcms includes a reactive router that will render templates directly or will render a static page layout that gets populated from the db or render a custom template with database content'}]}
            ]
          },
          { type: 'table', title: 'future features', slug: 'future_features',
            items: [
              {tbl_items: [{type: 'title', text: 'plugins'}, {type: 'body', text: 'plugin functionality. meteor plugins come as <a href="http://oortcloud.github.com/meteorite/">meteorite</a> packages, adding a plugin is as simple as doing "mrt add pluginname" from the shell.'}]},
              {tbl_items: [{type: 'title', text: 'themes'}, {type: 'body', text: 'the theme system is as simple as the plugin system. just do a mrt add themename to get new themes.'}]}
            ]
          }
        ]
      },
      de: {
        title: 'über meteorcms',
        image: '/me.png',
        menutext: 'über',
        body: '<p>diese seite wird informationen über momentane und zukünftige funktionen von meteorcms geben.</p>', 
        footer: '<p>ich hoffe diese paar zeilen text konnten ein einigermaßen akkurates bild meiner intentionen hinter meteorcms geben.</p>',
        
        page_lists: [ 
          { type: 'table', title: 'momentane funktionen', slug: 'current_features',
            items: [
              {tbl_items: [{type: 'title', text: 'meteor funktionen'}, {type: 'body', text: 'meteorcms erbt all die genialen fähigkeiten von meteor. einen überblick bietet <a href="http://meteor.com">die meteor funktionsliste</a> und die <a href="http://docs.meteor.com">meteor dokumentation</a>.'}]},
              {tbl_items: [{type: 'title', text: 'routing'}, {type: 'body', text: 'meteorcms beinhaltet einen reaktiven router, der templates, statische seiten aus der datenbank oder templates und datenbank inhalte laden und darstellen kann.'}]}
            ]
          },
          { type: 'table', title: 'zukünftige funktionen', slug: 'future_features',
            items: [
              {tbl_items: [{type: 'title', text: 'plugins'}, {type: 'body', text: 'plugin funktinalität. meteor plugins kommen in der form von <a href="http://oortcloud.github.com/meteorite/">meteorite</a> packages, ein plugin hinzuzufügen ist simpel: "mrt add pluginname" aus der linux shell.'}]},
              {tbl_items: [{type: 'title', text: 'themes'}, {type: 'body', text: 'das theme system ist so simpel wie das plugin system. auch themes werden durch ein einfaches "mrt add themename" hinzugefügt.'}]}
            ]
          }
        ]
      }
    });
    
    
    
    var pageContactId = MCMS.collections.Pages.insert({
      menu: 'main',
      slug: 'contact',
      published: true,
      en: {
        title: 'contact',
        menutext: 'contact',
        body: '<p>if you want to get in touch with us:</p><p>mail to <a href="mailto:team@meteorcms.com">team@meteorcms.com</a></p>',
        footer: 'i hope you could find a way to contact us that suits you.',
        page_lists: [
          /*{ type: 'list', title: 'social networks', slug:'social_networks',
            items: [
              {href: 'http://facebook.com/manarius.van.klyst', text: 'facebook'},
              {href: 'https://plus.google.com/108989470337499589626/posts', text: 'google+'},
              {href: 'https://github.com/manarius/', text: 'github'}
            ]
          },*/
          { 
            type: 'form',  
            title: '', 
            slug:'contact_form', 
            id: 'contact-form', 
            method: 'post', 
            action: '#',
            legend: 'you can send us a mail using this form:',
            items: [
              {label: 'your email', type: 'text', css_id: 'from', value: ''}, 
              {label: 'the url of your homepage (optional)', type: 'text', css_id: 'url', value: ''},
              {label: 'subject', type: 'text', css_id: 'subject', value: ''},
              {label: 'content', type: 'text', css_id: 'content', value: ''},
              {label: false, type: 'submit', css_id: 'submit', value: 'send mail'}    
            ]
          }
        ]
      },
      de: {
        title: 'kontakt',
        menutext: 'kontakt',
        body: '<p>wenn du uns kontaktieren willst:</p><p>mail an <a href="mailto:team@meteorcms.com">team@meteorcms.com</a></p>',
        footer: 'ich hoffe da war jetzt eine möglichkeit dabei, die du nutzen kannst.',
        
        page_lists: [
          /*{ type: 'list', title: 'netzwerke', slug:'social_networks',
            items: [
              
              {href: 'http://facebook.com/manarius.van.klyst', text: 'facebook'},
              {href: 'https://plus.google.com/108989470337499589626/posts', text: 'google+'},
              {href: 'https://github.com/manarius/', text: 'github'}
            ]
          },*/
          { 
            type: 'form', 
            title: '', 
            slug:'contact_form', 
            css_id: 'form-mail',
            method: 'post',
            action: '#',
            legend: 'du kannst mir auch eine nachricht mit folgendem formular schicken:',
            items: [
              {label: 'deine email', type: 'text', css_id: 'from', value: ''},
              {label: 'die url deiner webseite (optional)', type: 'text', css_id: 'url', value: ''},
              {label: 'titel', type: 'text', css_id: 'subject', value: ''},
              {label: 'text', type: 'text', css_id: 'content', value: ''},
              {type: 'submit', css_id: 'submit', value: 'mail abschicken'}
            ]
          }
        ]
      }
    });
    
    
    var pageFaqId = MCMS.collections.Pages.insert({
      menu: 'main',
      slug: 'faq',
      published: true,
      en: {
        title: 'faq - frequently asked questions',
        menutext: 'faq',
        body: '<p>the faq targets to answer the most frequent questions. if you have one more feel free to file an issue with github.</p>',
        footer: 'this is the end of the faq. any more questions? just <a href="/contact">contact</a> us.'
      },
      de: {
        title: 'hgf - häufig gestellte fragen',
        menutext: 'fragen',
        body: '<p>the hgf(faq) versucht, die häufigsten fragen zu beantworten. wenn du weitere fragen hast, kannst du ein issue auf github erstellen.<p>',
        footer: 'dies ist das ende der hgf. noch mehr fragen? <a href="/contact">kontaktiere</a> uns einfach.'
      },
    });
    
    
    var pageImpressumId = MCMS.collections.Pages.insert({
      menu: 'footer',
      slug: 'impressum',
      published: true,
      en: {
        title: 'impressum',
        menutext: 'impressum',
        body: '<p>responsible for the contents on this page: jascha ehrenreich</p>'+
              '<p>email: jascha@jaeh.at</p>'+
              '<p>letters for me will be accepted at the:</p>'+
              '<p>metalab, rathausstrasse 6, 1010 wien, &ouml;sterreich</p>',
        footer: 'this stuff has to be here to make sure there is someone to contact. this page has to be named impressum, as if the contact page would not be enough. there also has to be a postal address. there should also be a paragraph explaining why. which this paragraph just did.'
      },
      de: {
        title: 'impressum',
        menutext: 'impressum',
        body: '<p>verantwortlich für die inhalte dieser seite: jascha ehrenreich</p>'+
              '<p>email: jascha@jaeh.at</p>'+
              '<p>briefe für mich werden akzeptiert im:</p>'+
              '<p>metalab, rathausstrasse 6, 1010 wien, &ouml;sterreich</p>',
        footer: 'diese seite muss vorhanden sein, um einen kontakt zu ermöglichen. diese seite muss impressum heissen. auf dieser seite muss ebenfalls eine postalische adresse vorhanden sein. auf dieser seite sollte sich auch ein paragraph befinden, der erklärt, dass dies so ist. was dieser paragraph gerade getan hat.'
      }
    });
  
    var page404Id = MCMS.collections.Pages.insert({
      slug: '404',
      published: true,
      en: {
        title: 'This has gone terribly, horribly wrong.',
        menutext: '404',
        image: '/404.png',
        body: '<p>even rainbow dash is crying as you can see.</p>'+
              '<p>please forgive this small mistake, if you think something is wrong here please feel free to just use the <a href="/contact">contact</a> page to send me a message</p>',
        footer: 'Sorry for that mistake. I blame the coffee, err the sleepless nights, err my incompleteness as a human being, err some power in the universe that wants to keep this page from loading or something completely else. at least i have something to blame. sorry again.'
      },
      de: {
        title: 'da scheint was fürchterlich schief gegangen zu sein.',
        menutext: '404',
        image: '/404.png',
        body: '<p>sogar rainbow dash muss darüber weinen.</p>'+
              '<p>bitte vergib mir diesen kleinen fehler, wenn du glaubst, dass hier etwas falsch ist, kannst du mir eine nachricht über die <a href="/contact">kontakt</a> seite schicken</p>',
        footer: 'ich beschuldige übrigens den kaffee, ääh die schlaflosen nächte, ääh meine unvollkommenheit als menschliches wesen, ääh irgendsoeine kraft im universum die diese seite vom laden abhalten will oder auch irgendwas komplett anderes. zumindest habe ich etwas dem ich die verantwortung für diesen fehler zuschieben kann.'
      }
    });
  
    console.log('Added '+MCMS.collections.Pages.find().count()+" Pages");
    /*adding page lists */
      
    var menuMainId = MCMS.collections.Menus.insert({
      slug: 'main'
    });
    
      MCMS.collections.MenuItems.insert({menuId: menuMainId, menuSlug: 'main', slug: 'about', text: 'about', language: 'en'});
      MCMS.collections.MenuItems.insert({menuId: menuMainId, menuSlug: 'main', slug: 'about', text: 'über', language: 'de'});
      MCMS.collections.MenuItems.insert({menuId: menuMainId, menuSlug: 'main', slug: 'faq', text: 'faq', language: 'en'});
      MCMS.collections.MenuItems.insert({menuId: menuMainId, menuSlug: 'main', slug: 'faq', text: 'fragen', language: 'de'});
      MCMS.collections.MenuItems.insert({menuId: menuMainId, menuSlug: 'main', slug: 'contact', text: 'contact', language: 'en'});
      MCMS.collections.MenuItems.insert({menuId: menuMainId, menuSlug: 'main', slug: 'contact', text: 'kontakt', language: 'de'});
      
    
    var menuFooterId = MCMS.collections.Menus.insert({
      slug: 'footer'
    });
    
      MCMS.collections.MenuItems.insert({menuId: menuFooterId, menuSlug: 'footer', slug: 'impressum', text: 'impressum', language: 'en'});
      MCMS.collections.MenuItems.insert({menuId: menuFooterId, slug: 'impressum', text: 'impressum', language: 'de'});
      
   
    console.log('Added '+MCMS.collections.Menus.find().count()+" menus");
    console.log('Added '+MCMS.collections.MenuItems.find().count()+" menuitems");
  
    console.log('setup done'); 
  }
  /*
  if(MCMS.collections.Pages.find().count() > 0 ) {
      
    MCMS.collections.Pages.allow({
      insert: function () { return false; },
      update: function () { return false; },
      remove: function () { return false; }
    });
    MCMS.collections.PageLists.allow({
      insert: function () { return false; },
      update: function () { return false; },
      remove: function () { return false; }
    });
    
    MCMS.collections.PageListItems.allow({
      insert: function () { return false; },
      update: function () { return false; },
      remove: function () { return false; }
    });
    
    MCMS.collections.Menus.allow({
      insert: function () { return false; },
      update: function () { return false; },
      remove: function () { return false; }
    });
    MCMS.collections.MenuItems.allow({
      insert: function () { return false; },
      update: function () { return false; },
      remove: function () { return false; }
    });
  }*/
});

