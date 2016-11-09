import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('user', { path: '/users/:id'});
  this.route('users');
  this.route('episodes');
  this.route('episode', { path: '/episodes/:id' });
  this.route('playlists');
  this.route('playlist', { path: '/playlists/:id'});
});

export default Router;
