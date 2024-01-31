export function Header() {
  return (
    <header
      style={{
        backgroundColor: "#090909",
        color: "white",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "1rem"
      }}
    >
        <p>MF - HEADER</p>
        <div
          style={{
            display: "flex",
          }} 
        >
          <div
            style={{
              backgroundColor: "purple",
              height: "80px",
              width: "160px",
            }} 
          />

          <div
            style={{
              backgroundColor: "cyan",
              height: "80px",
              width: "160px",
            }} 
          />

          <div
            style={{
              backgroundColor: "green",
              height: "80px",
              width: "160px",
            }} 
          />
        </div>
    </header>
  );
}
