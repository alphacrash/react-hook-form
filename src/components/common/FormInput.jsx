import { Box, InputLabel, TextField, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import _ from "lodash";
import inputs from "./inputs.json";

const FormInput = ({ name, optional }) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <Box sx={{ m: 2 }}>
      <InputLabel>
        <Typography fontWeight="bold">
          <FormattedMessage id={inputs[name].title} />
          {optional && (
            <Typography component="span" sx={{ ml: 2 }}>
              <i>
                <FormattedMessage id="common-optional" />
              </i>
            </Typography>
          )}
        </Typography>
      </InputLabel>
      <TextField
        fullWidth
        size="small"
        {...register(name, {
          required: <FormattedMessage id={inputs[name].helperText} />,
        })}
        error={Boolean(_.get(errors, name))}
        helperText={_.get(errors, `${name}.message`)}
      />
    </Box>
  );
};

export default FormInput;
