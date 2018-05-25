import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { name: 'first one', description: 'a thing that comes first', cost: 55 },
      { name: 'second one', description: 'a thing that comes second', cost: 45 },
      { name: 'third one', description: 'a thing that comes third', cost: 54 },
    ]
  }
});
