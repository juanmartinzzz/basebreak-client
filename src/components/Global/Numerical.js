import React from "react";
import styled from "styled-components";

const NumericalText = styled.div`
  font-family: "Major Mono Display", monospace;
  font-weight: bold;
`;

const Numerical = ({ value, decimal, type = "" }) => {
  const stringValue = decimal ? value.toFixed(decimal) : value + "";

  return (
    <NumericalText>
      {stringValue}
      {type === "%" ? "%" : null}
    </NumericalText>
  );
};

export default Numerical;
