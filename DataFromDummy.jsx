import { useEffect, useState } from "react";

export default function DataFromDummy() {

const [data, setData] = useState([]);
const [load, setLoad] = useState(true);

useEffect(() => {
    const getData = async () => {
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

            if(!res.ok){
                throw new Error('failed to GET data');
            }
            const response = await res.json();
            setData(response);
        }
        catch(error){
            console.error("An Error has occured:", error);
        }
        finally{
            setLoad(false);
        }
    };

    getData();

}, []);

if(load){
    return <h1>Loading...</h1>
}

return (
    <div>
        <h1>Fetching Data from DummyAPI</h1>
        {data.map( info => (
            <div key={info.id}>
               <h2>{info.id}</h2>
               <p>{info.body}</p>
            </div>
            ))}
    </div>
)}
