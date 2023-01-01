import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText, Input
} from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../firebase/config';


const signIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()


    const onClickHandler = () =>{
        
    
    signInWithEmailAndPassword(auth, email, password)
    router.push("/")



        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    }

    return (
        <div className='m-5'>
            <SimpleGrid width={500}>
                <FormControl>

                    <FormLabel>Email address</FormLabel>
                    <Input onChange={(e)=>setEmail(e.target.value)} type='email' />

                    <FormLabel>Password</FormLabel>
                    <Input onChange={(e)=>setPassword(e.target.value)} type='password' />

                    <FormHelperText>We'll never share your email.</FormHelperText> <br />

                    <Button onClick={()=> onClickHandler()} colorScheme='teal' variant='solid'>
                        Sign in
                    </Button>
                </FormControl> </SimpleGrid>

        </div>
    )
}

export default signIn