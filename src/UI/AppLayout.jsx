import { Outlet, useNavigation } from 'react-router-dom';
import Nav from '../components/Nav';
import Loader from '../components/Loader';
import React, { useState, useEffect } from 'react';
function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    const [isLoad, setIsLoading] = useState(true);

    useEffect(() => {
        // Set a timer to change isLoading to false after 3 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000); // 3000 milliseconds = 3 seconds

        // Clean up the timer if the component unmounts before the timer is up
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs only once on mount

    if (isLoading || isLoad){
        return (
            <Loader/>
        )
    }

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
