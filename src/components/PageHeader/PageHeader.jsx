import PropTypes from "prop-types";

export const PageHeader = ({ text }) => {
    return <h1>{text}</h1>;
}

PageHeader.prototype = {
    text: PropTypes.string.isRequired,
}