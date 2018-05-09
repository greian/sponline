"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var Placeholder_1 = require("@pnp/spfx-controls-react/lib/Placeholder");
var WebPartConfig = /** @class */ (function (_super) {
    __extends(WebPartConfig, _super);
    function WebPartConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebPartConfig.prototype.render = function () {
        return (React.createElement(office_ui_fabric_react_1.Fabric, null,
            this.props.displayMode === sp_core_library_1.DisplayMode.Edit &&
                React.createElement(Placeholder_1.Placeholder, { iconName: 'Edit (TH test)', iconText: 'Configure', description: 'Configure your web part', buttonLabel: 'Configure', onConfigure: this.props.configure }),
            this.props.displayMode === sp_core_library_1.DisplayMode.Read &&
                React.createElement(Placeholder_1.Placeholder, { iconName: 'Edit (TH test)', iconText: 'Configure', description: 'Configure your web part' })));
    };
    return WebPartConfig;
}(React.Component));
exports.WebPartConfig = WebPartConfig;
// import * as React from 'react';
// import { IWebPartConfigProps } from './IWebPartConfigProps';
// export default class HelloWorld extends React.Component<any, any> {
//   renders() {
//     return (
//       <div style={{ color: this.props.color }}>
//         Hello world!
//       </div>
//     );
//   }
// }
//# sourceMappingURL=WebPartConfig.js.map