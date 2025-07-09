"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var Home_module_css_1 = require("./Home.module.css");
function Home() {
    return (React.createElement("main", { className: Home_module_css_1["default"].main },
        React.createElement("div", { className: Home_module_css_1["default"].postCard },
            React.createElement(image_1["default"], { src: "/Hoobbit.png", alt: "O Hoobbit", width: 120, height: 180, className: Home_module_css_1["default"].bookImage }),
            React.createElement("div", { className: Home_module_css_1["default"].postContent },
                React.createElement("h2", null, "O Hoobbit"),
                React.createElement("p", { className: Home_module_css_1["default"].author }, "by J.R.R Tolkien"),
                React.createElement("p", { className: Home_module_css_1["default"].meta }, "Publicado em 1949 \u00B7 Literatura fant\u00E1stica"),
                React.createElement("p", { className: Home_module_css_1["default"].description }, "Uma jornada m\u00E1gica e envolvente pela Terra-m\u00E9dia. Estou relendo \u201CO Hobbit\u201D agora e ainda me encanto com o esp\u00EDrito aventureiro de Bilbo..."),
                React.createElement("p", { className: Home_module_css_1["default"].signature }, "\u2022 Jonas R."))),
        React.createElement("div", { className: Home_module_css_1["default"].postCard },
            React.createElement(image_1["default"], { src: "/1984.png", alt: "1984", width: 120, height: 180, className: Home_module_css_1["default"].bookImage }),
            React.createElement("div", { className: Home_module_css_1["default"].postContent },
                React.createElement("h2", null, "1984"),
                React.createElement("p", { className: Home_module_css_1["default"].author }, "by George Orwell"),
                React.createElement("p", { className: Home_module_css_1["default"].meta }, "Publicado em 1949 \u00B7 Fic\u00E7\u00E3o dist\u00F3pica"),
                React.createElement("p", { className: Home_module_css_1["default"].description }, "Um alerta arrepiante e atemporal sobre o controle governamental. Estou lendo \u201C1984\u201D neste exato momento e n\u00E3o consigo deixar de me arrepiar..."),
                React.createElement("p", { className: Home_module_css_1["default"].signature }, "\u2022 Sarah M.")))));
}
exports["default"] = Home;
