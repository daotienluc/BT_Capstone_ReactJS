import React from "react";
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
import useViewPort from "../../../hooks/useViewPort";
import FooterViewPort from "./FooterViewPort";

// moblie - > tablet -> desktop
// set --- > khong set -> khong set  (lay mobile)
// khong set - > set -> khong set ()
const FooterTemplate = () => {
  const { width } = useViewPort();

  return width < 1024 ? (
    <FooterViewPort />
  ) : (
    <div className="container border-t-2">
      <div className="grid  grid-cols-5 gap-5 mt-10 pb-10 border-b-2 ">
        <div className="space-y-5 text-[#74767e] font-bold">
          <h2>Categories</h2>
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
        </div>
        <div className="space-y-5 text-[#74767e] font-bold">
          <h2>For Clients</h2>
          <ul className="space-y-4 font-medium">
            <li>How Fiverr Works</li>
            <li>Customer Success Stories</li>
            <li>Trust & Safety</li>
            <li>Quality Guide</li>
            <li>Fiverr Learn</li>
            <li>Fiverr Guides</li>
            <li>Fiverr Answers</li>
          </ul>
        </div>
        <div className="space-y-5 text-[#74767e] font-bold">
          <h2>For Freelancers</h2>
          <ul className="space-y-4 font-medium">
            <li>Become a Fiverr Freelancer</li>
            <li>Become an Agency</li>
            <li>Kickstart</li>
            <li>Community Hub</li>
            <li>Forum</li>
            <li>Events</li>
          </ul>
        </div>
        <div className="space-y-5 text-[#74767e] font-bold">
          <h2>Business Solutions</h2>
          <ul className="space-y-4 font-medium">
            <li>Fiverr Pro</li>
            <li>Project Management Service</li>
            <li>ClearVoice</li>
            <li>Working Not Working</li>
            <li>AutoDS</li>
            <li>Fiverr Logo Maker</li>
            <li>Contact Sales</li>
          </ul>
        </div>
        <div className="space-y-5 text-[#74767e] font-bold">
          <h2>Company</h2>
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
        </div>
      </div>
      <div className="flex justify-between my-5 text-[#7A7D85]">
        <div className="flex gap-2 items-center">
          <Icons.logo />
          <p>© Fiverr International Ltd. 2024</p>
        </div>
        <div className="flex space-x-5 text-sm">
          <div className="space-x-5 text-2xl mr-5">
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
    </div>
  );
};

export default FooterTemplate;
