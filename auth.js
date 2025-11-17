import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js"
import { app } from "./firebase"

class Auth{

    #firebaseAuth
    constructor(app){
        this.#firebaseAuth= getAuth(app) 
    }

    createUser(email, senha){
        createUserWithEmailAndPassword(this.#firebaseAuth, email, senha).then((userLogged) => {
            console.log(`Logou mesmo? ${userLogged}`)
        })
    }
}

const auth = new Auth(app);

auth.createUser("salomao", "123")
