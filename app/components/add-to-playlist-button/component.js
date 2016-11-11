import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    click () {
      this.sendAction('create', this.get('episode'), this.get('user'));
    }
  },
});
