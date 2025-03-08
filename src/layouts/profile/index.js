/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import Title from "examples/Title/Title";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

//Avatar
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import avatar_icon from "assets/images/Avatar_first_page.jpg";

//Move out buttons
import Button from "examples/Buttons/Button";

//navigation
import { useNavigate } from "react-router-dom";
function Overview() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/yourday");
  };
  return (
    <DashboardLayout>
      <MDBox
        variant="gradient"
        bgColor="blue"
        color="white"
        sx={{
          borderRadius: "8px",
          shadow: "sm",
          coloredShadow: "primary",

          position: "relative", // Required for positioning child elements properly
        }}
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="User Name"
            src={avatar_icon}
            sx={{
              width: 250,
              height: 250,
              border: "2px solid #fff",
              boxShadow: 3,
              position: "relative", // Ensures Avatar stays on top of the background
              zIndex: 1, // Ensures Avatar stays above the background
            }}
          />
        </Stack>
        <Button text="hi" onClick={handleClick} />
        <Button text="hi2" />
        <Button text="hi3" />
        <Title />
        kjkfjdk
      </MDBox>
    </DashboardLayout>
  );
}

export default Overview;
