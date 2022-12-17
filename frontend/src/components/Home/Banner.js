import React from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = React.useState(false);
  const [isSearchBarOpaque, setIsSearchBarOpaque] = React.useState(false);

  const handleClickGet = () => {
    if (isSearchBarVisible === false) {
      setIsSearchBarVisible(true);
      setTimeout(() => setIsSearchBarOpaque(true), 2);
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    if (term.length >= 3) {
      props.onSearchInput(
        term,
        (page) => agent.Items.byTitle(term, page),
        agent.Items.byTitle(term)
      );
    } else {
      props.onSearchInput(
        term,
        (page) => agent.Items.all(page),
        agent.Items.all()
      );
    }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part" onClick={handleClickGet}>
            get
          </span>
          <span
            style={{
              display: isSearchBarVisible ? "inline" : "none",
              transition: "opacity 1s ease-in",
              opacity: isSearchBarOpaque ? 1 : 0,
            }}
          >
            <form
              style={{
                borderRadius: "5px",
                margin: "10px",
                background: "white",
                width: "365px",
                display: "inline-block",
              }}
            >
              <input
                id="search-box"
                onInput={handleSearch}
                type="search"
                placeholder="What is it that you truly desire?"
                style={{
                  width: "100%",
                  margin: 0,
                  padding: "9px 50px 9px 10px",
                  fontSize: "14px",
                  background:
                    'transparent url("https://img.icons8.com/ios-glyphs/30/null/search--v1.png") no-repeat 330px center',
                  color: "black",
                  border: "none",
                  borderRadius: "inherit",
                }}
              />
            </form>
          </span>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
