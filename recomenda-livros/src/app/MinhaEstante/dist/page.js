"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var estante_module_css_1 = require("./estante.module.css");
var image_1 = require("next/image");
function Page() {
    var livros = Array(6).fill({
        titulo: 'A Hora é da Estrela',
        autor: 'Clarice Lispector',
        nota: 4.5,
        progresso: '100%'
    });
    return (react_1["default"].createElement("div", { className: estante_module_css_1["default"].container },
        react_1["default"].createElement("div", { className: estante_module_css_1["default"].icones },
            react_1["default"].createElement(image_1["default"], { src: "/livros.png", alt: "Livros", width: 50, height: 50 })),
        react_1["default"].createElement("div", { className: estante_module_css_1["default"].grid }, livros.map(function (livro, index) { return (react_1["default"].createElement("div", { key: index, className: estante_module_css_1["default"].livroCard },
            react_1["default"].createElement(image_1["default"], { src: "/Clarice.png", alt: livro.titulo, width: 80, height: 120, className: estante_module_css_1["default"].livroImage }),
            react_1["default"].createElement("div", { className: estante_module_css_1["default"].livroInfo },
                react_1["default"].createElement("p", { className: estante_module_css_1["default"].livroTitulo }, livro.titulo),
                react_1["default"].createElement("p", { className: estante_module_css_1["default"].livroAutor }, livro.autor),
                react_1["default"].createElement("div", { className: estante_module_css_1["default"].livroRating },
                    '⭐'.repeat(5),
                    livro.nota),
                react_1["default"].createElement("div", { className: estante_module_css_1["default"].livroAcoes },
                    react_1["default"].createElement("button", { className: estante_module_css_1["default"].btnLido }, "Lido"),
                    react_1["default"].createElement("button", { className: estante_module_css_1["default"].btnEditar }, "Editar"))),
            react_1["default"].createElement("span", { className: estante_module_css_1["default"].livroProgresso }, livro.progresso))); })),
        react_1["default"].createElement("button", { className: estante_module_css_1["default"].addBtn }, "+"),
        react_1["default"].createElement("footer", { className: estante_module_css_1["default"].footer },
            react_1["default"].createElement("div", { className: estante_module_css_1["default"].footerItem },
                react_1["default"].createElement("span", { className: estante_module_css_1["default"].forumBadge }, "32"),
                "F\u00F3runs"),
            react_1["default"].createElement("div", { className: estante_module_css_1["default"].footerItem }, "Recomenda\u00E7\u00F5es"))));
}
exports["default"] = Page;
