import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DetailCard/DetailCard';



const Detail = () => {
    const { id } = useParams();
    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
     let url = `https://jsonplaceholder.typicode.com/users/${id}`;

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                const data = await response.json();
                setUser(data);
            }
            catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [id, url]);
    let content = <p>Found no user.</p>


    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    if (user) {
        content = <DetailCard
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            company={user.company.name}
            website={user.website}
            address={user.address}
        />;
    }

    return (
        <>
            {content}
        </>
    )
}

export default Detail;
