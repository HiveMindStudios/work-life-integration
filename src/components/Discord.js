import { useEffect } from "react"

const Discord = () => {

  useEffect(() => {
    let response = async () => await fetch("http://localhost:3001/data")
    // let components = []
    for (let data in response) {
      console.log(data)
      // switch (data.platform) {
      //   case 'Discord':
      //     // components.push(<Message platform="Discord" data={data} />)
      //     break;
      //   case 'Slack':
      //     components.push(<Message platform="Slack" data={data} />)
      //     break;
      //   case 'Telegram':
      //     components.push(<Message platform="Telegram" data={data} />)
      //     break;
      //   default:
      //     break;
      // }
    }
  })

  return (
    <div className="page-wrapper with-navbar with-sidebar" data-sidebar-type="overlayed">

      <div className="sticky-alerts"></div>

      <div className="content-wrapper">
      </div>

    </div >
  )
}

export default Discord;