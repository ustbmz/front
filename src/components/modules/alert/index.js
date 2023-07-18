import AlertComponet from "./Alert";

const Alert = {};

Alert.install = function (Vue) {
  // 挂载 alertC
  const alertConstruct = Vue.extend(AlertComponet);
  //
  const instance = new alertConstruct();

  // 挂载
  instance.$mount(document.createElement("div"));
  document.body.appendChild(instance.$el);

  // 4. 添加实例方法
  Vue.prototype.$alert = (msg) => {
    // 逻辑...
    instance.type = 'alert';
    instance.msg = msg;
    instance.isShow = true;
  };

  // 4. 添加实例方法
  Vue.prototype.$confirm = (msg, success, cancel) => {
    // 逻辑...
    instance.type = 'confirm';
    instance.msg = msg;
    instance.isShow = true;
    if (typeof success !== 'undefined') {
      instance.success = success;
    }
    if (typeof cancel !== 'undefined') {
      instance.cancel = cancel;

    }
  };
};

export default Alert;
