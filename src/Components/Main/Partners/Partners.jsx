import { Typography, Box, Grid } from "@mui/material";
import React from "react";

import PRCompany from "../../../Images/Main/Partners/1.png";
import SchoolCompany from "../../../Images/Main/Partners/2.png";
import ArioCompany from "../../../Images/Main/Partners/3.png";
import ArzingerCompany from "../../../Images/Main/Partners/4.png";
import GazetaCompany from "../../../Images/Main/Partners/5.png";

import PartnerCard from "../Partners/PartnerCard";

const Partners = () => {
  return (
    <>
      <Box sx={{ p: 1 }}>
          <Typography textAlign={"center"} variant={"h4"} sx={{p:3}}>Партнери Ліги</Typography>


        <Grid container sx={{ p: 1 }}>
          <PartnerCard
            companyImage={SchoolCompany}
            companyTitle={"Освітній партнер"}
          />
          <PartnerCard
            companyImage={ArioCompany}
            companyTitle={"Річний партнер"}
          />
          <PartnerCard
            companyImage={ArzingerCompany}
            companyTitle={"Експертний партнер"}
          />
          <PartnerCard
            companyImage={GazetaCompany}
            companyTitle={"Інформаційний партнер"}
          />
          <PartnerCard
            companyImage={PRCompany}
            companyTitle={"Інформаційний партнер"}
          />
        </Grid>
      </Box>
    </>
  );
};

export default Partners;
