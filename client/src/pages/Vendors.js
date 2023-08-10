import {useState, useEffect} from 'react';
import Papa from 'papaparse';
import Data from './users.csv';
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Sidebar from './Sidebar';
import "./Vendors.css";

function Vendors(){
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      const response = await fetch(Data);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decorder = new TextDecoder("utf-8");
      const csvData = decorder.decode(result.value);
      
      
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true
      }).data;
      setdata(parsedData);
    };
    fetchData();
  }, []);


  const listItems = data.map((item) =>
        <div className="dcard" key={item.id}>
            <div className="card_img">
                <img src={item.thumb} />
            </div>
            <div className="card_header">
                <h2>{item.user_id}</h2>
                <p>{item.Occupation}</p>
                <p className="price">{item.Income_Level}<span>{item.currency}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
  );

  return (
        <>
      <Header/>
      <Sidebar />
    <div className='drow'>
    {listItems}
    </div>
    <Footer />
  </>
  )
}

export default Vendors;