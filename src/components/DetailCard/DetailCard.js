import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


const DetailCard = (props) => {
    return (
        <>
            <Card sx={{
                maxWidth: 500,
                minWidth: 450,
                boxShadow: 3,
                display: "flex",
                margin: "auto",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <CardContent sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start"
                }}>
                    <Typography sx={{ fontSize: 20 }} variant="subtitle2" gutterBottom paragraph>
                        {`- name: ${props.name}`}
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} variant="subtitle2" gutterBottom paragraph>
                        {`- username: ${props.username}`}
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} variant="subtitle2" gutterBottom paragraph>
                        {`- email: ${props.email}`}
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} variant="subtitle2" gutterBottom paragraph>
                        {`- phone: ${props.phone}`}
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} variant="subtitle2" gutterBottom paragraph>
                        {`- company: ${props.company}`}
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} variant="subtitle2" gutterBottom paragraph>
                        {`- website: ${props.website}`}
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} variant="subtitle2" gutterBottom paragraph>
                        - Address:
                    </Typography>
                    <List >
                        <ListItem >
                            <ListItemText
                                primary={`- street: ${props.address["street"]}`}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary={`- suite: ${props.address["suite"]}`}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary={`- city: ${props.address["city"]}`}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary={`- zipcode: ${props.address["zipcode"]}`}
                            />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        </>
    )
}

export default DetailCard;
