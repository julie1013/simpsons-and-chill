import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),

  model () {
    return Ember.RSVP.hash({
      episodes: this.get('store').findAll('episode'),
      user: this.get('store').findRecord('user', this.get('auth.credentials.id')),
    });
  },

  actions: {
    addToPlaylist (episode, user) {
      let playlist = this.get('store').createRecord('playlist', {
        episode: episode,
        user: user,
      });

      playlist.save()
        .then(() => this.transitionTo('playlists'))
        .catch((error) => {
          console.error(error);
          playlist.deleteRecord(); // don't trigger a save!
        })
        ;
    },
  }
});
