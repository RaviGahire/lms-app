import { IconBellRinging, IconMessageDots } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";


export const Notifications = () => {
    const [showNotifications, setShowNotifications] = useState(false);
  return (
    <div className="flex items-center gap-4 lg:gap-6">
    {/* Notification Section */}
    <div className="relative">
      <button 
        onClick={() => setShowNotifications(!showNotifications)}
        className={`p-1.5 rounded-full transition-colors ${showNotifications ? 'text-cyan-600 bg-cyan-50' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        <IconBellRinging size={22} stroke={1.5} />
      </button>

      {/* Dropdown Menu */}
      {showNotifications && (
        <>
          {/* Invisible backdrop to close dropdown when clicking outside */}
          <div className="fixed inset-0 z-10" onClick={() => setShowNotifications(false)}></div>
          
          <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-lg z-20 py-2">
            <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
              <span className="font-semibold text-sm">Notifications</span>
              <button className="text-xs text-cyan-600 hover:underline">Mark all as read</button>
            </div>
            
            <div className="max-h-64 overflow-y-auto">
              {/* Sample Notification Item */}
              <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50">
                <p className="text-sm text-gray-800">New message from Support</p>
                <p className="text-xs text-gray-400 mt-1">2 minutes ago</p>
              </div>
            </div>
            
            <div className="px-4 py-2 text-center">
              <button className="text-xs text-gray-500 hover:text-gray-800">View all</button>
            </div>
          </div>
        </>
      )}
    </div>

    {/* Message Icon (Simple) */}
    <button className="text-gray-500 hover:text-cyan-600 transition-colors">
      <IconMessageDots size={22} stroke={1.5} />
    </button>

    {/* Profile Link */}
    <Link
      to={`/`} 
      className="flex items-center gap-2 p-1 pr-3 rounded-full border border-gray-200 hover:border-cyan-500 hover:bg-gray-50 transition-all"
    >
      <img 
        src="https://ui-avatars.com/api/?name=User+Name&background=06b6d4&color=fff" 
        alt="User" 
        className="w-7 h-7 rounded-full"
      />
      <span className="text-sm font-medium text-gray-700 hidden sm:block">John Doe</span>
    </Link>
  </div>
  )
}
