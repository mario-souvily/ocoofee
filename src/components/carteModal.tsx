import { MdClose } from "react-icons/md";


interface Props {
  cardModalOpen: boolean;
  handleCardOpen: () => void;

}
const CarteModal = ({ cardModalOpen, handleCardOpen }: Props) => {

  return (
    <div>
      {cardModalOpen && (
        <div className='w[300px] h-[100vh] overflow-y-auto fixed top-[50px] right-30 bg-white border-l border-gray-300 p-16'>
          <button onClick={handleCardOpen} className=' text-amber-900 absolute top-2 right-2'>
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  )
}

export default CarteModal;
