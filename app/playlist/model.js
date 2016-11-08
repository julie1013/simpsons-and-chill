// import DS from 'ember-data';
import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  episode: belongsTo('episode', { inverse: 'playlists' }),
  user: belongsTo('user', { inverse: 'playlists' }),
});
