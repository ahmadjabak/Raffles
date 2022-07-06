

import {useLocation} from 'react-router-dom';

export default function AddRaffles(){
    const location = useLocation();


return (

    <>
    <input type="text" value={location.state.id}/>

    </>
    )
}

