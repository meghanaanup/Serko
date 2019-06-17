
import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator, SelectValidator, } from 'react-material-ui-form-validator';
import '../css/App.css';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormHelperText from '@material-ui/core/FormHelperText';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import ErrorIcon from '@material-ui/icons/Error';
import clsx from 'clsx';
import Welcome from './welcome';
import Container from '@material-ui/core/Container';





class LoginForm extends React.Component {

    componentDidMount() {
        // custom validation rules'
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            const { formData } = this.state;
            console.log("ddddddd", value);
            if (formData.confirmPassword !== formData.password) {
                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('selectEmpty', (value) => {
            const { formData } = this.state;
            if (formData.language === "") {
                return false;
            }
            return true;
        });

        ValidatorForm.addValidationRule('passwordLengthCheck', (value) => {
            const { formData } = this.state;
            if (formData.password.length < 5) {
                return false;
            }
            return true;
        });


        ValidatorForm.addValidationRule('passwordNumberCheck', (value) => {
            const { formData } = this.state;
            const re = /[0-9]/;
            if (!re.test(formData.password)) {
                return false;
            }
            return true;
        });


        ValidatorForm.addValidationRule('passwordLowerCaseCheck', (value) => {
            const { formData } = this.state;
            const re = /[a-z]/;
            if (!re.test(formData.password)) {
                return false;
            }
            return true;
        });


        ValidatorForm.addValidationRule('passwordUpperCaseCheck', (value) => {
            const { formData } = this.state;
            const re = /[A-Z]/;
            if (!re.test(formData.password)) {
                return false;
            }
            return true;
        });
    }

    // handle change event for all buttons
    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    // handle submit event for sign up button'
    handleSubmit = () => {
        this.setState({ openSnackBar: false });
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });

        let email = "";
        let password = "";
        if (this.state.formData.email === "newuser@serko.com") {
            email = "eve.holt@reqres.in"
            password = "pistol"
        } else {
            email = this.state.email;
            password = this.state.password;
        }

        var elem = this;
        axios.post('https://reqres.in/api/register', {
            "email": email,
            "password": password
        })
            .then(function (response) {
                elem.setState({ signUp: true });
            })
            .catch(function (error) {
                elem.setState({ snackBarMessage: "User already registered" });
                elem.setState({ openSnackBar: true });
            });

    }

    // snack bar events'
    showSnackbarHandler = () => {
        if (this.state.submitted === true) {
            this.setState({ openSnackBar: false });
        } else {
            this.setState({ openSnackBar: true });
        }
    }

    state = {
        formData: {
            email: '',
            password: '',
            confirmPassword: '',
            language: '',


        },
        openSnackBar: false,
        snackBarMessage: "Your request parameters didn't validated",
        signUp: false,
        submitted: false,
    }

    render() {
        const { formData } = this.state;
        return (
            <Container component="main" maxWidth="xs" className={this.props.styles.logincontainer}>
            <div className={this.state.signUp === false ? "active" : "inactive"}>
            <CssBaseline />
            <div className={this.props.styles.paper}>
               <Avatar alt="serko icon" src={process.env.PUBLIC_URL + 'images/SerkoLogo.svg'} className={this.props.styles.avatar}>
               </Avatar>
               <Typography className="header-styles" component="h1" variant="h5">
                  Sign up with serko
               </Typography>
               <ValidatorForm
                  ref="form"
                  className={this.props.styles.form}
                  onSubmit={this.handleSubmit}
                  onError={errors =>
                  console.log(errors)}
                  >
                  <Grid container spacing={2} >
                     <Grid item xs={12}>
                        <TextValidator
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={this.handleChange}
                        validators={['required', 'isEmail']}
                        errorMessages={['Invalid email', 'Invalid email']}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextValidator
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.handleChange}
                        value={formData.password}
                        validators={['passwordLengthCheck', 'passwordNumberCheck', 'passwordLowerCaseCheck', 'passwordUpperCaseCheck']}
                        errorMessages={['Password less than 5 char too weak', 'Password with no numbers too weak', 'Password with no lowercase too weak', 'Password with no uppercase too weak']}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextValidator
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirm-password"
                        onChange={this.handleChange}
                        autoComplete="current-password"
                        validators={['required', 'isPasswordMatch']}
                        errorMessages={['Please fill out this feild', 'Password and password confirmation don’t match']}
                        value={formData.confirmPassword}
                        />
                     </Grid>
                     <Grid item xs={12} className={this.props.styles.Select}>
                        <SelectValidator name="language"
                        label="Prefered Language"
                        required
                        style={{ width: 340, }}
                        onChange={this.handleChange}
                        value={formData.language}
                        validators={['selectEmpty']}
                        errorMessages={['Invalid language']}
                        >
                        <MenuItem value={'English'}>English</MenuItem>
                        <MenuItem value={'French'}>French</MenuItem>
                        <MenuItem value={'Spanish'}>Spanish</MenuItem>
                        </SelectValidator>
                        <FormHelperText>Select your preferred language</FormHelperText>
                     </Grid>
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     color="primary"
                     onClick={this.showSnackbarHandler}
                     className={this.props.styles.submit}
                     >
                  Sign Up
                  </Button>
               </ValidatorForm>
            </div>
            <Snackbar className={this.props.styles.clientSnackbar}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            ContentProps={{
            classes: {
            root: this.props.styles.warning
            }
            }}
            variant="warning"
            open={this.state.openSnackBar}
            autoHideDuration={6000}
            onClose={this.handleClose}
            message={
            <span id="client-snackbar" className={this.props.styles.message} >
               <ErrorIcon className={clsx(this.props.styles.error, this.props.styles.error.iconVariant)} />
               {<span id="message-id">{this.state.snackBarMessage}</span>}
            </span>
            }
            />
            </div>
            <Welcome styles={this.props.styles} active={this.state.signUp}></Welcome>
            <Box mt={1}>
               <InputLabel htmlFor="language" className={this.props.styles.companyidentity}>Powered by serko</InputLabel>
            </Box>
         </Container>
        );
    }
}

export default LoginForm;

