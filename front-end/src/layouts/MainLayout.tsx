import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/components/Navbar";
import { Footer } from "../shared/components/Footer";

export const MainLayout = () => {
    return (
        <div className="container">
            {/* Navigation bar */}
            <Navbar />
            {/* main container all content rendered here */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}


