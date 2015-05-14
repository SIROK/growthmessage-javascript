/// <reference path="vender/t.d.ts" />
/// <reference path="events.ts" />

module GrowthMessage {
    export class Dialog extends GrowthMessage.Events {
        private styles = {
            '.growthmessage-dialog' : {
                'position' : 'absolute',
                'top' : '0px',
                'left' : '0px',
                'width' : '100%',
                'height' : '100%',
                'display' : 'table',
                'background-color' : 'rgba(0,0,0,0.9)'
            },
            '.growthmessage-dialog__margin-left' : {
                'display' : 'table-cell',
                'width' : '7.5%'
            },
            '.growthmessage-dialog__margin-right' : {
                'display' : 'table-cell',
                'width' : '7.5%'
            },
            '.growthmessage-dialog__inner' : {
                'display' : 'table-cell',
                'width' : '85%',
                'vertical-align' : 'middle'
            },
            '.growthmessage-dialog__contents' : {
                'display' : 'table',
                'table-layout' : 'fixed',
                'box-sizing' : 'border-box',
                'overflow' : 'hidden',
                'width' : '100%',
                'background-color' : '#eaeaea',
                'border-top' : '1px solid #fff',
                'border-radius' : '10px',
            },
            '.growthmessage-dialog-text__title' : {
                'margin' : '21px 14px 7px 14px',
                'text-align' : 'center',
                'word-wrap' : 'break-word',
                'line-height' : '42px',
                'font-size' : '28px'
            },
            '.growthmessage-dialog-text__body' : {
                'margin' : '7px 28px 28px 28px',
                'text-align' : 'center',
                'word-wrap' : 'break-word',
                'line-height' : '33px',
                'font-size' : '22px'
            },
            '.growthmessage-dialog-text__buttons' : {
                'display' : 'table',
                'width' : '100%',
                'border-top' : '1px solid #b4b4b4'
            },
            '.growthmessage-dialog-text__button' : {
                'display' : 'table-cell',
                'box-sizing' : 'border-box',
                'padding' : '14px 7px',
                'text-align' : 'center',
                'vertical-align' : 'middle',
                'word-wrap' : 'break-word',
                'font-size' : '16px',
                'color' : '#1678e5'
            }
        };
        private parentElement:any;
        constructor() {
            super();
        }
        open() {
            this.parentElement = document.body.getElementsByClassName('growthmessage')[0];
            this.render('dialog-text', {
                title : 'hogehoge',
                body : 'fugafugafugafugafugafugafugafuga'
            });
            this.setStyles(this.styles);
        }
        render(moduleName:string, data:{}) {
            var src = GrowthMessage.module.require(moduleName);
            var html = new GrowthMessage.t(src).render(data);
            this.parentElement.innerHTML = html;
        }
        setStyles(styles:{}) {
            Object.keys(styles).forEach((selector)=>{
                var style = styles[selector];
                var els:any = this.parentElement.querySelectorAll(selector);
                if(!els) return;
                [].slice.call(els).forEach((el)=>{
                    Object.keys(style).forEach((key)=>{
                        el.style[key] = style[key];
                    });
                });
            });
        }
    }
}
