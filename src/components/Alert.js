import React from 'react'

export const Alert = ({ alert }) => {


    return (
        <div
            className={ `alert alert-${alert.type || 'secondary'} alert-dismissible px-3` }
            role="alert"
            style={ {
                'display': 'flex',
                'justifyContent': 'space-between'
            } }
        >
            { alert.text }
            <button
                type="button"
                className="close"
                aria-label="Close"
                style={ {
                    'borderWidth': 0,
                    'backgroundColor': 'transparent',
                } }
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}