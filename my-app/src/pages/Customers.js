import { useState, useEffect, useMemo } from "react";
import { getCuctomers } from "../fakeApi";
import { SearchBox } from "../componets/SearchBox";
import { useLocation, useSearchParams } from "react-router-dom";

const Customers = () => {
  const location = useLocation();
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get("filter") ?? "";

  useEffect(() => {
    getCuctomers().then(setCustomers);
  }, []);

  const changeFilter = (value) => {
    setSearchParams(value !== "" ? { filter: value } : {});
  };
  const visibleCustomers = useMemo(() => {
    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(filterParam.toLowerCase())
    );
  }, [customers, filter]);

  return (
    <main>
      <SearchBox value={filterParam} onChange={changeFilter} />
      <ul>
        {visibleCustomers.length > 0 &&
          visibleCustomers.map((customer) => (
            <li key={customer.id}>
              <Link to={`${customer.id}`} state={{ from: location }}>
                {customer.name}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Customers;
