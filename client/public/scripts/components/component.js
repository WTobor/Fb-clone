export class Component {
    template = () => '';
    data = null;

    compile(html) {
        const document = new DOMParser().parseFromString(html, 'text/html');
        return document.body.firstElementChild;
    }

    render($holder){
        this.$element = this.compile(this.getTemplate());
        $holder.appendChild(this.$element);
    }

    getTemplate() {
        return this.template;
    }

    setData(data) {
        this.data = data;
    }
}