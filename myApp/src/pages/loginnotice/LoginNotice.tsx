import { IonModal, IonText, IonButton } from '@ionic/react';
import './LoginNotice.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginNotice: React.FC<Props> = ({ isOpen, onClose, onLogin }) => {
  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose} className="login-modal-custom">
      <div className="login-modal-content">
        <IonText color="danger">
          <h2>Vui lòng đăng nhập</h2>
        </IonText>
        <p>Để sử dụng tính năng này, bạn cần đăng nhập.</p>
        <IonButton expand="block" onClick={onLogin}>
          Đăng nhập
        </IonButton>
        <IonButton expand="block" fill="clear" onClick={onClose}>
          Đóng
        </IonButton>
      </div>
    </IonModal>
  );
};

export default LoginNotice;
