import { createStore } from 'redux';

const store = createStore(() => {
  return {
    id: 3,
    name: 'Clayton',
    email: 'clayton@eu.com.br'
  }
});

export default store;