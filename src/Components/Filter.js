import React from 'react'

const Filter = () => {
    return (
        <div className="container search">
        <section className="filter">
            <form className="form-contro">
                <input 
                    placeholder="Search for the country"
                    type="text"
                    name="search"
                    id="search"
                    className="select"

                />

            </form>
            <div className="region-filter">
                <select>
                    <option value="Filter by region">Filter by region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Ocenia">Ocenia</option>


                </select>
            </div>
        </section>
        </div>
    )
}

export default Filter
