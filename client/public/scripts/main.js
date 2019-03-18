import {RootComponent} from './components/root.component';

async function getPosts() {
    const response = await fetch('http://localhost:3000/posts');
    return response.json();
}

async function bootstrap() {
    let posts = await getPosts();
    console.log(posts);

    const $page = document.querySelector("#page");
    const root = new RootComponent();
    root.render($page);
}

const testButton = document.querySelector("#test");
testButton.addEventListener("click", (res) => bootstrap());
