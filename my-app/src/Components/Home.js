import React, { useState } from "react";
import axios from "axios";
import "../Css/Design.css";


function Home(){

    const [fileData, setSelectedFile] = useState([]);
    console.log(fileData)

    const onLoad = (e) =>{
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0].name);
    }

    const onSubmit = async(e) =>{
        e.preventDefault();
        const data = new FormData();
        data.append("file", fileData);
        await axios({
          method: "POST",
          url: "http://localhost:5000/",
          data: data,
        }).then((res) => {       
            alert(res.data.message);
        });
      };

    const Redirect = (e) =>{
        window.location.href = "/uploaded";
    }
    if (fileData.length === 0){
    return(
        <div className="main">
            <div className="heading">
            <h3>Add Candidates to Database</h3>
            </div>
            <div className="container">
                <div>
                    <form onSubmit={onSubmit} enctype="multipart/form-data">
                        <input type="file" name="file" onChange={onLoad} className="input" placeholder=" "/>
                        <p>Upload a .xlsx or .xls file here</p>
                        {/* <input type="Submit" /> */}
                    </form>
                </div>
            </div>
        </div>
    )}else{
        return(
            <div className="main">
            <div className="heading">
            <h3>Add Candidates to Database</h3>
            </div>
            <div className="container">
                <div>
                    <form onSubmit={onSubmit} enctype="multipart/form-data">
                        <input type="file" name="file" onChange={onLoad} className="input"/>
                        <p>{fileData.name}</p>
                        <br/>
                        <br/>
                        <input className="btn" type="Submit" onClick={Redirect} />
                    </form>
                </div>
            </div>
        </div>
        )
    }
};

export default Home;