import React, { useEffect } from "react";
import axios from "axios";
import { Accordion } from "react-bootstrap";
import { useState } from "react";
import {NavLink} from "react-router-dom";

const DeletedUser = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getdeleteddata = async () => {
      const getdeleted = await axios.get(
        `https://62b99d7dff109cd1dc96a75d.mockapi.io/softDelete`
      );
      setData(getdeleted);
      console.log(getdeleted)
    };
    getdeleteddata();
  });

  return (
    <>
    
      {data.map((element, itm) => {
        <Accordion
          key={itm}
          style={{
            width: "90%",
            marginLeft: "70px",
            backgroundColor: "#F0EBE3",
            marginBottom: "20px",
            borderRadius: "20px",
          }}
          defaultActiveKey="0"
        >
          <Accordion.Item style={{ borderRadius: "20px" }} eventKey="0">
            <Accordion.Header style={{ borderRadius: "20px" }}>
              <h5>{element.firstName}</h5>
              <h5 style={{ marginLeft: "100px" }}>{element.employeeCode}</h5>
            </Accordion.Header>
            <Accordion.Body style={{ borderRadius: "20px" }}>
              <div
                className="userstyle"
                key={element.id}
                style={{ width: "100%", height: "40px", paddingTop: "7px" }}
              >
                <p style={{ fontSize: "15px", marginRight: "50px" }}>
                  Date : {element.date}
                </p>
                <p style={{ marginRight: "50px", fontSize: "15px" }}>
                  SignInTime : {element.signIn}
                </p>
                <p style={{ marginRight: "50px", fontSize: "15px" }}>
                  SignOutTime : {element.signOut}{" "}
                </p>
                <p style={{ marginRight: "50px", fontSize: "15px" }}>
                  TotalHour:{element.totalHours}
                </p>
                <NavLink to={`/element/${element.id}`}>
                  <a className="btn-btn dark">TotalData</a>
                </NavLink>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>;
      })}
    </>
  );
};

export default DeletedUser;
