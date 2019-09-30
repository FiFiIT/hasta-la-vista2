import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect } from "react-konva";
import "./HastaCourtsList.css";

const HastaCourtsList = ({ freeCourts, rectCourts }) => {
  const [availableCourts, setavailableCourts] = useState([]);

  useEffect(() => {
    if (freeCourts && freeCourts.length > 0) {
      const mergeById = rectCourts.filter(rect =>
        freeCourts.find(court => court.number === rect.number)
      );

      setavailableCourts(mergeById);
    }
  }, [freeCourts]);

  return (
    <>
      {availableCourts.length > 0 && (
        <>
          <p>
            Lista wolnych kortów: {availableCourts.map(c => c.number + ", ")}
          </p>
          <div id="hastaplan">
            <Stage width={1023} height={686}>
              <Layer>
                {availableCourts.map(cord => (
                  <Rect
                    key={cord.number}
                    x={cord.x}
                    y={cord.y}
                    width={cord.width}
                    height={cord.height}
                    stroke={cord.stroke}
                    strokeWidth={cord.strokewidth}
                  />
                ))}
              </Layer>
            </Stage>
          </div>
        </>
      )}
    </>
  );
};

export default HastaCourtsList;
