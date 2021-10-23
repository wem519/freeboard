import SearchBar01UI from "./Searchbar01.presenter";
import _ from "lodash";

export default function SearchBar01(props) {
  const getDebounce = _.debounce((data) => {
    props.refetch({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event) {
    getDebounce(event.target.value);
  }

  return <SearchBar01UI onChangeSearchbar={onChangeSearchbar} />;
}
