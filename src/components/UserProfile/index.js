import './index.css'

const UserProfile = props => {
  const {userDetailsList} = props

  const {imageUrl, userName, role} = userDetailsList
  return (
    <div className="user-card-container">
      <img src={imageUrl} className="avatar" alt="Loading" />
      <div className="user-details-container">
        <h1 className="user-name">{userName}</h1>
        <p className="user-designation">{role} </p>
      </div>
    </div>
  )
}
export default UserProfile
