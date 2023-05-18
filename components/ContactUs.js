import React, { useState } from "react"
import { Link } from 'react-router-dom';



const ContactUs = () => {
    const [userData, setUserData] = useState({
      fullName:"",
      email:"",
      message:"",
    });
    let name,value;
    const postUserData = (event) =>{
        name=event.target.name;
        value=event.target.value;

        setUserData({...userData,[name]:value})

    };
    //connect with firebase
    const submitData = async(event) =>{
        event.preventDefault();
        const{fullName,email,message}=userData;
        if(fullName && email && message){

        const res = fetch('https://chase4gold-27d1e-default-rtdb.firebaseio.com/userDataRecords.json',
        {method:"POST",
        Headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({
            fullName,email,message,
        }),
        }
        );
        if(res){
            setUserData({
                fullName:"",
                email:"",
                message:"", 
            });
            alert("Data stored");
        }else{
            alert("plz fill the data");
        }
    }else{
        alert("plz fill the data");
    }

    };
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
            <div className="row">
                <div className="col-sm col-md-8">
                    <form method="POST">
                        <div className="mb-3 m-2 mt-5 pt-5">
                            <h2>Give us your valuable feedback</h2>
                            <label for="exampleFormControlTextarea1" className="form-label m-2">Your Name</label>
                            <input type="text" name="fullName" required className="form-control m-2" id=""
                                placeholder="Your name" value={userData.fullName} onChange={postUserData} />
                        </div>

                        <div className="mb-3 m-2">
                            <label for="exampleFormControlInput1" className="form-label m-2">Email address</label>
                            <input type="email" name="email" required className="form-control m-2" id=""
                                placeholder="name@example.com" value={userData.email} onChange={postUserData} />
                        </div>
                        <div className="mb-3 m-2">
                            <label  className="form-label m-2">Your Message</label>
                            <textarea className="form-control m-2" name="message" id="" required
                                placeholder="Enter Your Amazing message!" value={userData.message} onChange={postUserData} rows="3"></textarea>
                        </div>
                        <button type="submit" className=" btn btn-outline-dark m-2" onClick={submitData}>Submit</button>
                    </form>
                </div>

            </div>

            <Link to={"/"}><div className=" btn btn-outline-dark m-2">Back to Home</div></Link>
        </div >
    )
}

export default ContactUs;