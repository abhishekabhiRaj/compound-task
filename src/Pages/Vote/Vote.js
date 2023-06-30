import React, { useState } from 'react'
import {Container , Row, Col, Badge, ProgressBar} from 'react-bootstrap';
import svg1 from "../../assets/images/svg/svg1.svg";
import { AiOutlinePlus } from "react-icons/ai";
import { faker } from "@faker-js/faker";
import DataTable from "react-data-table-component";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const TooltipDetail = ({row}) => {
  return(
    <>
      <div className="compound-card-bg tool">
        <p className='text-white'>{row.asset}</p>
        <p className='text-white'>Oracel Price</p>
        <p className='text-white'>Collateral Factor</p>
      </div>
    </>
  )
}

function Vote() {
  const [price, setPrice] = useState('$0.00');
  const columns = [
    {
      name: "Collateral Asset",
      cell: (row) => (
        <>
        
         <section className="d-flex align-items-center position-relative tool-div"  data-tooltip-id="my-tooltip" data-tooltip-content={<TooltipDetail row={row} />}>
         <div className=''> <TooltipDetail row={row} /> </div> 
         <img
            style={{ marginRight: "10px", width:'40px' }}
            src={row.image}
            alt=""
          />
          <section className='d-flex flex-column'>
          {row.asset}
          <p className='text-text-white-50 m-0'>Link</p>
          </section>
         </section>
         {/* <Tooltip id="my-tooltip" /> */}
        </>
      ),
      minWidth: "70%",
    },
    {
      name: "Protocol Balance",
      cell: (row) => (
        <>
          <section className="d-flex align-items-center" style={{ width: "100%" }}>
            <div className="mx-2">{"$" + row.supply}</div>
            <div>
              <button className='compound-disabled-btn'>
                <AiOutlinePlus />
              </button>
              <button className='compound-disabled-btn mx-2'>
                <AiOutlinePlus />
              </button>
            </div>
          </section>
        </>
      ),
      minWidth: "210px",
    },
   
  ];

  const data = [
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 100, max: 999 }),

    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 100, max: 999 }),

    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 100, max: 999 }),

    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 100, max: 999 }),

    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 100, max: 999 }),

    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 100, max: 999 }),

    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 100, max: 999 }),

    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 100, max: 999 }),

    },
    
  ];


  const columns1 = [
    {
      name: "Collateral Asset",
      cell: (row) => (
        <>
         <section className="d-flex align-items-center" >
         {/* <img
            style={{ marginRight: "10px", width:'40px' }}
            src={row.image}
            alt=""
          /> */}
          <section className='d-flex flex-column'>
          {row.asset}
          <p className='text-text-white-50 m-0'>Link</p>
          </section>
         </section>
        </>
      ),
      // minWidth: "70%",
    },
    {
      name: "Protocol Balance",
      cell: (row) => (
        <>
          <section className="d-flex align-items-center" style={{ width: "100%" }}>
            <div className="mx-2">{"$" + row.supply}</div>
           
          </section>
        </>
      ),
      // minWidth: "210px",
    },
   
  ];

  const data1 = [
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 100, max: 999 }),

    },
    {
      image:svg1,
      asset: faker.finance.currencyName(),
      supply: faker.datatype.number({ min: 100, max: 999 }),

    },
    
   
    
  ];
  return (
    <Container className='p-4 mt-4'>
      <Row>
      <Col>
          <p className='compound-text-small text-white m-0'> <span className="text-color_1">Votes</span></p>
          <p className='text-white fs-2 fw-bold cursor-pointer m-0'>0.0000</p>
          
      </Col>
      
      </Row>
      <Row className='g-5'>
        <Col md={7}>
          <Row className='mt-5'>
            <Col className='compound-card-bg'>
              <p className='text-white-50 compound-text-small m-0' >Active Proposals</p>
              <p className='text-white fs-6 fw-semibold'>
              Compound V2, V3 Migration Proposal Phase 4
              </p>
              <div >
                <Badge bg="danger">Active</Badge>
                <span className='text-white compound-text-small'>166 .</span> <span className='text-white compound-text-small'>1 day, 16 hrs</span>
              </div>
              <Row className='mt-4'>
              <Col md={4}>
              <p className="text-white-50 compound-text-small m-0">For <span className='text-text-white fe-bold'>100%</span></p>
              <ProgressBar now={60} />
            </Col>
            <Col md={4}>
              <p className="text-white-50 compound-text-small m-0">For <span className='text-text-white fe-bold'>100%</span></p>
              <ProgressBar now={60} />
            </Col>
            <Col md={4}>
              <p className="text-white-50 compound-text-small m-0">For <span className='text-text-white fe-bold'>100%</span></p>
              <ProgressBar now={60} />
            </Col>
              </Row>
            </Col>
          </Row>
         
        </Col>
        <Col md={5}>
          <Row className='mt-5'>
            <Col className='compound-card-bg'>
              <p className='text-white-50 compound-text-small'>USDC Wallet Balance</p>
              <div className="d-flex align-items-center">
                <img src={svg1} alt="" />
                <p className="text-white m-0 mx-1">{price}</p>
              </div>
              <div className="hr-line mt-5 mb-4">
                
              </div>
              <p className='text-white m-0'>Setup Voting</p>
              <p className='compound-text-small text-white-50'>
              You can either vote on each proposal yourself or delegate your votes to a third party. Compound Governance puts you in charge of the future of Compound.<span className='text-color_1'> Learn more.</span>
              </p>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </Container>
  )
}

export default Vote