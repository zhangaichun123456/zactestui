import aButton from "./Button/index.vue";

const components = [aButton];

const install = app => {
  components.forEach(c => {
    app.component(c.name, c);
  });
  return app;
};

export { aButton };

export default {
  install,
};
