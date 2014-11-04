/* jshint expr: true */
chai.should();

describe('Schema form', function() {

  describe('directive', function() {
    beforeEach(module('templates'));
    beforeEach(module('schemaForm'));
    beforeEach(module('schemaFormCallout'));

    beforeEach(
      //We don't need no sanitation. We don't need no though control.
      module(function($sceProvider) {
        $sceProvider.enabled(false);
      })
    );

    it('should wrap the field in an "callout"', function() {
      inject(function($compile, $rootScope) {
        var scope = $rootScope.$new();
        scope.schema = {
          type: 'object',
          properties: {
            color: {
              type: 'string'
            }
          }
        };

        scope.form = [
          {
            type: 'callout',
            title: 'Callout',
            description: 'A callout',
            items: [
              'color'
            ]
          }
        ];

        scope.model = {};

        var template = angular.element('<div sf-schema="schema" sf-form="form" sf-model="model"></div>');

        $compile(template)(scope);
        $rootScope.$apply();

        var callout  = template.children().eq(0).children();
        callout.hasClass('schema-form-callout').should.be.true;
        callout.children().length.should.be.eq(2);
      });
    });

    it('should wrap add columns if inline option is set to true', function() {
      inject(function($compile, $rootScope) {
        var scope = $rootScope.$new();
        scope.schema = {
          type: 'object',
          properties: {
            color: {
              type: 'string'
            }
          }
        };

        scope.form = [
          {
            type: 'callout',
            title: 'Callout',
            description: 'A callout',
            inline: true,
            items: [
              'color'
            ]
          }
        ];

        scope.model = {};

        var template = angular.element('<div sf-schema="schema" sf-form="form" sf-model="model"></div>');

        $compile(template)(scope);
        $rootScope.$apply();

        var callout  = template.children().eq(0).children();
        callout.children().eq(0).hasClass('col-xs-6').should.be.true;
        callout.children().eq(1).hasClass('col-xs-6').should.be.true;
      });
    });



  });
});
