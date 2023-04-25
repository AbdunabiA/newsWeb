import { ChosenIcon, DropdownIcon, UserIcon } from "assets/icons";
import { useNavigate } from "react-router-dom";
import userPhoto from '../../../assets/images/postAuthorPic.png'


const Navbar = () => {
    const navigate = useNavigate()
    return (
      <div className="mx-auto Container flex items-center justify-between py-5 mb-5">
        <div className="flex items-center justify-between w-[100%] gap-10">
          <h1
            className="text-2xl font-bold text-secondary cursor-pointer hover:drop-shadow-md duration-300"
            onClick={() => navigate("/")}
          >
            MEGA.news
          </h1>
          <div className="flex items-center justify-between w-[100%] text-black text-base">
            <div className="flex items-center space-x-1 group cursor-pointer">
              <p className="group-hover:text-primary duration-300">
                Categories
              </p>
              <DropdownIcon styles="fill-black/50 group-hover:fill-primary duration-300" />
            </div>
            <div className="flex items-center space-x-1 group cursor-pointer relative">
              <p className="group-hover:text-primary duration-300">Pages</p>
              <DropdownIcon styles="fill-black/50 group-hover:fill-primary duration-300 group-hover:-rotate-180" />
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
        <div className="flex items-center justify-end w-[100%]">
          <div className="flex items-center space-x-2 relative group cursor-pointer">
            <div className="overflow-hidden rounded-[12px]">
              <img src={userPhoto} alt="" />
            </div>
            <p className="group-hover:text-primary">Username</p>
            <DropdownIcon styles={"fill-black/50 group-hover:fill-primary group-hover:-rotate-180 duration-300"} />
            <div className="absolute hidden top-10 left-10 z-10 group-hover:flex flex-col justify-center space-y-3 items-start p-2 bg-white shadow-md rounded-md">
              <div className="space-x-1 flex items-center cursor-pointer">
                <UserIcon styles="fill-black" />
                <p className="hover:text-primary">Profile</p>
              </div>
              <div className=" space-x-1 flex items-center cursor-pointer">
                <ChosenIcon styles="fill-black" />
                <p className="hover:text-primary">Marked</p>
              </div>
              <div className="space-x-1 flex items-center cursor-pointer">
                <ChosenIcon styles="fill-black" />
                <p className="hover:text-primary">Exit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Navbar