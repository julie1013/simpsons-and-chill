import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['navbar-header'],
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  auth: Ember.inject.service(),
});
