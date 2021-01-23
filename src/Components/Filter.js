import React from 'react'


const Filter = () => {
    window.addEventListener('DOMContentLoaded', () => {
        const search = document.getElementById('search')
        search.addEventListener('input', (e)=>{
            const {value} = e.target
            const countryName = document.querySelectorAll('.country-name')
            countryName.forEach((name) => {
                if(name.innerText.toLowerCase().includes(value.toLowerCase())){
                     name.parentElement.parentElement.parentElement.style.className='container country-name'
                } else {
                     name.parentElement.parentElement.parentElement.style.display = 'none'
    
                }
            })
        })
    })

    return (
        <div className="container search">
        <section className="filter">
            <form className="form-contro">
                <input 
                    placeholder="Paste Country Name here"
                    type="text"
                    name="search"
                    id="search"
                    className="select"

                />
            </form>
        </section>
        </div>
    )
}

export default Filter
