import Ember from 'ember';

export default Ember.Component.extend({

  click: function() {
    this.sendAction('create', this.get('episode'));
  },
});
