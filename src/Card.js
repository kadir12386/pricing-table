import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export function Card({ box_type_text }) {
  return (
    <div className="">
      {/* <p>{box_type_text}</p> */}
      <div className="box_container">
        <header>
          <h3 className="content_type">
            {box_type_text === "Free"
              ? "Free"
              : box_type_text === "Plus"
              ? "Plus"
              : "Pro"}
          </h3>
          <h4 className="content_number">
            <b className="dollar">$</b>
            {box_type_text === "Free"
              ? "0"
              : box_type_text === "Plus"
              ? "9"
              : "49"}

            <span>/month</span>
          </h4>
        </header>
        {/* list content */}
        <main className="main_content">
          <div className="main_content_list">
            <p>
              {/* <BsCheckLg className="icons" /> */}
              <CheckIcon className="icons" />
              {box_type_text === "Free" ? (
                "Single User"
              ) : box_type_text === "Plus" ? (
                <b>5User</b>
              ) : (
                <b>Unlimited Users</b>
              )}
            </p>
            <p>
              {/* <BsCheckLg className="icons" /> */}
              <CheckIcon className="icons" />
              {box_type_text === "Free"
                ? "5GB Storage"
                : box_type_text === "Plus"
                ? "50GB Storage"
                : "150GB Storage"}
            </p>

            <p>
              <CheckIcon className="icons" />
              Unlimited Public Projects
            </p>

            <p>
              <CheckIcon className="icons" />
              Community Access
            </p>
            <p className={box_type_text === "Free" ? "text_muted" : "notmuted"}>
              {box_type_text === "Free" ? (
                <ClearIcon className="icons clear_icon" />
              ) : (
                <CheckIcon className="icons" />
              )}
              Unlimited Private Projects
            </p>
            <p className={box_type_text === "Free" ? "text_muted" : "notmuted"}>
              {box_type_text === "Free" ? (
                <ClearIcon className="icons clear_icon" />
              ) : (
                <CheckIcon className="icons" />
              )}
              Dedicated Phone Support
            </p>

            <p className={box_type_text === "Free" ? "text_muted" : "notmuted"}>
              {box_type_text === "Free" ? (
                <ClearIcon className="icons clear_icon" />
              ) : (
                <CheckIcon className="icons" />
              )}

              {box_type_text === "Pro" ? (
                <span>
                  <b>Unlimited</b> Free Subdomains{" "}
                </span>
              ) : (
                "Free Subdomains"
              )}
            </p>

            <p
              className={
                box_type_text === "Free" || box_type_text === "Plus"
                  ? "text_muted"
                  : "notmuted"
              }
            >
              {box_type_text === "Free" || box_type_text === "Plus" ? (
                <ClearIcon className="icons clear_icon" />
              ) : (
                <CheckIcon className="icons" />
              )}
              Monthly Status Reports
            </p>
          </div>
        </main>
        <button className="box_button">Button</button>
      </div>
    </div>
  );
}
