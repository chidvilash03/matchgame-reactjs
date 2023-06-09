import './index.css'

const Tab = props => {
  const {tab, isActive, activeTab} = props

  const {tabId, displayText} = tab

  const clicked = () => {
    console.log(tabId)
    activeTab(tabId)
  }

  const activeClassname = isActive ? 'active-tab' : 'btn'

  return (
    <li className="lis">
      <button type="button" className={activeClassname} onClick={clicked}>
        {displayText}
      </button>
    </li>
  )
}
export default Tab
