import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main-route', function() {
    this.route('nested-route');
  });
  this.route('store', { path: '/store-example' });
  this.route('data-binding');
  this.route('computed-properties');
});

export default Router;
