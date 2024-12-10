import React from "react";
import { Collapse } from "antd";
import Icons from "../../../components/Icons";
import {
  DollarOutlined,
  FacebookOutlined,
  GlobalOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  PinterestOutlined,
  TikTokOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
const { Panel } = Collapse;
const FooterViewPort = () => {
  const items = [
    {
      key: "1",
      label: "Categories",
      children: (
        <ul className="space-y-4 font-medium">
          <li>Graphics & Design</li>
          <li>Digital Marketing</li>
          <li>Writing & Translation</li>
          <li>Video & Animation</li>
          <li>Music & Audio</li>
          <li>Programming & Tech</li>
          <li>AI Services</li>
          <li>Consulting</li>
          <li>Data</li>
          <li>Business</li>
          <li>Personal Growth & Hobbies</li>
          <li>Photography</li>
          <li>Finance</li>
          <li>End-to-End Projects</li>
          <li>Service Catalog</li>
        </ul>
      ),
    },
    {
      key: "2",
      label: "For Clients",
      children: (
        <ul className="space-y-4 font-medium">
          <li>How Fiverr Works</li>
          <li>Customer Success Stories</li>
          <li>Trust & Safety</li>
          <li>Quality Guide</li>
          <li>Fiverr Learn</li>
          <li>Fiverr Guides</li>
          <li>Fiverr Answers</li>
        </ul>
      ),
    },
    {
      key: "3",
      label: "For Freelancers",
      children: (
        <ul className="space-y-4 font-medium">
          <li>Become a Fiverr Freelancer</li>
          <li>Become an Agency</li>
          <li>Kickstart</li>
          <li>Community Hub</li>
          <li>Forum</li>
          <li>Events</li>
        </ul>
      ),
    },
    {
      key: "4",
      label: "Business Solutions",
      children: (
        <ul className="space-y-4 font-medium">
          <li>Fiverr Pro</li>
          <li>Project Management Service</li>
          <li>ClearVoice</li>
          <li>Working Not Working</li>
          <li>AutoDS</li>
          <li>Fiverr Logo Maker</li>
          <li>Contact Sales</li>
        </ul>
      ),
    },
    {
      key: "5",
      label: "Company",
      children: (
        <ul className="space-y-4 font-medium">
          <li>About Fiverr</li>
          <li>Help & Support</li>
          <li>Social Impact</li>
          <li>Careers</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Partnerships</li>
          <li>Creator Network</li>
          <li>Affiliates</li>
          <li>Invite a Friend</li>
          <li>Press & News</li>
          <li>Investor Relations</li>
        </ul>
      ),
    },
  ];
  return (
    <>
      <Collapse>
        {items.map((item) => (
          <Panel header={item.label} key={item.key}>
            {item.children}
          </Panel>
        ))}
      </Collapse>
      <div className=" my-5 text-[#7A7D85]">
        <div className="flex gap-2 items-center justify-center mb-5">
          <Icons.logo />
          <p>© Fiverr International Ltd. 2024</p>
        </div>
        <div className="flex   justify-center space-x-5 text-sm">
          <div className="space-x-3  text-xl   mr-0">
            <TikTokOutlined />
            <InstagramOutlined />
            <LinkedinOutlined />
            <FacebookOutlined />
            <PinterestOutlined />
            <TwitterOutlined />
          </div>
          <div className="flex items-center gap-2 font-bold">
            <GlobalOutlined />
            <p>English</p>
          </div>
          <div className="flex items-center gap-2 font-bold">
            <DollarOutlined />
            <p>USD</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterViewPort;
