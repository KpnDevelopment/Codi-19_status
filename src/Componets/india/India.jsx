import React, { useEffect, useState } from "react";
import axios from "axios";
import "./India.css";
import { indiaUrl } from "../../utils/url";
import { Card, Row } from "react-bootstrap";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import Iconactive from "../images/active.png";
import Icondeath from "../images/death.png";
import Iconrecover from "../images/recover.png";
import Iconplace from "../images/place.png";
import Icontotal from "../images/sigma.png";
function India() {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    const response = await axios.get(indiaUrl);
    const st = response.data;
    console.log(st[st.length - 1]);
    setStatus(st[st.length - 1]);
  };
  return (
    <Row
      className="row"
      style={{
        textTransform: "capitalize",
        margin: "2rem",
        padding: "1rem",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ margin: "1rem" }}>{status.Country}</h1>
      {/* <h2  style={{ margin: "1rem" }}>{status.Date}</h2> */}

      <div
        className="circlestaus"
        style={{
          width: "250px",
          height: "250px",
          fontSize: "10px",
          textAlign: "center",
        }}
      >
        <CircularProgressbarWithChildren value={35}>
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          {/* <img
            style={{ width: 60, marginTop: -5 }}
            src={Iconactive}
            alt="doge"
          /> */}
          <div style={{ fontSize: 25, marginTop: -5 }}>
            <strong>{status.Recovered}</strong>
          </div>
        </CircularProgressbarWithChildren>
        <h4>Recovered </h4>;
      </div>
      <div
        className="circlestaus"
        style={{
          width: "250px",
          height: "250px",
          fontSize: "10px",
          textAlign: "center",
        }}
      >
        <CircularProgressbarWithChildren value={35}>
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

          <div style={{ fontSize: 25, marginTop: -5 }}>
            <strong>{status.Active + status.Confirmed}</strong>
          </div>
        </CircularProgressbarWithChildren>
        <h4>Total </h4>;
      </div>
      <div
        className="circlestaus"
        style={{
          width: "250px",
          height: "250px",
          fontSize: "10px",
          textAlign: "center",
        }}
      >
        <CircularProgressbarWithChildren value={35}>
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

          <div style={{ fontSize: 25, marginTop: -5 }}>
            <strong>{status.Active}</strong>
          </div>
        </CircularProgressbarWithChildren>
        <h4>Active </h4>;
      </div>
      <div
        className="circlestaus"
        style={{
          width: "250px",
          height: "250px",
          fontSize: "10px",
          textAlign: "center",
        }}
      >
        <CircularProgressbarWithChildren value={35}>
          {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
          {/* <img
            style={{ width: 60, marginTop: -5 }}
            src={Icondeath}
            alt="doge"
          /> */}
          <div style={{ fontSize: 25, marginTop: -5 }}>
            <strong>{status.Deaths}</strong>
          </div>
        </CircularProgressbarWithChildren>
        <h4>Deaths </h4>;
      </div>
      {/* <div
        className="circlestaus"
        style={{
          width: "250px",
          height: "250px",
          fontSize: "10px",
          textAlign: "center",
        }}
      >
        <CircularProgressbarWithChildren value={35}>

          <div style={{ fontSize: 25, marginTop: -5 }}>
            <strong>{status.Province}</strong>
          </div>
        </CircularProgressbarWithChildren>
        <h4>Province </h4>;
      </div> */}
      {/* <h4 className="smallsizeh1" style={{ fontSize: "10px", margin: "0" }}>
        {status.Country}
      </h4> */}
    </Row>
  );
}

export default India;
