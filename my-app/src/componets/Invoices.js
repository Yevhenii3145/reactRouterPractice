import { useState, useEffect } from "react";
import styled from "styled-components";
import { getInvoices } from "../fakeApi";
import { Box } from "./Box";
import { NavLink, Outlet } from "react-router-dom";

const NavItem = styled(NavLink)`
  padding: ${(p) => p.theme.space[3]}px;
  text-decoration: none;
  color: ${(p) => p.theme.colors.text};
  border-radius: 8px;

  &.active {
    background-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.white};
  }

  :hover:not(.active) {
    color: ${(p) => p.theme.colors.primary};
  }
`;

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, []);

  return (
    <Box display="flex" alignItems="stretch">
      <Box
        as="aside"
        display="flex"
        flexDirection="column"
        p={3}
        borderRight="1px solid black"
      >
        {invoices.map(({ id }) => (
          <NavItem to={`${id}`}>{id}</NavItem>
        ))}
      </Box>
      <Outlet />
    </Box>
  );
};
export default Invoices;
