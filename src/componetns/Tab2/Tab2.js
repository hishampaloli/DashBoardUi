import React from 'react'
import './Tap2.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DownloadIcon from '@mui/icons-material/Download';

const data = [
    {
        code: '2327234-4638574'
    },
    {
        code: '2327234-4638574'
    },
    {
        code: '2327234-4638574'
    },{
        code: '2327234-4638574'
    },
    {
        code: '2327234-4638574'
    },
    {
        code: '2327234-4638574'
    },
    {
        code: '2327234-4638574'
    },
    {
        code: '2327234-4638574'
    },
]

const dataDate = [
    {
        date: '20-11-2022'
    },
    {
        date: '20-11-2022'
    },
    {
        date: '20-11-2022'
    },
    {
        date: '20-11-2022'
    },
    {
        date: '20-11-2022'
    },
    {
        date: '20-11-2022'
    },
    {
        date: '20-11-2022'
    },
    {
        date: '20-11-2022'
    }
]

const dataAmount = [
    {
        amount: '$230.00'
    },
    {
        amount: '$230.00'
    },
    {
        amount: '$230.00'
    },
    {
        amount: '$230.00'
    },
    {
        amount: '$230.00'
    },
    {
        amount: '$230.00'
    },
    {
        amount: '$230.00'
    },
    {
        amount: '$230.00'
    },
]

const dataDel = [
    {
        status: 'Pending'
    },
    {
        status: 'Pending'
    },
    {
        status: 'Picked Up'
    },
    {
        status: 'Pending'
    }, 
    {
        status: 'Deliverd'
    }, 
    {
        status: 'Pick Up'
    },
    {
        status: 'On The Way'
    },
    {
        status: 'Pending'
    },
]

const dataOptions = [
    {
        logo1: <DeleteOutlineIcon className='dlt-icon icn' />,
        logo2: <RemoveRedEyeIcon className='rm-icon icn' />,
        logo3: <DownloadIcon className='dw-icon icn' />,
    },
    {
        logo1: <DeleteOutlineIcon className='dlt-icon icn' />,
        logo2: <RemoveRedEyeIcon className='rm-icon icn' />,
        logo3: <DownloadIcon className='dw-icon icn' />,
    },
    {
        logo1: <DeleteOutlineIcon className='dlt-icon icn' />,
        logo2: <RemoveRedEyeIcon className='rm-icon icn' />,
        logo3: <DownloadIcon className='dw-icon icn' />,
    },
    {
        logo1: <DeleteOutlineIcon className='dlt-icon icn' />,
        logo2: <RemoveRedEyeIcon className='rm-icon icn' />,
        logo3: <DownloadIcon className='dw-icon icn' />,
    },
    {
        logo1: <DeleteOutlineIcon className='dlt-icon icn' />,
        logo2: <RemoveRedEyeIcon className='rm-icon icn' />,
        logo3: <DownloadIcon className='dw-icon icn' />,
    },
    {
        logo1: <DeleteOutlineIcon className='dlt-icon icn' />,
        logo2: <RemoveRedEyeIcon className='rm-icon icn' />,
        logo3: <DownloadIcon className='dw-icon icn' />,
    },
    {
        logo1: <DeleteOutlineIcon className='dlt-icon icn' />,
        logo2: <RemoveRedEyeIcon className='rm-icon icn' />,
        logo3: <DownloadIcon className='dw-icon icn' />,
    },
 

   
   
]

function Tab2() {
  return (
    <div className="right-1">
    <p className="d-p">Purchase History</p>

    <div className="row2">
      <div className="detail-card-tab2">
      <div className="card-title">
        <p>Purchase History</p>
      </div>

      <div className="card-body-tab2" >
        <ul>
          <li ><strong>Code</strong></li>
          {data.map(code => {
            return <li className='lli' style={{color:'orange'}}>{code.code}</li>
          })}
        </ul>

        <ul>
          <li ><strong>Date</strong></li>
          {dataDate.map(code => {
            return <li className='lli' >{code.date}</li>
          })}
        </ul>

        <ul>
          <li ><strong>Amount</strong></li>
          {dataAmount.map(code => {
            return <li className='lli' >{code.amount}</li>
          })}
        </ul>

        <ul>
          <li ><strong>Delivery status</strong></li>
          {dataDel.map(code => {
            return <li className='lli' >{code.status}</li>
          })}
        </ul>

        <ul>
          <li ><strong>Payment Status status</strong></li>
          <li className='paid '>Paid</li>
          <li className='paid '>Paid</li>
          <li className='unpaid '>Unpaid</li>
          <li className='paid '>Paid</li>
          <li className='unpaid '>Unpaid</li>
          <li className='unpaid '>Unpaid</li>
          <li className='paid '>Paid</li>
          <li className='paid '>Paid</li>
        </ul>

        <ul>
          <li ><strong>Options</strong></li>
          {dataOptions.map(code => {
            return <li className='lli' >{code.logo1} {code.logo2} {code.logo3}</li>
          })}
        </ul>



      </div>
      
      <Pagination count={10} color="primary" style={{marginBottom:'10px'}}/>
      </div>
      
    </div>
  </div>
  )
}

export default Tab2
