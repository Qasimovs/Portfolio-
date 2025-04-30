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

const Register = () => {
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("Registration successful:", values);
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
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            margin="normal"
            value={values.name}
            onChange={handleChange}
            error={Boolean(errors.name && touched.name)}
            helperText={touched.name && errors.name}
          />

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
            Sign Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;
