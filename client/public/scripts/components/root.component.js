import {Component} from './component';
import { PostListComponent } from './post-list.component';

export class RootComponent extends Component {
    $element = null;
    template = `
        <div class="root"></div>
    `;

    render($holder){
        super.render($holder);

        const component = new PostListComponent();
        component.render(this.$element);
    }
}