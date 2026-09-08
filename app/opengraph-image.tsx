import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const WIDTH = 1200;
const HEIGHT = 630;
const DEVICE_WIDTH = 1419;
const DEVICE_HEIGHT = 2796;

/*
 * The share card, drawn in the app's palette: paper canvas, deep teal, amber accent. Every
 * colour here is a literal because Satori resolves no CSS variables — when the palette in
 * globals.css moves, this file has to be moved with it by hand.
 *
 * Both files it reads have neutral names on purpose, so replacing the artwork is a file
 * swap and not a code change.
 */
export default async function Image() {
  const [
    iconBuffer,
    deviceBuffer,
    inter400Buffer,
    inter600Buffer,
    inter700Buffer,
  ] = await Promise.all([
    readFile(join(process.cwd(), "public", "site-image-512x512.png")),
    readFile(join(process.cwd(), "public", "assets", "device-1.png")),
    readFile(join(process.cwd(), "public", "fonts", "inter-400.ttf")),
    readFile(join(process.cwd(), "public", "fonts", "inter-600.ttf")),
    readFile(join(process.cwd(), "public", "fonts", "inter-700.ttf")),
  ]);

  const iconSrc = `data:image/png;base64,${iconBuffer.toString("base64")}`;
  const deviceSrc = `data:image/png;base64,${deviceBuffer.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f5f1e6 0%, #e6f0ec 38%, #f5f1e6 70%, #fdf1dc 100%)",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          left: -80,
          width: 360,
          height: 360,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(15, 110, 86, 0.28) 0%, rgba(15, 110, 86, 0) 72%)",
          filter: "blur(10px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -40,
          top: -70,
          width: 300,
          height: 300,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(239, 159, 39, 0.32) 0%, rgba(239, 159, 39, 0) 72%)",
          filter: "blur(8px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 120,
          bottom: -110,
          width: 340,
          height: 340,
          borderRadius: 999,
          background:
            "radial-gradient(circle, rgba(47, 143, 91, 0.28) 0%, rgba(47, 143, 91, 0) 72%)",
          filter: "blur(12px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 34,
          display: "flex",
          borderRadius: 36,
          border: "1px solid rgba(255,255,255,0.72)",
          background: "rgba(255,255,255,0.56)",
          boxShadow:
            "0 30px 80px rgba(28, 27, 23, 0.14), inset 0 1px 0 rgba(255,255,255,0.75)",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "52px 56px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
                marginBottom: 34,
              }}
            >
              {/* biome-ignore lint: decorative image in OG route */}
              <img
                alt=""
                height={56}
                src={iconSrc}
                style={{
                  borderRadius: 16,
                  boxShadow: "0 12px 28px rgba(15, 110, 86, 0.18)",
                }}
                width={56}
              />
              <span
                style={{
                  color: "#0f6e56",
                  fontSize: 28,
                  fontWeight: 600,
                }}
              >
                Ittekimasu
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#1c1b17",
                fontSize: 60,
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: -2,
                maxWidth: 650,
              }}
            >
              <span>Move to Japan</span>
              <span>knowing what's next.</span>
            </div>

            <p
              style={{
                marginTop: 28,
                maxWidth: 680,
                color: "#6b675c",
                fontSize: 28,
                lineHeight: 1.32,
                fontWeight: 400,
              }}
            >
              A checklist dated to your visa route, and the Japanese you will
              actually use — kana, JLPT, and the ward office.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 24,
              maxWidth: 760,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "14px 22px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.68)",
                border: "1px solid #e2dccb",
                color: "#0a5442",
                fontSize: 20,
                fontWeight: 600,
                boxShadow: "0 12px 30px rgba(28, 27, 23, 0.1)",
              }}
            >
              Free: checklist, kana and N5
            </div>

            <div
              style={{
                display: "flex",
                color: "#6b675c",
                fontSize: 24,
                fontWeight: 500,
                textAlign: "right",
              }}
            >
              One step and one word at a time.
            </div>
          </div>
        </div>

        <div
          style={{
            width: 286,
            margin: "50px 24px 50px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 225,
              height: 438,
              borderRadius: 44,
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.88) 0%, rgba(230,240,236,0.78) 100%)",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow:
                "0 24px 50px rgba(28, 27, 23, 0.14), inset 0 1px 0 rgba(255,255,255,0.95)",
              overflow: "hidden",
            }}
          >
            {/* biome-ignore lint: decorative image in OG route */}
            <img
              alt=""
              height={DEVICE_HEIGHT}
              src={deviceSrc}
              style={{
                width: 258,
                height: 438,
                objectFit: "contain",
                objectPosition: "center",
              }}
              width={DEVICE_WIDTH}
            />
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter400Buffer, weight: 400, style: "normal" },
        { name: "Inter", data: inter600Buffer, weight: 600, style: "normal" },
        { name: "Inter", data: inter700Buffer, weight: 700, style: "normal" },
      ],
    },
  );
}
