import React from "react";
import Header from "../../components/header/header";
import Category from "../../components/category/category";
import SmallBar from "../../components/childfooter/footer";

function ChatBox() {
  return (
    <div>
      <Header />
      <div className="flex m-auto  justify-center my-12 aligin-center ">
        <div className="w-[778.33px] border-[3px] h-[599.44px] bg-[#FBFBFB] ">
          <h2 className="font-bold ">Inbox</h2>
        </div>
        <hr />
        <div className="w-[778.33px] border-[3px] h-[599.44px] bg-[#FBFBFB] ">
          <h2>Inbox</h2>
        </div>
      </div>
      <SmallBar />
    </div>
  );
}

export default ChatBox;
