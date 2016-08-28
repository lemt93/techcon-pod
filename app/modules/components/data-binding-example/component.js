import Ember from 'ember';

export default Ember.Component.extend({
  name: '',

  actions: {
    setName() {
      this.set('name', 'Tam Minh Le');
    }
  }
});
