import React from "react";
import { useFormik } from "formik";
import schema from "../yup";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";

const Login = () => {
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("Login successful:", values);
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={6} sx={{ p: 5, width: 400 }}>
        <Typography variant="h5" textAlign="center" mb={3}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            margin="normal"
            value={values.email}
            onChange={handleChange}
            error={Boolean(errors.email && touched.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="normal"
            value={values.password}
            onChange={handleChange}
            error={Boolean(errors.password && touched.password)}
            helperText={touched.password && errors.password}
          />

          <Button
            variant="contained"
            type="submit"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
