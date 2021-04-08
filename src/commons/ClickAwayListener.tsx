// Libraries Imports
import React, { FC, useEffect, useState, useRef } from "react";
import styled from "styled-components";
// Types
type ClickAwayListenerProps = { id?: string; onClose: () => void };

const ClickAwayListener: FC<ClickAwayListenerProps> = ({
  onClose,
  children,
}) => {
  //  local variables
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  //  states
  const [idGenrated, setIidGenrated] = useState<string>("");
  //  Functions
  function uuidv4() {
    const id = "xxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    setIidGenrated(id);
  }
  useEffect(() => {
    uuidv4();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      // get mouse coordinates on click
      const X = event.clientX;
      const Y = event.clientY;

      //get container bounding Rectangle
      const bounderies = ref?.current?.getBoundingClientRect();

      const x = bounderies?.x;
      const y = bounderies?.y;
      const h = bounderies?.height;
      const w = bounderies?.width;

      // test the click was outside the container
      //to initiate the onClose event
      if (!(X >= x! && X <= x! + w! && Y >= (y - 60)! && Y <= y! + h!)) {
        onClose();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper ref={ref} id={idGenrated}>
      {children}
    </Wrapper>
  );
};

export const Wrapper = styled.div``;

export default ClickAwayListener;
