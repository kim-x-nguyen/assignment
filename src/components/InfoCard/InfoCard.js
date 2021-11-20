import * as React from "react";
import { Link } from 'react-router-dom';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LetterAvatar from "../LetterAvatar/LetterAvatar";
import Button from '@mui/material/Button';
import { blue } from "@mui/material/colors";



export default function InfoCard(props) {
  return (
    <Card sx={{
      maxWidth: 300,
      boxShadow: 3,
      display: "flex",
      margin: "auto",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <CardHeader
        avatar={
          <LetterAvatar name={props.name} />
        }
      />
      <CardContent sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Typography sx={{ fontSize: 20 }} variant="subtitle2" gutterBottom paragraph>
          {props.name}
        </Typography>
        <Typography sx={{ fontSize: 15 }} variant="body2" gutterBottom paragraph>
          {props.email}
        </Typography>
        <Typography sx={{ color: blue[700], fontSize: 20 }} variant="body1" gutterBottom paragraph>
          {props.website}
        </Typography>
      </CardContent>
      <Button sx={{margin: 3}} variant="contained" component={Link} to={`/${props.id}`}>MORE DETALS</Button>
    </Card>
  );
}