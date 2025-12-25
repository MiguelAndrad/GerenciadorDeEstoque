import { useState } from "react";
import {auth} from "../../../firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "expo-router";

const LoginViewModel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

    async function Authenticate(){
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Usuário autenticado com sucesso:", user);
            router.push("index");

        } catch (error) {
            console.error("Erro ao autenticar usuário:", error);
           
        }
    }


  return {
    email,
    setEmail,
    password,
    setPassword,
    Authenticate
  };
};

export default LoginViewModel;
