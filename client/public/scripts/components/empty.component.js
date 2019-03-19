import {Component} from './component';

export class EmptyComponent extends Component {
    template = () => `
    <div class="empty">EMPTY</div>
    `;
}