import {projectFirestore} from '../firebase/config'
import {useState,useEffect} from 'react'


const useFirestore = (collection) =>{
    const [docs,setDocs] = useState([]);

    useEffect(() =>{
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap) => {
            let document = [];
            snap.forEach(doc => {
                document.push({...doc.data(),id:doc.id})
            });
            setDocs(document);
        });

        return () =>unsub()
    },[collection]
    )

    return {docs}
}

export default useFirestore;