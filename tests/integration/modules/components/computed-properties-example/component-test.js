import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('computed-properties-example', 'Integration | Component | computed properties example', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{computed-properties-example}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#computed-properties-example}}
      template block text
    {{/computed-properties-example}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
