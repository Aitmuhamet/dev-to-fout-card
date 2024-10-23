export default {
  install(app, options) {
    console.log(app);
    console.log(options);

    let currentLanguage = 'ru';

    const changeLang = (name) => {
      currentLanguage = name === 'ru' ? 'en' : 'ru'
    }

    app.config.globalProperties.$tr = (key) => {
      return key.split(".").reduce((o, i) => {
        return o[i] || "========= UKNOWN TEXT =========";
      }, options[currentLanguage]);
    };

    app.provide('toggleLang', changeLang)
  },
};
