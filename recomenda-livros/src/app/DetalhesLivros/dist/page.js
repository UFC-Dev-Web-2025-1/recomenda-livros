"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var fa_1 = require("react-icons/fa");
var sinopse_module_css_1 = require("./sinopse.module.css");
function BookDetails() {
    return (React.createElement("main", { className: sinopse_module_css_1["default"].container },
        React.createElement("header", { className: sinopse_module_css_1["default"].headerBar },
            React.createElement("h1", { className: sinopse_module_css_1["default"].headerTitle }, "O Hobbit"),
            React.createElement("div", { className: sinopse_module_css_1["default"].headerActions },
                React.createElement("button", { className: sinopse_module_css_1["default"].shareButton, title: "Compartilhar", "aria-label": "Compartilhar" },
                    React.createElement(fa_1.FaShareAlt, null)),
                React.createElement("div", { className: sinopse_module_css_1["default"].avatar }, "A"))),
        React.createElement(image_1["default"], { src: "/Hoobbit.png", alt: "Capa do livro O Hobbit", width: 200, height: 300, className: sinopse_module_css_1["default"].bookCover }),
        React.createElement("h2", { className: sinopse_module_css_1["default"].title }, "O Hobbit"),
        React.createElement("p", { className: sinopse_module_css_1["default"].author }, "J.R.R. Tolkien"),
        React.createElement("div", { className: sinopse_module_css_1["default"].rating },
            React.createElement("span", { className: sinopse_module_css_1["default"].stars }, "\u2605\u2605\u2605\u2605\u2605"),
            React.createElement("span", { className: sinopse_module_css_1["default"].ratingValue }, "4.7")),
        React.createElement("button", { className: sinopse_module_css_1["default"].readButton }, "Quero Ler"),
        React.createElement("div", { className: sinopse_module_css_1["default"].tabs },
            React.createElement("button", { className: sinopse_module_css_1["default"].tab + " " + sinopse_module_css_1["default"].active }, "SINOPSE"),
            React.createElement("button", { className: sinopse_module_css_1["default"].tab }, "RESENHAS")),
        React.createElement("p", { className: sinopse_module_css_1["default"].synopsis }, "Bilbo Bolseiro, um hobbit tranquilo, v\u00EA sua vida virar de cabe\u00E7a para baixo quando Gandalf, o mago, e um grupo de an\u00F5es aparecem em sua porta para uma aventura repleta de drag\u00F5es, tesouros e perigos.")));
}
exports["default"] = BookDetails;
