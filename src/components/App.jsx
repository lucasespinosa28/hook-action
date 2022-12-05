import * as React from "react";
import { Routes, Route,Outlet, Link } from "react-router-dom";
import { FaCalendarAlt, FaDoorOpen, FaUser } from "react-icons/fa";

import BookablesPage from "./Bookables/BookablesPage";
import BookingsPage from  "./Bookings/BookingsPage";
import UsersPage from "./Users/UsersPage";
import UsersPicker from "./Users/UsersPicker";

export default function App(){
	return (
		
		<div className="App">
			<header>
				<Layout/>
				<UsersPicker/>
			</header>
			<Routes>
				<Route path="/Bookings" element={<BookingsPage/>}/>
				<Route path="/bookables" element={<BookablesPage/>}/>
				<Route path="users" element={<UsersPage/>}/>
			</Routes>
		</div>
	);
}

function Layout(){
	return(
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/Bookings" className="btn btn-header">
							<FaCalendarAlt/>
							<span>Bookings</span>
						</Link>
					</li>
					<li>
						<Link to="/bookables" className="btn btn-header">
							<FaDoorOpen/>
							<span>Bookables</span>
						</Link>
					</li>
					<li>
						<Link to="/users" className="btn btn-header">
							<FaUser/>
							<span>Users</span>
						</Link>
					</li>
				</ul>			
			</nav>
			<Outlet />
		</div>
	);
}