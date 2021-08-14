import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import LogoImage from "../../images/ShopStream2.png";
import LiveImage from "../../images/LiveShopping.png";
import Aos from "aos";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExploreIcon from '@material-ui/icons/Explore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "aos/dist/aos.css";
import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import Button from "@material-ui/core/Button";
import firebase from "firebase/app";
import "firebase/database";
import config from "../../config";

const Home = ()=> {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail]= useState("");

    if (firebase.apps.length === 0) {
        firebase.initializeApp(config);
    }
    const db = firebase.database();

    useEffect(()=>{
        Aos.init();
    }, []);
    const clickMe = () =>{
        console.log(firstName, lastName, email);
        alert("Thank you for registering");

        const betaFormRef = db.ref("betaForm");
        const newBetaFormRef = betaFormRef.push();
        newBetaFormRef.set({
            firstName,
            lastName, 
            email,
        });

        setFirstName("");
        setLastName("");
        setEmail("");
    }
    return (
        <HomeWrapper container>
            <Grid item xs={12}>
            <LocationContainer >
                <LocationImage 
                data-aos="zoom-in" 
                data-aos-duration="2000"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src={LogoImage} 
                style={{ width: "32%", 
                height: "30%", 
                borderRadius: "25%" }}/>
            </LocationContainer>
            </Grid>
            <Grid item xs={12}>
                <Typography
                variant = "h1"
                style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "Cochin",
                    color: "white"
                }}> The Underground Streetwear Community  </Typography>
                <p
                style={{
                    fontSize: "20px",
                    fontWeight: 200,
                    textAlign: "center",
                    fontFamily: "Cochin",
                    color: "white"
                }}> A growing community of upcoming streetwear brands, artists and creatives   </p>
            </Grid>

            <Grid item xs={12} style={{ marginTop: "120px" }}>
                <p 
                data-aos="fade-up-right"
                data-aos-once="false"
                data-aos-offset="200"
                style={{ 
                    fontSize: "30px",
                    color: "white",                     
                    fontWeight: 200,
                    textAlign: "center",
                    fontFamily: "Cochin", }}> How It Works </p>
            </Grid>

                <BoxContainer>
                <BoxWrapper>
                    <Boxes>
                      <AccountCircleIcon />
                    </Boxes>
                    <p     
                    style={{
                    fontFamily: "Cochin",
                    color: "white"
                }}>Create an account</p>
                </BoxWrapper>
                <p     
                style={{
                fontFamily: "Cochin",
                color: "white",
                marginTop: "60px"
                }}>-----------</p>

                <BoxWrapper>
                    <Boxes>
                        <ExploreIcon />
                    </Boxes>
                    <p     
                    style={{
                    fontFamily: "Cochin",
                    color: "white"
                }}> Discover emerging brands and designers instantly</p>
                </BoxWrapper>
                <p     
                style={{
                fontFamily: "Cochin",
                color: "white",
                marginTop: "60px"
                }}>-----------</p>
                <BoxWrapper>
                    <Boxes>
                        <ShoppingCartIcon />
                    </Boxes>
                    <p     
                    style={{
                    fontFamily: "Cochin",
                    color: "white"
                }}>Shop all the hottest releases in a live and interactive way </p>
                </BoxWrapper>
                </BoxContainer>


                <Grid item xs={12} 
                style={{ display: "flex", 
                flexDirection: "column", 
                marginTop: "50px", 
                marginBottom: "50px"}} >
                <p 
                data-aos="fade-up-right"    
                style={{
                fontSize: "30px",
                fontFamily: "Cochin",
                color: "white",
                marginTop: "60px",
                textAlign: "center",
                marginBottom: "60px"
                }}> Live Shopping</p>

            </Grid>

                <Grid item xs={12} style={{ 
                    display: "flex", 
                    flexDirection: "row", 
                    marginTop: "50px", 
                    marginBottom: "50px", 
                    alignContent: "space-evenly",
                    justifyContent: "space-evenly"}}>
                <LocationImage 
                data-aos="fade-up-right"
                src={LiveImage} 
                style={{width: "30%",
                alignContent: "center" }}/>

                <p 
                data-aos="fade-up-right"    
                style={{
                fontSize: "25px",
                fontFamily: "Cochin",
                color: "white",
                marginTop: "60px",
                textAlign: "center",
                marginBottom: "60px",
                alignContent: "center"
                }}> With shoppable livestreams, you get to interact with your favorite streetwear brands in a new and entertaining way</p>
                </Grid>

                <Grid item xs={12} style={{ marginTop: "120px" }}>
                <p 
                data-aos="fade-up-right"
                data-aos-once="false"
                data-aos-offset="200"
                style={{ 
                    fontSize: "30px",
                    color: "white",                     
                    fontWeight: 200,
                    textAlign: "center",
                    fontFamily: "Cochin", }}> How It Works for Brands </p>
            </Grid>

                <BoxContainer>
                <BoxWrapper>
                    <Boxes>
                      <AccountCircleIcon />
                    </Boxes>
                    <p     
                    style={{
                    fontFamily: "Cochin",
                    color: "white"
                }}>Become a Creator</p>
                </BoxWrapper>
                <p     
                style={{
                fontFamily: "Cochin",
                color: "white",
                marginTop: "60px"
                }}>-----------</p>

                <BoxWrapper>
                    <Boxes>
                        <ExploreIcon />
                    </Boxes>
                    <p     
                    style={{
                    fontFamily: "Cochin",
                    color: "white"
                }}> Upload your products with ease, link up your social media accounts and your websites</p>
                </BoxWrapper>
                <p     
                style={{
                fontFamily: "Cochin",
                color: "white",
                marginTop: "60px"
                }}>-----------</p>
                <BoxWrapper>
                    <Boxes>
                        <ShoppingCartIcon />
                    </Boxes>
                    <p     
                    style={{
                    fontFamily: "Cochin",
                    color: "white"
                }}>Start selling to a rapidly growing and emerging streetwear audience</p>
                </BoxWrapper>
                </BoxContainer>



                <Grid container 
                direction="column" 
                style={{ marginTop: "120px"}}>
                <p 
                data-aos="fade-up-right"
                data-aos-once="false"
                data-aos-offset="200"
                style={{ 
                    fontSize: "20px",
                    color: "white",                     
                    fontWeight: 200,
                    textAlign: "center",
                    fontFamily: "Cochin",
                    marginBottom: "60px" }}> SignUp for our Beta </p>


                <Grid container style={{ 
                display: "flex", 
                justifyContent: "space-evenly", 
                flexDirection: "column", 
                alignItems: "center", 
                marginBottom: "60px" }}>
                <TextField 
                style={{ backgroundColor: "white", 
                width: "300px", 
                marginBottom: "20px", 
                padding: "5px" }}
                id="filled-search1" 
                label="firstName" 
                variant="filled"
                role="textbox"
                value={firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
                 <TextField 
                 style={{ backgroundColor: "white", 
                 width: "300px", 
                 marginBottom: "20px", 
                 padding: "5px"}}
                id="filled-search2" 
                label="lastName" 
                variant="filled"
                role="textbox"
                value={lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} />
                <TextField 
                style={{ backgroundColor: "white", 
                width: "300px", 
                marginBottom: "20px", 
                padding: "5px"}}
                id="filled-search3" 
                label="email" 
                variant="filled"
                role="textbox"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />

                <Button 
                variant="contained" 
                role="button"
                onClick={()=> clickMe()}
                style={{width: "120px",
                    height: "50px", 
                    backgroundColor: "#58dd94" }}> Submit </Button>
                </Grid>
                </Grid>

        </HomeWrapper>
    )
};

const HomeWrapper = styled(Grid)`
  height: 100%;
  justify-content: center;
  background-color: #000000;
  && {
  @media (max-width: 680px){
      height: 100%
    }
  }
 `;
const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  margin-bottom: 80px;
`;
const LocationImage = styled.img`
  padding-left: 14px;
  padding-right: 10px;
`;
const BoxContainer = styled.div`
  height: 200px; 
  margin: 40px 100px 60px; 
  display: flex; 
  flex-direction: row; 
  justify-content: space-evenly;
`;
const BoxWrapper = styled.div`
  display: flex; 
  flex: 1 1 0%; 
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  margin-left: 10px; 
  text-align: center; 
  margin-right: 10px; 
  min-width: 80px; 
  cursor: auto;
`;

const Boxes = styled.div`
  width: 80px; 
  height: 80px; 
  min-height: 80px; 
  min-width: 80px; 
  background-color: #58dd94; 
  border-radius: 8px; 
  margin-bottom: 20px; 
  display: flex; 
  justify-content: 
  center; 
  align-items: center;
`;
export default Home;