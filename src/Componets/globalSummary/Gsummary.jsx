import axios from "axios";
import "./Gsummary.css";
import React, { useEffect, useState } from "react";
import { Card, Carousel, Row } from "react-bootstrap";
import { totalSummaryUrl } from "../../utils/url";
import cbg1 from "../images/caroselbg1.jpg";
import cbg2 from "../images/caroselbg2.jpg";
import cbg3 from "../images/caroselbg3.jpg";
import cbg4 from "../images/caroselbg4.jpg";
import cbg5 from "../images/caroselbg5.jpg";
import cbg6 from "../images/caroselbg6.jpg";
import cbg7 from "../images/caroselbg7.jpg";
import cbg8 from "../images/caroselbg8.jpg";
import cbg9 from "../images/caroselbg9.jpg";
import cbg10 from "../images/caroselbg10.jpg";
import cbg11 from "../images/caroselbg11.jpg";
import cbg12 from "../images/caroselbg12.jpg";
import India from "../india/India";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Gsummary() {
  const [summary, setsummary] = useState([]);
  useEffect(() => {
    fetchStatus();
  }, []);
  const fetchStatus = async () => {
    const response = await axios.get(totalSummaryUrl);
    // const st = response.data;
    // console.log(st[st.length - 1]);
    // setStatus(st[st.length - 1]);
    console.log(response.data.Global);
    setsummary(response.data.Global);
  };
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "50rem" }}
            src={cbg12}
            alt="First slide"
          />
          <Carousel.Caption
            style={{ letterSpacing: "2px", textAlign: "center" }}
          >
            <h1>Global</h1>
            {/* <h3>TotalRecovered : {summary.TotalRecovered}</h3>
            <h3>NewRecovered : {summary.NewRecovered}</h3>
            <h3>TotalConfirmed :{summary.TotalConfirmed}</h3>
            <h3>NewConfirmed : {summary.NewConfirmed}</h3>
            <h3>TotalDeaths: {summary.TotalDeaths}</h3>
            <h3>NewDeaths: {summary.NewDeaths}</h3>
            <h3>{summary.Date}</h3> */}
            <Row
              style={{
                textTransform: "capitalize",
                margin: "2rem",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  width: "250px",
                  height: "250px",
                  fontSize: "10px",
                  textAlign: "center",
                }}
              >
                <CircularProgressbarWithChildren value={66}>
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <img
                    style={{ width: 60, marginTop: -5 }}
                    src="https://i.imgur.com/b9NyUGm.png"
                    alt="doge"
                  />
                  <div style={{ fontSize: 25, marginTop: -5 }}>
                    <strong>{summary.TotalRecovered}</strong>
                  </div>
                </CircularProgressbarWithChildren>
                <h4>TotalRecovered </h4>;
              </div>

              <div
                style={{
                  width: "250px",
                  height: "250px",
                  fontSize: "10px",
                  textAlign: "center",
                }}
              >
                <CircularProgressbarWithChildren value={45}>
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <img
                    style={{ width: 60, marginTop: -5 }}
                    src="https://i.imgur.com/b9NyUGm.png"
                    alt="doge"
                  />
                  <div style={{ fontSize: 25, marginTop: -5 }}>
                    <strong>{summary.NewRecovered}</strong>
                  </div>
                </CircularProgressbarWithChildren>
                <h4>NewRecovered </h4>;
              </div>

              <div
                style={{
                  width: "250px",
                  height: "250px",
                  fontSize: "10px",
                  textAlign: "center",
                }}
              >
                <CircularProgressbarWithChildren value={69}>
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <img
                    style={{ width: 60, marginTop: -5 }}
                    src="https://i.imgur.com/b9NyUGm.png"
                    alt="doge"
                  />
                  <div style={{ fontSize: 25, marginTop: -5 }}>
                    <strong>{summary.TotalConfirmed}</strong>
                  </div>
                </CircularProgressbarWithChildren>
                <h4>TotalConfirmed </h4>;
              </div>

              <div
                style={{
                  width: "250px",
                  height: "250px",
                  fontSize: "10px",
                  textAlign: "center",
                }}
              >
                <CircularProgressbarWithChildren value={35}>
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <img
                    style={{ width: 60, marginTop: -5 }}
                    src="https://i.imgur.com/b9NyUGm.png"
                    alt="doge"
                  />
                  <div style={{ fontSize: 25, marginTop: -5 }}>
                    <strong>{summary.NewConfirmed}</strong>
                  </div>
                </CircularProgressbarWithChildren>
                <h4>NewConfirmed </h4>;
              </div>

              <div
                style={{
                  width: "250px",
                  height: "250px",
                  fontSize: "10px",
                  textAlign: "center",
                }}
              >
                <CircularProgressbarWithChildren value={36}>
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <img
                    style={{ width: 60, marginTop: -5 }}
                    src="https://i.imgur.com/b9NyUGm.png"
                    alt="doge"
                  />
                  <div style={{ fontSize: 25, marginTop: -5 }}>
                    <strong>{summary.TotalDeaths}</strong>
                  </div>
                </CircularProgressbarWithChildren>
                <h4>TotalDeaths </h4>;
              </div>

              <div
                style={{
                  width: "250px",
                  height: "250px",
                  fontSize: "10px",
                  textAlign: "center",
                }}
              >
                <CircularProgressbarWithChildren value={20}>
                  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                  <img
                    style={{ width: 60, marginTop: -5 }}
                    src="https://i.imgur.com/b9NyUGm.png"
                    alt="doge"
                  />
                  <div style={{ fontSize: 25, marginTop: -5 }}>
                    <strong>{summary.NewDeaths}</strong>
                  </div>
                </CircularProgressbarWithChildren>
                <h4>NewDeaths </h4>;
              </div>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "50rem" }}
            className="d-block w-100"
            src={cbg8}
            alt="Second slide"
          />

          <Carousel.Caption>
            <India />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gsummary;
