'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var login_module_css_1 = require("./login.module.css");
var FormLivro_1 = require("@/src/components/Forms/FormLivro/FormLivro");
var footer_1 = require("@/src/components/Layout/Footer/footer");
function SelecionarLivroPage() {
    return (react_1["default"].createElement("div", { className: login_module_css_1["default"].container },
        react_1["default"].createElement("main", { className: login_module_css_1["default"].main },
            react_1["default"].createElement("div", { className: login_module_css_1["default"].iconLivro }),
            react_1["default"].createElement("p", { className: login_module_css_1["default"].selecioneTexto }, "Selecione o livro para sua Estante"),
            react_1["default"].createElement(FormLivro_1["default"], null)),
        react_1["default"].createElement(footer_1["default"], null)));
}
exports["default"] = SelecionarLivroPage;
