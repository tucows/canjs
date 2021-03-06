var can = require("can-util/namespace");

require("can-component");
require("can-route");
require("can-stache");
require("can-stache-bindings");
require("can-compute");
require("can-event");
require("can-view-model");

// Extra stuff
require("can-map");
require("can-list");
require("can-connect/can/model/model");
require("can-jquery");
require("can-fixture");

// Legacy namespacing for these
can.view.attr = can.view.callbacks.attr;
can.view.tag = can.view.callbacks.tag;

module.exports = can;
