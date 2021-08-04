import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const Landing = () => {

    return (
        <Grid>
            <h1>Schedule</h1>
            <h2>Plan your life before Aizen or Madara do.</h2>
            <Link to="/days">
                <Button variant="outlined" color="primary">Plan Days</Button>
            </Link>
        </Grid>
    );
}

export default Landing;