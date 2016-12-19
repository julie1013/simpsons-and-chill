import Ember from 'ember';

export default Ember.Route.extend({
    auth: Ember.inject.service(),
  model () {
    return this.get('store').findAll('playlist');
  },
  actions: {
    removeFromPlaylist (playlist) {
      playlist.destroyRecord();
    },
    rate (playlist) {
      debugger;
      console.log(this);
      this.sendAction('patch')
    }
  }
});
