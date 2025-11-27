import { writable } from 'svelte/store';
import { defaultRow } from '../types.js';

function createBarcodesStore() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    add: () => update(store => {
      if (store.length >= 100) return store;
      return [...store, { ...defaultRow, id: crypto.randomUUID() }];
    }),
    remove: (id) => update(store => store.filter(b => b.id !== id)),
    updateRow: (id, changes) => update(store =>
      store.map(b => b.id === id ? { ...b, ...changes } : b)
    ),
    move: (fromIndex, toIndex) => update(store => {
      const newStore = [...store];
      const item = newStore.splice(fromIndex, 1)[0];
      newStore.splice(toIndex, 0, item);
      return newStore;
    }),
    reset: () => set([])
  };
}

export const barcodes = createBarcodesStore();