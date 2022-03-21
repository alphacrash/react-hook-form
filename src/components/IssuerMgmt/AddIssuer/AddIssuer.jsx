import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import Form from "../../common/Form";
import FormLayout from "../../common/FormLayout";
import FormSection from "../../common/FormSection";
import FormInput from "../../common/FormInput";

const AddIssuer = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <FormLayout>
      <Form onSubmit={onSubmit}>
        <FormSection
          title={<FormattedMessage id="issuer-mgmt-issuerDetails" />}
          subtitle={<FormattedMessage id="issuer-mgmt-issuerDetailsCaption" />}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <FormInput name="issuerName" />
              <FormInput name="federalEmployerId" optional />
              <FormInput name="hiosIssuerId" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormInput name="naicCompanyCode" optional />
              <FormInput name="naicGroupCode" optional />
            </Grid>
          </Grid>
        </FormSection>
        <input type="submit" />
      </Form>
    </FormLayout>
  );
};

export default AddIssuer;
