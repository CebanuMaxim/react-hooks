import { React, useContext } from "react"
import { AlertContext } from "../context/alert/alertContext"

export const Search = () => {
    const { show } = useContext(AlertContext)

    const onSubmit = event => {
        if (event.key === 'Enter') {
            show('This is aler!')
        }
    }

    return (
        <div className="form-group mb-4">
            <input
                type="text"
                className="form-control"
                placeholder="username"
                onKeyPress={ onSubmit }
            />
        </div>
    )
}