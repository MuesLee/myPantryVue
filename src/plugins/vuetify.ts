import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.base,
    secondary: colors.shades,
    accent: colors.lightGreen.darken1,
    error: colors.red.lighten1,
    info: colors.blue.lighten1,
    success: colors.green.lighten1,
    warning: colors.orange.lighten1,
  },
  iconfont: 'md',
});
