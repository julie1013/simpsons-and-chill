import DS from 'ember-data';
// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  episode: DS.belongsTo('episode', {
   inverse: 'playlists'
 }),
  user: DS.belongsTo('user', {
   inverse: 'playlists'
 }),
  rating: DS.attr('number'),
});
