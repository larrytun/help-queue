import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this help ticket?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
