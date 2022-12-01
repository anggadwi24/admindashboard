import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

type DashboardLayoutProps = {
    children: React.ReactNode,
  };
const Layout = ({ children }: DashboardLayoutProps) => {
    return (
        
        <>
            <Navbar/>
            <main>
                <div className="flex flex-col md:flex-row">
                <Sidebar/>
                <section>
                    <div id="main" className="main-content flex-1 bg-gray-100 mt-12  pb-24 md:pb-5">
                        {children}
                    </div>
                </section>
                
                </div>
            </main>
           
        </>

       
    )
}

export default Layout;