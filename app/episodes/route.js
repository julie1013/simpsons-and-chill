import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return [
            { id: '1', title: 'Simpsons Roasting on an Open Fire' },
            { id: '2', title: 'Bart the Genius' }
          ];
      }
});
