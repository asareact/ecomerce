import Dropdown from "muicss/react";
import DropdownItem from "muicss/react";
import React from "react";

const DropDown = () => {
  return (
    <Dropdown color="primary" label="Dropdown">
      <DropdownItem>Option 1</DropdownItem>
      <DropdownItem>Option 2</DropdownItem>
      <DropdownItem>Option 3</DropdownItem>
      <DropdownItem>Option 4</DropdownItem>
    </Dropdown>
  );
};

export default DropDown;
