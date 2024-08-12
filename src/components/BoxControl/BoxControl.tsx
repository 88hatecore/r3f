import { ChangeEvent, useState } from "react";

interface BoxControlsProps {
  onDimensionsChange: (width: number, height: number, depth: number) => void;
}

export const BoxControls = ({
  onDimensionsChange,
}: BoxControlsProps): JSX.Element => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [depth, setDepth] = useState(1);

  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newWidth = parseFloat(e.target.value);
    setWidth(newWidth);
    onDimensionsChange(newWidth, height, depth);
  };

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newHeight = parseFloat(e.target.value);
    setHeight(newHeight);
    onDimensionsChange(width, newHeight, depth);
  };

  const handleDepthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newDepth = parseFloat(e.target.value);
    setDepth(newDepth);
    onDimensionsChange(width, height, newDepth);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <label>
        Width:
        <input type="number" value={width} onChange={handleWidthChange} />
      </label>
      <label>
        Height:
        <input type="number" value={height} onChange={handleHeightChange} />
      </label>
      <label>
        Depth:
        <input type="number" value={depth} onChange={handleDepthChange} />
      </label>
    </div>
  );
};
