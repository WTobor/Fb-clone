import {RootComponent} from './components/root.component';
import {getPosts} from './services/post.service';

async function bootstrap() {
    let posts = await getPosts();
    console.log(posts);

    const $page = document.querySelector("#page");
    const root = new RootComponent();
    root.render($page);
}

const testButton = document.querySelector("#test");
testButton.addEventListener("click", (res) => bootstrap());
