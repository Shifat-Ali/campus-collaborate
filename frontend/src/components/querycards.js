import React from "react";
import PostCard2 from "./querypost";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";

export default function Query() {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    var query = null;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:2015/queries/${id}`);
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
    // console.log('aaaaa', query);

    if (loading) {
        return <p><Loading /></p>;
        // return
        //   <LoadingScreen />;
    }
    return <>
        <PostCard2 data={data.query}></PostCard2>
    </>;
}
