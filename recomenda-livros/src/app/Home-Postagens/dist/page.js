"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Home_module_css_1 = require("./Home.module.css");
var Header_1 = require("@/src/components/Layout/Header/Header");
var material_1 = require("@mui/material");
var Slidebar_1 = require("@/src/components/Navigation/Slidebar");
var BookPostCard_1 = require("@/src/components/Cards/PostagemCard/BookPostCard");
function HomePostagensPage() {
    var _a = react_1.useState(true), isSidebarVisible = _a[0], setIsSidebarVisible = _a[1];
    var handleMenuToggle = function () {
        setIsSidebarVisible(!isSidebarVisible);
    };
    var posts = [
        {
            id: '1',
            title: 'O Hoobbit',
            author: 'J.R.R Tolkien',
            genre: 'Literatura fantástica',
            publishedYear: 1949,
            description: 'Uma jornada mágica e envolvente pela Terra-Média. Estou relendo "O Hobbit" agora e ainda me encanto com o espírito aventureiro de Bilbo, que sai de seu confortável lar para enfrentar trolls, elfos e o terrível Smaug. Cada capítulo é repleto de humor sutil e descritivo que me transportam para montanhas nevadas e florestas mágicas. Não tem como não sorrir as aventuras dos anões e se emocionar com a coragem improvável de um hobbit. Adoro como Tolkien mistura fantasia épica e amizade verdadeira; simplesmente não consigo largar este livro!',
            postAuthor: 'Jonas R.',
            coverSrc: '/Hoobbit.png'
        },
        {
            id: '2',
            title: '1984',
            author: 'George Orwell',
            genre: 'Ficção distópica',
            publishedYear: 1949,
            description: 'Um alerta arrepiante e atemporal sobre o controle governamental. Estou lendo "1984" neste exato momento e não consigo deixar de me arrepiar a cada página - a forma como Orwell descreve a vigilância constante me deixou de queixo caído. Já nas primeiras páginas, percebi o quão perturbadora é a capacidade do Estado de manipular a verdade e de moldar pensamentos. Sem dúvida, estou gostando muito da profundidade dos personagens e da tensão crescente; é um livro que prende e faz questionar até onde poderíamos permitir que nosso próprio governo vá.',
            postAuthor: 'Sarah M.',
            coverSrc: '/1984.png'
        },
    ];
    return (react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7fa' } },
        react_1["default"].createElement(Slidebar_1["default"], { isVisible: isSidebarVisible, onLinkClick: handleMenuToggle }),
        react_1["default"].createElement(material_1.Box, { sx: {
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: isSidebarVisible ? '' : '0px',
                transition: 'margin-left 0.3s ease-in-out',
                width: isSidebarVisible ? 'calc(100% - 250px)' : '100%'
            } },
            react_1["default"].createElement(Header_1["default"], { title: "Home", avatar: "A", onMenuClick: handleMenuToggle }),
            react_1["default"].createElement("main", { className: Home_module_css_1["default"].mainContent }, posts.map(function (post) { return (react_1["default"].createElement(BookPostCard_1["default"], { key: post.id, post: post })); })))));
}
exports["default"] = HomePostagensPage;
