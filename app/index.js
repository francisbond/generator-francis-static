'use strict';

var yeoman = require('yeoman-generator'),
    yosay = require('yosay');

var FrancisStaticGenerator = yeoman.generators.Base.extend({
  init: function() {
    this.pkg = require('../package.json');
  },

  promptTask: function() {
    var done = this.async();

    this.log(yosay('You\'re using Francis Bond\'s fantastic Static generator.'));

    this.prompt([{
      name: 'slug',
      message: 'Enter a unique slug for this project',
    }, {
      name: 'staging',
      message: 'Enter the hostname of the dokku staging server',
      default: 'staging.francisbond.com'
    },
    {
      name: 'production',
      message: 'Enter the hostname of the dokku production server',
      default: 'static.francisbond.com'
    }], function(props) {
      this.slug = props.slug;
      this.remoteStaging = props.staging;
      this.remoteProduction = props.production;

      done();
    }.bind(this));
  },

  gulp: function() {
    this.template('gulpfile.js', 'gulpfile.js');
  },

  git: function() {
    this.copy('gitignore', '.gitignore');
    this.copy('gitattributes', '.gitattributes');
  },

  package: function() {
    this.copy('_package.json', 'package.json');
  },

  extras: function() {
    this.copy('editorconfig', '.editorconfig');
    this.copy('env', '.env');
  },

  public: function() {
    this.mkdir('public');
    this.write('public/.gitkeep', '');
  },

  install: function() {
    this.installDependencies();
  }
});

module.exports = FrancisStaticGenerator;
