import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    clientSnackbar:{
      backgroundColor: theme.palette.error.dark,
    },
    warning: {
      backgroundColor: theme.palette.error.dark,
    },
    iconVariant: {
      opacity: 0.9,
      marginRight: theme.spacing(1),
      fontSize:20,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    active:{
      display:'block',
    },
    inactive:{
      display:'none',
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    instruction: {
      fontSize:12,
    },
    avatar: {
      margin: theme.spacing(1),
      borderRadius:0,
      width:60,
      height:60,
  
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(5, 0, 2),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    companyidentity:{
      textAlign:'center',
      marginTop:20,
      fontSize:14,
    },
    logincontainer:{
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
  }));


export default useStyles;