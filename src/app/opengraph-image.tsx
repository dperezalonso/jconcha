import { ImageResponse } from "next/og";

export const alt =
  "Javier Concha · Director de Marketing, SEO y performance en Barcelona";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f7f5f0",
          color: "#12151c",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: 900,
            height: 900,
            right: -120,
            bottom: -280,
            borderRadius: 450,
            background:
              "radial-gradient(circle at 50% 40%, rgba(224,61,15,0.28) 0%, rgba(240,160,32,0.16) 35%, rgba(247,245,240,0) 68%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 52,
              height: 52,
              border: "1.5px solid #12151c",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            JC
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#e03d0f",
            }}
          >
            Cofundador · SANTACONCHA
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 118,
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: -5,
              textTransform: "uppercase",
            }}
          >
            Javier Concha
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              color: "#3d4454",
              maxWidth: 860,
            }}
          >
            Marketing que se nota en la cuenta de resultados. SEO, Google Ads y
            Meta Ads desde Barcelona.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#6b7285",
            letterSpacing: 1,
          }}
        >
          javierconcha.com
        </div>
      </div>
    ),
    { ...size },
  );
}
