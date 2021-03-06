import firebase from 'firebase';

export class AuthService {
    signup(email: string, password: string) {
        return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password);
    }

    signin(email: string, password: string) {
        return firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);
    }

    logout() {
        firebase.auth().signOut();
    }

    getActiveUser() {
        return firebase.auth().currentUser;
    }

}