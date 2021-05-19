import React from 'react';
import axios from 'axios';

const instance=axios.create({
    baseURL:'http://localhost:5001/clone-bf039/us-central1/api'
});
 
export default instance;
