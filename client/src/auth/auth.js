class Auth {
    static logIn(token) {
        localStorage.setItem('token', token);
    }

    static logOut(token) {
        localStorage.removeItem('token');
    }

    static isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    static getToken() {
        return localStorage.getItem('token');
    }
}

export default Auth;
