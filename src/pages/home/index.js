import React, { useEffect, useState } from "react";
import logoImg from "../../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { _lsNavlist, lsVariables } from "../../config/localStorage";
import { GoBell } from "react-icons/go";

export const HomePage = () => {
  const [user, setuser] = useState();
  const [navBaropen, setnavBaropen] = useState(true);

  useEffect(() => {
    _getuserdata();
  }, []);

  async function _getuserdata() {
    let userString = localStorage.getItem(lsVariables.user);
    if (userString) {
      setuser(JSON.parse(userString));
    }
  }

  if (user === undefined) return;

  return (
    <div className="w-screen h-screen flex">
      <div className={`${navBaropen? 'w-[18%]':'w-[5%]'} h-screen bg-white shadow-md`}>
        <div className="flex justify-between p-5 items-center">
          {navBaropen ? (
            <div className="flex">
              <img className="w-[25px] h-[25px] mr-5" src={logoImg} alt="..." />
              <p className=" font-medium text-lg">OSeller</p>
            </div>
          ) : null}
          <FaBars
            onClick={() => {
              setnavBaropen(!navBaropen);
            }}
            className=" cursor-pointer"
            size={20}
          />
        </div>
        <div>
          {_lsNavlist.map((items, _index) => {
            return (
              <div className="flex items-center px-5 py-3 cursor-pointer hover:bg-gray-100" key={items.id}>
                <div > {items.icon}</div>
                {navBaropen?(<p className="ml-3">{items.name}</p>):null}
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${navBaropen? 'w-[82%]':'w-[95%]'} h-screen`}>
        <div className="h-[10%]   flex justify-end items-center px-5">
          <div className="flex items-center">
            <GoBell size={20} />
            <img
              className="w-[25px] h-[25px] rounded-full ml-5"
              src={user.picture}
              alt="..."
            />
          </div>
        </div>
        <div className="h-[90%] bg-gray-100"></div>
      </div>
    </div>
  );
};
