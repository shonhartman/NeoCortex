import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtvWsnXZbNrx4UPKZiRlGV8pNwyHCLf3o",
    authDomain: "neo-cortex.firebaseapp.com",
    databaseURL: "https://neo-cortex.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;