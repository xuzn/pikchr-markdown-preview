const factory = require('./pikchr.js');

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
