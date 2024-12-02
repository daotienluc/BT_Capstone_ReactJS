import React, { useEffect, useState } from "react";
import "./Services.scss";
import ServicesItem from "./ServicesItem";
import {
  FundProjectionScreenOutlined,
  AntDesignOutlined,
  SketchOutlined,
  SearchOutlined,
  PictureOutlined,
  ScheduleOutlined,
  QuestionOutlined,
} from "@ant-design/icons";
import { SkillServices } from "./../../../../../services/skill.services";

const skillIcons = {
  JavaScript: <FundProjectionScreenOutlined />,
  Python: <SketchOutlined />,
  Java: <SearchOutlined />,
  SQL: <PictureOutlined />,
  HTML: <ScheduleOutlined />,
  CSS: <ScheduleOutlined />,
  Ruby: <ScheduleOutlined />,
};

const Services = () => {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    SkillServices.skill()
      .then((res) => {
        setSkill(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-5 md:grid-cols-4 lg:grid-cols-9">
        {skill.splice(0, 9).map((item, index) => (
          <div key={index}>
            <ServicesItem
              icon={skillIcons[item.tenSkill] || <QuestionOutlined />}
              content={item.tenSkill}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
