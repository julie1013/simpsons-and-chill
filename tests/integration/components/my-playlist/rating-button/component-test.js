import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-playlist/rating-button', 'Integration | Component | my playlist/rating button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{my-playlist/rating-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#my-playlist/rating-button}}
      template block text
    {{/my-playlist/rating-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
