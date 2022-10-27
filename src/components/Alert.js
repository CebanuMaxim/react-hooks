import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext)

    if (!alert) return null

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
                onClick={ hide }
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}