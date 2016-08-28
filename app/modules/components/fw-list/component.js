
import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  selectedFw: null,

  actions: {
    getDetails() {
      const selectedFw = this.get('selectedFw');
      this.get('store').find('framework', selectedFw.get('id'));
    },

    async update() {
      const selectedFw = this.get('selectedFw');
      const dependency = this.get('store').createRecord('dependency', {
        name: '# dependency'
      });

      await dependency.save();
      selectedFw.get('dependencies').pushObject(dependency);
      selectedFw.save();
    },

    async delete() {
      const selectedFw = this.get('selectedFw');
      selectedFw.deleteRecord();
      await selectedFw.save();
      this.set('selectedFw', null);
    }
  }
});
