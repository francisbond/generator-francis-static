generator-francis-static
===========================

[Francis Bond's](http://francisbond.com) [Yeoman](http://yeoman.io) generator for deploying a static website with [Gulp](http://gulpjs.com/).

## Features

* Deploy to a Dokku-powered server

## Initialization

* Install: `npm install -g francisbond/generator-francis-static`
* Run: `yo francis-static`
* Use `gulp deploy-init` to initalise a deployment environment
* Run `gulp deploy` after committing changes to deploy them

### Requirements
* gulp.js should be installed globally via npm.

## Available Commands

### Deployment

* `gulp deploy-init`

  Initialize a Dokku container for use in the project's deployment.

  1. Adds a git remote corresponding with the Dokku server.
  2. Pushes the repository to the Dokku remote.
  3. Defines a Buildpack for Dokku to use in the project's deployment.

* `gulp deploy`

  Pushes the repository to the Dokku remote.

### Miscellaneous

* `npm install`

  Install project-specific npm packages defined in the package.json. You should run this command when cloning an already initialized repository.

## Known Issues

* Rerunning `gulp deploy-init` will fail, since a Dokku remote has already been created. Running `git remote remove dokku` will resolve this.
* `gulp deploy` will sometimes fail if a newer commit has been deployed but not pushed to the repository. You can override this by running `git push origin dokku --force`.