import { Tab } from ".";
import { BsFillPersonFill } from "react-icons/bs";
import { MockRouter } from "@/cypress/mocks/Router";

const icon_one = {
  id: 1,
  label: "Feed",
  href: "/",
  icon: <BsFillPersonFill className="w-5 h-5" />,
};

describe("Should Render <Tab/>", () => {
  // test if the lable is rendered
  it("should render the label", () => {
    cy.mount(
      <MockRouter url={"/"}>
        <Tab {...icon_one} />
      </MockRouter>
    );

    cy.get("span").contains(icon_one.label);
    cy.get("button").find("svg");
  });
});
