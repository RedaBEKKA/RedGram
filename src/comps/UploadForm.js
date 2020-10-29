import React,{useState} from 'react';
import Progressbar from './Progressbar'

const UploadForm = () => {
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null)
    const types = ['image/png','image/jpeg'];
    const changeHandler = (e) =>{
        let selected = e.target.files[0];
        console.log(selected)

        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('')
        }else{
            setFile(null)
            setError('SVP ,séléctionnez le format approprié de l\'image')
        }
      }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                { error && <div className="error">{ error }</div>}
                { file && <div>{ file.name }</div> }
                { file && <Progressbar file={file} setFile={setFile} /> }
            </div>
    </form>
    );
};

export default UploadForm;