import React from 'react';
import { ModalCon } from '../styles/Modal.styles';
// import Close from '../assets/icon-close.svg';
import ImgSlider from './ImgSlider';
import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';

function Modal() {
	const dispatch = useDispatch();
	return (
		<aside className="modal-container">
			<ModalCon>
				<div
					className="close"
					onClick={() => {
						dispatch(closeModal());
					}}
				>
					{/* <img src={Close} alt='/' /> */}
					<IoClose size={30} className="icon" />
				</div>
				<div className="modal">
					<div className="cont">
						<ImgSlider />
					</div>
				</div>
			</ModalCon>
		</aside>
	);
}

export default Modal;
