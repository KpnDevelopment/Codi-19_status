import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllCountry.css";
import { totalSummaryUrl } from "../../utils/url";
import {
  Badge,
  Card,
  CardDeck,
  CardGroup,
  Container,
  FormControl,
  Row,
} from "react-bootstrap";
function AllCountry() {
  const [status, setStatus] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchStatus();
    console.log(searchTerm);
  }, [searchTerm]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleChange = (event) => {
    setSearchTerm(capitalizeFirstLetter(event.target.value));
  };
  const fetchStatus = async () => {
    const response = await axios.get(totalSummaryUrl);
    console.log(response.data.Countries);
    setStatus(response.data.Countries);
  };
  return (
    <div style={{ margin: "10rem" }} className="AllCountry">
      <FormControl
        className="mr-sm-2"
        style={{
          textTransform: "capitalize",
          height: "4rem",
          fontSize: "1.5rem",
          borderRadius: "25px",
          textAlign: "center",
        }}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <CardGroup>
        <Row>
          {status
            .filter((data) => data.Country.includes(searchTerm))
            .map((data, index) => {
              return (
                <Card
                  className="acCard"
                  style={{ width: "30rem", margin: "1rem" }}
                >
                  {/* <h6>{index + 1}</h6> */}
                  <h4 style={{ fontWeight: "800" }}>
                    {data.Country}{" "}
                    <Badge
                      style={{ borderRadius: "10px", marginBottom: "5px" }}
                      variant="warning"
                    >
                      {data.CountryCode}
                    </Badge>
                  </h4>
                  <h4>Recoverd : {data.TotalRecovered}</h4>
                  <h4>Total : {data.TotalConfirmed}</h4>
                  <h4>Deaths : {data.TotalDeaths}</h4>
                  <h4>{data.Date}</h4>
                </Card>
              );
            })}
        </Row>
      </CardGroup>
    </div>
  );
}

export default AllCountry;
