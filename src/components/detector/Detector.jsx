import React from 'react'
import { Offline, Online } from "react-detect-offline";
import WifiOffOutlinedIcon from '@mui/icons-material/WifiOffOutlined';
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';
import "./detector.scss";

const Detector = () => {

  const netload = {
    marginTop: "15px"
  }
  return (
    <div style={netload}>
      <Offline>
        <WifiOffOutlinedIcon style={{ color: "red" }} />
      </Offline>
      <Online>
      <OnlinePredictionOutlinedIcon style={{ color: "green" }} />
      </Online>
    </div>
  )
}

export default Detector