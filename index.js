"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = exports.pikchr = void 0;
const factory = require('./pikchr.js');
let render;
const pikchr = (source) => {
    if (!render) {
        const instance = factory();
        render = instance.cwrap('pikchr', 'string', ['string']);
    }
    const result = render(source);
    if (result.startsWith('<svg')) {
        return { svg: result };
    }
    else {
        return { errorAsHtml: result };
    }
};
exports.pikchr = pikchr;
function markdownItPikchr(md) {
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        var content = '';
        var result = (0, exports.pikchr)(token.content);
        content = result === null || result === void 0 ? void 0 : result.svg;
        return content;
    };
}
function activate(context) {
    return {
        extendMarkdownIt(md) {
            return md.use(markdownItPikchr);
        }
    };
}
exports.activate = activate;
