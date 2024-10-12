import { useState, useEffect } from 'react';
import useFetch from '../Hook/useFetch.js';
import Dado from '../Assets/icon-dice.svg';
import DividerDesktop from '../Assets/pattern-divider-desktop.svg';
import Dividermobile from '../Assets/pattern-divider-mobile.svg';
import "../Styles/Card.css";

function Card (){
    const [url, setUrl] = useState('https://api.adviceslip.com/advice/71'); 
    const { data, loading, error, fetchData } = useFetch(url);
    const [isMobile, setIsMobile] = useState(false); 

    useEffect(() => {
        const handleResize = () => { setIsMobile(window.innerWidth <= 575); };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {console.log("cambio"); window.removeEventListener('resize', handleResize); };
    }, []);
    
    const handleAdvice = () => {
        setUrl('https://api.adviceslip.com/advice');
        fetchData();
    };

    return( 
            <div className="card pt-2">
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <div className="card-title py-3 pt-lg-4 custom-title">  {loading ? 'ADVICE #' : data && data.id ? `ADVICE #${data.id}` : 'ADVICE'} </div>
                    <div className="card-text text-center mb-4 mx-lg-4 mx-sm-0 ">

                        {loading ? "Loading..." : error ? error : data && `"${data.advice}"`}
                    </div>
                        <img src={isMobile ? Dividermobile : DividerDesktop} alt="" className='mt-lg-3  mt-sm-0 custom-color-divider'/>
                    <div className="position-relative  d-flex p-4  mt-lg-2  mt-sm-0">
                        <button className="position-absolute circular"  onClick={handleAdvice} >
                            <img src={Dado} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
            
    )
}export default Card
