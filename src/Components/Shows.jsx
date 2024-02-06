import { useState } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material";
import CardHeader from "@mui/material";
import CardMedia from "@mui/material";
import CardContent from "@mui/material";

export default function Shows(props) {
    return (

        <Grid>

            <Card>

                <CardHeader
                    title={props.title}
                    subheader={'Last updated: ' + new Date(props.updated).toISOString().substring(0, 10)}
                />

                <CardMedia
                    image={props.image}

                />

                <CardContent
                    description={props.description.substring(0, 101)}
                />

            </Card>

        </Grid>

    )
}