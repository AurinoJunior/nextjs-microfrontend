import dynamic from "next/dynamic";

const Header = dynamic(
  () => import("header/component/Header").then((m) => m.Header),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <Header />

      <h1>Micro-frontends Next JS - Consumer </h1>
    </>
  );
}
