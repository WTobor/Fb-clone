export async function getPosts() {
    try {
        const response = await fetch('http://localhost:3000/posts');
        return response.json();
    }
    catch(err) {
        console.log(err);
    }
}
