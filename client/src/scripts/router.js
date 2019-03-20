import page from 'page';
import { PostListComponent } from './components/post-list.component';
import { PostComponent } from './components/post.component';
import { EmptyComponent } from './components/empty.component';

page('*', (context, next) => {
    console.log(`request ${context.path}`);
    const $outlet = document.querySelector('router-outlet');
    $outlet.innerHTML = '';

    next();
})

page('/', () => {
    const $outlet = document.querySelector('router-outlet');

    const component = new PostListComponent();
    component.render($outlet);
})

page('/posts/:id', (context) => {
    const id = context.params.id;
    const $outlet = document.querySelector('router-outlet');

    const component = new PostComponent();
    component.render($outlet);
})

page('/*', () => {
    const $outlet = document.querySelector('router-outlet');

    const component = new EmptyComponent();
    component.render($outlet);
})

export function start() {
    page();
}