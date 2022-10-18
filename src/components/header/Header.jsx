import Logo from "../logo/Logo"
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { Avatar } from "@mui/material";
import "./header.css"

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="container">
            <div className="header">
                <Logo/>
                <div className="search">
                    <SearchIcon className="search-icon"/>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="header-links">
                    <a href="/">
                        <HomeOutlinedIcon className="icon"/>
                    </a>
                    <a href="/">
                        <ChatOutlinedIcon className="icon"/>
                    </a>
                    <a href="/">
                        <AddBoxOutlinedIcon className="icon"/>
                    </a>
                    <a href="/">
                    <Avatar alt="" src="" sx={{width:28, height:28}} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header