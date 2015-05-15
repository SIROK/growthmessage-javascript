/// <reference path="vender/nanoajax.d.ts" />
/// <reference path="events.ts" />

module GrowthMessage {
    export class Config extends GrowthMessage.Events {
        private data:{type:string};
        constructor(){
            super();
            this.on('load', 'set');
            this.load('/sample/json/image-2buttons.json');
        }
        load(url:string, params?:{}){
            GrowthMessage.nanoajax.ajax({
                url: url,
                method: 'GET'
            }, (code:number, responseText:string)=>{
                this.trigger('load', JSON.parse(responseText));
            });
        }
        set(responseText){
            this.data = responseText;
            this.trigger('set');
        }
        get():{type:string}{
            return this.data;
        }
    }
}
