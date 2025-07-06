// src/app/page.tsx
"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("../../components/Layout/Header");
var page_module_css_1 = require("./page.module.css");
var material_1 = require("@mui/material");
var Menu_1 = require("@mui/icons-material/Menu");
function HomePage() {
    return (react_1["default"].createElement("div", { className: page_module_css_1["default"].container },
        react_1["default"].createElement(Header_1["default"], { title: "", avatar: "A" }),
        react_1["default"].createElement("div", { className: page_module_css_1["default"].filterBar },
            react_1["default"].createElement(material_1.Button, { variant: "contained", startIcon: react_1["default"].createElement(Menu_1["default"], null), className: page_module_css_1["default"].filterButton }, "FILTROS"),
            react_1["default"].createElement("span", { className: page_module_css_1["default"].noFilterText }, "Nenhum filtro aplicado")),
        react_1["default"].createElement("div", { className: page_module_css_1["default"].contentArea }),
        react_1["default"].createElement("footer", { className: page_module_css_1["default"].footer },
            react_1["default"].createElement("div", { className: page_module_css_1["default"].footerItem },
                react_1["default"].createElement("span", { className: page_module_css_1["default"].forumBadge }, "32"),
                "F\u00F3runs"),
            react_1["default"].createElement("div", { className: page_module_css_1["default"].footerItem }, "Recomenda\u00E7\u00F5es"))));
}
exports["default"] = HomePage;
