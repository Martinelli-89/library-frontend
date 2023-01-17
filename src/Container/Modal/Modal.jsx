import "./Modal.scss";

const Modal = ({value, close}) => {

    let render = value;

    return (

        <div className="modal">
            <div className="modal__content">
                {render}
                <button onClick={close}>Close</button>
            </div>
        </div>

    )

}

export default Modal;