import { useGlobalState } from "@/contexts/GlobalStateContext";
import { useEffect } from "react";

interface ContactBtnProps {
  title: string;
  applyDivStyles?: boolean;
}

const ContactBtn = ({ title, applyDivStyles = true }: ContactBtnProps) => {
    
    const { isModalOpen, isMenuOpen, toggleModal, exitMenu } = useGlobalState();

    const handleClick = () => {
        exitMenu();
        toggleModal();
    }

    useEffect(() => {
        if (isMenuOpen || isModalOpen) {
            document.body.classList.add("overflow-y-hidden")
        } else {
            document.body.classList.remove("overflow-y-hidden")
        }
    }, [isMenuOpen, isModalOpen]);
    
    return (
      <button className={`flex items-center cursor-pointer font-poppins`}>
        <div 
          aria-label={title} 
          className={`${applyDivStyles ? 'transition ease-in-out duration-300 text-center border-2 border-lightcyan rounded-3xl px-3 pb-1 hover:bg-teal-300 hover:text-black' : 'uppercase'}`} 
          onClick={handleClick} 
        >
          {title}
        </div>
      </button>
    );
}

export default ContactBtn;