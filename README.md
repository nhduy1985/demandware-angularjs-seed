demandware-angularjs-seed
=========================

An AngularJS mini-site for show up data from Demandware

- A Demandware mini-site with AngularJS (Inspired by http://yeoman.io)
- A showcase ecommerce site with frontend requirement
- No need server side scripting (NodeJS or Grunt only for deploy)

Features:

- [x] Twitter Bootstrap 3.x (Inspired by http://www.bootstrapzero.com/bootstrap-template/mpurpose)
- [x] Responsive
- [x] Navigation menu
- [x] Show root categories
- [x] Show category products
- [x] Show standard product detail page
- [ ] Show product page with complex data (variation, set, bundle)
- [ ] Shopping cart
- [ ] Checkout

Screenshots:

Category page screenshot:
![alt text](https://raw.githubusercontent.com/nhduy1985/demandware-angularjs-seed/develop/screenshots/ss_category_1.png "Category Page")

Product page screenshot:
![alt text](https://raw.githubusercontent.com/nhduy1985/demandware-angularjs-seed/develop/screenshots/ss_product_1.png "Product Page")

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

 Appendix
 ========

 1. Enable OCAPI on sandbox
- Step 1: Enable "Client API" https://documentation.demandware.com/DOC3/topic/com.demandware.dochelp/OCAPI/16.5/usage/ClientApplicationIdentification.html
- Step 2: Enable "Open Commerce API" in Business Manager https://documentation.demandware.com/DOC3/topic/com.demandware.dochelp/OCAPI/16.5/usage/OCAPISettings.html with following settings
```
{
  "_v":"16.5",
  "clients":
  [
    {
      "client_id":"your-client-id-registered-on-step-1",
      "allowed_origins":["http://127.0.0.1:9000","your-running-web-app-domain"],
      "resources":
      [
        {
          "resource_id":"/baskets",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*",
          "methods":["get","patch","delete"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/billing_address",
          "methods":["put"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/coupons",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/coupons/*",
          "methods":["delete"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/customer",
          "methods":["put"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/gift_certificate_items",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/items",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/items/*",
          "methods":["patch","delete"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/notes",
          "methods":["post","get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/payment_instruments",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/payment_instruments/*",
          "methods":["patch","delete"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/payment_methods",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/shipments",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/shipments/*",
          "methods":["patch"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/shipments/*/shipping_address",
          "methods":["put"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/shipments/*/shipping_method",
          "methods":["put"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/shipments/*/shipping_methods",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/baskets/*/submit",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/categories/*",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/content/*",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/content_search",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/customers",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/customers/auth",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/customers/password_reset",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/customers/*",
          "methods":["get","patch"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/customers/*/addresses",
          "methods":["get","post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/customers/*/addresses/*",
          "methods":["get","patch","delete"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/customers/*/baskets",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/customers/*/orders",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/customers/*/password",
          "methods":["put"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/customers/*/payment_instruments",
          "methods":["get","post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/customers/*/payment_instruments/*",
          "methods":["get","delete"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/custom_objects/*/*",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/folders/*",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/gift_certificate",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/orders/*",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/orders/*/notes",
          "methods":["get","post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/orders/*/payment_methods",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/orders/*/payment_instruments",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/orders/*/payment_instruments/*",
          "methods":["patch","delete"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/order_search",
          "methods":["post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/product_lists",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/product_lists/*",
          "methods":["get","patch"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/product_lists/*/items",
          "methods":["get","post"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/product_lists/*/items/*",
          "methods":["patch","delete"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id":"/product_search",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/product_search/availability",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":60
        },
        {
          "resource_id":"/product_search/images",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "config":{
            "search_result.hits.image:view_type":"large",
            "search_result.variation_attributes.values.image:view_type":"medium",
            "search_result.variation_attributes.values.image_swatch:view_type":"swatch"
          },
          "cache_time":900
        },
        {
          "resource_id":"/product_search/prices",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":300
        },
        {
          "resource_id":"/product_search/variations",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":887
        },
        {
          "resource_id":"/products/*",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/products/*/images",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/products/*/availability",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "config":{
            "product.inventory.ats.max_threshold" : "99",
            "product.inventory.stock_level.max_threshold" : "99"
          },
          "cache_time":60
        },
        {
          "resource_id":"/products/*/prices",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "config":{
            "product.prices.price_book_ids":"usd-sale-prices,usd-list-prices"
          },
          "cache_time":300
        },
        {
          "resource_id":"/products/*/links",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/products/*/promotions",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/products/*/options",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/products/*/set_products",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/products/*/bundled_products",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/products/*/links",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/products/*/recommendations",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/products/*/variations",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/promotions",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/promotions/*",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/search_suggestion",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)"
        },
        {
          "resource_id": "/sessions",
          "methods":["post"],
          "read_attributes": "(**)",
          "write_attributes": "(**)"
        },
        {
          "resource_id":"/site",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/stores",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        },
        {
          "resource_id":"/stores/*",
          "methods":["get"],
          "read_attributes":"(**)",
          "write_attributes":"(**)",
          "cache_time":900
        }
      ]
    }
  ]
}
```
*Note: the setting above is only for OCAPI 16.5, change the version associate with the config in config.js
