import DS from 'ember-data';
// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    title: DS.attr('string'),
    users: DS.hasMany('user'),
    playlists: DS.hasMany('playlist')
});
