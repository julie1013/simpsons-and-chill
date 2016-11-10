import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('remove-from-queue-button', 'Integration | Component | remove from queue button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{remove-from-queue-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#remove-from-queue-button}}
      template block text
    {{/remove-from-queue-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
