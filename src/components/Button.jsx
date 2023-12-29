const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center 
    items-center gap-2 py-4 px-10 text-montserrat
     text-lg leading-none bg-coral-red text-white 
     rounded-full border-coral-red capitalize"
    >
      {label}

      {
        iconURL &&
        <img src={iconURL} alt="arrrow right now" 
        className="ml-2 rounded-full w-5 h-5"/>
      }
    </button>
  );
};

export default Button;
