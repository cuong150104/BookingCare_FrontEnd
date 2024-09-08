"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminMenu = void 0;
var adminMenu = [{
  //hệ thống
  name: 'menu.system.header',
  menus: [{
    name: 'menu.system.system-administrator.header',
    subMenus: [{
      name: 'menu.system.system-administrator.user-manage',
      link: '/system/user-manage'
    }, {
      name: 'menu.system.system-administrator.user-redux',
      link: '/system/user-redux'
    }]
  } // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
  ]
}];
exports.adminMenu = adminMenu;