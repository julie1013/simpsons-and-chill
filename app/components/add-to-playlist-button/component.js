import Ember from 'ember';

export default Ember.Component.extend({

  click: function(e) {
    let episodeId = Ember.$(e.target).data('id');
    this.sendAction('create', episodeId);
  },
});
