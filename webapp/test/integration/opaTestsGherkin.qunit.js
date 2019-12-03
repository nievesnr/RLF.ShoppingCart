/* global QUnit */

QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/gherkin/opa5TestHarness",
	"sap/ui/rabolagartija/cart/test/integration/GherkinSteps",
	"sap/ui/rabolagartija/cart/test/integration/configureOpa"
], function (testHarness, Steps) {
	"use strict";

	testHarness.test({featurePath: "sap/ui/rabolagartija/cart/test/integration/DeleteProduct", generateMissingSteps : true});
	testHarness.test({featurePath: "sap/ui/rabolagartija/cart/test/integration/BuyProduct", generateMissingSteps : true, steps: Steps});
	testHarness.test({featurePath: "sap/ui/rabolagartija/cart/test/integration/SaveForLater", generateMissingSteps : true});
	testHarness.test({featurePath: "sap/ui/rabolagartija/cart/test/integration/ProductsFilter", generateMissingSteps : true});

	QUnit.start();
});