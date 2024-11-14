import './style.css'

export default function IntegrationCard({
  type,
  title,
  status,
  count,
  tier,
  logo,
  onClickCard,

}) {

  return (
    <>
      <div
        key={type}
        className={`card cursor-pointer integration-card  w-[210px] h-[140px] ${
          tier == "Enterprise" && "enterprise"
        } `}
        onClick={() => onClickCard()}
      >
        <div className="gap-2 d-flex flex-column justify-content-center align-items-center ">
          {logo === undefined || logo === "" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.181 8.68a4.503 4.503 0 0 1 1.903 6.405m-9.768-2.782L3.56 14.06a4.5 4.5 0 0 0 6.364 6.365l3.129-3.129m5.614-5.615 1.757-1.757a4.5 4.5 0 0 0-6.364-6.365l-4.5 4.5c-.258.26-.479.541-.661.84m1.903 6.405a4.495 4.495 0 0 1-1.242-.88 4.483 4.483 0 0 1-1.062-1.683m6.587 2.345 5.907 5.907m-5.907-5.907L8.898 8.898M2.991 2.99 8.898 8.9"
              />
            </svg>
          ) : (
            <div className=" card-image w-[50px] h-[35px] ">
              <img
                src={logo}
                alt="Connector Logo"
                className="w-[50px] h-[35px] connector-logo "
              />
            </div>
          )}
          <div className="integration-name text-center w-full">{title}</div>
         
        </div>
        {count !== 0 && (
          <button className="integration-button " onClick={onClickCard}>
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M7.04 10.44L5.93335 11.5667C5.64002 11.86 5.28665 12.1 4.89998 12.26C4.51332 12.42 4.10002 12.5 3.68669 12.5C3.27335 12.5 2.85334 12.42 2.46667 12.26C2.08001 12.1 1.72668 11.8667 1.43335 11.5667C1.14002 11.2733 0.89999 10.92 0.73999 10.5333C0.57999 10.1467 0.5 9.73331 0.5 9.31331C0.5 8.89331 0.57999 8.48001 0.73999 8.09334C0.89999 7.70668 1.14002 7.35335 1.43335 7.06002L2.55334 5.93335"
                  stroke="#164085"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M5.93311 2.56002L7.05977 1.43335C7.65977 0.840016 8.4664 0.5 9.31307 0.5C10.1597 0.5 10.9664 0.83335 11.5664 1.43335C12.1597 2.03335 12.4998 2.84002 12.4998 3.68669C12.4998 4.53335 12.1597 5.33998 11.5664 5.93998L10.4397 7.06665"
                  stroke="#164085"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M4.22021 8.75336L8.72689 4.25336"
                  stroke="#164085"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </svg>
              {count}
            </>
          </button>
        )}
        {tier == "Enterprise" && (
          <>
            <p className="coming-soon"> ENTERPRISE </p>
            <p className="add-btn ">+</p>
          </>
        )}
      </div>
    </>
  );
}