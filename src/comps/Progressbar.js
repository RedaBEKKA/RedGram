import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';
import {useEffect} from 'react'

import React from 'react';

const Progressbar = ({file,setFile}) => {
    const {url,progress} = useStorage(file);
    console.log(progress,url);
    useEffect(() => {
        if (url) {
          setFile(null);
        }
      }, [url, setFile]);
    return (
        <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
    //<div className="progress-bar" style={{width:progress +'%'}}></div>

    
    );
};

export default Progressbar;