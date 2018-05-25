import Component from '@ember/component';

export default Component.extend({
  tagName: 'tr',

  showContextForEvent(event) {
    this.set('showContextMenu', true);
    this.set('x', event.clientX);
    this.set('y', event.clientY);
  },

  contextMenu(event) {
    this.showContextForEvent(event);

    return false;
  },

  actions: {
    closeContextMenu() {
      this.set('showContextMenu', false);
    }
  }
});
