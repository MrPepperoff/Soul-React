// чтобы typescript понимал sass

declare module '*.sass'{
    const content: {
        [className: string]: string
    };
    export = content;
}
// остальные привязки
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';

declare module '*.ts';