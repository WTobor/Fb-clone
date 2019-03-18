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
        posts.forEach(element => {
            const component = new PostComponent();
            component.render(this.$element);
        });
    }
}