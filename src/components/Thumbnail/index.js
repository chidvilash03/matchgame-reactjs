import './index.css'

const Thumbnail = props => {
  const {imgList, game} = props
  const {id, thumbnailUrl} = imgList

  const thuClick = () => {
    game(id)
  }

  return (
    <li className="thu-lis">
      <button type="button" className="btn2" onClick={thuClick}>
        <img src={thumbnailUrl} alt="thumbnail" className="thu-img" />
      </button>
    </li>
  )
}
export default Thumbnail
