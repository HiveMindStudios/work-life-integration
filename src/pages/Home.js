import Message from '../components/Message';

const Home = () => {
  return (
    <div className="page-wrapper with-navbar with-sidebar" data-sidebar-type="overlayed">

      <div className="sticky-alerts"></div>

      <div className="content-wrapper">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>

    </div >
  )
}

export default Home;