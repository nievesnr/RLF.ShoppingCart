sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/test/matchers/BindingPath",
	"sap/ui/test/matchers/AggregationLengthEquals",
	"sap/ui/test/matchers/Properties",
	"sap/ui/test/matchers/PropertyStrictEquals"
], function (
	Opa5,
	Press,
	BindingPath,
	AggregationLengthEquals,
	Properties,
	PropertyStrictEquals) {
	"use strict";

	Opa5.createPageObjects({
		onTheWelcomePage: {
			viewName: "Welcome",
			actions: {
				iPressTheMenuButton : function () {
					return this.waitFor({
						matchers: new Properties({ icon : "sap-icon://menu2" }),
						actions: new Press(),
						errorMessage: "No Menu button found"
					});
				},

				iToggleTheCart: function () {
					return this.waitFor({
						controlType : "sap.m.Button",
						matchers : new Properties({icon : "sap-icon://cart"}),
						actions : new Press(),
						errorMessage : "The cart button was not found and could not be pressed"
					});
				}
			},

			assertions: {

				iShouldSeeTheWelcomePage: function () {
					return this.waitFor({
						timeout: 30,
						success: function () {
							Opa5.assert.ok(true, "The welcome page was successfully displayed");
						},
						errorMessage: "The welcome page was not displayed"
					});
				},

				iShouldSeeTheRightAmountOfProducts: function() {

					return this.waitFor({
						id: "favoriteRow",
						matchers: new AggregationLengthEquals({
							name: "content",
							length: 3
						}),
						success: function () {
							Opa5.assert.ok(true, "The welcome page has four favorite items");
						},
						errorMessage: "The welcome page did not show four favorite items"
					});
				}
			}
		}
	});

});
