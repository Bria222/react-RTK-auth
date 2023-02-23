import { Outlet } from 'react-router-dom';
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from './Topbar';

const BarLayout = () => {
const [isSidebar, setIsSidebar] = useState(true);
return (
    <div className="app">
  <Sidebar isSidebar={isSidebar} />
    <main className="content">
    <Topbar setIsSidebar={setIsSidebar} />
      <Outlet />
    </main>
  </div>
);};

export default BarLayout;