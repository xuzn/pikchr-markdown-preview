import * as vscode from 'vscode';
const factory = require('./pikchr.js');
import MarkdownIt = require('markdown-it');

let render: any;

export interface PikchrResult {
  svg?: string;
  errorAsHtml?: string;
}

export const pikchr = (source: string): PikchrResult => {
  if (!render) {
    const instance = factory();
    render = instance.cwrap('pikchr', 'string', ['string']);
  }
  const result: string = render(source);
  if (result.startsWith('<svg')) {
    return { svg: result };
  } else {
    return { errorAsHtml: result };
  }
};

function markdownItPikchr(md: MarkdownIt) {
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    var content = '';
    var result = pikchr(token.content);
    content = result?.svg;
    return content;
  };
}

export function activate(context: vscode.ExtensionContext) {
  return {
    extendMarkdownIt(md) {
      return md.use(markdownItPikchr);
    }
  }
}
