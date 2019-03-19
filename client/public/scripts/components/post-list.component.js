import {Component} from './component';
import { PostComponent } from './post.component';
import {getPosts, getSecretPosts} from '../services/post.service';

export class PostListComponent extends Component {

    template = () => `
        <div class="post-list">
            <p>
                Secret <input type="checkbox" class="is-auth-status"/>
            </p>
            <div class="post-list-content"></div>
        </div>
    `;

    async render($holder) {
        super.render($holder);

        let posts = [];
        const $status = document.querySelector(".is-auth-status");

        $status.addEventListener('change', () => {
            const status = $status.checked;
            this.emit('auth-status-changed', {status});
        })

        if(!$status.checked) {
            posts = await getSecretPosts();
        }
        else {
            posts = await getPosts();
        }

        posts.forEach(post => {
            const component = new PostComponent();
            component.setData(post);
            component.render(this.$element);
        });
    }
}