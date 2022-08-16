import React, { useEffect } from 'react'
import {useHistory} from "react-router-dom"
import Layout from '../Layout/Layout';
import Navbar from '../Navbar/Navbar';
import { signout } from "../../utils/auth";
import Footer from '../Footer/Footer'

const Logout = () => {
        const history = useHistory();
        useEffect(() => {
          signout(() => {
            history.push("/");
          });
        }, []);
    return (
        <>
             <Layout title="Logout">
                <Navbar></Navbar>
                <div className="text-center m-5">
                    <h1>Logout</h1>
                </div>
                <Footer></Footer>
              </Layout>
            </>
    )
}

export default Logout
