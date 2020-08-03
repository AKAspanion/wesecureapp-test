import React from "react";

import {
  Dropdown,
  FluidForm,
  TextInput,
  Column,
  Button,
  Grid,
  Row,
} from "carbon-components-react";
import { ArrowRight16 } from "@carbon/icons-react";

import { useForm } from "../../hooks/";

export default function Registration() {
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
    (values) => console.log(values)
  );

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
              {...inputProps}
              name="company"
              labelText="Company"
              value={values.company}
              invalid={!!errors.company}
              placeholder="Acme Corp Inc"
              invalidText={errors.company}
            />
          </Column>
          <Column className="py-2">
            <Dropdown
              {...inputProps}
              name="gender"
              items={items}
              label="select"
              titleText="I am a"
              id="gender-dropdown"
              selectedItem={values.gender}
            ></Dropdown>
          </Column>
        </Row>
        <Row>
          <Column className="py-2">
            <TextInput
              {...inputProps}
              name="email"
              labelText="Email"
              value={values.email}
              invalid={!!errors.email}
              invalidText={errors.email}
              placeholder="john.doe@example.com"
            />
          </Column>
          <Column className="py-2">
            <TextInput
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
        <Button type="submit" className="submit-button">
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
