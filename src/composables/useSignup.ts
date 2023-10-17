import {ref} from "vue";
import {auth} from "@/firebase/config";

import {createUserWithEmailAndPassword} from "firebase/auth"

const error = ref("");
const isPending = ref(false);


async function signup(email: string, password: string) {
    error.value = ""
    isPending.value = true

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error('Could not complete signup please try again')
        }
        error.value = ""
        isPending.value = false
    } catch (err) {
        error.value = err.message
        isPending.value = false
    }
}

const useSignup = () => {
  return { error, isPending, signup }
}

export default useSignup