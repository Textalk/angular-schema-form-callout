angular.module('schemaFormCallout', ['schemaForm']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfBuilderProvider',
  function(schemaFormProvider, schemaFormDecoratorsProvider, sfBuilderProvider) {

    //Add a mapping for the type 'callout'
    schemaFormDecoratorsProvider.defineAddOn(
      'bootstrapDecorator',
      'callout',
      'directives/decorators/bootstrap/callout/callout.html',
      [
        sfBuilderProvider.builders.sfField,
        sfBuilderProvider.builders.ngModelOptions,
        sfBuilderProvider.builders.condition,
        sfBuilderProvider.builders.transclusion
      ]
    );

  }]);

angular.module("schemaFormCallout").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/callout/callout.html","<div class=\"clearfix bs-callout bs-callout-{{form.style || \'default\'}} schema-form-callout\" ng-disabled=\"form.readonly\">\n  <div ng-class=\"{\'row\': form.inline, \'form-inline\': form.inline}\">\n    <div ng-class=\"{\'col-xs-6\': form.inline }\">\n      <h4 ng-show=\"showTitle()\" ng-bind=\"form.title\"></h4>\n      <p class=\"description\" ng-show=\"form.description\"\n         ng-bind-html=\"form.description\"></p>\n    </div>\n    <div ng-class=\"{\'col-xs-6\': form.inline, \'schema-form-callout-fields\': !form.inline}\">\n      <div ng-class=\"{\'pull-right\': form.inline}\" sf-field-transclude=\"items\"></div>\n    </div>\n  </div>\n</div>\n");}]);