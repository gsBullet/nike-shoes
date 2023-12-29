const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="sm:w-[350px] sm:min-w-[350px] 
    flex-1 rounded-[20px] shadow-2xl w-full px-10 py-16">
      <div
        className="w-11 h-11  justify-center
         items-center bg-coral-red rounded-full"
      >
        <img src={imgURL} alt={label} height={24} width={24} />
      </div>
      {label}
      {subtext}
    </div>
  );
};

export default ServiceCard;
