sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("ats.cross.controller.Main", {
		/**
		 *@memberOf ats.cross.controller.Main
		 */
		onNav: function(oEvent) {
			//This code was generated by the layout editor.
			//TODO: Cross App navigation
			var xnavservice = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService && sap.ushell.Container.getService("CrossApplicationNavigation");
			var href = (xnavservice && xnavservice.hrefForExternal({
				target: {
					semanticObject: "SalesOrder",
					action: "manage"
				},
				params: {
					"SalesOrganization": this.getView().byId("SalesOrg").getValue()
				}
			})) || "";
			var finalUrl = window.location.href.split("#")[0] + href;
			sap.m.URLHelper.redirect(finalUrl, true);
		}
	});
});