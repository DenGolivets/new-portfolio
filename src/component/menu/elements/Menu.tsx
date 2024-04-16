import MenuItem from "@/component/navigation/MenuItem"
import ContactBtn from "./ContactBtn"

const Menu = () => {
  return (
    <>
      <MenuItem title={'About'} />
      <MenuItem title={'Projects'} />
      <MenuItem title={'Services'} />
      <ContactBtn title={'Contact me'} applyDivStyles={false} />
    </>
  )
}

export default Menu