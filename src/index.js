import * as AComponents from "@src/components";

const testNpmRepo = (Vue) => {
  Object.values(AComponents).forEach((AComponent) => {
    Vue.use(AComponent);
  });
};

export default testNpmRepo;
