import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/counter.app">CounterApp</Link>
                    </li>
                    <li>
                        <Link to="/image.app">ImageApp</Link>
                    </li>

                </ul>
            </nav>
            <Outlet />
        </div>
    )
}