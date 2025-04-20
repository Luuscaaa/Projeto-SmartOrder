// jest.setup.js

// Mock de FormData para ambiente Node.js
global.FormData = class FormData {
    constructor() {
      this._data = {};
    }
    append(key, value) {
      this._data[key] = value;
    }
  };
  
  // (Opcional) mock de fetch, se seu Login usar
  // global.fetch = jest.fn(() =>
  //   Promise.resolve({
  //     ok: true,
  //     json: () => Promise.resolve({ sucesso: true }),
  //   })
  // );
  