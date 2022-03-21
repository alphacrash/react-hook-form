import { Grid, Typography } from "@mui/material";

const FormSection = (props) => {
  const { children, subtitle, title } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography>{subtitle}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ mt: 4 }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default FormSection;
