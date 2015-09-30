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
