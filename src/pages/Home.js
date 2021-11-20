import { useState, useEffect, useCallback } from 'react';
import { Grid, Container } from '@mui/material';
import InfoCard from '../components/InfoCard/InfoCard';



const Home = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsersHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json(); 
            setUsers(data);
        } catch (error) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchUsersHandler()
    }, [fetchUsersHandler]);

    let content = <p>Found no users.</p>

    if (users.length > 0) {
        content = <Grid container sx={{ justifyContent: "center" }}>
            {users.map((user) => (
                <Grid item sx={{ margin: 2 }} key={user["id"]} xs={12} sm={12} md={3}>
                    <InfoCard
                        key={user["id"]}
                        id={user["id"]}
                        name={user["name"]}
                        email={user["email"]}
                        website={user["website"]}
                    />
                </Grid>
            ))}
        </Grid>;
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <Container >
            {content}
        </Container>
    )
}

export default Home
