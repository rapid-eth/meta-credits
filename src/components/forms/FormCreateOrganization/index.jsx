/* --- Global --- */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { firebase } from "@settings/firebase";

/* --- FormCreateOrganization : Component --- */
const FormCreateOrganization = props => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async values => {
    console.log(values);
    try {
      const ref = await firebase.database().ref(`proposals`);
      const saved = await ref.push(values);
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
          placeholder="Name"
          register={register}
          errors={errors}
          sx={styles.field}
          sxWrapper={{
            flex: 3
          }}
        />
        <Molecule.Field
          name="email"
          placeholder="Email"
          register={register}
          errors={errors}
          sx={styles.field}
          sxWrapper={{
            flex: 3
          }}
        />
        <Atom.Heading sx={{ my: 4 }}>Decentralized Application</Atom.Heading>
        <Molecule.Field
          name="dappname"
          placeholder="Application Name"
          register={register}
          errors={errors}
          sx={styles.field}
          sxWrapper={{
            flex: 3
          }}
        />
        <Molecule.Field
          name="url"
          placeholder="Application URL"
          register={register}
          errors={errors}
          sx={styles.field}
          sxWrapper={{
            flex: 3
          }}
        />
        <Atom.Button>Register</Atom.Button>
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
