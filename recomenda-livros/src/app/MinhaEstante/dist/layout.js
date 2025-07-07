"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("../globals.css");
var Header_1 = require("../../components/Layout/Header");
function Layout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("html", { lang: "pt-BR" },
        react_1["default"].createElement("body", null,
            react_1["default"].createElement(Header_1["default"], { title: "Minha Estante", avatar: "A" }),
            children)));
}
exports["default"] = Layout;
