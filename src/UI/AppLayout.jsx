import { Outlet, useNavigation } from 'react-router-dom';
import Nav from '../components/Nav';
function AppLayout() {
    return (
        <div>
            <Nav/>
            <main className="outlet">
                <Outlet/>
            </main>
        </div>
    )
}

export default AppLayout
