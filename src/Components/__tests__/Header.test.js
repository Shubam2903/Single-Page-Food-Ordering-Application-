import { render } from "@testing-library/react";
import Header from "../Header";

it("Should load the header component with a login button", () => {
  render(<Header />);
});
