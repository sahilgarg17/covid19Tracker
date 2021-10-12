import React, { useEffect, useState } from 'react';

const Statewise = () => {

    const [mydata, setData] = useState([]);
    const getCovidData = async () => {
        const data = await fetch("https://data.covid19india.org/data.json")
        const actualData = await data.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
            getCovidData()
    }, []);
    return(
        <>
        <div className="container-fluid mt-5"> 
            <div className="main-heading">
                <h1 className="mb-5 text-center"> <span className="font-weight-bold"> India </span> Covid-19 Dashboard</h1>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                   {
                       mydata.map((curElem, idx) => {
                        return(
                        <tr key={idx}>
                            <td>{curElem.state}</td>
                            <td>{curElem.confirmed}</td>
                            <td>{curElem.recovered}</td>
                            <td>{curElem.deaths}</td>
                            <td>{curElem.active}</td>
                            <td>{curElem.lastupdatedtime}</td>
                        </tr>
                        )
                   })
                   }
                   </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

export default Statewise;