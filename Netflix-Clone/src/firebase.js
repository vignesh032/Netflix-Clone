
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDgtJvi1PmCqlFPuA00gYdIh2pd2dReuRE",
  authDomain: "netflix-clone-fbe82.firebaseapp.com",
  projectId: "netflix-clone-fbe82",
  storageBucket: "netflix-clone-fbe82.firebasestorage.app",
  messagingSenderId: "968514404492",
  appId: "1:968514404492:web:7ba401d1ed3e88cfa5bba9"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

const signup=async(name,email,password)=>{
    try {
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}
const logout = ()=>{
    signOut(auth)
}
export {auth,db,login,signup,logout}