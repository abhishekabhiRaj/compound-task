import React, { useState, Component } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import svg1 from "../../assets/images/svg/svg1.svg";
import "./Markets.css";
import { BsArrowUpRightSquare } from "react-icons/bs";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import DataTable from "react-data-table-component";
import LinearBuffer from "../../components/Progress/Progress";
import { Slider } from "@mui/material";




ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

function Markets() {
  const [slider, setSlider] = useState(50);
  const [sliderApr, setSliderApr] = useState(39);
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Nov",
    "Dec",
  ];

  const collateralChartData = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "#804de8",
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: 500, max: 1000 })),
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "#62d496",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };
  const borrowingChartData = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Dataset 1",
        borderColor: "#62d496",
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: 500, max: 1000 })),
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: "#804de8",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 500 })),
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  };

  const columns = [
    {
      name: "Collateral Asset",
      cell: (row) => (
        <>
          <img
            style={{ marginRight: "10px", width:'40px' }}
            src={row.image}
            alt=""
          />
          {row.asset}
        </>
      ),
      minWidth: "210px",
    },
    {
      name: "Total Supply",
      cell: (row) => (
        <>
          <section className="d-flex flex-column" style={{ width: "100%" }}>
            <div className="mb-2">{"$" + row.supply}</div>
            <div style={{ width: "100%" }}>
              <ProgressBar now={60} />
            </div>
          </section>
        </>
      ),
      minWidth: "210px",
    },
    {
      name: "	Oracle Price",
      selector: (row) => "$" + row.price,
    },
    {
      name: "	Reserves",
      selector: (row) => "$" + row.reserve,
    },
    {
      name: "	Collateral Factor",
      selector: (row) => row.collateral + "%",
    },
    {
      name: "	Liquidation Factor",
      selector: (row) => row.liquidation + "%",
    },
    {
      name: "Liquidation Penalty",
      selector: (row) => row.penalty + "%",
    },
  ];

  const data = [
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 0, max: 1000 }),
      price: faker.datatype.number({ min: 0, max: 1000 }),
      reserve:faker.datatype.float({ min: 0.0, max: 1 }),
      collateral: faker.datatype.number({ min: 0, max: 100 }),
      liquidation: faker.datatype.number({ min: 0, max: 100 }),
      penalty: faker.datatype.number({ min: 0, max: 10 })
    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 0, max: 1000 }),
      price: faker.datatype.number({ min: 0, max: 1000 }),
      reserve:faker.datatype.float({ min: 0.0, max: 1 }),
      collateral: faker.datatype.number({ min: 0, max: 100 }),
      liquidation: faker.datatype.number({ min: 0, max: 100 }),
      penalty: faker.datatype.number({ min: 0, max: 10 })
    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 0, max: 1000 }),
      price: faker.datatype.number({ min: 0, max: 1000 }),
      reserve:faker.datatype.float({ min: 0.0, max: 1 }),
      collateral: faker.datatype.number({ min: 0, max: 100 }),
      liquidation: faker.datatype.number({ min: 0, max: 100 }),
      penalty: faker.datatype.number({ min: 0, max: 10 })
    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 0, max: 1000 }),
      price: faker.datatype.number({ min: 0, max: 1000 }),
      reserve:faker.datatype.float({ min: 0.0, max: 1 }),
      collateral: faker.datatype.number({ min: 0, max: 100 }),
      liquidation: faker.datatype.number({ min: 0, max: 100 }),
      penalty: faker.datatype.number({ min: 0, max: 10 })
    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 0, max: 1000 }),
      price: faker.datatype.number({ min: 0, max: 1000 }),
      reserve:faker.datatype.float({ min: 0.0, max: 1 }),
      collateral: faker.datatype.number({ min: 0, max: 100 }),
      liquidation: faker.datatype.number({ min: 0, max: 100 }),
      penalty: faker.datatype.number({ min: 0, max: 10 })
    },
  ];

  return (
    <Container className="p-4 mt-4 compound-market">
      <Row>
        <Col className="d-flex align-items-center">
          <div className="image">
            <img src={svg1} alt="image" />
            <img src={svg1} alt="image" />
          </div>
          <div>
            <p className="text-white m-0 fs-2 mx-2 fw-bold">
              ETH <span className="text-white-50">| Ethereum</span>{" "}
            </p>
            <p className="text-white-50 m-0 mx-2 compound-text-small">
              0xA17581A9E3356d9A858b789D68B4d866e593aE94{" "}
              <span className="mx-2 cursor-pointer">
                <BsArrowUpRightSquare size={16} />
              </span>{" "}
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 pt-4">
        <Col md={6}>
          <p className="text-color_1 fs-6 m-0">Total Collateral</p>
          <p className="fs-2 fw-bold text-white">22,693.7625 ETH</p>

          <Chart className="mt-5" type="bar" data={collateralChartData} />
        </Col>
        <Col md={6}>
          <p className="text-color_2 fs-6 m-0">Total Borrowing</p>
          <p className="fs-2 fw-bold text-white">22,693.7625 ETH</p>

          <Chart className="mt-5" type="bar" data={borrowingChartData} />
        </Col>
      </Row>

      <Row>
        <Col className="compound-card-bg mt-5">
          <Row>
            <Col md={7}>
              <Row>
                <Col>
                  <p className="compound-text-small m-0 text-white-50">
                    Total Earning
                  </p>
                  <section>
                    <p className="text-white fw-bold fs-6">$400</p>
                  </section>
                </Col>
                <Col>
                  <p className="compound-text-small m-0 text-white-50">
                    Earn APR
                  </p>
                  <section className="d-flex align-items-center">
                    <img src={svg1} alt="img..." />
                    <p className="text-white fw-bold fs-6 m-0 mx-1">3.50%</p>
                  </section>
                </Col>
                <Col>
                  <p className="compound-text-small m-0 text-white-50">
                    Earn Distribution
                  </p>
                  <section className="d-flex align-items-center">
                    <img src={svg1} alt="img..." />
                    <p className="text-white fw-bold fs-6 m-0 mx-1">0.00%</p>
                  </section>
                </Col>
                <Col>
                  <p className="compound-text-small m-0 text-white-50">
                    Reserves
                  </p>
                  <section>
                    <p className="text-white fw-bold fs-6">$400</p>
                  </section>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="compound-text-small m-0 text-white-50">
                    Total Borrowing
                  </p>
                  <section>
                    <p className="text-white fw-bold fs-6">$400</p>
                  </section>
                </Col>
                <Col>
                  <p className="compound-text-small m-0 text-white-50">
                    Borrow APR
                  </p>
                  <section className="d-flex align-items-center">
                    <img src={svg1} alt="img..." />
                    <p className="text-white fw-bold fs-6 m-0 mx-1">3.50%</p>
                  </section>
                </Col>
                <Col>
                  <p className="compound-text-small m-0 text-white-50">
                    Borrow Distribution
                  </p>
                  <section className="d-flex align-items-center">
                    <img src={svg1} alt="img..." />
                    <p className="text-white fw-bold fs-6 m-0 mx-1">0.00%</p>
                  </section>
                </Col>
                <Col>
                  <p className="compound-text-small m-0 text-white-50">
                    Oracle Price
                  </p>
                  <section>
                    <p className="text-white fw-bold fs-6">$400</p>
                  </section>
                </Col>
              </Row>
            </Col>
            <Col md={5}>
              <Row>
                <Col sm={4} className="d-flex align-items-center">
                  <p className="text-white compound-text-small m-0 align-self-center">
                    Utilization <span className="mx-2">{slider}%</span>
                  </p>
                </Col>
                <Col sm={8}>
                  <Slider
                    defaultValue={slider}
                    sx={{
                      // width: 300,
                      color: "#62d496",
                    }}
                    onChange={(e) => {
                      setSlider(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={4} className="d-flex align-items-center">
                  <p className="text-white compound-text-small m-0 align-self-center">
                    Borrow APR <span className="mx-2">{sliderApr}%</span>
                  </p>
                </Col>
                <Col sm={8}>
                  <Slider
                    defaultValue={sliderApr}
                    sx={{
                      // width: 300,
                      color: "#804de8",
                    }}
                    onChange={(e) => {
                      setSliderApr(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              {/* <LinearBuffer /> */}
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col className="compound-card-bg mt-4">
          <DataTable columns={columns} data={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default Markets;
