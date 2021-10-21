module.exports = {
  moduleHotAccept(mod) {
    if (mod && mod.hot) {
      mod.hot.accept();
    }
  },
};
