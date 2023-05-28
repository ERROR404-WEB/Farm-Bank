import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import SendIcon from '@mui/icons-material/Send';
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "400px",
          margin: "20px",
          color: "white",
        },
      },
    },
  },
});

export default function help() {
  return (
    <>
      <section className="help text-center">
        <div className="helphead text-center">
          <h3 className="helptext">Get in Touch</h3>
        </div>
        <div className="container formm">
          <form
            method="POST"
            action="mailto: farmbank@gamil.com"
            enctype="multipart/form-data"
          >
            <ThemeProvider theme={theme}>
              <TextField
                className="formcen"
                id="standard-basic"
                label="Name"
                variant="standard"
              />
            </ThemeProvider>
            <br />
            <ThemeProvider theme={theme}>
              <TextField
                className="formcen"
                id="standard-basic"
                label="Email"
                variant="standard"
              />
            </ThemeProvider>
            <br />
            <ThemeProvider theme={theme}>
              <TextField
                className="formcen"
                id="outlined-textarea"
                label="Your Message"
                placeholder="How can we help you?"
                multiline
              />
              <br />
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Button variant="outlined" endIcon={<SendIcon />} type="submit">
                Send
              </Button>
            </ThemeProvider>
          </form>
        </div>
      </section>
    </>
  );
}
