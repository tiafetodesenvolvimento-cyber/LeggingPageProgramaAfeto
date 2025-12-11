export const GlobalStyles = () => (
  <style>{`
    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .gradient-bg {
      background: linear-gradient(-45deg, #e0fbf7, #f8fafc, #14d9b5, #10a98f);
      background-size: 400% 400%;
      animation: gradientAnimation 15s ease infinite;
    }
    .floating-img {
      animation: floaty 4.5s ease-in-out infinite;
      will-change: transform;
    }
    @keyframes floaty {
      0% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0); }
    }
    .fade-in {
      animation: fadeIn 1s ease-in;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .slide-in-left {
      animation: slideInLeft 0.8s ease-out;
    }
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    .slide-in-right {
      animation: slideInRight 0.8s ease-out;
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
  `}</style>
)


