Bootstrap Callout Add-On
=========================

Bootstrap Callouts are nice, aren't they? They are actually not officially included in
Bootstrap but are used the docs, and some lovely people on the interweb has us covered.

http://cpratt.co/twitter-bootstrap-callout-css-styles/

This add-on creates the type `callout`, which acts similar to a fieldset, making it possible
to add subforms.


Installation
------------

The add-on comes in two files, `dist/bootstrap-callout.min.js` and `dist/callout.min.css`. Be
sure to include them  *after* `bootstrap-decorator.min.js`.


The easiest way to install is with bower
```bash
$ bower install angular-schema-form-callout
```

When you create your module, be sure to depend on the `schemaFormCallout` module as well.

```javascript
angular.module('yourModule', ['schemaForm', 'schemaFormCallout']);
```

Options
-------

| Form option        |   What it does  |
|:-------------------|:------------|
| title   |   Sets title inside callout   |
| description | Sets description below title |
| items | A form definition, i.e. an array of subcomponents |
| type  | What flavor of callout should it be, ie. the `bs-callout-*` class. Possible values are: 'default', 'primary','success','info', 'warning' and 'danger'. It defaults to (duh!) 'default'. |
| inline | set to 'true' to wrap the items in a bootstrap column and pull it right, this looks best if you keep it to just one item and remove that items title. |


### Example


```javascript
var form = [
  type: "callout",
  title: "Name",
  description: "Your name please.",
  type: "info",
  inline: true,
  items: [
    {
      key: "name",
      notitle: true
    }
  ]
]
```
