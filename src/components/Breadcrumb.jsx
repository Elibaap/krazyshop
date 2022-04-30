import uniqid from "uniqid";
import { Link, withRouter } from "react-router-dom";

function Breadcrumb(props) {
  const { location } = props;
  const { pathname } = location;
  const textsInPathArr = pathname.split("/").filter((i) => i);

  function createBreadCrumbForNonHomeSections() {
    function createBreadCrumb(text, index) {
      const slashPlusCurrText = `/${text}`;
      const isLastInArr = index === textsInPathArr.length - 1;

      return isLastInArr ? (
        <span className="breadcrumb-last-section" key={uniqid()}>
          {text}
        </span>
      ) : (
        <span key={uniqid()}>
          <Link to={slashPlusCurrText} className="breadcrumb-text">
            {text}
          </Link>
          <span className="breadcrumb-separator">/</span>
        </span>
      );
    }

    return textsInPathArr.map(createBreadCrumb);
  }

  return (
    <div className="breadcrumb-div">
      <span className="breadcrumb-home-span">
        <Link to="/" className="breadcrumb-text">
          home
        </Link>
        <span className="breadcrumb-separator">/</span>
      </span>
      {createBreadCrumbForNonHomeSections()}
    </div>
  );
}

export default withRouter(Breadcrumb);
