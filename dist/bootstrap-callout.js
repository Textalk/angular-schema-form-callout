angular.module('schemaFormCallout', ['schemaForm']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    //Add a mapping for the type 'callout'
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'callout',
    'directives/decorators/bootstrap/callout/callout.html');

  }]);

angular.module("schemaFormCallout").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/callout/callout.html","<div class=\"clearfix bs-callout bs-callout-{{form.style || \'default\'}} schema-form-callout\" ng-disabled=\"form.readonly\">\n  <div ng-class=\"{\'row\': form.inline, \'form-inline\': form.inline}\">\n    <div ng-class=\"{\'col-xs-6\': form.inline }\">\n      <h4 ng-show=\"showTitle()\" ng-bind=\"form.title\"></h4>\n      <p class=\"description\" ng-show=\"form.description\"\n         ng-bind-html=\"form.description\"></p>\n    </div>\n    <div ng-class=\"{\'col-xs-6\': form.inline, \'schema-form-callout-fields\': !form.inline}\">\n      <div ng-class=\"{\'pull-right\': form.inline}\">\n        <sf-decorator ng-repeat=\"item in form.items\" form=\"item\"></sf-decorator>\n      </div>\n    </div>\n  </div>\n</div>\n");}]);