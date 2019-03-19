import {Component} from './component';
import { PostComponent } from './post.component';
import {getPosts} from '../services/post.service';

export class PostListComponent extends Component {
    template = `
        <div class="postList"></div>
    `;

    async render($holder) {
        super.render($holder);

        const posts = await getPosts();
        debugger;
        posts.forEach(post => {
            const component = new PostComponent();
            component.setData(post);
            component.render(this.$element);
        });
    }
}