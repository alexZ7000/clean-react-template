import { render, screen } from "@testing-library/react";
import ExamplePage from "../src/app/web/screens/ExamplePage";

describe("ExamplePage", () => {
    it("should render correctly", () => {
        render(<ExamplePage />);
        expect(screen.getByText("Hello world!"));
    });
});
