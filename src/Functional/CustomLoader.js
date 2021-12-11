import React from "react";
import { useProgress, Html } from "@react-three/drei";

export default function CustomLoader(props) {
  const { progress } = useProgress();

  return (
    <Html style={{ display: "grid", width: "8em" }} center>
      <p
        style={{
          color: props.color,
          justifySelf: "center",
          margin: "0",
          padding: "0",
        }}
      >
        loading...
      </p>
      <div style={{}}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            borderTop: "5px solid " + props.color,
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: progress + "%",
            borderTop: "5px solid red",
          }}
        ></div>
      </div>
    </Html>
  );
}
