import React, { useState, useEffect } from "react";
import { Stage, Layer, Rect } from "react-konva";
import { getTime } from "../../tools/helpers";
import "./HastaCourtsList.css";

const HastaCourtsList = ({ freeCourts, rectCourts }) => {
  const [availableCourts, setavailableCourts] = useState([]);
  const [phrase, setPhrase] = useState("Lista wolnych kortów:");
  useEffect(() => {
    if (freeCourts && freeCourts.length > 0) {
      const mergeById = rectCourts.filter(rect =>
        freeCourts.find(court => court.number === rect.number)
      );
      setavailableCourts(mergeById);

      if (freeCourts[0].booked) {
        const last = freeCourts[0].free.length - 1;
        setPhrase(
          "Zarezerwowano kort numer: " +
            freeCourts[0].number +
            " w godzinach od: " +
            getTime(freeCourts[0].free[0].from) +
            " do: " +
            getTime(freeCourts[0].free[last].to)
        );
      } else {
        let text =
          "Lista wolnych kortów: " + availableCourts.map(c => c.number + ", ");
        setPhrase(text.substring(0, text.length - 1));
      }
    }
  }, [freeCourts, rectCourts]);

  return (
    <>
      {availableCourts.length > 0 && (
        <>
          <p>{phrase}</p>
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
