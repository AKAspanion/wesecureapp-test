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
export default function Registration() {
  const items = [
    {
      id: "option-1",
      label: "Male",
    },
    {
      id: "option-2",
      label: "Female",
    },
    {
      id: "option-3",
      label: "Transgender",
    },
  ];
  return (
    <Grid className="px-0">
      <FluidForm>
        <Row>
          <Column className="py-2">
            <TextInput required placeholder="John" labelText="First Name" />
          </Column>
          <Column className="py-2">
            <TextInput required labelText="Last Name" placeholder="Doe" />
          </Column>
        </Row>
        <Row>
          <Column className="py-2">
            <TextInput
              required
              labelText="Company"
              placeholder="Acme Corp Inc"
            />
          </Column>
          <Column className="py-2">
            <Dropdown
              required
              items={items}
              label="select"
              titleText="I am a"
              id="gender-dropdown"
              itemToString={(item) => (item ? item.label : "")}
            ></Dropdown>
          </Column>
        </Row>
        <Row>
          <Column className="py-2">
            <TextInput
              required
              labelText="Email"
              placeholder="john.doe@example.com"
            />
          </Column>
          <Column className="py-2">
            <TextInput
              required
              type="password"
              labelText="Password"
              placeholder="********"
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
