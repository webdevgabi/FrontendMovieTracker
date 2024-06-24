import { Outlet } from 'react-router-dom'

export default () => {
    return (
        <>
            <nav>Navigation</nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}