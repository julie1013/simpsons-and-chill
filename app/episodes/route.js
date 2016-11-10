import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  model () {
    return this.get('store').findAll('episode');
  },

  actions: {
    addToPlaylist (episode) {
      let playlist = this.get('store').createRecord('playlist', {});

      return this.get('store').findRecord('user', this.get('auth.credentials.id'))
        .then((user) => {
          playlist.set('episode', episode);
          playlist.set('user', user);
          playlist.save()
          .then(() => this.transitionTo('playlists'));
        })
        .catch(console.error);
        // .then(()=>{
        //   //whatever you want to transitionTo
        // })
    },
    removeFromPlaylist (playlist) {
      playlist.destroyRecord();
    },
    rate () {

    }
  }
});
