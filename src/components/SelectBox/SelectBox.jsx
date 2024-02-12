import React from "react";
import Select from "react-select";

const SelectBox = ({ tags, selectedTags, handleChangeTags }) => (
  <Select
    onChange={handleChangeTags}
    options={tags}
    isMulti
    value={tags.filter((tag) => selectedTags.includes(tag.value))}
  />
);

export default SelectBox;
