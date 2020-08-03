import React from "react";

import {
  FluidForm,
  TextInput,
  Dropdown,
  Column,
  Button,
  Grid,
  Row,
} from "carbon-components-react";
import { ArrowRight16 } from "@carbon/icons-react";

import { useForm } from "../../hooks/";
import { saveUser } from "../../services/";

export default function Registration({ onNotify }) {
  const emailRule = (v) => !!v || "Provide valid email";
  const noEmpty = (v) => !!v || "This field is required";

  const [values, errors, handleBlur, handleChange, handleSubmit] = useForm(
    {
      email: "",
      password: "",
      lastName: "",
      firstName: "",
      gender: { id: "option-1", label: "Male" },
    },
    {
      email: emailRule,
      company: noEmpty,
      password: noEmpty,
      lastName: noEmpty,
      firstName: noEmpty,
    },
    async ({ values, errors }) => {
      try {
        if (validate(errors)) {
          const data = await saveUser(values);
          onNotify({ kind: "success", title: data.message });
        } else {
          onNotify({ kind: "error", title: "Please fill the form" });
        }
      } catch (err) {
        onNotify({ kind: "error", title: err.message });
      }
    }
  );

  const validate = ({ email, company, password, lastName, firstName }) =>
    email === false &&
    company === false &&
    password === false &&
    lastName === false &&
    firstName === false;

  const inputProps = {
    onBlur: handleBlur,
    onChange: handleChange,
  };

  const items = [
    { id: "option-1", label: "Male" },
    { id: "option-2", label: "Female" },
    { id: "option-3", label: "Transgender" },
  ];

  return (
    <Grid className="px-0">
      <FluidForm onSubmit={handleSubmit}>
        <Row>
          <Column className="py-2">
            <TextInput
              id="firstName"
              {...inputProps}
              name="firstName"
              placeholder="John"
              labelText="First Name"
              value={values.firstName}
              invalid={!!errors.firstName}
              invalidText={errors.firstName}
            />
          </Column>
          <Column className="py-2">
            <TextInput
              id="lastName"
              {...inputProps}
              name="lastName"
              placeholder="Doe"
              labelText="Last Name"
              value={values.lastName}
              invalid={!!errors.lastName}
              invalidText={errors.lastName}
            />
          </Column>
        </Row>
        <Row>
          <Column className="py-2">
            <TextInput
              id="company"
              name="company"
              {...inputProps}
              labelText="Company"
              value={values.company}
              invalid={!!errors.company}
              placeholder="Acme Corp Inc"
              invalidText={errors.company}
            />
          </Column>
          <Column className="py-2">
            <Dropdown
              name="gender"
              items={items}
              label="select"
              {...inputProps}
              titleText="I am a"
              id="gender-dropdown"
              selectedItem={values.gender}
            ></Dropdown>
          </Column>
        </Row>
        <Row>
          <Column className="py-2">
            <TextInput
              id="email"
              name="email"
              {...inputProps}
              labelText="Email"
              value={values.email}
              invalid={!!errors.email}
              invalidText={errors.email}
              placeholder="john.doe@example.com"
            />
          </Column>
          <Column className="py-2">
            <TextInput
              id="password"
              {...inputProps}
              name="password"
              type="password"
              labelText="Password"
              placeholder="********"
              value={values.password}
              invalid={!!errors.password}
              invalidText={errors.password}
            />
          </Column>
        </Row>
        <Button type="submit" className="submit-button register-submit">
          Continue to your free account
          <ArrowRight16 />
        </Button>
        <div className="register-disclaimer">
          By creating a Strobes account, you consent to and fully accept our
          Privacy Policy. Terms of Service apply.
        </div>
      </FluidForm>
    </Grid>
  );
}
