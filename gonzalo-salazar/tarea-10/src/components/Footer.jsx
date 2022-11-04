import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../redux/actions";

const Footer = () => (
  <footer className="footer">
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </footer>
);

export default Footer;
