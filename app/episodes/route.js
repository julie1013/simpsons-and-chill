import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    // console.log(this);
    return this.get('store').findAll('episode');
  }
});
