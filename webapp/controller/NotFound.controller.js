sap.ui.define([
	"./BaseController",
	"sap/ui/core/UIComponent"
], function(BaseController, UIComponent) {
	"use strict";

	return BaseController.extend("sap.ui.rabolagartija.cart.controller.NotFound", {
		onInit: function () {
			this._router = UIComponent.getRouterFor(this);
		}
	});
});
