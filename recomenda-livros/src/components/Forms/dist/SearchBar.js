"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var Search_1 = require("@mui/icons-material/Search");
var styles_1 = require("@mui/material/styles");
var SearchContainer = styles_1.styled('div')(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'white',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%'
    });
});
var StyledInputBase = styles_1.styled(material_1.InputBase)(function (_a) {
    var theme = _a.theme;
    return ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 2),
            transition: theme.transitions.create('width'),
            width: '100%'
        }
    });
});
function SearchBar() {
    var _a = react_1.useState(''), search = _a[0], setSearch = _a[1];
    var handleInputChange = function (event) {
        setSearch(event.target.value);
    };
    var handleSearch = function () {
        alert("Buscando por: " + search);
    };
    var handleKeyDown = function (event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    return (react_1["default"].createElement(SearchContainer, null,
        react_1["default"].createElement(StyledInputBase, { placeholder: "Buscar Livro...", inputProps: { 'aria-label': 'search' }, value: search, onChange: handleInputChange, onKeyDown: handleKeyDown, endAdornment: react_1["default"].createElement(material_1.IconButton, { onClick: handleSearch, "aria-label": "search" },
                react_1["default"].createElement(Search_1["default"], null)) })));
}
exports["default"] = SearchBar;
