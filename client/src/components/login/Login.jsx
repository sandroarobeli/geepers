import { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import theme from "../../theme/theme";

const Login = () => {
  // From Router
  const navigate = useNavigate();

  // from Redux
  //const dispatch = useDispatch();
  //const userStatus = useSelector(selectUserStatus);

  // Local state
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handler functions
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   if (userStatus === "idle") {
  //     try {
  //       await dispatch(login({ userName, password })).unwrap();
  //       navigate("/");
  //     } catch (error) {
  //       // For debugging only. error gets populated by createAsyncThunk abstraction
  //       console.log("from LOGIN submit"); //test
  //       console.log(error); // test
  //       setErrorMessage(error); // Local Error state get populated by Redux error
  //     }
  //   }
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username: ", userName);
    console.log("password: ", password);
    navigate("/");
  };

  // Cleanup function
  useEffect(() => {
    return () => {
      setUserName("");
      setPassword("");
    };
  }, []);

  // const handleErrorClear = () => {
  //   dispatch(clearError());
  //   setErrorMessage("");
  //   setUserName("");
  //   setPassword("");
  // };

  return (
    <Box
      component="form"
      //sx={styles.container}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Stack spacing={3} sx={{ alignItems: "center" }}>
        <Typography component="h3" sx={{}}>
          LOGIN
        </Typography>
        <TextField
          fullWidth
          variant="filled"
          aria-label="userName"
          name="userName"
          id="userName"
          label="Username"
          type="text"
          required
          InputProps={
            {
              // sx: styles.inputProps,
            }
          }
          InputLabelProps={
            {
              // sx: styles.inputLabelProps,
            }
          }
          value={userName}
          onChange={handleUserNameChange}
        />
        <TextField
          fullWidth
          variant="filled"
          aria-label="password"
          name="password"
          id="password"
          label="Password"
          type="password"
          required
          InputProps={
            {
              // sx: styles.inputProps,
            }
          }
          InputLabelProps={
            {
              // sx: styles.inputLabelProps,
            }
          }
          // FormHelperTextProps={{ sx: styles.helperTextProps }}
          value={password}
          onChange={handlePasswordChange}
        />
        <Typography
          aria-label="password-reset"
          variant="caption"
          component={RouterLink}
          to="/resetPasswordEmail"
          sx={{
            textDecoration: "none",
            alignSelf: "flex-end",
            fontWeight: 600,
            color: theme.palette.primary.light,
          }}
        >
          Forgot password?
        </Typography>
        <Button
          type="submit"
          //disabled={userStatus === "loading"}
          variant="contained"
          // sx={{ ...styles.button, width: "100%" }}
          endIcon={<CircularProgress color="secondary" size={25} />}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
