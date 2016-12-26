import React from 'react';
import NewItemFormContainer from './NewItemFormContainer';
import Radium from 'radium';

const renderButtonText = sidebarVisible => {
    const buttonText = sidebarVisible ? "Hide Form"
                                : "Add New Item "
    return buttonText;
}

const setStyles = sidebarVisible => {
    const displayValue = sidebarVisible ? 'block'
                                        : 'none'
    Object.assign(styles.div,
        {
            '@media (max-width: 767px)': {
                display: displayValue
            }
        }
    );
};

const Sidebar = props => {
    const {submitForm, toggleSidebar, sidebarVisible, outerElementClassName} = props;
    setStyles(sidebarVisible);
    return (
        <section>
            <button
                type = "button"
                className = "visible-xs"
                onClick = {toggleSidebar}
                style = {styles.button}>{renderButtonText(sidebarVisible)}</button>
            <div id = "sidebar"
                className = {outerElementClassName}
                style = {styles.div}>
                <h2 className = "text-center">Add New Item</h2>
                <NewItemFormContainer
                    submitForm = {submitForm} />
            </div>
        </section>
    );
};

Sidebar.propTypes = {
    submitForm: React.PropTypes.func.isRequired,
    toggleSidebar: React.PropTypes.func.isRequired,
    sidebarVisible: React.PropTypes.bool,
    outerElementClassName: React.PropTypes.string
};

Sidebar.defaultProps = {
    sidebarVisible: true,
    outerElementClassName: 'sidebar'
};

const styles = {
    button: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    div: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}

export default Radium(Sidebar);
