import Message from "../components/Message";

async function fetchData() {
  let response = await fetch("http://localhost:3001/data", {
    method: "POST"
  })
  let components = []
  for (let data in response) {
    switch (data.platform) {
      case 'Discord':
        components.push(<Message platform="Discord" data={data} />)
        break;
      case 'Slack':
        components.push(<Message platform="Slack" data={data} />)
        break;
      case 'Telegram':
        components.push(<Message platform="Telegram" data={data} />)
        break;
      default:
        break;
    }
  }
  return components
}

export default fetchData;