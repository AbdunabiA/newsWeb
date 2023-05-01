import { DropdownIcon, X } from "assets/icons";


const index = ({setSideBar}) => {
  return (
    <div
      id="sidebar"
      className="overflow-scroll absolute top-0 left-0 bg-white w-full h-screen z-10"
    >
      <div className="Container mt-5 flex flex-col space-y-5 text-xl">
        <div className="flex justify-between">
          <h1
            className="text-2xl font-bold text-secondary cursor-pointer hover:drop-shadow-md duration-300"
            onClick={() => navigate("/")}
          >
            MEGA.news
          </h1>
          <div
            onClick={() => setSideBar(false)}
            className="p-3 bg-gray rounded-[12px]"
          >
            <X className="fill-black" />
          </div>
        </div>
        <div className="flex flex-col space-y-1 justify-center group cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <p className="group-hover:text-primary duration-300">Categories</p>
            <div className="p-3 bg-gray rounded-[12px]">
              <DropdownIcon className="fill-black/50 group-hover:fill-primary duration-300 group-hover:rotate-0 -rotate-90" />
            </div>
          </div>
          <div className="hidden group-hover:flex flex-col space-y-1 text-lg w-[100%] z-10 bg-white rounded-md shadow-md p-2">
            <p className="hover:text-primary">Sub menu one</p>
            <p className="hover:text-primary">Sub menu two</p>
            <p className="hover:text-primary">Sub menu three</p>
            <p className="hover:text-primary">Sub menu four</p>
          </div>
        </div>
        <div className="flex flex-col space-y-1 justify-center group cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <p className="group-hover:text-primary duration-300">Pages</p>
            <div className="p-3 bg-gray rounded-[12px]">
              <DropdownIcon className="fill-black/50 group-hover:fill-primary duration-300 group-hover:rotate-0 -rotate-90" />
            </div>
          </div>
          <div className="hidden group-hover:flex flex-col space-y-1 text-lg w-[100%] z-10 bg-white rounded-md shadow-md p-2">
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
  );
}

export default index