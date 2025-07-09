"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var sinopse_module_css_1 = require("./sinopse.module.css");
var fa_1 = require("react-icons/fa");
function BookDetails() {
    return (React.createElement("main", { className: sinopse_module_css_1["default"].container },
        React.createElement("header", { className: sinopse_module_css_1["default"].headerBar },
            React.createElement("h1", { className: sinopse_module_css_1["default"].headerTitle }, "O Hobbit"),
            React.createElement("button", { className: sinopse_module_css_1["default"].shareButton },
                React.createElement(fa_1.FaShareAlt, { className: sinopse_module_css_1["default"].shareIcon }),
                "Compartilhar")),
        React.createElement("div", { className: sinopse_module_css_1["default"].card },
            React.createElement(image_1["default"], { src: "/Hoobbit.png", alt: "Capa do livro O Hobbit", width: 220, height: 320, className: sinopse_module_css_1["default"].bookCover }),
            React.createElement("h2", { className: sinopse_module_css_1["default"].title }, "O Hobbit"),
            React.createElement("p", { className: sinopse_module_css_1["default"].author }, "J.R.R. Tolkien"),
            React.createElement("div", { className: sinopse_module_css_1["default"].rating },
                React.createElement("span", { className: sinopse_module_css_1["default"].stars }, "\u2605\u2605\u2605\u2605\u2605"),
                React.createElement("span", { className: sinopse_module_css_1["default"].ratingValue }, "4.7")),
            React.createElement("nav", { className: sinopse_module_css_1["default"].tabs },
                React.createElement("button", { className: sinopse_module_css_1["default"].tab + " " + sinopse_module_css_1["default"].active }, "SINOPSE"),
                React.createElement("button", { className: sinopse_module_css_1["default"].tab }, "RESENHAS")),
            React.createElement("p", { className: sinopse_module_css_1["default"].synopsis }, "Bilbo Bolseiro, um hobbit tranquilo, v\u00EA sua vida virar de cabe\u00E7a para baixo quando Gandalf, o mago, e um grupo de an\u00F5es aparecem em sua porta para uma aventura repleta de drag\u00F5es, tesouros e perigos."))));
}
exports["default"] = BookDetails;
