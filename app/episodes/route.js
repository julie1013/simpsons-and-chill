import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  model () {
    return this.get('store').findAll('episode');
  },

  actions: {
    addToPlaylist (episodeId) {
      let userId = this.get('auth.credentials.id');
      // return this.get('auth').createPlaylistRecord(userId, episodeId)
      // .catch((err) => console.error(err));
    }
  }
});
