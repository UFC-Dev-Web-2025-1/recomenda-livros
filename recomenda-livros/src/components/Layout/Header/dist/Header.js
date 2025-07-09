"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var ArrowBackIos_1 = require("@mui/icons-material/ArrowBackIos");
var styles_1 = require("@mui/material/styles");
var SearchBar_1 = require("../Forms/SearchBar");
var UserAvatar = styles_1.styled(material_1.Box)(function (_a) {
    var theme = _a.theme;
    return ({
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.primary.main,
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginLeft: theme.spacing(2)
    });
});
function Header(_a) {
    var title = _a.title, avatar = _a.avatar;
    return (react_1["default"].createElement(material_1.AppBar, { position: "static", sx: { backgroundColor: '#154273', boxShadow: 'none' } },
        react_1["default"].createElement(material_1.Toolbar, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
            react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center' } },
                react_1["default"].createElement(material_1.IconButton, { edge: "start", color: "inherit", "aria-label": "back" },
                    react_1["default"].createElement(ArrowBackIos_1["default"], null)),
                react_1["default"].createElement("h3", null, title)),
            react_1["default"].createElement(material_1.Box, { sx: { flexGrow: 1, maxWidth: '500px' } },
                react_1["default"].createElement(SearchBar_1["default"], null)),
            react_1["default"].createElement(UserAvatar, null,
                react_1["default"].createElement(material_1.Typography, { variant: "h6" }, avatar)))));
}
exports["default"] = Header;
