import { useState } from 'react';
const Home = () => {
 //   let name = 'mario';
    const [name, setName] = useState('mario')
    const [age, setAge] = useState(43)
    const handleClick = () => {
        setAge(55)
        setName('Luigi ')
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is {age}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
)};
 
export default Home;