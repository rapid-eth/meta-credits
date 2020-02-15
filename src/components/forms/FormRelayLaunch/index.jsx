/* --- Global --- */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { firebase } from "@settings/firebase";

/* --- FormCreateOrganization : Component --- */
const FormCreateOrganization = props => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async values => {
    try {
      // const ref = await firebase.database().ref(`proposals`);
      // const saved = await ref.push(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Atom.Box>
        <Atom.Heading sx={{ my: 4 }}>Contact Information</Atom.Heading>
        <Molecule.Field
          name="name"
          placeholder="Relay Name (machine-readable)"
          register={register}
          errors={errors}
          sx={styles.field}
          sxWrapper={{
            flex: 3
          }}
        />
        <Molecule.Field
          name="deposit"
          placeholder="Deposit (ETH Amount)"
          register={register}
          errors={errors}
          sx={styles.field}
          sxWrapper={{
            flex: 3
          }}
        />

        <Atom.Button>Launch Guild</Atom.Button>
      </Atom.Box>
    </form>
  );
};

const styles = {
  field: {
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: 0,
    flex: 3,
    height: 50,
    p: 10
    // width: "100%"
  },
  button: {
    height: 50,
    flex: 1,
    width: 200
  }
};

FormCreateOrganization.defaultProps = {
  label: "Purchase"
};

export default FormCreateOrganization;
