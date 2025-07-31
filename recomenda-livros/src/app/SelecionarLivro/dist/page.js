'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var login_module_css_1 = require("./login.module.css");
function SelecionarLivroPage() {
    var _a = react_1.useState(''), nomeLivro = _a[0], setNomeLivro = _a[1];
    var _b = react_1.useState(''), nomeAutor = _b[0], setNomeAutor = _b[1];
    var _c = react_1.useState(''), categoria = _c[0], setCategoria = _c[1];
    var _d = react_1.useState(''), quantidadeLida = _d[0], setQuantidadeLida = _d[1];
    var _e = react_1.useState(''), classificacao = _e[0], setClassificacao = _e[1];
    return (react_1["default"].createElement("div", { className: login_module_css_1["default"].container },
        react_1["default"].createElement("main", { className: login_module_css_1["default"].main },
            react_1["default"].createElement("div", { className: login_module_css_1["default"].iconLivro }),
            react_1["default"].createElement("p", { className: login_module_css_1["default"].selecioneTexto }, "Selecione o livro para sua Estante"),
            react_1["default"].createElement("form", { className: login_module_css_1["default"].form },
                react_1["default"].createElement("input", { className: login_module_css_1["default"].input, placeholder: "Nome do Livro", value: nomeLivro, onChange: function (e) { return setNomeLivro(e.target.value); } }),
                react_1["default"].createElement("input", { className: login_module_css_1["default"].input, placeholder: "Nome do Autor", value: nomeAutor, onChange: function (e) { return setNomeAutor(e.target.value); } }),
                react_1["default"].createElement("select", { className: login_module_css_1["default"].input, value: categoria, onChange: function (e) { return setCategoria(e.target.value); }, "aria-label": "Categoria" },
                    react_1["default"].createElement("option", { value: "" }, "Categoria"),
                    react_1["default"].createElement("option", { value: "Literatura infantil" }, "Literatura infantil"),
                    react_1["default"].createElement("option", { value: "Fic\u00E7\u00E3o" }, "Fic\u00E7\u00E3o"),
                    react_1["default"].createElement("option", { value: "Biografia" }, "Biografia")),
                react_1["default"].createElement("div", { className: login_module_css_1["default"].row },
                    react_1["default"].createElement("input", { className: login_module_css_1["default"].inputHalf, placeholder: "Quantidade Lida: ex 98%", value: quantidadeLida, onChange: function (e) { return setQuantidadeLida(e.target.value); } }),
                    react_1["default"].createElement("select", { className: login_module_css_1["default"].inputHalf, value: classificacao, onChange: function (e) { return setClassificacao(e.target.value); }, "aria-label": "Classifica\u00E7\u00E3o" },
                        react_1["default"].createElement("option", { value: "" }, "Classifique"),
                        react_1["default"].createElement("option", { value: "Lido" }, "Lido"),
                        react_1["default"].createElement("option", { value: "N\u00E3o Lido" }, "N\u00E3o Lido"))),
                react_1["default"].createElement("div", { className: login_module_css_1["default"].buttons },
                    react_1["default"].createElement("button", { type: "button", className: login_module_css_1["default"].backButtonForm }, "Voltar"),
                    react_1["default"].createElement("button", { type: "submit", className: login_module_css_1["default"].selectButton }, "Selecionar"))))));
}
exports["default"] = SelecionarLivroPage;
