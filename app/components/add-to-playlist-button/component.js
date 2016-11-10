import Ember from 'ember';

export default Ember.Component.extend({

  click: function() {
    // let episodeId = Ember.$(e.target).data('id');
    this.sendAction('create', this.get('episode'));
  },
});
