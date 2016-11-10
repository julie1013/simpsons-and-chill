import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  email: DS.attr('string'),
  episodes: DS.hasMany('episode'),
  // playlists: hasMany('playlist'),
});
