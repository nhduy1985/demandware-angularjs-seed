demandware-angularjs-seed
=========================

An AngularJS mini-site for show up data from Demandware

- A Demandware mini-site with AngularJS
- A showcase ecommerce site with frontend requirement
- No need server side scripting (NodeJS or Grunt only for deploy)

Features:

- [x] Navigation menu
- [x] Show root categories 
- [x] Show category products
- [x] Show standard product detail page
- [ ] Show product page with complex data (variation, set, bundle)
- [ ] Shopping cart
- [ ] Checkout

Requirements
============

*Only for developement and deployment*

1. NodeJS http://nodejs.org
2. Grunt http://gruntjs.com


Installation
============

1. Download the repo
2. Install ``grunt``
 ```
 npm -g grunt-cli
 ```
3. Install packages
 ```
 npm install
 bower install
 ```
4. Configuration
 ```
 //create config file from template
 cp app\scripts\config.js.dist app\scripts\config.js
 
 //configure the config file
 vm app\scripts\config.js
 ```
 
 *Notes:*
 - OCAPI configuration see more at https://info.demandware.com/DOC1/topic/help/OCAPI/13.6/usage/APIUsage.html
 - Don't forget to add runing server to 'allowed_origins' in Business Admin

Running
=======

1. Development
 ```
 grunt server
 ```
 
2. Deployment
 ```
 //Step 1: build the 'dist'
 grunt build
 
 //Step 2: upload the 'dist' to the server
 ```
 