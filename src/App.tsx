import "./App.css";




// TestRipple goes *outside* the App function
function TestRipple() {
  return (
    <>
      <svg style={{ display: "none" }}>
        <filter id="rippleEffect">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.05"
            numOctaves="2"
            result="turbulence"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              values="0.05; 0.01; 0.05"
              dur="4s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50"
          xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "skyblue",
          filter: "url(#rippleEffect)",
          margin: "100px auto",
        }}
      />
    </>
  );
}

export default function App() {
  return <TestRipple />;
}

