import Image from "next/image";

export default function TestiCards() {
  return (
    <div style={{ position: "relative" }}>
      <div>
        <Image src="/cozycupidpics/cupid-bg2.jpg" width={500} height={500} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "20%",
        }}
      >
        <Image src="/cozycupidpics/testi-1.png" width={500} height={500} />
      </div>
    </div>
  );
}
