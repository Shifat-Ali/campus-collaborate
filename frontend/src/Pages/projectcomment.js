import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import axios from "axios";
import CommentSection from "../components/Comment";

export default function ProjectComment() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:2015/comments/projects/${id}`);
                setData(JSON.parse(JSON.stringify(response.data)));
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    // let query = data.query;
    // console.log('comment', data.comments);



    if (loading) {
        return <p><Loading /></p>;
        // return
        //   <LoadingScreen />;
    }
    return <>
        <CommentSection data={data.comments} />
    </>;
}
