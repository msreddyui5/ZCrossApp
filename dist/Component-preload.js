/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "ats/cross/Component-preload",
	"modules": {
		"ats/cross/controller/Main.controller.js": "sap.ui.define([\"sap/ui/core/mvc/Controller\"], function(Controller) {\n\t\"use strict\";\n\treturn Controller.extend(\"ats.cross.controller.Main\", {\n\t\t/**\n\t\t *@memberOf ats.cross.controller.Main\n\t\t */\n\t\tonNav: function(oEvent) {\n\t\t\t//This code was generated by the layout editor.\n\t\t\t//TODO: Cross App navigation\n\t\t\tvar xnavservice = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService && sap.ushell.Container.getService(\"CrossApplicationNavigation\");\n\t\t\tvar href = (xnavservice && xnavservice.hrefForExternal({\n\t\t\t\ttarget: {\n\t\t\t\t\tsemanticObject: \"SalesOrder\",\n\t\t\t\t\taction: \"manage\"\n\t\t\t\t},\n\t\t\t\tparams: {\n\t\t\t\t\t\"SalesOrganization\": this.getView().byId(\"SalesOrg\").getValue()\n\t\t\t\t}\n\t\t\t})) || \"\";\n\t\t\tvar finalUrl = window.location.href.split(\"#\")[0] + href;\n\t\t\tsap.m.URLHelper.redirect(finalUrl, true);\n\t\t}\n\t});\n});",
		"ats/cross/Component.js": "sap.ui.define([\n\t\"sap/ui/core/UIComponent\",\n\t\"sap/ui/Device\",\n\t\"ats/cross/model/models\"\n], function(UIComponent, Device, models) {\n\t\"use strict\";\n\n\treturn UIComponent.extend(\"ats.cross.Component\", {\n\n\t\tmetadata: {\n\t\t\tmanifest: \"json\"\n\t\t},\n\n\t\t/**\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\n\t\t * @public\n\t\t * @override\n\t\t */\n\t\tinit: function() {\n\t\t\t// call the base component's init function\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\n\n\t\t\t// set the device model\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\n\t\t}\n\t});\n});",
		"ats/cross/view/Main.view.xml": "<mvc:View xmlns:html=\"http://www.w3.org/1999/xhtml\" xmlns:mvc=\"sap.ui.core.mvc\" xmlns=\"sap.m\" controllerName=\"ats.cross.controller.Main\" displayBlock=\"true\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t\t<content>\n\t\t\t\t    <VBox width=\"100%\" direction=\"Column\" id=\"__vbox0\">\n\t\t\t\t        <items>\n\t\t\t\t            <Input width=\"100%\" id=\"SalesOrg\" placeholder=\"Enter Sales Org here...\"/>\n\t\t\t\t            <Button xmlns=\"sap.m\" text=\"Are you ready\" width=\"250px\" id=\"__button0\" press=\"onNav\"/>\n\t\t\t\t        </items>\n\t\t\t\t    </VBox>\n\t\t\t\t</content>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"ats/cross/model/models.js": "sap.ui.define([\n\t\"sap/ui/model/json/JSONModel\",\n\t\"sap/ui/Device\"\n], function(JSONModel, Device) {\n\t\"use strict\";\n\n\treturn {\n\n\t\tcreateDeviceModel: function() {\n\t\t\tvar oModel = new JSONModel(Device);\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\n\t\t\treturn oModel;\n\t\t}\n\n\t};\n});"
	}
});