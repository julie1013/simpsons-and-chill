import Ember from 'ember';

export default Ember.Service.extend({
  getEpisodeById(id) {
    const episodes = this.getEpisodes();
    return episodes.findBy('id', id);
  },
  getEpisodes(){}
});
