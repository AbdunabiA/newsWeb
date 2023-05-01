import { ChosenIcon, DropdownIcon, Hamburger, SearchIcon, ThreeDots, UserIcon } from "assets/icons";
import { useNavigate } from "react-router-dom";
import userPhoto from '../../../assets/images/postAuthorPic.png'
import { useEffect, useState } from "react";
import SideBar from './sidebar'

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false)
  useEffect(()=>{
    if(sideBar){
      document.getElementsByTagName("body")[0].style.overflow='hidden'
    }
  }, [sideBar])

    const navigate = useNavigate()
    return (
      <div className="Container flex flex-wrap xl:flex-nowrap items-center justify-between xl:space-x-5 2xl:space-x-14 3xl:space-x-16 py-5 mb-5">
        {sideBar ? <SideBar {...{setSideBar}}/> : null}
        <div className="flex items-center justify-between xl:w-[100%] space-x-10 2xl:space-x-15 3xl:space-x-20">
          <div className="w-[100%] xl:w-auto flex items-center xl:space-x-0 space-x-2 md:space-x-5 ">
            <div 
            onClick={()=>setSideBar((prev)=>!prev)}
            className="xl:hidden p-2 bg-gray rounded-[12px]">
              <Hamburger className="fill-black" />
            </div>
            <h1
              className="text-lg xl:text-xl 2xl:text-2xl font-bold text-secondary cursor-pointer hover:drop-shadow-md duration-300"
              onClick={() => navigate("/")}
            >
              MEGA.news
            </h1>
          </div>
          <div className="hidden xl:flex items-center justify-between w-[100%] text-black text-base space-x-2">
            <div className="flex items-center space-x-1 group cursor-pointer">
              <p className="group-hover:text-primary duration-300">
                Categories
              </p>
              <DropdownIcon className="fill-black/50 group-hover:fill-primary duration-300" />
            </div>
            <div className="flex items-center space-x-1 group cursor-pointer relative">
              <p className="group-hover:text-primary duration-300">Pages</p>
              <DropdownIcon className="fill-black/50 group-hover:fill-primary duration-300 group-hover:-rotate-180" />
              <div className="hidden group-hover:block absolute space-y-1 top-6 left-0 text-sm w-[120px] z-10 bg-white rounded-md shadow-md p-2">
                <p className="hover:text-primary">Sub menu one</p>
                <p className="hover:text-primary">Sub menu two</p>
                <p className="hover:text-primary">Sub menu three</p>
                <p className="hover:text-primary">Sub menu four</p>
              </div>
            </div>
            <p className="cursor-pointer hover:text-primary duration-300">
              Contact Us
            </p>
            <p className="cursor-pointer hover:text-primary duration-300">
              About Us
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end xl:justify-start xl:w-[25%] h-full">
          <div className="flex items-center space-x-2 relative group cursor-pointer">
            <div className="overflow-hidden rounded-[12px]">
              <img src={userPhoto} alt="" />
            </div>
            <p className="group-hover:text-primary">Username</p>
            <DropdownIcon className="fill-black/50 group-hover:fill-primary group-hover:-rotate-180 duration-300" />
            <div className="absolute hidden top-10 left-10 z-10 group-hover:flex flex-col justify-center space-y-3 items-start p-2 bg-white shadow-md rounded-md">
              <div className="space-x-1 flex items-center cursor-pointer [&:hover>.fill-black]:fill-primary [&:hover>p]:text-primary">
                <UserIcon className="fill-black" />
                <p className="">Profile</p>
              </div>
              <div className=" space-x-1 flex items-center cursor-pointer [&:hover>.fill-black]:fill-primary [&:hover>p]:text-primary">
                <ChosenIcon className="fill-black" />
                <p className="">Marked</p>
              </div>
              <div className="space-x-1 flex items-center cursor-pointer [&:hover>.fill-black]:fill-primary [&:hover>p]:text-primary">
                <ChosenIcon className="fill-black" />
                <p className="">Exit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] rounded-md bg-gray flex items-center p-2 space-x-2 justify-between flex-[1,_0,_100%] mt-5 xl:mt-0 w-full">
          <div className="flex items-center space-x-3">
            <ThreeDots className="fill-black/75 cursor-pointer" />
            <input
              type="search"
              placeholder="Search anything"
              className="p-1 bg-gray focus:outline-none"
            />
          </div>
          <SearchIcon className="fill-black cursor-pointer" />
        </div>
      </div>
    );
}
export default Navbar