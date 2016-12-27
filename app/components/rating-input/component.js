import Ember from 'ember';

export default Ember.Component.extend({

  change: function() {
    this.sendAction('post', this.get('ratingValue'), this.get('playlist'));
  }
});
