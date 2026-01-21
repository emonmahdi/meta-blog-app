import React from "react";

const Loading = () => {
  return (
    <>
      <style>
        {`
          .loading-wrapper {
            min-height: 60vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .loading-dots {
            display: flex;
            gap: 8px;
          }

          .loading-dots span {
            width: 10px;
            height: 10px;
            background-color: #3b82f6;
            border-radius: 50%;
            animation: bounce 1.4s infinite ease-in-out both;
          }

          .loading-dots span:nth-child(1) {
            animation-delay: -0.32s;
          }

          .loading-dots span:nth-child(2) {
            animation-delay: -0.16s;
          }

          @keyframes bounce {
            0%, 80%, 100% {
              transform: scale(0);
              opacity: 0.3;
            }
            40% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>

      <div className="loading-wrapper">
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Loading;
