import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => (
  <>
    {/* Navbar */}
    <Navbar />

    {/* Main Section */}
    <div style={{ textAlign: "center", padding: "2rem 1rem" }}>
      <h1 className="gradient-text">Welcome to Agro Shop!</h1>
      <p style={{ color: "white", maxWidth: "600px", margin: "1rem auto" }}>
        Your one-stop destination for the best agricultural products. We provide
        top-quality seeds, tools, and fertilizers to help you grow better every
        season.
      </p>

      {/* Animated Image Scroller */}
      <div style={{ display: "flex", overflowX: "auto", margin: "2rem 0" }}>
        <img
          src="/public/image1.jpg"
          alt="Product 1"
          style={{
            height: "200px",
            marginRight: "1rem",
            animation: "scroll-left 10s linear infinite",
          }}
        />
        <img
          src="/public/image2.jpg"
          alt="Product 2"
          style={{
            height: "200px",
            marginRight: "1rem",
            animation: "scroll-left 10s linear infinite",
          }}
        />
        <img
          src="/public/image3.jpg"
          alt="Product 3"
          style={{
            height: "200px",
            animation: "scroll-left 10s linear infinite",
          }}
        />
      </div>

      {/* Cards Section */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <div
          style={{
            border: "1px solid white",
            padding: "1rem",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          <h3 className="gradient-text">Best Seeds</h3>
          <p style={{ color: "white" }}>High-quality seeds for your farm.</p>
        </div>
        <div
          style={{
            border: "1px solid white",
            padding: "1rem",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          <h3 className="gradient-text">Farm Tools</h3>
          <p style={{ color: "white" }}>Reliable tools for efficient farming.</p>
        </div>
        <div
          style={{
            border: "1px solid white",
            padding: "1rem",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          <h3 className="gradient-text">Organic Fertilizers</h3>
          <p style={{ color: "white" }}>Boost your crops the natural way.</p>
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </>
);

export default Home;
