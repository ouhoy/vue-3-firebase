import {ref, watchEffect} from 'vue'

// firebase imports
import {db} from "@/firebase/config";
import {collection, onSnapshot} from 'firebase/firestore'


type Book = {
    id: string;
    title: string;
    author: string;
};

function getCollection<T>(collectionName: string) {
    const documents = ref<T[]>()

    // collection reference
    let collectionReference = collection(db, collectionName);

    const unsubscribe = onSnapshot(collectionReference, snapshot => {
        let results: T[] = []
        snapshot.docs.forEach(doc => {
            const data = doc.data() as T;
            results.push({...data, id: doc.id})
        })

        // Update values
        documents.value = results
    })

    watchEffect(onInvalidate => {
        onInvalidate(() => unsubscribe())
    })

    return {documents}
}

export default getCollection