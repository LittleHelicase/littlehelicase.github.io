
var Metalsmith = require("metalsmith");
var markdown = require("metalsmith-markdown");
var templates = require("metalsmith-templates");
var collections = require('metalsmith-collections');
var permalinks  = require('metalsmith-permalinks');
var less = require("metalsmith-less");
var Handlebars = require('handlebars');
var fs         = require('fs');
var watch = require('metalsmith-watch');
var excerpt = require("metalsmith-excerpts");


Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

Handlebars.registerHelper('link', function(path) {
    return '../../' + path + "/index.html";
});

Metalsmith(__dirname)
  .use(watch({
    pattern: "**/*",
    livereload: true
  })) 
  .use(less({
    pattern: "styles/*.less"
  }))
  .use(markdown())
  .use(permalinks({
    pattern: ":collection/:title"
  }))
  .use(collections({
    posts: {
      sortBy: 'date',
      reverse: true
    }
  }))
  .use(excerpt())
  .use(templates('handlebars'))
  .destination('.build')
  .build(function(err, files){
    if (err){ console.log(err); }
  });
