import { useHeaderText } from "./hooks/useHeaderText";
import useResponsiveWidth from "./hooks/useResponsiveStyles";
import Eye from "./Eye";

function Header() {
  const { isCardHovered } = useHeaderText();
  const windowWidth = useResponsiveWidth();
  const screenToSmall = windowWidth < 555;
  return (
    <>
      <div className="flex">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "fixed",
            top: isCardHovered && !screenToSmall ? "8px" : "-87px",
            left: isCardHovered && !screenToSmall ? "20px" : "-75px",
            gap: "7px",
            zIndex: "9999",
          }}
        >
          <a className="no-underline">
            {isCardHovered && !screenToSmall ? (
              <div
                className="box-border flex items-center justify-center overflow-hidden whitespace-nowrap rounded-3xl bg-header px-5 py-1 text-white"
                style={{
                  width: "280px",
                  height: "39px",
                  border: "1px solid black",
                }}
              >
                <a
                  className="w-170 h-25 font-inter shrink-0 text-base text-black no-underline"
                  style={{
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 300,
                    lineHeight: "normal",
                  }}
                >
                  {"scroll down to see more"}
                </a>
              </div>
            ) : (
              <div>
                <Eye />
              </div>
            )}
          </a>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "fixed",
            top: "8px",
            right: "16px",
            gap: "7px",
            zIndex: "9999",
          }}
        >
          <div
            className="box-border flex items-center justify-center overflow-hidden whitespace-nowrap rounded-3xl bg-header px-5 py-1 text-white"
            style={{
              width: isCardHovered ? "230px" : "200px",
              height: "39px",
              border: "1px solid black",
            }}
          >
            <a
              className="w-170 h-25 font-inter shrink-0 text-base text-black no-underline"
              style={{
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "normal",
              }}
            >
              {isCardHovered ? "click to open code" : "Erik Brodmann"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
