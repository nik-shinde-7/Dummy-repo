"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var document_1 = require("next/document");
var react_1 = tslib_1.__importDefault(require("react"));
function Document() {
    return (react_1.default.createElement(document_1.Html, { lang: "en" },
        react_1.default.createElement(document_1.Head, null),
        react_1.default.createElement("body", null,
            react_1.default.createElement(document_1.Main, null),
            react_1.default.createElement(document_1.NextScript, null))));
}
exports.default = Document;
//# sourceMappingURL=_document.js.map