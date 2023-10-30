import { useState } from "react";
import "./components/card.tsx";
import { Card } from "./components/card.tsx";
import { Modal } from "./components/modal.tsx";
import CSS from "csstype";
import "./components/modal.css"
import { MyButton } from "./components/button.tsx";

export default function App() {
  const [scare, setScare] = useState(false);

  const none: CSS.Properties = {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 1)",
    height: "100dvh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "9",

    
  };

  return (
    <>
    <div className="flex">
      <div onClick={() => setScare(!scare)}>
        
        <Card
          image="https://e498rczdjg6.exactdn.com/wp-content/uploads/2020/11/Esja-Mountain-Reykjavik-7.jpg"
          title="Esja"
          about="Hæsti tindur Esju er 914 metrar. Nokkrar gönguleiðir eru upp á fjallið og þar eru vinsæl útivistarsvæði."
        />
      </div>
      <div onClick={() => setScare(!scare)}>
      <Card
        image="https://img.asmedia.epimg.net/resizer/PuXh197rDlHCJNZEUSLIQ5Bx5aU=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/MGLDLRBRJVHNFJXBK5V3ATY2OM.jpg"
        title="Everest"
        about="Mount Everest attracts many climbers, including highly experienced mountaineers. There are two main climbing routes."
      /> </div>
      <div onClick={() => setScare(!scare)}>
      <Card
        image="https://c6.staticflickr.com/9/8166/29400302541_7c9ce4d777_o.jpg"
        title="Marcelafell"
        about="Marcelafell is a mountain and is located in West, Iceland. The estimate terrain elevation above seal level is 563 metres."
      /> </div>
      
      {scare && (
        <div style={none}>
             <span onClick={()=> setScare(!scare)} className="material-symbols-outlined">
                close
            </span>
          <Modal />
        </div>
        
      )}
      </div>
      <div className="flex">
            <div onClick={()=> setScare(!scare)}>
      <MyButton/>
            </div>
      </div>
    </>
  );
}
