import { makeStyles } from "@material-ui/styles";
// import Home from "./Home";


export default makeStyles(theme => ({
    LogoImage: {
        width: "100px",
        height: "100px"
    },
    NavItems: {
        paddingTop: "30px"
    },
    // ul, a: {
    //     display: "block",
    //     padding: "10px"
    // },
    //    .........Home.......

    HomeImage: {
        width: "100%",
        height: "500px"
    },
    CompanyDetails: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        width: "80%"
    },
    ProjectsShowImage: {
        height: "100px",
        width: "100px"
    },
    subTitle: {
        fontSize: "25px",
        color: "steelblue"
    },
    ConstructionPackages: {
        fontSize: "30px",
        color: "darkslategrey",
        textAlign: "center"
    },
    UnderLine: {
        width: "80px",
        margin: "20px",
        height: "10px",
        color: "darkslategrey",
        textAlign: "center",
        backgroundColor:"darkslategrey"
    },
 // ...........CONSTRUCTION PACKAGES........

 TurnkeyConstructionPackages:{
    fontSize: "30px",
    color: "cadetblue",
    textAlign: "center",
    paddingTop:"30px"
}

}))