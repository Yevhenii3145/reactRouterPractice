import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getCustomerById } from "../fakeApi";

const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  console.log(customer);
  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);
  console.log(customer);
  if (!customer) {
    return null;
  }

  const backLinkHref = location.state?.from ?? "/customers";

  return (
    <main>
      <Link to="/customers">Back to customer</Link>
      <p>id: {customer.id}</p>
      <p>Username: {customer.name}</p>
    </main>
  );
};

export default CustomerDetails;
