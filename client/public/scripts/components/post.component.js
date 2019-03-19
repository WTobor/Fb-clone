import {Component} from './component';

export class PostComponent extends Component {
    template = () => `
    <div class="post"></div>
    `;

    getTemplate() {
        return this.data ? `
        <div class="post">
            <h3>${this.data.body}</h3>
        </div>`
        : `<div class="post">Could not load post.</div>`;
    }
}