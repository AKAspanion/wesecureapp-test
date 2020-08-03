import React, { useState, Fragment } from "react";

import {
  FluidForm,
  TextInput,
  Checkbox,
  Column,
  Button,
  Link,
  Grid,
  Row,
} from "carbon-components-react";
import { ArrowRight16, ArrowLeft16 } from "@carbon/icons-react";

import { useForm } from "../../hooks/";
import { loginUser } from "../../services/";

export default function Login({ onNotify, onForgotPass }) {
  const [view, setView] = useState("email");
  const [savedEmail, setSavedEmail] = useState("");
  const [values, errors, handleBlur, handleChange, handleSubmit] = useForm(
    { email: "" },
    { email: (v) => !!v || "Provide valid email" },
    async ({ values, errors: { password } }) => {
      try {
        if (validate(password)) {
          const data = await loginUser(savedEmail, values.password);
          onNotify({ kind: "success", title: data.message });
        } else {
          onNotify({ kind: "error", title: "Please fill the form" });
        }
      } catch (err) {
        onNotify({ kind: "error", title: err.message });
      }
    }
  );

  function handleEmailSubmit() {
    if (validate(errors.email)) {
      onNotify({ kind: "success", title: "Email id vaild" });
      setView("pass");
      setSavedEmail(values.email);
    } else {
      onNotify({ kind: "error", title: "Please enter a valid email" });
      setView("email");
      setSavedEmail("");
    }
  }

  const validate = (email) => email === false;

  const bottomJSX = () => {
    return (
      <Fragment>
        <Row className="py-2 my-2" style={{ alignItems: "center" }}>
          <Column>
            <Checkbox labelText="Remember me" id="remeber-check" />
          </Column>
          <Column style={{ textAlign: "right" }}>
            <Link className="my-2" onClick={() => onForgotPass()}>
              Forgot Password
            </Link>
          </Column>
        </Row>
        <Row className="py-2 my-2">
          <Column>
            <Link className="my-2">Alternative Login</Link>
          </Column>
        </Row>
      </Fragment>
    );
  };

  return (
    <Grid className="px-0">
      <FluidForm onSubmit={handleSubmit}>
        {view === "email" && (
          <Row>
            <Column sm={12} md={6}>
              <div className="login-title">Enter your Strobes ID</div>
              <TextInput
                id="email"
                name="email"
                labelText="Email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                invalid={!!errors.email}
                invalidText={errors.email}
                placeholder="john.doe@example.com"
              />
              <Button
                onClick={handleEmailSubmit}
                className="submit-button my-0"
              >
                Continue
                <ArrowRight16 />
              </Button>
              {bottomJSX()}
            </Column>
          </Row>
        )}
        {view === "pass" && (
          <Row>
            <Column sm={12} md={6}>
              <div className="login-title">
                <ArrowLeft16
                  color="#0F62FE"
                  style={{ cursor: "pointer" }}
                  onClick={() => setView("email")}
                />
                <div style={{ paddingLeft: "8px" }}>{savedEmail}</div>
              </div>
              <TextInput
                id="password"
                name="password"
                type="password"
                labelText="Password"
                onBlur={handleBlur}
                placeholder="********"
                value={values.password}
                onChange={handleChange}
                invalid={!!errors.password}
                invalidText={errors.password}
              />
              <Button type="submit" className="submit-button my-0">
                Continue
                <ArrowRight16 />
              </Button>
              {bottomJSX()}
            </Column>
          </Row>
        )}
      </FluidForm>
    </Grid>
  );
}
