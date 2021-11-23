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
        if (token.info.trim() === "pikchr") {
            var result = (0, exports.pikchr)(token.content);
            if (result.svg === undefined) {
                return token.content;
            }
            else {
                return result.svg;
            }
        }
        else {
            return token.content;
        }
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
