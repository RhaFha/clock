import React, {useState, useEffect} from 'react';

function Clock (){

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setDate(new Date())
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    

    return (
        <div>
            <h1>Hello, world!, Reloj</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    )

}

export default Clock;