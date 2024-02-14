import React,{useState, useEffect} from "react";
export default function Preview() {

    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const response = await fetch('https://podcast-api.netlify.app/shows');
                if (!response.ok) {
                    throw new Error('Failed to fetch podcasts');
                }
                const data = await response.json();
                setPodcasts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching podcasts:', error.message);
                setLoading(false);
            }
        };

        fetchPodcasts();
    }, []);


    return (
        <div>
            <h2>{podcasts.title}</h2>
            <img  style={{ position: 'sticky', top: 42 }} src={podcasts.image} alt='pic'></img>
        </div>
    )
}