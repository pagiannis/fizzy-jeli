const LoadingSpinner = ({
  size = "medium",
  spinnerColor = "#f76597",
  logoColor = "#f76597",
}) => {
  // Set size dimensions based on prop
  const dimensions = {
    small: { outer: 48, border: 2, fontSize: 10 },
    medium: { outer: 64, border: 2, fontSize: 14 },
    large: { outer: 96, border: 3, fontSize: 20 },
  }[size] || { outer: 64, border: 2, fontSize: 14 };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative">
        {/* This is your existing spinner */}
        <div
          className="animate-spin rounded-full border-t-2 border-b-2"
          style={{
            height: `${dimensions.outer}px`,
            width: `${dimensions.outer}px`,
            borderTopWidth: dimensions.border,
            borderBottomWidth: dimensions.border,
            borderColor: spinnerColor,
          }}
        />

        {/* Centered logo with original styling */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div style={{ color: logoColor }}>
            {/* Use a more rounded, bubble-like font style to match your logo */}
            <div
              className="text-center"
              style={{
                fontSize: dimensions.fontSize,
                fontFamily:
                  "'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif",
                fontWeight: "900",
                letterSpacing: "-0.05em",
                lineHeight: "0.9",
              }}
            >
              FIZZY
            </div>
            <div
              className="text-center relative"
              style={{
                fontSize: dimensions.fontSize,
                fontFamily:
                  "'Arial Rounded MT Bold', 'Helvetica Rounded', Arial, sans-serif",
                fontWeight: "900",
                letterSpacing: "-0.05em",
                lineHeight: "0.9",
              }}
            >
              JELI
              <span
                className="absolute"
                style={{
                  right: -dimensions.fontSize * 0.8,
                  bottom: -dimensions.fontSize * 0.3,
                }}
              >
                {/* Jelly candy icon */}
                <svg
                  width={dimensions.fontSize * 1.2}
                  height={dimensions.fontSize * 0.8}
                  viewBox="0 0 20 14"
                  fill={logoColor}
                >
                  <path
                    d="M10,0 C5,0 2,3 2,7 C2,11 5,14 10,14 C15,14 18,11 18,7 C18,3 15,0 10,0 Z"
                    fill={logoColor}
                  />
                  <circle cx="6" cy="5" r="1" fill="white" />
                  <circle cx="14" cy="5" r="1" fill="white" />
                  <circle cx="6" cy="9" r="1" fill="white" />
                  <circle cx="14" cy="9" r="1" fill="white" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
