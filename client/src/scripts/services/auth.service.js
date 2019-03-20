export async function login(login, password) {
    try {
        const response = await fetch('http://localhost:3002/login', {method: "POST", body: {login, password}});
        return response.json();
    }
    catch(err) {
        console.log(err);
    }
}
