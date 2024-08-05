import useTgWebApp from "../../hooks/useTgWebApp";

const CloseButton = () => {
  const { onClose } = useTgWebApp();

  return (
    <button onClick={onClose} className="outline">
      Закрыть
    </button>
  );
};

export default CloseButton;
