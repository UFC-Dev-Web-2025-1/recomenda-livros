"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var Home_module_css_1 = require("./Home.module.css");
function Home() {
    return (React.createElement("main", { className: Home_module_css_1["default"].main },
        React.createElement("article", { className: Home_module_css_1["default"].postCard },
            React.createElement(image_1["default"], { src: "/Hoobbit.png", alt: "Capa do livro O Hobbit", width: 140, height: 200, className: Home_module_css_1["default"].bookImage }),
            React.createElement("div", { className: Home_module_css_1["default"].postContent },
                React.createElement("h2", { className: Home_module_css_1["default"].title }, "O Hobbit"),
                React.createElement("p", { className: Home_module_css_1["default"].author },
                    "por ",
                    React.createElement("strong", null, "J.R.R. Tolkien")),
                React.createElement("p", { className: Home_module_css_1["default"].meta }, "Publicado em 1937 \u00B7 Literatura Fant\u00E1stica"),
                React.createElement("p", { className: Home_module_css_1["default"].description }, "Uma jornada \u00E9pica pela Terra-m\u00E9dia que continua a encantar leitores de todas as idades. Revisitar \u201CO Hobbit\u201D \u00E9 se aventurar junto de Bilbo Bolseiro em sua miss\u00E3o improv\u00E1vel, enfrentando trolls, drag\u00F5es e florestas antigas. Tolkien cria um universo m\u00E1gico onde a amizade e a coragem de um hobbit comum se tornam extraordin\u00E1rias."),
                React.createElement("p", { className: Home_module_css_1["default"].signature }, "\u2014 Jonas R."))),
        React.createElement("article", { className: Home_module_css_1["default"].postCard },
            React.createElement(image_1["default"], { src: "/1984.png", alt: "Capa do livro 1984", width: 140, height: 200, className: Home_module_css_1["default"].bookImage }),
            React.createElement("div", { className: Home_module_css_1["default"].postContent },
                React.createElement("h2", { className: Home_module_css_1["default"].title }, "1984"),
                React.createElement("p", { className: Home_module_css_1["default"].author },
                    "por ",
                    React.createElement("strong", null, "George Orwell")),
                React.createElement("p", { className: Home_module_css_1["default"].meta }, "Publicado em 1949 \u00B7 Fic\u00E7\u00E3o Dist\u00F3pica"),
                React.createElement("p", { className: Home_module_css_1["default"].description }, "Uma distopia assustadoramente atual que explora o totalitarismo e a vigil\u00E2ncia extrema. A cada p\u00E1gina, Orwell mostra como o Estado pode manipular a verdade e moldar a mente humana. \u201C1984\u201D n\u00E3o \u00E9 apenas um livro, mas um alerta permanente sobre a fragilidade da liberdade."),
                React.createElement("p", { className: Home_module_css_1["default"].signature }, "\u2014 Sarah M.")))));
}
exports["default"] = Home;
