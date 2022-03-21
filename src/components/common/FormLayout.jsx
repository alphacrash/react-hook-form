import { Card, Grid, Paper } from "@mui/material";

const FormLayout = ({ children }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} lg={8}>
        <Paper>{children}</Paper>
      </Grid>
    </Grid>
  );
};

export default FormLayout;
