angular.module('schemaFormCallout', ['schemaForm']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    //Add a mapping for the type 'callout'
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'callout',
    'directives/decorators/bootstrap/callout/callout.html');

  }]);
