import { EventEmitter } from "events";

export class Component extends EventEmitter {
    template = () => '';
    data = null;

    compile(html) {
        const document = new DOMParser().parseFromString(html, 'text/html');
        return document.body.firstElementChild;
    }

    render($holder){
        this.$element = this.compile(this.template());
        $holder.appendChild(this.$element);
    }

    setData(data) {
        this.data = data;
    }
}