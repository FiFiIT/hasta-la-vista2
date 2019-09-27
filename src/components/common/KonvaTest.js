import React from "react";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";
import "./KonvaTest.css";

const KonvaTest = () => {
  return (
    <>
      <div id="hastaplan">
        <Stage width={1023} height={686}>
          <Layer>
            <Rect
              x={8}
              y={11}
              width={51}
              height={81}
              stroke="red"
              strokeWidth={1}
            />
          </Layer>
        </Stage>
      </div>
    </>
  );
};

export default KonvaTest;
