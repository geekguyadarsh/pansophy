import Image from "next/image";
import Pansophy from "../assets/Pansophy.svg";
import Toggle from "../assets/Icon.svg";
import Speeedometer from "../assets/speedometer.svg";
import datasets from "../assets/datasets.svg";
import websites from "../assets/global.svg";
import card from "../assets/card.svg";
import settings from "../assets/settings.svg";
import Illustration from "../assets/Illustration.svg";
import React, { useState, useCallback, useEffect } from "react";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isBreakpoint = useMediaQuery(768);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isBreakpoint) {
      setIsCollapsed(true);
    }
  }, [isBreakpoint]);

  return (
    <div
      className={`${
        isCollapsed ? "md:w-16 w-16" : "w-2/3 md:w-1/4 z-50"
      } h-screen bg-[#0C0D0F] relative transition-all duration-300`}
    >
      <div className="flex justify-between p-4 mb-2">
        {!isCollapsed && <Image className="" src={Pansophy} alt="logo" />}
        <button onClick={toggleSidebar} className="">
          <Image className="" src={Toggle} alt="toggle" />
        </button>
      </div>

      {!isCollapsed && (
        <div className="tabs">
          <div className="flex py-4 pl-4 tab border-s-[3px] border-[#0096C7] justify-between bg-gradient-to-r from-[#023E8A3D]/[0.24] from-10% to-[#0C0D0F]">
            <div className="flex">
              <Image className="mr-2" src={Speeedometer} alt="toggle" />
              <div className="text-[#0096C7] text-sm">Modals</div>
            </div>
            <div className="mr-4 text-xs bg-[#023e8a] rounded-2xl px-2 py-1">
              32
            </div>
          </div>
          <div className="flex py-4 pl-4 tab">
            <Image className="mr-2" src={datasets} alt="toggle" />

            <div className="text-sm">Datasets</div>
          </div>
          <div className="flex py-4 pl-4 tab">
            <Image className="mr-2" src={websites} alt="toggle" />

            <div className="text-sm">Connected Websites</div>
          </div>
          <div className="flex py-4 pl-4 tab">
            <Image className="mr-2" src={card} alt="toggle" />

            <div className="text-sm">Manage Subscriptions</div>
          </div>
          <div className="flex py-4 pl-4 tab">
            <Image className="mr-2" src={settings} alt="toggle" />

            <div className="text-sm">Settings</div>
          </div>
        </div>
      )}
      {isCollapsed && (
        <div className="pr-4 tabs">
          <div className="flex py-4 pl-4 tab border-s-[3px] border-[#0096C7] bg-gradient-to-r from-[#023E8A3D]/[0.24] from-10% to-[#0C0D0F]">
            <Image className="mr-2" src={Speeedometer} alt="toggle" />
          </div>
          <div className="flex py-4 pl-4 tab">
            <Image className="mr-2" src={datasets} alt="toggle" />
          </div>
          <div className="flex py-4 pl-4 tab">
            <Image className="mr-2" src={websites} alt="toggle" />
          </div>
          <div className="flex py-4 pl-4 tab">
            <Image className="mr-2" src={card} alt="toggle" />
          </div>
          <div className="flex py-4 pl-4 tab">
            <Image className="mr-2" src={settings} alt="toggle" />
          </div>
        </div>
      )}
      {!isCollapsed && (
        <div className="absolute bottom-0 flex justify-center w-full footer">
          <Image className="p-2" src={Illustration} alt="toggle" />
        </div>
      )}
    </div>
  );
}
