import { useSelector } from 'react-redux';
import Popup from '../popups/PopupWrapper';

const PublicLayout = (props) => {
  const ui = useSelector(state=>state.ui)
  return (
    <>
      {props.children}
      {ui.popupName !== "" && <Popup/>}
    </>
  );
};

export default PublicLayout;
