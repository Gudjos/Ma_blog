import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My journey", body: "My journey began....", author: 'Odyseus', id: 1 },
        { title: "The Suitors", body: "Telemachus loved his momma....", author: 'Odyseus', id: 2 },
        { title: "Calypso", body: "She was so horny all the time....", author: 'Ulysses', id: 3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    useEffect(() => {
        console.log('useEffect ran')
        console.log(blogs)
    })
    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title="all blogs" handleDelete={handleDelete}/>
        </div>
)};
 
export default Home;