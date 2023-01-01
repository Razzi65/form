import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/config"
import { useState } from "react"
import { toast } from "react-toastify";
import { useRouter } from 'next/router'


const useSignUp = () => {

    const [newEmail, setNewEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const router = useRouter()


    const onClickHandler = async () => {

        try {
            
            await createUserWithEmailAndPassword(auth, newEmail, newPassword)
            toast.success('Successfully login!');
            router.push("/signin")
        }

               

        catch (error) {
            console.log(error);
            toast.error(error.message)

        }
    }
    return {
        newEmail,
        newPassword,
        onClickHandler,
        setNewEmail,
        setNewPassword
    }
}


export default useSignUp