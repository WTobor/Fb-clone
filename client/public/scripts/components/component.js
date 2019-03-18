export class Component {
    template = '';
    
    compile(html) {
        const document = new DOMParser().parseFromString(html, 'text/html');
        return document.body.firstElementChild;
    }

    render($holder){
        this.$element = this.compile(this.template);
        $holder.appendChild(this.$element);
    }
}