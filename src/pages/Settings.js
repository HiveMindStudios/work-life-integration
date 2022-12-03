import { Reorder } from "framer-motion"
import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"
import { setColorHSLA } from "../utils/color"
import Slack from '../assets/slack.svg'
import Telegram from '../assets/telegram.svg'
import Discord from '../assets/discord.svg'

export function Settings() {
  const [items, setItems] = useState([[Slack, "Slack"], [Telegram, "Telegram"], [Discord, "Discord"]])
  const { theme } = useTheme()

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      <h5>Set notification priority</h5>
      <div className="sidebar-divider"></div>
      {items.map((item, index) => (
        <Reorder.Item key={item} value={item} style={{ listStyle: 'none' }}>
          <div className="priority" style={{ backgroundColor: setColorHSLA(theme + 30 * index), margin: '3px', height: '100px', cursor: "pointer" }}>
            <img src={item[0]} alt="costam" style={{ userSelect: "none", width: '80px', height: '80px' }} />
            <span style={{ color: "white", fontSize: "40px" }}>{item[1]}</span>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}