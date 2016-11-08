import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('search');
  this.route('episodes');
  this.route('episode', { path: 'episodes/:episode_id' });
  this.route('my-playlist');
});

export default Router;
