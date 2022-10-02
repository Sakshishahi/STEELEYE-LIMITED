import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";
//  1.React Native List Components helps us in displaying a list of items in React’s JSX syntax.
//  There are various things that we can do using List Components such as rendering a list of primitives,
//  rendering a list of complex objects and even updating the state of lists automatically.
//  This article will give you a better understanding of Native List Components.
// -----------------------------------------------------------------------------------------------------
// 2. The problems / warnings are  with code are:-
//      i) ShapeOf is not exist in this Code. 
//      ii) In isSelected there will be Boolean value not the number.
//      iii) item should not be null.
// --------------------------------------------------------------------------------------------------------
// Single List Item
const WrappedSingleListItem = ({ index, isSelected, onClickHandler, text }) => {
    return (
        <li
            style={{ color: isSelected ? "green" : "red" }}
            onClick={onClickHandler()}
        >
            {text}
        </li>
    );
};

WrappedSingleListItem.propTypes = {
    index: PropTypes.number,
    isSelected: PropTypes.bool,
    onClickHandler: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({ items }) => {
    const [selectedIndex, setSelectedIndex] = useState();
    const [active, setActive] = useState(true);

    useEffect(() => {
        setSelectedIndex(null);
    }, [items]);

    const handleClick = (index) => {
        setSelectedIndex(index);

    };

    return (
        <ul style={{ textAlign: "left" }}>
            {items.map((item, index) => (
                <SingleListItem
                    onClickHandler={() => handleClick()}
                    text={item.text}
                    index={index}
                    isSelected={active}
                />
            ))}
        </ul>
    );
};

WrappedListComponent.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired
        })
    )
};

WrappedListComponent.defaultProps = {
    items: [{ text: "hello" }, { text: "ggodbye" }, { text: "take care" }]
};

const List = memo(WrappedListComponent);

export default List;
