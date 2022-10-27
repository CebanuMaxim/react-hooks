import { Fragment, React } from "react"
import { Card } from "../components/Card"
import { Search } from "../components/Search"

export const Home = () => {
    const cards = new Array(15)
        .fill('')
        .map((_, index) => index)
    return (
        <Fragment>
            <Search />

            <div className="row">
                {
                    cards.map((card, i) => {
                        return (
                            <div className="col-sm-4 mb-4" key={ card }>
                                <Card number={ i } />
                            </div>
                        )
                    })
                }
            </div>

        </Fragment>
    )
}