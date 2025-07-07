"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Filtros_module_css_1 = require("./Filtros.module.css");
function Page() {
    var _a = react_1.useState(false), showFiltros = _a[0], setShowFiltros = _a[1];
    return (react_1["default"].createElement("div", { className: Filtros_module_css_1["default"].container },
        react_1["default"].createElement("div", { className: Filtros_module_css_1["default"].filtrosHeader },
            react_1["default"].createElement("button", { className: Filtros_module_css_1["default"].filtrosBtn, onClick: function () { return setShowFiltros(!showFiltros); } }, "\u2630 FILTROS"),
            react_1["default"].createElement("span", { className: Filtros_module_css_1["default"].filtrosStatus }, showFiltros ? 'Filtros abertos' : 'Nenhum filtro aplicado')),
        showFiltros && (react_1["default"].createElement("div", { className: Filtros_module_css_1["default"].filtrosPainel },
            react_1["default"].createElement("div", { className: Filtros_module_css_1["default"].generos }, ['ROMANCE', 'FICÇÃO CIENTÍFICA', 'FANTASIA', 'MISTÉRIO', 'BIOGRAFIA', 'HORROR', 'DISTOPIA', 'LITERATURA CLÁSSICA'].map(function (genero) { return (react_1["default"].createElement("button", { key: genero, className: Filtros_module_css_1["default"].generoBtn }, genero)); })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", null, "Nota m\u00EDnima"),
                react_1["default"].createElement("p", null, "\u2606\u2606\u2606\u2606\u2606")),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("p", null, "Ano de publica\u00E7\u00E3o"),
                react_1["default"].createElement("label", { htmlFor: "anoDe" }, "De:"),
                react_1["default"].createElement("select", { id: "anoDe" },
                    react_1["default"].createElement("option", { value: "" }, "Selecione")),
                react_1["default"].createElement("label", { htmlFor: "anoAte" }, "At\u00E9:"),
                react_1["default"].createElement("select", { id: "anoAte" },
                    react_1["default"].createElement("option", { value: "" }, "Selecione"))),
            react_1["default"].createElement("div", { className: Filtros_module_css_1["default"].filtrosRodape },
                react_1["default"].createElement("button", { className: Filtros_module_css_1["default"].btnLimpar }, "Limpar"),
                react_1["default"].createElement("button", { className: Filtros_module_css_1["default"].btnAplicar }, "Aplicar")))),
        react_1["default"].createElement("footer", { className: Filtros_module_css_1["default"].footer },
            react_1["default"].createElement("div", { className: Filtros_module_css_1["default"].footerItem },
                react_1["default"].createElement("span", { className: Filtros_module_css_1["default"].forumBadge }, "32"),
                "F\u00F3runs"),
            react_1["default"].createElement("div", { className: Filtros_module_css_1["default"].footerItem }, "Recomenda\u00E7\u00F5es"))));
}
exports["default"] = Page;
