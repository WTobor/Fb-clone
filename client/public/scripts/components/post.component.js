import {Component} from './component';

export class PostComponent extends Component {
    template = () => `
    <div class="post">
        <a href="/posts/${this.data.id}/>
        ${this.data.body}
    </div>
    `;
}