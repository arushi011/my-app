import * as firebase from 'firebase';

export class AuthService {
    token: string;
    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password) // this is a promise
        .catch(error => console.log(error));
    }
    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                console.log(response);
                firebase.auth().currentUser.getToken().then(
                    (token: string) => {
                        this.token = token;
                    }
                ).catch(
                    error => console.log(error)
                );
            }
        )
        .catch(
            error => console.log(error)
        );
    }
    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
    getToken() {
        firebase.auth().currentUser.getToken() // this is async and thus is a promise
        .then(
            (token: string) => {
                this.token = token;
            }
        ).catch(
            error => console.log(error)
        );
        return this.token; // this is bad because it returns old token, return statement doesnt waits for promise to complete
    }
    isAuthenticated() {
        return this.token != null;
    }

}
