import { Reorder } from "framer-motion"
import { useState } from "react"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useTheme } from "../contexts/ThemeContext"
import { setColorHSLA } from "../utils/color"
import Slack from '../assets/slack.svg'
import Telegram from '../assets/telegram.svg'
import Discord from '../assets/discord.svg'

export function Settings() {
  const [items, setItems] = useState([Slack, Telegram, Discord])
  const {theme} = useTheme()

  return (
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item, index) => (
          <Reorder.Item key={item} value={item} style={{listStyle: 'none'}}>
            <div className="priority" style={{backgroundColor: setColorHSLA( theme + 30 * index), margin: '3px', height: '100px', cursor: "pointer" }}>
              <img src={item} alt="costam" style={{userSelect: "none", width: '100px', height: '100px'}}/>
              <span style={{color: "white", fontSize: "40px"}}>{["Slack", "Telegram", "Discord"][index]}</span>
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
  )
}