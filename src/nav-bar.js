import {bindable} from 'aurelia-framework';

export class NavBar {
  @bindable router;

  // calculate the name of the current route
  // so the active menuitem can be made visible
  get currentRoute() {
    return this.router.currentInstruction ? this.router.currentInstruction.config.name : '';
  }

  showThemeDialog() {
    this.dialog.open().center();
  }
}

export class CurrentRouteValueConverter {
  // determines which css classes to use for a menu item
  // based on the currentRoute and the route that belongs to the menuitem
  toView(route, currentRoute) {
    return route === currentRoute ? 'k-link k-state-selected' : 'k-link';
  }
}
