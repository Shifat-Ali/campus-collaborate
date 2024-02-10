import React from "react";
import PostCard2 from "./project1";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingScreen from "./Loading";

export default function ProjectFeedPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    var projects = null;
    var prev = null;
    var next = null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:2015/projects?page=1&limit=5');
                setData(JSON.parse(JSON.stringify(response.data)));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    projects = data.projects;
    prev = data.previous;
    next = data.next;
    console.log(prev, next, projects);

    if (loading) {
        return <p><LoadingScreen /></p>;
        // return
        //   <LoadingScreen />;
    }



    return <>
        {projects.map((project, index) => (
            <PostCard2 key={index} data={project}> </PostCard2>
        ))}
        {/* <PostCard1 ></PostCard1>
    <PostCard1></PostCard1>
    <PostCard1></PostCard1>
    <PostCard1></PostCard1> */}
    </>;
}
