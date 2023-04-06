import { AiOutlineSearch } from "react-icons/ai";
import type { InputProps } from ".";
import { Input } from ".";

let props: InputProps = {
  label: "Feed",
  placeholder: "Search for people here",
  type: "string",
  icon: (
    <AiOutlineSearch className="w-5 h-5 text-theme-muted-dark dark:text-theme-muted-dark" />
  ),
};

describe("Should Render <Input/>", () => {
  // test if the lable is rendered
  it("should render the label, type and placeholder", () => {
    cy.mount(<Input {...props} />);
    cy.get("input").should("have.attr", "placeholder", props.placeholder);
    cy.get("input").should("have.attr", "type", props.type);
    cy.get("input").should("have.attr", "label", props.label);
  });

  it("Should input change on type", () => {
    cy.mount(<Input {...props} />);
    cy.get("input").type("Hello World");
    cy.get("input").should("have.value", "Hello World");
  });

  it("Should be password field if type is password", () => {
    cy.mount(<Input {...props} type="password" />);
    cy.get("input").should("have.attr", "type", "password");
  });
});
