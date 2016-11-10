import Ember from 'ember';

export default Ember.Component.extend({

  click: function() {
    this.sendAction('delete', this.get('playlist'));
  },
});
