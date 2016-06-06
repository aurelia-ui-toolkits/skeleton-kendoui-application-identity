import 'bootstrap';
import {ThemeManager} from './theme-manager';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()

    .plugin('aurelia-kendoui-bridge', (kendo) => kendo.core())

    .plugin('aurelia-api', config => {
      config
        .registerEndpoint('github', 'https://api.github.com/')
        .registerEndpoint('auth', 'https://auth.example.io/')
        .setDefaultEndpoint('github');
    });

  aurelia.start()
    .then(au => {
      // before we tell Aurelia to launch, get the ThemeManager
      let manager = au.container.get(ThemeManager);

      // let the ThemeManager load the 'default' theme
      return manager.loadTheme('default')
             .then(() => au);
    })
    .then(au => au.setRoot('app'));
}
