import React from 'react';
import Button from '@material-ui/core/Button';
import '../css/App.css';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';



  





class Welcome extends React.Component {
    render() {
        return (
            <div className={this.props.active===true?'active':'inactive'}>
            <CssBaseline />
            <div className={this.props.styles.paper}>
              <Avatar alt="serko icon" src={process.env.PUBLIC_URL  + 'images/SerkoLogo.svg' } className={this.props.styles.avatar}>
              </Avatar>
              <Typography component="h1" variant="h5">
               Serko
              </Typography>
              <InputLabel htmlFor="language" className={this.props.styles.companyidentity}>Welcome to serkos online booking tool</InputLabel>
                <Grid container spacing={2} >
                  <Grid item xs={12}>
                  <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={this.props.styles.submit}
                >
                 Get Started
                </Button>
                </Grid></Grid>
                </div>
          </div>
        );
    }

}

export default Welcome;
