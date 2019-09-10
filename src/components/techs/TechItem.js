import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { deletTech } from "../../actions/techActions"
import M from "materialize-css/dist/js/materialize.min.js";


const TechItem = ({ tech: { firstName, lastName, id }, deletTech }) => {
    const onDelete = () => {
        deletTech(id);
        M.toast({ html: 'Technician deleted' });

    }

    return (
        <li className="collection-item">
            <div>
                {firstName} {lastName}
                <a href="#!" className="secondary-content" onClick={onDelete}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deletTech: PropTypes.func.isRequired
}

export default connect(null, { deletTech })(TechItem);
