'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var login_module_css_1 = require("./login.module.css");
var FormLivro_1 = require("@/src/components/Forms/FormLivro/FormLivro");
var footer_1 = require("@/src/components/Layout/Footer/footer");
function SelecionarLivroPage() {
    var _this = this;
    // Estados para livros, carregamento e erro
    var _a = react_1.useState([]), livros = _a[0], setLivros = _a[1];
    var _b = react_1.useState(true), loading = _b[0], setLoading = _b[1];
    var _c = react_1.useState(null), error = _c[0], setError = _c[1];
    // Requisição para buscar livros ao carregar a página
    react_1.useEffect(function () {
        var fetchLivros = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1["default"].get('http://localhost:1337/api/livros')];
                    case 1:
                        response = _a.sent();
                        setLivros(response.data.data); // Strapi retorna dados em response.data.data
                        setLoading(false);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.error('Erro ao buscar livros:', err_1);
                        setError('Falha ao carregar os livros. Tente novamente mais tarde.');
                        setLoading(false);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchLivros();
    }, []);
    return (react_1["default"].createElement("div", { className: login_module_css_1["default"].container },
        react_1["default"].createElement("main", { className: login_module_css_1["default"].main },
            react_1["default"].createElement("div", { className: login_module_css_1["default"].iconLivro }),
            react_1["default"].createElement("p", { className: login_module_css_1["default"].selecioneTexto }, "Selecione o livro para sua Estante"),
            loading ? (react_1["default"].createElement("p", { className: login_module_css_1["default"].loading }, "Carregando livros...")) : error ? (react_1["default"].createElement("p", { className: login_module_css_1["default"].error }, error)) : livros.length === 0 ? (react_1["default"].createElement("p", { className: login_module_css_1["default"].empty }, "Nenhum livro encontrado.")) : (react_1["default"].createElement("ul", { className: login_module_css_1["default"].livrosLista }, livros.map(function (livro) {
                var _a;
                return (react_1["default"].createElement("li", { key: livro.id, className: login_module_css_1["default"].livroItem }, ((_a = livro.attributes) === null || _a === void 0 ? void 0 : _a.titulo) || 'Título não disponível'));
            }))),
            react_1["default"].createElement(FormLivro_1["default"], null)),
        react_1["default"].createElement(footer_1["default"], null)));
}
exports["default"] = SelecionarLivroPage;
