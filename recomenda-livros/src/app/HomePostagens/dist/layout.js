"use client";
"use strict";
exports.__esModule = true;
require("./globals.css");
var Home_module_css_1 = require("./Home.module.css");
var Header_1 = require("../../components/Layout/Header/Header");
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "pt-BR" },
        React.createElement("body", { className: Home_module_css_1["default"].body },
            React.createElement(Header_1["default"], { title: "Buscar Livro...", avatar: "A" }),
            children,
            React.createElement("footer", { className: Home_module_css_1["default"].footer },
                React.createElement("div", { className: Home_module_css_1["default"].footerItem },
                    React.createElement("span", { className: Home_module_css_1["default"].forumBadge }, "32"),
                    "F\u00F3runs"),
                React.createElement("div", { className: Home_module_css_1["default"].footerItem }, "Recomenda\u00E7\u00F5es")))));
}
exports["default"] = RootLayout;
