import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return [
            { id: '1', title: 'Simpsons Roasting on an Open Fire' },
            { id: '2', title: 'Bart the Genius' },
          ][params.episode_id - 1];
      }
});
