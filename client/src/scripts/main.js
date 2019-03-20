import {RootComponent} from './components/root.component';
import {start} from './router';

async function bootstrap() {
    const $page = document.querySelector("#page");
    const root = new RootComponent();
    root.render($page);

    start();
}

const postsButton = document.querySelector("#posts");
postsButton.addEventListener("click", (res) => bootstrap());
