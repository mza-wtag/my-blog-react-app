import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const SelectBox = ({ tags, selectedTags, handleChangeTags }) => (
  <Select
    onChange={handleChangeTags}
    options={tags}
    isMulti
    value={tags.filter((tag) => selectedTags.includes(tag.value))}
  />
);

SelectBox.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChangeTags: PropTypes.func.isRequired,
};

export default SelectBox;
