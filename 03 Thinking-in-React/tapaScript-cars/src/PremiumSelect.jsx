import PropTypes from "prop-types";

function PremiumSelect({ premiumToggle, onPremiumSelect }) {
    return (
        <div className="flex items-center max-w-0.8">
            <input 
            type="checkbox" 
            className="mr-2"
            checked={premiumToggle}
            onChange={() => {
                onPremiumSelect()
            }}
            />
            <p>Show Premium Only</p>
        </div>
    )
}

PremiumSelect.propTypes = {
    premiumToggle: PropTypes.bool.isRequired,
    onPremiumSelect: PropTypes.func.isRequired,
};

export default PremiumSelect;