import { Banner, Categories, Featured } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/productSlice";
import { useEffect } from "react";
import { clearFilters, selectFilterState } from "../features/filtersSlice";

const Landing = () => {
  const filters = useSelector(selectFilterState);
  const dispatch = useDispatch();
  dispatch(clearFilters());

  useEffect(() => {
    dispatch(getAllProducts({ ...filters }));
  }, [dispatch, filters]);

  return (
    <div>
      <Banner />
      <Categories />
      <Featured />
    </div>
  );
};

export default Landing;
