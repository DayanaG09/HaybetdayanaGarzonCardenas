

const fetchData = async ()=>{
    var data;
    var error = null;
    try{
        await fetch('https://api.adviceslip.com/advice')
        .then(async(response)=>{
            const result = await response.json();
            if(!response.ok){
                throw new Error('Response was not ok')
            }
            data = result;
        });
    } catch (err) {
        error=err;  
    }
    return {data: data, error:error}
};
   
const getAdvise = () =>{
    return fetchData("https://api.adviceslip.com/advice");
}

export default getAdvise