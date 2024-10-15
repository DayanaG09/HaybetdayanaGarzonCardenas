import { useEffect, useState } from "react";

const useFetch= () => {
    const [data, setData] = useState({slip:{},});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (defaultFetch = false)=>{
            setLoading(true);
            await fetch('https://api.adviceslip.com/advice')
            .then(async(response)=>{
                const result = await response.json();
                if(!response.ok){
                    throw new Error('Response was not ok')
                }
                setData(result);
            })
            .catch(() =>{
                
                setError(true);
            })
            .finally(()=>{

                setLoading(false);
            });
        };

    useEffect(() =>{
        fetchData();

    }, []);
    return {data,loading,error,fetchData};
    
};

export default useFetch