import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="p404">
      <h1>404 - Page Not Found</h1>
      <Link to="/" className="btn btn-primary">Go Back</Link>
    </div>
  )
}

export default NoPage;