import React from "react"
import SearchRoundedIcon from "@mui/icons-material/SearchRounded"
import GroupIcon from "@mui/icons-material/Group"
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import ChatIcon from "@mui/icons-material/Chat"
import NotificationsIcon from "@mui/icons-material/Notifications"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined"
import { Avatar } from "@mui/material"
import Image from "next/image"

const Header = () => {
  return (
    <header>
      {/* Left */}
      <div className="flex items-center space-x-2 w-full max-w-xs">
        <Image src="https://rb.gy/bizvqj" width={45} height={45} />
        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full">
          <SearchRoundedIcon />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow"
          />
        </div>
      </div>

      {/* Right */}
    </header>
  )
}

export default Header
