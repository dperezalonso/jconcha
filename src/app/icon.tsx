import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #e03d0f 0%, #c4320c 50%, #12151c 100%)",
          borderRadius: 16,
          color: "#f7f5f0",
          fontFamily: "sans-serif",
          fontWeight: 800,
          fontSize: 13,
          letterSpacing: -1,
        }}
      >
        JC
      </div>
    ),
    { ...size },
  );
}
