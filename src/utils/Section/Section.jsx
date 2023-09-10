import PropTypes from "prop-types";

export default function Section ({Title, children}) {
    return (
        <div>
        <h2>{Title}</h2>
        {children}
        </div>
    )
}

Section.propTypes = {
    Title: PropTypes.string
}