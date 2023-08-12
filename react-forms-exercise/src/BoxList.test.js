import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./Boxlist";

function addBox(boxList, height = "100", width = "100", color = "peachpuff") {
    const heightInput = boxList.getByLabelText("Height:");
    const widthInput = boxList.getByLabelText("Width:");
    const colorInput = boxList.getByLabelText("Color:");
    fireEvent.change(heightInput, { target: { value: height } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(colorInput, { target: { value: color } });
    const button = boxList.getByText("Add a new box!");
    fireEvent.click(button);
}

it("renders without crashing", function () {
    render(<BoxList />);
}
);

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
}
);

it("can add a new box", function () {
    const boxList = render(<BoxList />);

    // no boxes yet
    expect(boxList.queryByText("X")).not.toBeInTheDocument();

    addBox(boxList);

    // expect to see a box
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
        width: 100px;
        height: 100px;
        background-color: peachpuff;
    `);
}
);

it("can remove a box", function () {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const removeButton = boxList.getByText("X");

    // click the remove button and the box should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
}
);


