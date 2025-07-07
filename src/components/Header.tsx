// import { useState } from "react"
import { NavLink } from "react-router"

function Header() {
    // const [menuHide, setMenuHide] = useState(true)
    return (
        <>
            {/* <header className="z-1 flex flex-row justify-between">

                <span onClick={() => setMenuHide(!menuHide)} className="text-white cursor-pointer flex flex-row justify-center z-1 p-2 bg-black w-full font-helvetica text-3xl font-semibold">
                    Ignisite
                </span>
                <div className="fixed">
                    <nav className={`${menuHide ? "-translate-x-full" : "translate-x-0"}  flex w-fit transition-transform duration-400 ease-in-out flex-col h-screen bg-black/60 p-10 justify-center`}>
                        <div>
                            <ul className="flex text-white flex-col w-fit gap-5 font-helvetica">
                                <li>
                                    <NavLink onClick={() => setMenuHide(!menuHide)} to={'/'} className={({ isActive }) => `${isActive ? 'underline w-[100%]' : 'underline-none'} flex`}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setMenuHide(!menuHide)} to={'/appointment/1'} className={({ isActive }) => `${isActive ? 'underline w-[100%]' : 'underline-none'} flex`}>
                                        Send a service request
                                    </NavLink>
                                </li>
                                <li>
                                    Book a call
                                </li>
                                <li>
                                    Join Us
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </header> */}
            <header className="bg-black flex flex-row justify-around pt-1 md:py-5">
                <span>
                    <NavLink to={'/'}>
                        <h1 className="text-white text-2xl font-helvetica font-semibold">Ignisite</h1>
                    </NavLink>
                </span>
                <nav className="hidden md:block">
                    <ul className="flex flex-row items-center gap-10">
                        
                        <NavLink to={'/appointment/0'}>
                            <li className={`text-white font-inter capitalize text-md font-semibold border-2 border-white w-fit px-4 py-2 rounded-full`}>
                                get in touch
                            </li>
                        </NavLink>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header