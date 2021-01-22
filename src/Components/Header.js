import React from 'react'

const Header = () => {
    const changeTheme = () => {
        const moon = document.querySelector('.fa-moon')
        const header = document.querySelector('.header')
        const details = document.querySelectorAll('.details')

        moon .addEventListener('click', () =>{
            document.body.classList.toggle('light-theme')
            header.classList.toggle('light-theme')
            details.forEach((detail) => {
                detail.classList.toggle('light-theme')
            })
        })
    }
    return (
        <div className="headerBG">
            <header className="container header">
                <div className="head">
                    <h2>World is here!</h2>
                </div>
                <div>
                    <i className="fas fa-moon" onClick={() => changeTheme()}></i>

                </div>

            </header>
        </div>
    )
}

export default Header
