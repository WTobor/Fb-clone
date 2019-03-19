import {Component} from './component';

export class RootComponent extends Component {
    $element = null;
    template = () => `
        <div class="root">
            <h1>Facebook</h1>
            <router-outlet></router-outlet>
        </div>
    `;
}