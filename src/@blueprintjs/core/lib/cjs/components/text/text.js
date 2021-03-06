"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var Classes = tslib_1.__importStar(require("../../common/classes"));
var props_1 = require("../../common/props");
var Text = /** @class */ (function (_super) {
    tslib_1.__extends(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isContentOverflowing: false,
            textContent: "",
        };
        _this.textRef = null;
        return _this;
    }
    Text.prototype.componentDidMount = function () {
        this.update();
    };
    Text.prototype.componentDidUpdate = function () {
        this.update();
    };
    Text.prototype.render = function () {
        var _this = this;
        var classes = classnames_1.default((_a = {},
            _a[Classes.TEXT_OVERFLOW_ELLIPSIS] = this.props.ellipsize,
            _a), this.props.className);
        var _b = this.props.tagName, TagName = _b === void 0 ? "div" : _b;
        return (React.createElement(TagName, { className: classes, ref: function (ref) { return (_this.textRef = ref); }, title: this.state.isContentOverflowing ? this.state.textContent : undefined }, this.props.children));
        var _a;
    };
    Text.prototype.update = function () {
        if (this.textRef == null) {
            return;
        }
        var newState = {
            isContentOverflowing: this.props.ellipsize && this.textRef.scrollWidth > this.textRef.clientWidth,
            textContent: this.textRef.textContent,
        };
        this.setState(newState);
    };
    Text.displayName = props_1.DISPLAYNAME_PREFIX + ".Text";
    return Text;
}(React.PureComponent));
exports.Text = Text;
//# sourceMappingURL=text.js.map