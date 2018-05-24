# WooCommerce cart cookie creation consent
(That's a lot of 'c's)

A quick and basic WordPress plugin that offers up a Javascript confirmation dialogue before a user adds an item into their WooCommerce cart.

GDPR laws state that users must give explicit consent before cookies are stored on their machines, so this plugin checks for existing WooCommerce cart cookies and if one isn't found, asks the users whether it's okay to create one. If the user agrees, the item is added to the cart, if they decline, no cookie is created.

This plugin uses plain Javascript to find the two most common classes attached to '<b>Add to cart</b>' buttons in WooCommerce, and adds a <i>click event</i>.

It's only been tested on two sites, and was knocked up in a last-minute GDPR frenzy, so please use with discretion.
