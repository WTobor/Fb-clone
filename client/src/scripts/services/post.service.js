export async function getPosts() {
    try {
        const response = await fetch('http://localhost:3001/posts');
        return response.json();
    }
    catch(err) {
        console.log(err);
    }
}

export async function getSecretPosts() {
    try {
        const response = await fetch('http://localhost:3001/secret/posts');
        return response.json();
    }
    catch(err) {
        console.log(err);
    }
}
